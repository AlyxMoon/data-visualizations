<template>
  <SortBubble />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SortBubble from '@/components/SortBubble.vue'

export default defineComponent({
  name: 'Home',
  components: {
    SortBubble,
  },
})
</script>
