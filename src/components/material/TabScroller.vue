<template>
  <div class="mdc-tab-scroller" :class="classes">
    <div class="mdc-tab-scroller__scroll-area">
      <div class="mdc-tab-scroller__scroll-content">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
import { MDCTabScroller } from '@material/tab-scroller'

export const baseComponentMixin = {
  inheritAttrs: false
}

const themeProps = [
  'primary',
  'secondary',
  'background',
  'surface',
  'on-primary',
  'on-secondary',
  'on-surface',
  'primary-bg',
  'secondary-bg',
  'text-primary-on-light',
  'text-secondary-on-light',
  'text-hint-on-light',
  'text-disabled-on-light',
  'text-icon-on-light',
  'text-primary-on-dark',
  'text-secondary-on-dark',
  'text-hint-on-dark',
  'text-disabled-on-dark',
  'text-icon-on-dark'
]

export const themeClassMixin = {
  props: {
    theming: {
      type: String,
      default: ''
    }
  },
  mounted () {
    if (themeProps.indexOf(this.theming) > -1) {
      this.$el.classList.add('mdc-theme--' + this.theming)
    }
  }
}

export default {
  mixins: [baseComponentMixin, themeClassMixin],
  props: {
    align: String
  },
  data () {
    return {
      mdcTabScroller: undefined
    }
  },
  computed: {
    classes () {
      return this.align ? 'mdc-tab-scroller--align-' + this.align : '';
    }
  },
  mounted () {
    this.mdcTabScroller = MDCTabScroller.attachTo(this.$el)
  },
  beforeDestroy () {
    this.mdcTabScroller.destroy()
  }
}
</script>

<style scoped>

</style>
