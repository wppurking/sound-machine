<template>
  <div id="app">
    <div class="toolbar"></div>
    <div class="speaker">
      <img src="assets/img/speaker.png">
    </div>
    <div class="buttons">
      <template v-for='btn in buttons'>
        <beep-button :icon='btn.icon' :beep='btn.beep'></beep-button>
      </template>
    </div>
  </div>
</template>

<script>
  import 'assets/main.scss';
  import BeepButton from 'vues/beep-button';

  export default {
    data() {
      return {
        buttons: [
          {beep: 'ba-dum-tsss'},
          {beep: 'ba-dum-tsss'},
          {beep: 'ba-dum-tsss'},
          {beep: 'ba-dum-tsss'},
          {icon: 'applause', beep: 'applause'},
          {icon: 'applause', beep: 'applause'},
          {icon: 'applause', beep: 'burp'},
          {icon: 'applause', beep: 'burp'},
          {icon: 'crowd-laughing', beep: 'crowd-laughing'},
          {icon: 'crowd-laughing', beep: 'crowd-laughing'},
          {icon: 'applause', beep: 'fart'},
          {icon: 'applause', beep: 'fart'},
          {icon: 'money', beep: 'money'},
          {icon: 'money', beep: 'money'},
          {icon: 'money', beep: 'money'},
          {icon: 'money', beep: 'money'},
          {icon: 'applause', beep: 'sad-trombone'},
          {icon: 'applause', beep: 'sad-trombone'},
          {icon: 'applause', beep: 'sad-trombone'},
          {icon: 'applause', beep: 'sad-trombone'}
        ]
      }
    },
    components: {
      BeepButton
    }
  }
</script>
