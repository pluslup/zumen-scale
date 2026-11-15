# 図面スケール合わせ

図面のPDFを読み込み、寸法をなぞって実寸を入力して 1/100 などの正確な縮尺に合わせるWebアプリです。
MacBook（ブラウザ）と iPad（Apple Pencil・画面テンキー対応）で使え、オフラインでも動きます。

## 使い方

1. **読み込み**：PDF（JPG・PNGも可）をドラッグ&ドロップ、または「PDFを選ぶ」
2. **縮尺調整**：図面の寸法を端から端までなぞり、実寸を入力 →「縮尺を確定して次へ」
3. **確認・書き込み**：計測（一時表示／図面に残す）、ペン、文字、消しゴム。書き込みあり／なしで PDF・PNG を出力

## iPadでオフラインで使う

1. Safariで公開ページを開き、右上が「オフライン対応済み」になるまで待つ
2. 共有ボタン →「ホーム画面に追加」
3. 以後はホーム画面のアイコンから、機内モードでも起動できます

読み込んだ図面は端末の外に送信されません。

## 使用ライブラリ

- [PDF.js](https://github.com/mozilla/pdf.js)（Apache License 2.0）— `LICENSE-pdfjs.txt`
- [pdf-lib](https://github.com/Hopding/pdf-lib)（MIT License）— `LICENSE-pdf-lib.txt`
