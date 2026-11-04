---
layout: page
title: Plia-mate
description: 柔らかい外装をまとった、収納・展開できるヒューマノイドロボット
img: assets/img/12.jpg
importance: 3
category: fun
---

<style>
  .post > .post-header { display: none; }
  .pm { --pm-accent: var(--global-theme-color); line-height: 1.8; }
  .pm h2 { margin-top: 2.5rem; padding-bottom: 0.35rem; border-bottom: 2px solid var(--pm-accent); font-size: 1.6rem; }
  .pm h3 { margin-top: 1.5rem; font-size: 1.2rem; }
  .pm-hero { padding: 3rem 2rem; border-radius: 1rem; text-align: center; color: #fff;
    background: linear-gradient(135deg, #0f8c82 0%, #2a6fb0 55%, #6a4fb3 100%); }
  .pm .pm-hero, .pm .pm-hero p, .pm .pm-hero span { color: #fff !important; }
  .pm-hero .pm-name { margin: 0; font-size: clamp(2.4rem, 7vw, 4rem); font-weight: 700; letter-spacing: 0.04em; line-height: 1.2; color: #fff; border: none; }
  .pm-hero .pm-catch { margin: 0.75rem 0 0; font-size: clamp(1rem, 2.6vw, 1.35rem); font-weight: 500; }
  .pm-hero .pm-sub { margin: 0.5rem 0 0; opacity: 0.9; font-size: 0.95rem; }
  .pm-hero .pm-tags { margin-top: 1.25rem; display: flex; flex-wrap: wrap; gap: 0.5rem; justify-content: center; }
  .pm-hero .pm-tags span { padding: 0.2rem 0.8rem; border: 1px solid rgba(255,255,255,0.7); border-radius: 999px; font-size: 0.85rem; }
  .pm-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1rem; margin-top: 1rem; }
  .pm-card { padding: 1.25rem; border: 1px solid var(--global-divider-color); border-radius: 0.75rem; background: var(--global-card-bg-color, var(--global-bg-color)); }
  .pm-card .pm-icon { font-size: 1.6rem; color: var(--pm-accent); }
  .pm-card h3 { margin: 0.4rem 0 0.4rem; font-size: 1.1rem; }
  .pm-card p { margin: 0; font-size: 0.95rem; }
  .pm-lead { font-size: 1.05rem; }
  .pm-road { list-style: none; padding: 0; margin: 1rem 0 0; display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; }
  .pm-road li { padding: 1rem 1.25rem; border-left: 4px solid var(--pm-accent); background: var(--global-code-bg-color, transparent); border-radius: 0.25rem; }
  .pm-road li.pm-now { border-left-width: 8px; }
  .pm-road b { display: block; font-size: 1.05rem; }
  .pm table { width: 100%; }
  .pm td:first-child { white-space: nowrap; }
  .pm-events { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1rem; }
</style>

<div class="pm" markdown="1">

<div class="pm-hero">
<p class="pm-name">Plia-mate</p>
<p class="pm-catch">柔らかい外装をまとった、収納・展開できるヒューマノイドロボット</p>
<p class="pm-sub">柔らかい外装を有するヒューマノイドロボットの開発</p>
<div class="pm-tags"><span>ヒューマノイド</span><span>ソフトロボティクス</span><span>展開機構</span><span>フィジカルAI</span></div>
</div>

<h2>Plia-mate とは</h2>
<p class="pm-lead">Plia-mate は，「ベイマックス」のように人とインタラクティブにやり取りできることを目指した，<strong>柔らかい外装をまとった内骨格型のヒューマノイドロボット</strong>です．</p>
<p>人とぶつかっても危なくない柔らかさと，自分の体を支えてものを持てる力強さを両立し，使わないときは小さく収納，必要なときに人型へ展開できるロボットを開発しています．開発は複数年にわたって継続し，2026年度は上半身の開発に取り組みます．</p>

<h2>3つの特徴</h2>
<div class="pm-grid">
<div class="pm-card"><div class="pm-icon"><i class="fa-solid fa-shield-heart"></i></div><h3>硬い骨格 × 柔らかい外装</h3><p>人の体が「硬い骨」と「柔らかい組織」でできているように，硬い内骨格の外側に柔らかい外装を搭載．出力と自立を保ちながら，接触時のけがや破損のリスクを減らします．</p></div>
<div class="pm-card"><div class="pm-icon"><i class="fa-solid fa-up-right-and-down-left-from-center"></i></div><h3>収納・展開できる体</h3><p>使わないときはコンパクトに収納し，必要なときに人型へ展開．家庭での設置スペースや，別の場所への持ち運びの課題を解決します．</p></div>
<div class="pm-card"><div class="pm-icon"><i class="fa-solid fa-comments"></i></div><h3>人と関わる AI</h3><p>画像や人の言葉を解釈して行動に反映する VLA（Vision-Language-Action）などの技術を応用し，人とのインタラクティブなやり取りを目指します．</p></div>
</div>

<h2>なぜ「柔らかい」ロボットなのか</h2>
<p>ASIMO や Pepper，aibo のように，人の生活の中で活動し生活を補助するロボットは長く夢見られてきました．近年は高機能なヒューマノイドロボットが数多く開発されていますが，本格的に人と共生するロボットはまだ実現していません．</p>
<p>その原因の一つは，ロボットのハードウェアが依然として<strong>「硬い」</strong>ことだと考えています．ロボットが人と共に暮らすには，人や環境との接触時のけがや破損のリスクを減らす必要があります．ハードウェアを<strong>「柔らかく」</strong>するソフトロボットはその有効な手段ですが，ほとんどすべての要素が柔らかいため，出力が小さい，自立できないといった課題がありました．</p>
<p>Plia-mate は，硬い骨格と柔らかい外装を組み合わせることで，この課題に取り組みます．展開機構を備えた内骨格を持つソフトロボットの開発事例は少なく，その有効性はまだ十分に評価されていません．</p>

<h2>しくみ</h2>
<div class="pm-grid">
<div class="pm-card"><h3>伸縮・屈曲する内骨格</h3><p>テレスコピック構造を支柱としたパラレル機構をワイヤで駆動．テレスコ構造とパラレル機構で強度を確保し，ワイヤ駆動で収納性と展開性を実現します．</p></div>
<div class="pm-card"><h3>柔らかい外装</h3><p>体を覆う膜を全方向から紐で内骨格に接続する案や，リンクごとの浮き輪状の要素を膜で覆う案を検討中．蛇腹状に畳むことで，収納・展開時に内骨格と干渉しないようにします．</p></div>
<div class="pm-card"><h3>開発プラットフォーム</h3><p>まずは市販の小型ヒューマノイド（Booster K1）を用いて外装とモーションの基礎検討を行い，その知見を自作のロボットに展開します．</p></div>
</div>

<h2>ロードマップ</h2>
<ul class="pm-road">
<li class="pm-now"><b>2026年度</b>上半身の開発<br>（胴体・腕の内骨格，外装，ハンド）</li>
<li><b>2027年度</b>下半身の開発</li>
<li><b>2028年度</b>全身の統合とタスクの実行</li>
</ul>

<h3>2026年度のスケジュール</h3>

| 時期       | 内容                                             |
| ---------- | ------------------------------------------------ |
| 9月        | コンセプト検討                                   |
| 10月〜12月 | Booster K1 を用いた外装・制御の検討              |
| 10月〜2月  | 収納・展開可能な内骨格，外装，ハンドの設計・試作 |
| 2月〜3月   | 内骨格・外装・ハンドの統合                       |
| 1月〜6月   | ヒューマノイドの制御の実装                       |
| 3月〜6月   | 展示                                             |
| 7月        | 最終報告会                                       |

<h2>展示予定</h2>
<p>実際に多くの方にロボットに触れていただき，人とのやり取りの有効性を確かめるため，学内外のイベントへの出展を検討しています．</p>
<div class="pm-events">
<div class="pm-card"><h3><i class="fa-solid fa-school"></i> 学内イベント</h3><p>若葉祭（4月）<br>ホームカミングデイ（5月）<br>工大祭（10月）</p></div>
<div class="pm-card"><h3><i class="fa-solid fa-people-group"></i> 学外の展示会</h3><p>Kyoto Micro Maker Faire（4月）<br>NT函館（5月）・NT金沢（6月）<br>Maker Faire Tokyo（9月）</p></div>
</div>

<h2>安全への取り組み</h2>
<p>人とのやり取りを伴う動作は，まずマネキンを相手に実験し，常に緊急停止ボタンを押せる担当者を配置して実施します．展示までに十分な安全性を確認できない場合は，ロボットを動かさない展示やマネキンを用いたデモに切り替えます．</p>

<h2>チーム</h2>
<p>ロボット技術研究会のメンバーを中心に，学部生から博士課程まで多様な学年のメンバーで開発しています．CanSat，NHK「魔改造の夜」，XROBOCON，ROBO-ONE，研究など，ロボットの設計・製作経験が豊富なメンバーが集まり，社会人のアドバイザーにも支えられています．</p>

<h2>目指す成果</h2>
<div class="pm-grid">
<div class="pm-card"><h3>新しいヒューマノイドの実現性</h3><p>内骨格と柔らかい外装を組み合わせたヒューマノイドが，人との共生に有効かを確かめます．</p></div>
<div class="pm-card"><h3>柔らかい外装の製作手法</h3><p>得られた知見は，協働ロボットやサービスロボットの外装にも応用できます．</p></div>
<div class="pm-card"><h3>ロボットへの興味を広げる</h3><p>展示を通じて，子どもから大人まで多くの人がロボットに触れ，ロボット開発に興味を持つきっかけをつくります．</p></div>
</div>

</div>
