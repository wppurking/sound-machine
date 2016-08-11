<template>
  <div id="app">
    <div class="toolbar">
      <a @click='quitApp' class='btn close'>
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
  import Vue from 'vue';
  import { ipcRenderer as ipc } from 'electron';

  ipc.send('set-global-shortcuts', ['CmdOrCtrl']);

  export default {
    replace: false,
    methods: {
      quitApp() {
        ipc.send('quit-app-window');
      }
    }
  };
</script>
