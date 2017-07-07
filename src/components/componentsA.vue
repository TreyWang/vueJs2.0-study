<template>
  <div>
    <h4>我是组件A</h4>
    <p>{{key1}} - {{value}}</p>
    <button @click="emitParentEvent(value);">emit</button>
  </div>
</template>

<script>
  export default{
    props: ["key1", "value"],
    methods: {
      emitParentEvent(val){
          this.$emit('my-evet', val);
      }
    }
  }
</script>
