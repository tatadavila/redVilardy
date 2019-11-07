<template>
  <div id="app">
    <h1 id="title">EVALUACION ECONOMICA Y FINANCIERA DE PROYECTOS</h1>
    <Navbar></Navbar>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: "Roboto Mono", monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-top: 10px;
}
* {
  box-sizing: border-box;
}
.container {
  font-family: 'Arvo', serif;
  height: 80%;
}
#title {
  font-weight: bolder;
  font-size: 45px;
}
</style>
