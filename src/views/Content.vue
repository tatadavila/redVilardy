<template>
  <div class="content">
    <div id="contContainer" class="container">
      <div id="containerList1" class="row justify-content-md-center">
        <div class="col-xl-6 col-8">
          <ol id="list" type="I">
            <li>Anteproyecto</li>
            <li>Estudio de Factibilidad</li>
            <li>Plan de Acción y Presupuesto</li>
            <li>Formulación</li>
          </ol>
        </div>
        <div class="col-xl-6 col-8">
          <div id="containerImg1">
            <img
              class="img-thumbnail"
              src="../assets/img/content_PMI.png"
              id="imgPmi"
              alt="EvalProyInvPMI"
            />
          </div>
        </div>
      </div>
      <div class="row justify-content-md-center">
        <div id="containerImg2" class="col-xl-6 col-8">
          <img
            class="rounded mx-auto d-block"
            id="img2"
            src="../assets/img/content_list.png"
            alt="list_img"
          />
        </div>
        <div id="containerCol" class="col-xl-6 col-8">
          <h2>La idea básica del proyecto.</h2>
          <p align="center">Consiste en ordenar datos considerando:</p>
          <ol class="center">
            <li>
              Resumen del futuro proyecto (Naturaleza, actividades, metodología,
              beneficiarios)
            </li>
            <li>Formulación del problema</li>
            <li>Objetivos</li>
            <li>Metas</li>
            <li>Localización</li>
            <li>Ubicación en el tiempo y su duración</li>
          </ol>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "content"
};
</script>

<style scoped>
.content {
  height: 77vh;
  /* background-color: rgba(238, 255, 0, 0.3); */
}
#contContainer {
  height: 100%;
  width: 100%;
  background-color: rgba(6, 81, 143, 0.418);
}
.row {
  margin-right: 7px;
}
#list {
  margin-top: 3%;
  padding-left: 17%;
  font-size: 177%;
}
#imgPmi {
  width: 107%;
}
#containerImg1 {
  position: absolute;
  margin-right: 7%;
  margin-top: 7px;
}
#containerImg2 {
  margin-top: -87px;
  padding: 2% 14%;
  /* background-color: yellow; */
}
#img2 {
  position: absolute;
  height: 67%;
  width: 57%;
  margin: 14%;
}
.center {
  text-align: center;
  list-style-position: inside;
}
</style>
