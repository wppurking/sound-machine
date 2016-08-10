// 有声音的按钮, 具体声音参数由外部传入
<template>
  <div class='beep-button'>
    <span class='icon {{icon}}'></span>
  </div>
</template>
<script>
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
    }
  }
</script>
