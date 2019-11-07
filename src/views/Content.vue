<template>
  <div class="content">
    <ContentTable></ContentTable>
  </div>
</template>

<script>
// @ is an alias to /src
import ContentTable from "@/components/ContentTable.vue";
export default {
  name: "content",
  component: {
    ContentTable
  }
};
</script>
