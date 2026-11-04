#!/usr/bin/env node
// Print the built CV page (_site/cv/) to _site/assets/pdf/cv.pdf with headless Chromium.
//
// Run after `bundle exec jekyll build` (the deploy workflow does this):
//   node bin/render-cv-pdf.mjs
// Options (environment variables):
//   SITE_DIR   built site directory            (default: _site)
//   BASEURL    site baseurl used for the build (default: "", e.g. /al-folio)
//   CHROMIUM   path to a Chromium binary       (default: Playwright's bundled one)

import fs from "node:fs";
import http from "node:http";
import path from "node:path";
import { chromium } from "@playwright/test";

const siteDir = path.resolve(process.env.SITE_DIR || "_site");
const baseurl = (process.env.BASEURL || "").replace(/\/$/, "");
const output = path.join(siteDir, "assets", "pdf", "cv.pdf");

const types = {
  ".html": "text/html",
  ".css": "text/css",
  ".js": "text/javascript",
  ".json": "application/json",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".woff2": "font/woff2",
  ".woff": "font/woff",
  ".ttf": "font/ttf",
};

const server = http.createServer((req, res) => {
  let urlPath = decodeURIComponent(new URL(req.url, "http://localhost").pathname);
  if (baseurl && urlPath.startsWith(baseurl)) urlPath = urlPath.slice(baseurl.length);
  let file = path.join(siteDir, urlPath);
  if (!file.startsWith(siteDir)) return res.writeHead(403).end();
  if (fs.existsSync(file) && fs.statSync(file).isDirectory()) file = path.join(file, "index.html");
  if (!fs.existsSync(file)) return res.writeHead(404).end();
  res.writeHead(200, { "Content-Type": types[path.extname(file).toLowerCase()] || "application/octet-stream" });
  fs.createReadStream(file).pipe(res);
});

await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));
const { port } = server.address();

const browser = await chromium.launch(process.env.CHROMIUM ? { executablePath: process.env.CHROMIUM } : {});
try {
  const page = await browser.newPage();
  await page.goto(`http://127.0.0.1:${port}${baseurl}/cv/`, { waitUntil: "networkidle", timeout: 60000 });
  await page.emulateMedia({ media: "print", colorScheme: "light" });
  // Keep only the CV itself: no navbar, table of contents, PDF button or footer.
  await page.addStyleTag({
    content: `
      nav.navbar, .progress-container, nav.toc, footer, header.post-header a.float-right, #back-to-top { display: none !important; }
      body { padding-top: 0 !important; }
      .container { max-width: none !important; width: 100% !important; margin-top: 0 !important; }
      .col-sm-3:has(nav.toc) { display: none !important; }
      .col-sm-9 { flex: 0 0 100% !important; max-width: 100% !important; }
      .card { display: block !important; box-shadow: none !important; break-inside: auto; }
      .card ul, .card .list-group { display: block !important; }
      .list-group-item, .card .row { break-inside: avoid; }
      .card-title, h1, h2, h3 { break-after: avoid; }
    `,
  });
  fs.mkdirSync(path.dirname(output), { recursive: true });
  await page.pdf({ path: output, format: "A4", printBackground: true, margin: { top: "12mm", bottom: "12mm", left: "10mm", right: "10mm" } });
  console.log(`Wrote ${path.relative(process.cwd(), output)}`);
} finally {
  await browser.close();
  server.close();
}
