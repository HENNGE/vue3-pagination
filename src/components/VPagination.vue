<template>
  <ul class="Pagination">
    <li class="PaginationControl">
      <icon-page-first
        class="Control"
        :class="{ 'Control-active': isPrevControlsActive }"
        @click="goToFirst"
      />
    </li>
    <li class="PaginationControl">
      <icon-chevron-left
        class="Control"
        :class="{ 'Control-active': isPrevControlsActive }"
        @click="goToPrev"
      />
    </li>
    <v-page
      v-for="page in pagination"
      :key="`pagination-page-${page}`"
      :page="page"
      :current="modelValue"
      :active-color="activeColor"
      @page-change="pageChangeHandler"
    />
    <li class="PaginationControl">
      <icon-chevron-right
        class="Control"
        :class="{ 'Control-active': isNextControlsActive }"
        @click="goToNext"
      />
    </li>
    <li class="PaginationControl">
      <icon-page-last
        class="Control"
        :class="{ 'Control-active': isNextControlsActive }"
        @click="goToLast"
      />
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import VPage from './atoms/VPage.vue';
import IconPageFirst from '../assets/icons/page-first.svg';
import IconPageLast from '../assets/icons/page-last.svg';
import IconChevronLeft from '../assets/icons/chevron-left.svg';
import IconChevronRight from '../assets/icons/chevron-right.svg';

export default defineComponent({
  name: 'VPagination',
  components: { IconPageFirst, IconChevronLeft, IconChevronRight, IconPageLast, VPage },
  props: {
    pages: {
      type: Number,
      default: 0,
    },
    rangeSize: {
      type: Number,
      default: 1,
    },
    modelValue: {
      type: Number,
      default: 0,
    },
    activeColor: {
      type: String,
      default: '#DCEDFF',
    },
  },
  emits: ['update:modelValue'],

  setup(props: any, { emit }) {
    // pagination
    const pagination = computed((): number[] => {
      const res = [];
      let rangeStart = props.modelValue - props.rangeSize;
      let rangeEnd = props.modelValue + props.rangeSize;

      if (rangeEnd > props.pages) {
        rangeEnd = props.pages;
        rangeStart = props.pages - props.rangeSize * 2;
        rangeStart = rangeStart < 1 ? 1 : rangeStart;
      }

      if (rangeStart <= 1) {
        rangeStart = 1;
        rangeEnd = Math.min(props.rangeSize * 2 + 1, props.pages);
      }

      if (rangeStart <= 3) {
        for (let i = 1; i < rangeStart; i++) {
          res.push(i);
        }
      } else {
        res.push(1);
        res.push(null);
      }

      for (let i = rangeStart; i <= rangeEnd; i++) {
        res.push(i);
      }

      if (rangeEnd >= props.pages - 2) {
        for (let i = rangeEnd + 1; i <= props.pages; i++) {
          res.push(i);
        }
      } else {
        res.push(null);
        res.push(props.pages);
      }
      return res;
    });

    function pageChangeHandler(params: number) {
      emit('update:modelValue', params);
    }

    // controls
    const isPrevControlsActive = computed((): boolean => {
      return props.modelValue > 1;
    });
    const isNextControlsActive = computed((): boolean => {
      return props.modelValue < props.pages;
    });

    function goToFirst(): void {
      if (isPrevControlsActive.value) {
        emit('update:modelValue', 1);
      }
    }
    function goToPrev(): void {
      if (isPrevControlsActive.value) {
        emit('update:modelValue', props.modelValue - 1);
      }
    }

    function goToLast(): void {
      if (isNextControlsActive.value) {
        emit('update:modelValue', props.pages);
      }
    }
    function goToNext(): void {
      if (isNextControlsActive.value) {
        emit('update:modelValue', props.modelValue + 1);
      }
    }

    return {
      pagination,
      pageChangeHandler,
      isPrevControlsActive,
      isNextControlsActive,
      goToFirst,
      goToLast,
      goToPrev,
      goToNext,
    };
  },
});
</script>

<style scoped lang="scss">
@import './src/assets/styles/_settings.scss';

.Pagination {
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style-type: none;
}

.PaginationControl {
  display: flex;
  align-items: center;
}

.Control {
  position: relative;
  display: block;
  width: 18px;
  height: 18px;
  margin: 0 2px;
  fill: $grey_01;

  &-active {
    fill: $black_01;
    cursor: pointer;
  }
}
</style>
