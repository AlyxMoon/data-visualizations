<template>
  <h2>Bubble Sort</h2>

  <button
    :disabled="sorting"
    @click="resetArray"
  >
    New Array
  </button>
  <button
    :disabled="sorting"
    @click="sortArray"
  >
    Sort
  </button>

  <transition-group
    name="visualization-grid"
    tag="section"
    class="visualization-grid"
  >
    <div
      v-for="num in arr"
      :key="num"
    >
      {{ num }}
    </div>
  </transition-group>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { generateNumericArray } from '@/lib/generateArray'
import { sortBubble } from '@/lib/sortArray'

export default defineComponent({
  name: 'SortBubble',

  data: (): {
    arr: number[],
    sorting: boolean,
    timeoutInterval: number,
  } => ({
    arr: [],
    sorting: false,
    timeoutInterval: 500,
  }),

  created () {
    this.resetArray()
  },

  methods: {
    async resetArray () {
      this.arr = generateNumericArray(10, 1, 100)
    },

    async sortArray () {
      this.sorting = true
      const generator = sortBubble(this.arr)

      for (const iteration of generator) {
        await this.$nextTick()
        await new Promise(resolve => setTimeout(resolve, this.timeoutInterval))
        this.arr = iteration
      }

      this.sorting = false
    },
  },
})
</script>

<style lang="scss" scoped>
.visualization-grid {
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;

  div {
    margin: 0 5px;
    height: 40px;
    width: 40px;

    position: relative;
    top: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    border: 1px solid black;
    border-radius: 100vh;
    box-sizing: border-box;

    text-align: center;

    transition: transform 300ms ease-out, top 300ms ease-in;
  }
}

button {
  margin: 0 0 20px;
}

.visualization-grid {
  &-move {
    position: relative;
    top: 30px !important;
  }
}

@keyframes test {
  0% {
    margin-top: 0;
  }

  50% {
    margin-top: 50px;
  }

  100% {
    margin-top: 0;
  }
}
</style>
