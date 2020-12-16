<template>
  <li>
    <span v-if="page === null" class="DotsHolder">
      <icon class="Dots" icon="pagination-dots" />
    </span>
    <span
      v-else
      class="Page"
      :class="{ 'Page-active': isActive }"
      :style="`background-color: ${isActive ? activeColor : 'transparent'};`"
      @click="clickHandler"
    >
      {{ page }}
    </span>
  </li>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import Icon from '@/components/utils/Icon.vue';

export default defineComponent({
  name: 'VPage',
  components: { Icon },
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
  emits: ['page-change'],

  setup(props: any, { emit }) {
    const isActive = computed(() => {
      return props.page === props.current;
    });

    function clickHandler() {
      emit('page-change', props.page);
    }

    return { isActive, clickHandler };
  },
});
</script>

<style scoped lang="scss">
.Page {
  display: flex;
  align-items: center;
  justify-content: center;
  width: rem(22px);
  height: rem(22px);
  margin: 0 rem(2px);
  color: $black_02;
  background-color: transparent;
  font-size: rem(14px);
  border-radius: rem(3px);
  box-sizing: border-box;
  border-color: transparent;
  cursor: pointer;
  @include setTransition;

  &:hover {
    border: rem(1px) solid $grey_02;
    @include setTransition;
  }

  &-active {
    color: $black_01;
    border: rem(1px) solid $grey_02;
    @include setTransition;
  }
}

.DotsHolder {
  display: flex;
  align-items: center;
  justify-content: center;
  width: rem(22px);
  height: rem(22px);
  margin: 0;
}

.Dots {
  width: rem(8px);
  height: rem(3px);
  fill: $grey_01;
}
</style>
