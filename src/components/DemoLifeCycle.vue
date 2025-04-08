<template>
  <div>
    <h1>Demo Lifecycle Component</h1>
    <input ref="myInput" type="text" />
    <p>{{ count }}</p>
    <button @click="handleIncrement" class="btn btn-success">increment</button>
    <ChildLifeCycle v-if="count % 2 === 0" />
  </div>
</template>

<script>
import ChildLifeCycle from './ChildLifeCycle.vue'
export default {
  components: {
    ChildLifeCycle,
  },
  data() {
    return {
      count: 0,
    }
  },
  methods: {
    handleIncrement() {
      this.count++
    },
  },
  beforeCreate() {
    console.log('beforeCreate', this.count)
  },
  created() {
    console.log('created', this.count)
    this.count = 10
  },
  beforeMount() {
    console.log('beforeMount', this.$refs.myInput)
  },
  mounted() {
    console.log('mounted', this.$refs.myInput)
    this.$refs.myInput.focus()
  },
  beforeUpdate() {
    console.log('beforeUpdate', this.count)
  },
  updated() {
    console.log('updated', this.count)
  },
}
</script>

<style></style>
