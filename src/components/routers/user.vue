<template>
  <div>
    <p>This is user.</p>
    <p>name: {{$route.params.name}}, age: {{$route.params.age}}</p>
    <router-link :to="detail" tag="li">Detail</router-link>
    <router-view></router-view>
  </div>
</template>
<script>
  export default{
    data(){
        return{
            detail: '/user/' + this.$route.params.name + '/' + this.$route.params.age + '/detail'
        }
    }
  }

</script>
