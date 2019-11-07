<template>
  <div class="purpose">
    <PurposeComp></PurposeComp>
  </div>
</template>

<script>
// @ is an alias to /src
import PurposeComp from "@/components/PurposeComp.vue";

export default {
  name: "purpose",
  components: {
    PurposeComp
  }
};
</script>
