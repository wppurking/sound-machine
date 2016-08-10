<template>
  <div id="app">
    <div class="toolbar"></div>
    <div class="speaker">
      <img src="assets/img/speaker.png">
    </div>
    <div class="buttons">
      <template v-for='btn in buttons'>
        <beep-button :beep='btn.beep'></beep-button>
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
          {icon: 'applause', beep: 'applause'},
          {icon: 'applause', beep: 'applause'},
          {icon: 'applause', beep: 'applause'},
          {icon: 'applause', beep: 'applause'},
          {icon: 'applause', beep: 'applause'},
          {icon: 'applause', beep: 'applause'},
          {icon: 'applause', beep: 'applause'},
          {icon: 'applause', beep: 'applause'},
          {icon: 'applause', beep: 'applause'},
          {icon: 'applause', beep: 'applause'},
          {icon: 'applause', beep: 'applause'},
          {icon: 'applause', beep: 'applause'},
          {icon: 'applause', beep: 'applause'},
          {icon: 'applause', beep: 'applause'},
          {icon: 'applause', beep: 'applause'},
          {icon: 'applause', beep: 'applause'},
          {icon: 'applause', beep: 'applause'}
        ]
      }
    },
    components: {
      BeepButton
    }
  }
</script>
