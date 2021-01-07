<template>
  <div class="App">
    <v-pagination v-model="page" :range-size="1" :pages="10" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import VPagination from '@/components/VPagination.vue';

export default defineComponent({
  name: 'App',
  components: {
    VPagination,
  },

  setup() {
    const page = ref(1);

    return { page };
  },
});
</script>

<style lang="scss">
@import './src/assets/styles/_settings.scss';

#app {
  font-family: $font_family;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $font_color;
}
</style>
