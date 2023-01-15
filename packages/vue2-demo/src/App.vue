<template>
  <div>
    <demo-header></demo-header>
    <Docs />
    <h2>Example</h2>
    <Normal />
    <ModeRangeDate />
    <ModeMultiple />
    <Timestamp />
    <ItemFormatter />
  </div>
</template>

<script>
import Docs from './components/Docs.md'
import Normal from './components/Normal.md'
import ModeRangeDate from './components/ModeRangeDate.md'
import ModeMultiple from './components/ModeMultiple.md'
import Timestamp from './components/Timestamp.md'
import ItemFormatter from './components/ItemFormatter.md'
export default {
  components: {
    Docs,
    Normal,
    ModeRangeDate,
    ModeMultiple,
    Timestamp,
    ItemFormatter,
  },
  mounted() {
    this.$nextTick(() => {
      // https://highlightjs.org/usage/
      document.querySelectorAll('pre code').forEach((block) => {
        window.hljs.highlightElement(block)
      })
    })
  },
}
</script>
