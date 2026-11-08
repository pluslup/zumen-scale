# 図面スケール合わせ

図面（PDF・JPG・PNG）の寸法をなぞって実寸を入力し、1/100 などの正確な縮尺に合わせるWebアプリです。
縮尺を合わせた図面で現地打合せ（2点計測・寸法の記入・ペン・文字の書き込み）を行い、
書き込みあり／なしの PDF・PNG を正確な縮尺で出力できます。

## iPadでオフラインで使う

1. Safariで公開ページを開き、右上が「オフライン対応済み」になるまで待つ
2. 共有ボタン →「ホーム画面に追加」
3. 以後はホーム画面のアイコンから、機内モードでも起動できます

読み込んだ図面は端末の外に送信されません。

## 使用ライブラリ

- [PDF.js](https://github.com/mozilla/pdf.js)（Apache License 2.0）— `lib/LICENSE-pdfjs.txt`
- [pdf-lib](https://github.com/Hopding/pdf-lib)（MIT License）— `lib/LICENSE-pdf-lib.txt`
