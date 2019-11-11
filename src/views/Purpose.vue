<template>
  <div class="purpose">
    <div id="purpContainer" class="container">
      <header>
        <figure>
          <img src="../assets/img/purpose.png" id="imgPurpose" />
        </figure>
      </header>
      <div class="row justify-content-md-center">
        <div id="containerImg2" class="col-xl-6 col-8">
          <p id="purposeText1" align="justify">
            El propósito del tema es: cómo desarrollar ordenada y
            metodológicamente alternativas de inversión en el contexto de los
            negocios, mediante un recurso educativo digital, con el fin de
            adquirir las competencias que le permitan formular el estudio
            financiero de un proyecto.
          </p>
        </div>
        <div id="containerCol" class="col-xl-6 col-8">
          <p id="purposeText2" align="justify">
            Además, busca que en el tema: Evaluación Económica y Financiera de
            proyectos de inversión, los estudiantes puedan relacionar el
            concepto de proyecto de inversión y reconocer la importancia de
            formular el estudio financiero de un proyecto
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "purpose"
};
</script>

<style scoped>
.purpose {
  height: 127vh;
  /* background-color: pink; */
}
#purpContainer {
  height: 100%;
  background-color: #a8c9b8;
}
figure {
  width: 100%; /*container-width*/
  overflow: hidden; /*hide bounds of image */
  margin: 0; /*reset margin of figure tag*/
}
figure img {
  display: block; /*remove inline-block spaces*/
  width: 100%; /*make image streatch*/
  margin: -12% 0;
  padding-top: 0%;
}
#imgPurpose {
  margin-top: -17%;
}
#purposeText1 {
  right: 77px;
  width: 457px;
  height: 200px;
  font-size: 27px;
  font-weight: 400;
  margin: 0% 10%;
}
#purposeText2 {
  margin: -10% 7%;
  font-weight: bold;
}
</style>
