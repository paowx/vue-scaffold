<template>
  <div class="list-warp">
    <div class="demo-panel">
      <list></list>
    </div>
    <div class="demo-panel">
      <list2></list2>
    </div>
    <div class="demo-panel">
      <simple-list></simple-list>
    </div>
    <div class="demo-panel">
      <expert-bar></expert-bar>
    </div>
  </div>
</template>
<script>
import List from './template/List'
import List2 from './template/QuesList'
import SimpleList from './template/SimpleList'
import ExpertBar from './template/ExpertBar'
export default {
  data() {
    return {}
  },
  computed: {},
  mounted() {
  },
  components: {
    List,
    List2,
    SimpleList,
    ExpertBar
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
  .list-warp{
    padding-bottom: 5rem;
    .demo-panel{
      margin-bottom: 1rem;
    }
  }
</style>
