<template>
  <div class="topiComp3">
    <div id="topiContainer3" class="container">
      <img
        id="imgTopc3"
        src="../assets/img/topicDevelop_img2.png"
        alt="desarrollo del tema"
        width="77%"
      />
      <br />
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
      <img
        id="imgTopic4"
        src="../assets/img/topicDevelop_img3.png"
        alt="desarrollo del tema"
        width="77%"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Topic3"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="css">
.topiComp3 {
  height: 100%;
  /* background-color: rgb(84, 199, 88); */
}
#topiContainer3 {
  height: 100%;
  /* background-color: yellowgreen ; */
}
#imgTopc3 {
  padding-top: 27px;;
}
.iframe-container {
  position: relative;
  width: 100%;
  padding-bottom: 57.25%;
  height: 0;
}
.iframe-container iframe {
  position: absolute;
  top: 7px;
  left: 0;
  width: 100%;
  height: 100%;
}
#imgTopic4 {
  padding-top: 47px;
}
#topicObs{
  font-size: 27px;
  font-weight: 700;
}
</style>
