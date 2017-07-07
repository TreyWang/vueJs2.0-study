<template>
  <div>
    <p>商品名称:{{goodsName}}</p>
    <p>商品价格:{{goodsPrice}}</p>
    <p><button @click="increment(1, goodsPrice)">+</button> <button @click="decrement(1, goodsPrice)">-</button></p>
  </div>
</template>

<script>
  import {mapState, mapMutations} from 'vuex';

  export default{
      props: ['goodsName', 'goodsPrice'],
      data(){
        return{
          goodsCount: 0,
          goodsTotal: 0
        }
      },
      methods:{
        ...mapMutations([
          'increment',
          'decrement'
        ])
      }
  }
</script>
