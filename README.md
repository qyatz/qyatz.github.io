# qyatz.github.io

塚本 悠太（東京科学大学 博士後期課程）の研究者ホームページのソースです．
公開サイト: <https://qyatz.github.io/>

[al-folio](https://github.com/alshedivat/al-folio)（v1 系，Jekyll）をベースにしています．レイアウトやスタイルなどの本体は `al_folio_core` などの gem が持っており，このリポジトリには設定・コンテンツ・公開用のスクリプトだけを置いています（詳細は `AGENTS.md`，`docs/BOUNDARIES.md`）．

## ページ構成

| ページ       | URL              | ソース                                               | 備考                                               |
| ------------ | ---------------- | ---------------------------------------------------- | -------------------------------------------------- |
| about        | `/`              | `_pages/about.md`，`_news/`                          | 名前・写真・Career，下に news                      |
| publications | `/publications/` | `_bibliography/papers.bib`，`_pages/publications.md` | 学術論文・国際学会・国内学会の3区分，新しい順      |
| projects     | `/projects/`     | `_pages/projects.md`，`_projects/`                   | 一覧と Research はパスワード保護，Plia-mate は公開 |
| hobbies      | `/hobbies/`      | `_pages/hobbies.md`，`_hobbies/`                     | 一覧・各ページともパスワード保護                   |
| CV           | `/cv/`           | `_data/cv.yml`，`_pages/cv.md`                       | PDF はデプロイ時に自動生成                         |

## よくある更新

### 業績を追加する

`_bibliography/papers.bib` にエントリを追加します．`category` で表示する区分を決めます．

- `category = {journal}`：学術論文（査読あり）
- `category = {international}`：国際学会（査読あり）
- `category = {domestic}`：国内学会（査読なし）

その他のポイント:

- 日本語の著者名は，表示が「姓 名」になるよう `悠太, 塚本` のように **「名, 姓」** の順で書きます（`_config.yml` の `scholar.last_name` / `first_name` で本人を強調表示）．
- 会議の略称バッジは `abbr`，ページ番号や講演番号は `additional_info`，発表形式は `note` に書きます．
- CV の Publications（`_data/cv.yml`）は別管理なので，同じ内容を追記してください．

### news を追加する

`_news/announcement_N.md` を追加します（`inline: true` で一覧に1行表示）．

### CV を更新する

`_data/cv.yml` を編集します．CV ページ右上の PDF アイコンは `assets/pdf/cv.pdf` を指しており，この PDF はデプロイ時に `bin/render-cv-pdf.mjs` が CV ページを Chromium で印刷して生成します（リポジトリには含めません）．

### プロフィール写真

`assets/img/prof_pic.jpg`（4:5 にトリミング済み）を差し替えます．

## パスワード保護ページ

projects（一覧・Research）と hobbies（一覧・各ページ）は，**本文を暗号化して** コミットしています．リポジトリは公開なので，平文はリポジトリに入れません．

- 暗号化: AES-256-GCM（鍵は PBKDF2-SHA256，60 万回）
- 復号: ブラウザ上で `assets/js/protected-page.js` が行います．一度通ったパスワードはタブ内（sessionStorage）で覚えるので，同じタブなら再入力は不要です．
- パスワードはこのリポジトリには書きません（管理者が別途保管）．

### 編集手順

平文は git 管理外の `_private/` に置きます（`.gitignore` 済み）．手元に平文が無い場合は，まず復号して取り出します．

```bash
# 1. 復号して平文を取り出す（例: hobbies の野球ページ）
mkdir -p _private/hobbies
PAGE_PASSWORD='<password>' node bin/protect-page.mjs decrypt _hobbies/h1.md > _private/hobbies/baseball.md

# 2. _private/hobbies/baseball.md を編集する（Markdown / HTML）

# 3. 暗号化し直す
PAGE_PASSWORD='<password>' node bin/protect-page.mjs encrypt _private/hobbies/baseball.md _hobbies/h1.md
```

対応表:

| 平文（`_private/`）    | 暗号化後                 |
| ---------------------- | ------------------------ |
| `hobbies/index.md`     | `_pages/hobbies.md`      |
| `hobbies/baseball.md`  | `_hobbies/h1.md`         |
| `hobbies/travel.md`    | `_hobbies/h2.md`         |
| `projects/index.md`    | `_pages/projects.md`     |
| `projects/research.md` | `_projects/1_project.md` |

注意:

- 暗号化したページでは Liquid（`{% ... %}`）は動きません．リンクや画像は相対パスで書きます．
- 暗号化したページのタイトルは汎用名（`projects` / `hobbies`）にし，本当のタイトルは本文に書きます．URL も中身が分からない名前にしています．
- パスワードを変えるときは，同じセクションのファイルをすべて新しいパスワードで暗号化し直します．
- ブラウザ側の暗号化なので，パスワードを知っている人は内容をコピーできます．画像ファイル自体は暗号化されません．

## Plia-mate（projects）

`_projects/Plia-mate.md`（URL: `/projects/Plia-mate.html`）は柔らかい外装を有するヒューマノイドロボット「Plia-mate」のプロジェクトページ（日本語，公開）です．イメージ画像は `assets/img/plia-mate/` にあり，Google Gemini で生成したものです（元画像は `assets/img/Gemini_Generated_Image_*.jpeg`）．projects 一覧のカードは暗号化された `_pages/projects.md` 側にあります．

## ローカルで確認する

```bash
bundle install
npm ci
pip install nbconvert               # Jupyter ノートブックの変換に必要
bundle exec jekyll serve            # http://localhost:4000/
```

CV の PDF をローカルで作る場合（ビルド後）:

```bash
bundle exec jekyll build
node bin/render-cv-pdf.mjs          # _site/assets/pdf/cv.pdf
```

## デプロイと CI

- `main` への push で `.github/workflows/deploy.yml` がビルドし，CV の PDF を生成して `gh-pages` ブランチに公開します．
- 次のチェックは al-folio のテンプレート向けのもので，このサイトでは以前から失敗しています（サイトの公開には影響しません）．
  - Prettier（`_config.yml`，`_data/cv.yml`，`_pages/cv.md` の書式）
  - comments-integration-tests（al-folio の見本ブログ記事を前提にしている）
  - visual-regression（al-folio の見本サイトとの見た目の比較）
  - Render a CV（RenderCV 用の形式と `_data/cv.yml` が合わない）

## ライセンス

al-folio に由来する部分は MIT License（`LICENSE`）です．
