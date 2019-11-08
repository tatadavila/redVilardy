<template>
  <div class="topiComp2">
    <div id="topiContainer2" class="container">
      <header>
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
        <!-- <div class="container">
          <div class="page-header">
            <h1 id="topiTitle">
              Tema 1. Evaluación Económica y Financiera de proyectos de
              inversión
            </h1>
          </div>
          <p align="justify">
            A continuación, se hace referencia a marcos teóricos que permiten
            mediante la investigación generar aportes individuales y colectivos
            que acrecienten las bases conceptuales para la toma de decisiones.
            Najul, Miguel (2006) El plan de una empresa o persona para invertir
            sus recursos en una actividad u operación, con el propósito de hacer
            real una expectativa de beneficio al cabo de un lapso determinado
            (p.22) Cortaza(1993), refiriéndose a la ONU: En su etapa de estudio,
            el proyecto es un conjunto de antecedentes que permiten juzgar las
            ventajas y desventajas que presenta la asignación de recursos a un
            centro o unidad productora donde serán transformados en bienes y o
            servicios
          </p>
          <p>
            <span id="obsTitle">Observaciones:</span> <br />
            <span id="obsContent"
              >Se anexarán enlaces de artículos científicos, libros, páginas
              web, videos y documentos institucionales, se hace click en las
              imágenes que los llevaran a vínculos o enlaces con temas de
              Evaluación Económica y Financiera de proyectos de inversión</span
            >
          </p>
        </div> -->
      </header>
      <!-- <div class="row justify-content-md-center">
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
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "PurposeComp"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="css">
.topiComp2 {
  margin-top: 0.7%;
  height: 97vh;
  /* background-color: rgb(84, 199, 88); */
}
#topiContainer2 {
  height: 100%;
  background-color: rgba(165, 11, 8, 0.3);
}
.iframe-container{
  position: relative;
  width: 100%;
  padding-bottom: 56.25%; 
  height: 0;
}
.iframe-container iframe{
  position: absolute;
  top:7px;
  left: 0;
  width: 100%;
  height: 100%;
}
/* #obsTitle {
  font-weight: 700;
  font-size: 170%
}
#obsContent {
  font-weight: 600;
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
} */
</style>
