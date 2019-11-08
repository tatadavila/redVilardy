<template>
  <div class="start">
    <div id="startContainer" class="container">
      <div
        class="row justify-content-xl-center justify-content-md-left justif-content-sm-center"
      >
        <div class="col-xl-6 col-4">
          <h2 id="welc">BIENVENIDOS</h2>
        </div>
      </div>
      <div class="row justify-content-md-center">
        <div class="col-xl-6 col-8">
          <img
            src="../assets/img/evaluate.png"
            class="img-fluid"
            id="evaluate"
          />
        </div>
        <div id="containerText" class="col-xl-6 col-8">
          <div id="text">
            <p id="paragraph" align="justify">
              Este recurso fue creado para que los estudiantes tengan una mayor
              interpretación de la Evaluación de un Proyecto de Inversión, donde
              se identificaran aspectos y conceptos como: Oportunidad de
              Inversión y el Estudio del Mercado, Estudio Técnico, Estudio
              Económico y Evaluación Económica Financiera.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Start"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="css">
.start {
  height: 77vh;
  background-size:cover;
  font-family: 'Black Han Sans', sans-serif;
}
#startContainer {
  background-image: url("../assets/img/home_background.jpeg");
  height: 100%;
}
#welc {
  position: absolute;
  font-weight: 700;
  font-size: 77px;
  color: rgb(52, 138, 191);
}
img {
  padding-top: 27%;
}

#text {
  position: absolute;
  top: 27%;
  right: 77px;
  width: 457px;
  height: 200px;
  font-size: 27px;
  font-weight: bold;
  color: aliceblue;
}
#paragraph{
  background-color: rgba(48, 79, 128, 0.4)
}
</style>
