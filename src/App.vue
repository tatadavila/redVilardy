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
  padding-top: 10px;
  background-color: rgba(57, 117, 212, 0.5);
  max-height: 100%;
}
* {
  box-sizing: border-box;
}
.container {
  margin-top: -0.7%;
}
#title {
  font-weight: bolder;
  font-size: 45px;
}
.page {
  position: fixed;
  width: inherit;
}
</style>
