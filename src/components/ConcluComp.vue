<template>
  <div class="concluComp">
    <div id="concluContainer" class="container">
      <h1>HELLO WORLD</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="css">
.concluComp{
  height: 80hv;
  background-color: pink;
}
#concluContainer {
  height: 100%;
  background-color: rgba(16, 88, 204, 0.3)
}
</style>
