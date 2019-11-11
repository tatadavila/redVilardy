<template>
  <div class="topiComp2">
    <div id="topiContainer2" class="container">
      <div class="iframe-container">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/doinMvdN7Tc"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Topic2"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.topiComp2 {
  margin-top: 0.7%;
  height: 99vh;
  /* background-color: rgb(84, 199, 88); */
}
#topiContainer2 {
  height: 100%;
  /* background-color: rgba(165, 11, 8, 0.3); */
}
.iframe-container {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%;
  height: 0;
}
.iframe-container iframe {
  position: absolute;
  top: 7px;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
