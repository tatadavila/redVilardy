<template>
  <div class="contentTable">
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
          <p align="justify">Consiste en ordenar datos considerando:</p>
          <div id="list2"></div>
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
export default {
  name: "Start"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="css">
.contentTable {
  height: 117vh;
}
#contContainer {
  height: 100%;
  background-color: rgba(4, 217, 217, 0.5)
}
.row {
  margin-right: 7px;
}
#list {
  padding-left: 17%;
  font-size: 157%;
}
#imgPmi {
  width: 107%;
}
#containerImg1 {
  margin-right: 7%;
  margin-top: 7px;

}
#containerImg2 {
  margin-top: -87px;
}
#img2 {
  height: 97%;
}
#containerCol {
  font-size: 167%;
  padding-top: 7%;
}
.center {
  text-align: center;
  list-style-position: inside;
}
</style>
