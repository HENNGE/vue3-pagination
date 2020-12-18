<template>
  <div class="App">
    <v-pagination v-model="page" :pages="10" :current="current" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import VPagination from '@/components/VPagination.vue';

export default defineComponent({
  name: 'Home',
  components: {
    VPagination,
  },

  setup() {
    const page = ref(5);

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
