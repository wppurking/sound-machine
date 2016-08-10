<template>
  <div id="app">
    <div class="toolbar">
      <a class='btn close'>
        <img src='assets/img/close.png'>
      </a>
      <a v-link="{ name: 'setting' }" class="btn setting">
        <img src='assets/img/settings.png'>
      </a>
    </div>
    <div class='content'>
      <router-view></router-view>
    </div>
</template>

<script>
  import 'assets/main.scss';

  export default {
    replace: false
  }
</script>
