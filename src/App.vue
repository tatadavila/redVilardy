<template>
  <div id="app">
    <h1 id="title">EVALUACION ECONOMICA Y FINANCIERA DE PROYECTOS</h1>
    <Navbar></Navbar>
    <transition
      name="router-anim"
      enter-active-class="animated bounceInLeft"
      leave-active-class="animated lightSpeedOut"
    >
      <router-view />
    </transition>
  </div>
</template>

<style>
@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";
#app {
  font-family: "PT Sans Caption", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #05203b;
  padding-top: 17px;
  background-color: rgba(57, 117, 212, 0.9);
  width: 100%;
}
* {
  box-sizing: border-box;
}
html,
body {
  height: calc(100% - 50px);
  /* background-color: rgba(134, 20, 16, 0.301); */
}
.container {
  margin-top: -0.7%;
}
#title {
  font-weight: bolder;
  font-size: 45px;
  color: #05203b;
  margin-top: 7px;
}
</style>
