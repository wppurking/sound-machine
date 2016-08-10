// 有声音的按钮, 具体声音参数由外部传入
<template>
  <div class='beep-button'>
    <span class='icon {{icon}}'></span>
    <button @click='play'>Play</button>
  </div>
</template>
<script>
  import 'assets/wav/applause.wav';
  import 'assets/wav/ba-dum-tsss.wav';
  import 'assets/wav/burp.wav';
  import 'assets/wav/crowd-laughing.wav';
  import 'assets/wav/fart.wav';
  import 'assets/wav/money.wav';
  import 'assets/wav/sad-trombone.wav';

  export default{
    props: {
      icon: {
        type: String,
        default: 'ba-dum-tsss'
      },
      beep: {
        type: String,
        requried: true
      }
    },
    methods: {
      play() {
        let audio = new Audio(`dist/wav/${this.beep}.wav`)
        audio.currentTime = 0;
        audio.play();
      }
    }
  }
</script>
