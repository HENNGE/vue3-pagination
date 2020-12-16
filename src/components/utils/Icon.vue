<template>
  <svg><use :xlink:href="`#icon-${icon}`"></use></svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Icon',
  props: {
    icon: {
      type: String,
      default: '',
    },
  },
});
</script>
