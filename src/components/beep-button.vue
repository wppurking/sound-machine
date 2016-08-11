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

  import Vue from 'vue';
  import { ipcRenderer as ipc } from 'electron';

  function beepMusic(beep) {
    let audio = new Audio(`dist/wav/${beep}.wav`)
    audio.currentTime = 0;
    audio.play();
  }

  // 尝试直接在 component 中自己使用 Vue.extend 初始化 Vue Component
  let vm = Vue.extend({
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
        beepMusic(this.beep);
      }
    }
  });

  ipc.on('beep', (ev, v) => beepMusic(v));

  export default vm;
</script>
