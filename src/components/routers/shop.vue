<template>
  <div>
    <p>总价：{{$store.state.totalPrice}}</p>
    <p>购买数量：{{$store.state.count}}</p>
    <goods v-for="item in goodList" :goodsName="item.name" :goodsPrice="item.price"></goods>
  </div>
</template>

<script>
import goods from './goods.vue';

export default{
  data(){
      return{
          goodList:[
            {name: 'apple', price:10},
            {name: 'pinapple', price:20},
            {name: 'pen', price:5},
            {name: 'banana', price:12},
          ]
      }
  },
  components:{
    goods
  }
}
</script>
