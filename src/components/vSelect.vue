<template>
  <div>
    <select @change="changeSelect" v-model="selectedVal">
      <option value="">请选择</option>
      <option v-for="item in list" :value="item">{{item}}</option>
    </select>
  </div>
</template>

<script>
export default{
  props:["list"],
  data(){
      return{
        selectedVal: null
      }
  },
  methods:{
    changeSelect(){
        this.$emit("onSelect",this.selectedVal);
    }
  }
}
</script>

<style>

</style>
