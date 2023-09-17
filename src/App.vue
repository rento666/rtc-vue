<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<style>
/* 全局变量样式 */
  :root {
    /* 主页面的宽度为60% */
    --main-width: 60%;
    /* CompHeader */
    --head-height: 60px;
    /* CompNav */
    --nav-height: 60px;
    /* text color */
    --text-color: #8492A6;
    /* pc-min-width */
    --pc-minw: 960px;
    /* ipad-min-width */
    --pad-minw: 750px;
    /* phone-min-width */
    ---phone-minw: 200px;
  }
  #app {
    position:absolute;
    top:0;
    right:0;
    bottom:0;
    left:0;
  }

</style>