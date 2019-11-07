<template>
  <div class="start">
    <div class="container">
      <img src="../assets/img/proposito_img1.png" alt="">
      <div class="row justify-content-md-center">
        <div class="col-xl-6 col-8">
          <img
            src="../assets/img/evaluate.png"
            class="img-fluid"
            id="evaluate"
          />
        </div>
        <div class="col-xl-6 col-8">
          <div id="text">
            <p align="justify">
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
  /* background-color: pink; */
}
#welc {
  position: absolute;
  left: 24%;
  padding-top: 2%;
  font-weight: 400;
  font-size: 47px;
}
img {
  padding-top: 17%;
}
#text {
  position: absolute;
  right: 77px;
  width: 457px;
  height: 200px;
  font-size: 27px;
}
</style>
