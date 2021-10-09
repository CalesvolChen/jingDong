<template>
  <svg class="icon" :style="iconSize" aria-hidden="true">
    <use :xlink:href="`#${icon}`"></use>
  </svg>
</template>

<script>
import './iconfont'
import { defineComponent } from '@vue/runtime-core'

export default defineComponent({
  name: 'BaseIcon',
  props: {
    icon: {
      type: String,
      default: 'icon-code1',
    },
    size: {
      type: Number,
      default: 12,
    }
  },
  computed:{
    iconSize() {
      return {
        width: `${this.size}px`,
        height: `${this.size}px`
      }
    }
  }
})
</script>

<style>
.icon {
  /* width: 2em; */
  /* height: 2em; */
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
