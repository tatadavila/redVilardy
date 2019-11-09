<template>
  <div class="develop">
    <Topic></Topic>
    <Topic2></Topic2>
    <Topic3></Topic3>
  </div>
</template>

<script>
// @ is an alias to /src
import Topic from "@/components/Topic.vue";
import Topic2 from "@/components/Topic2.vue";
import Topic3 from "@/components/Topic3.vue";

export default {
  name: "develop",
  components: {
    Topic,
    Topic2,
    Topic3
  }
};
</script>
