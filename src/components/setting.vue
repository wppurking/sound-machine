<template>
  <div id='settings'>
    <a v-link="{ name: 'app'}">回到 Machine</a>
    <h3>快捷键设置</h3>

    <div class="items">
      <label>
        <input type="checkbox" v-model='shortcuts' value='CmdOrCtrl' @change='setupKeys'/>
        Ctrl(Command)
      </label>
      <label>
        <input type="checkbox" v-model='shortcuts' value='Shift' @change='setupKeys'/>
        Shift
      </label>
      <label>
        <input type="checkbox" v-model='shortcuts' value='Alt' @change='setupKeys'/>
        Alt
      </label>
      <div>
        Check shortcuts: {{ shortcuts }}
      </div>
    </div>
  </div>
</template>
<script>
  import { ipcRenderer as ipc } from 'electron';
  import Vue from 'vue';

  let vm = Vue.extend({
    data() {
      return {
        shortcuts: ['CmdOrCtrl']
      }
    },
    methods: {
      setupKeys() {
        ipc.send('set-global-shortcuts', this.shortcuts);
      }
    }
  });
  export default vm;
</script>
