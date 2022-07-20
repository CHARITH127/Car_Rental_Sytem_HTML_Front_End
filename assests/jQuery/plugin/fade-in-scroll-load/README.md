# jQuery_fadeIn_animation
jQuery scroll event animation and documentReady animation

# 参考にしたブログ
https://moshashugyo.com/media/animate-on-scroll<br>
こちらのコードを参考にしながら作りました。ありがとうございます。<br>

## jQueryでよく使う動きをまとめたコードです。
以下の２種類を作りました。<br>
1.ウィンドウを読み込んだらフェードインするアニメ<br>
2.スクロールイベントでフェードインするアニメ<br>

## 使い方
動かしたい要素に「js-scroll-trigger」のCSSクラスをつけてください。<br>
さらに、CSSのクラスを動かしたい方法に合わせて２つ付けます。<br>
「動かし方」と「現れ方」について2種のクラスがあります。<br>
それぞれから１つのクラスを選んで、組み合わせて使ってください。<br>

### 現れ方
*ウィンドウを読み込んだ時点でフェードイン<br>
.mv_fade_in<br>
<br>
*スクロールして要素が見えたらフェードイン<br>
.fade_in<br>

### 動かし方
*右から左へ動きながらフェードイン<br>
.u-fade-type-left<br>
<br>
*左から右へ動きながらフェードイン<br>
.u-fade-type-right<br>
<br>
*下がりながらフェードイン<br>
.u-fade-type-down<br>
<br>
*上がりながらフェードイン<br>
.u-fade-type-up<br>
<br>
*静止してフェードイン<br>
.u-fade-type-static<br>

それぞれの組み合わせのサンプルが以下になります。
https://wakasato.github.io/jQuery_fadeIn_animation/
