<template>
  <ul class="Pagination">
    <li class="PaginationControl">
      <icon
        class="Control"
        :class="{ 'Control-active': isPrevControlsActive }"
        icon="page-first"
        @click="goToFirst"
      />
    </li>
    <li class="PaginationControl">
      <icon
        class="Control"
        :class="{ 'Control-active': isPrevControlsActive }"
        icon="chevron-left"
        @click="goToPrev"
      />
    </li>
    <v-page
      v-for="page in pagination"
      :key="`pagination-page-${page}`"
      :page="page"
      :current="current"
      :active-color="activeColor"
      @page-change="pageChangeHandler"
    />
    <li class="PaginationControl">
      <icon
        class="Control"
        :class="{ 'Control-active': isNextControlsActive }"
        icon="chevron-right"
        @click="goToNext"
      />
    </li>
    <li class="PaginationControl">
      <icon
        class="Control"
        :class="{ 'Control-active': isNextControlsActive }"
        icon="page-last"
        @click="goToLast"
      />
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import Icon from '@/components/utils/Icon.vue';
import VPage from '@/components/atoms/VPage.vue';

export default defineComponent({
  name: 'VPagination',
  components: { Icon, VPage },
  props: {
    pages: {
      type: Number,
      default: 0,
    },
    rangeSize: {
      type: Number,
      default: 1,
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

  setup(props: any, { emit }) {
    // pagination
    const pagination = computed((): number[] => {
      const res = [];
      let rangeStart = props.current - props.rangeSize;
      let rangeEnd = props.current + props.rangeSize;

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
      emit('update', params);
    }

    // controls
    const isPrevControlsActive = computed((): boolean => {
      return props.current > 1;
    });
    const isNextControlsActive = computed((): boolean => {
      return props.current < props.pages;
    });

    function goToFirst(): void {
      if (isPrevControlsActive.value) {
        emit('update', 1);
      }
    }
    function goToPrev(): void {
      if (isPrevControlsActive.value) {
        emit('update', props.current - 1);
      }
    }

    function goToLast(): void {
      if (isNextControlsActive.value) {
        emit('update', props.pages);
      }
    }
    function goToNext(): void {
      if (isNextControlsActive.value) {
        emit('update', props.current + 1);
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
  width: rem(18px);
  height: rem(18px);
  margin: 0 rem(2px);
  fill: $grey_01;

  &-active {
    fill: $black_01;
    cursor: pointer;
  }
}
</style>
