<template>
  <div class="home">
    <div class="container">
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
              se identificaran aspectos y conceptos como:
              <ul align="center" style="list-style-type:none">
                <li>Estudio Técnico</li>
                <li>Estudio
              Económico</li>
                <li>Evaluación Económica Financiera</li>
                </ul>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "home"
};
</script>
<style scoped>
.home {
  font-family: "Black Han Sans", sans-serif;
  background-color: rgba(48, 122, 33, 0.4);
  height: 77vh;
}
.home .container {
  height: 100%;
  background-image: url("../assets/img/home_background.jpeg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
#welc {
  font-weight: 700;
  font-size: 77px;
  color: rgb(14, 103, 158);
}
#text {
  float: left;
  font-weight: bold;
  color: rgb(34, 65, 116)
}
#paragraph {
  background-color: rgba(255, 255, 255, 0.277);
  font-size: 27px;
}
</style>
