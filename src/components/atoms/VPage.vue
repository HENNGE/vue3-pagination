<template>
  <li>
    <span v-if="page === null" class="DotsHolder">
      <icon-pagination-dots class="Dots" />
    </span>
    <button
      v-else
      class="Page"
      type="button"
      :aria-label="`Go to page ${page}`"
      :class="{ 'Page-active': isActive }"
      :style="`background-color: ${isActive ? activeColor : 'transparent'};`"
      @click="clickHandler"
    >
      {{ page }}
    </button>
  </li>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import IconPaginationDots from '../../assets/icons/pagination-dots.svg';

export default defineComponent({
  name: 'VPage',
  components: { IconPaginationDots },
  props: {
    page: {
      type: Number,
      default: null,
    },
    current: {
      type: Number,
      default: 0,
    },
    activeColor: {
      type: String,
      default: '#DCEDFF',
    },
  },
  emits: ['update'],

  setup(props, { emit }) {
    const isActive = computed(() => {
      return props.page === props.current;
    });

    function clickHandler() {
      emit('update', props.page);
    }

    return { isActive, clickHandler };
  },
});
</script>

<style scoped lang="scss">
@import './src/assets/styles/_settings.scss';

.Page {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  margin: 0 2px;
  color: $black_02;
  background-color: transparent;
  font-size: 14px;
  border-radius: 3px;
  box-sizing: border-box;
  border-color: transparent;
  cursor: pointer;
  outline: 0;
  user-select: none;

  &:hover {
    border: 1px solid $grey_02;
  }

  &-active {
    color: $black_01;
    border: 1px solid $grey_02;
  }
}

.DotsHolder {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  margin: 0 2px;
  box-sizing: border-box;
}

.Dots {
  width: 8px;
  height: 4px;
  fill: $grey_01;
}
</style>
