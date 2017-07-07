<template>
  <div>
    <h1 :title="name">Say Hello {{name}}</h1>
    <h2 v-html="htmlInfo"></h2>
    <h2 v-text="textInfo"></h2>
    <hr/>
    <div>
      实时加载:<input v-model="data"/><br/>
      延迟加载:<input v-model.lazy="data"/><br/>
      trim:<input v-model.trim="data"/><br/>
      number:<input v-model.number="data"/><br/>
      您填写的值为：{{data}}<br/>
      <button @keydown.enter="enterDown">请按下回车键</button>
    </div>
    <hr/>
    <input type="text" v-model.lazy.number.trim="myValue1"/>
    计算属性+1：{{myValue1WithotNumber}}
    <hr/>
    <div>
      <transition name="fade">
        <p v-show="flag">v-Show显示</p>
      </transition>
      <p v-if="flag">v-if显示</p>
      <p v-else="flag">v-else不显示</p>
      {{flag}}
      <br/>
      显示<input type="radio" name="flag" value="true" v-model="flag"/>
      不显示<input type="radio" name="flag" value="false" v-model="flag"/>
      <button @click="changeFlag">changeFlag</button>
    </div>
    <hr/>
    <div>
      <input type="checkbox" v-model="myBox" value="apple"/>apple
      <input type="checkbox" v-model="myBox" value="pen"/>pen
      <input type="checkbox" v-model="myBox" value="pinapple"/>pinapple
      您选中的值为：{{myBox | checkedFilter}}
      <br/>
      <input type="radio" v-model="myRadio" value="apple"/>apple
      <input type="radio" v-model="myRadio" value="pen"/>pen
      <input type="radio" v-model="myRadio" value="pinapple"/>pinapple
      您选中的值为：{{myRadio | checkedFilter}}
      <br/>
      <vSelect @onSelect="childSelect" :list="cities" ></vSelect>
      您选择的值为：{{mySelect | checkedFilter}}
    </div>
    <hr/>
    <div>
      请输入名称：<input name="name" v-model="itemName"/>
      请输入年龄：<input name="age" v-model="itemAge"/>
      <button @click="addItem">增加用户</button>
      <button @click="changeItem">更新用户第一项为：VueSet,100</button>
      <button @click="deleteItems">删除全部</button>
      <p>用户列表：</p>
      <ul>
        <li v-for="(obj, index) in list">
          name: {{obj.name}} - age: {{obj.age}} <a @click="deleteItem(index)" href="javascript:void(0);">delete</a>
        </li>
      </ul>
      <hr/>
      <ul>
        <li v-for="(value, key) in objectList">
          {{key}} - {{value}}
        </li>
      </ul>
    </div>
    <hr/>
    <components-a v-for="(value, key) in objectList" v-bind:key1="key" v-bind:value="value" @my-evet="onComaMyEvent"></components-a>
    <hr/>
    <span :class="[classA, classB]">我是一个Class测试</span>
    <hr/>
    <h2>Slot</h2>
    <my-slot>
      <p>给子组件传一个Slot</p>
      <p slot="namedSlot">这是一个名为nameSlot的Slot</p>
    </my-slot>
    <hr/>
    <div id="demo">
      <transition name="fade">
        <p v-if="show">hello</p>
      </transition>
      <transition name="my-transition">
        <p v-if="show">my-transition</p>
      </transition>
      <transition name="bounce">
        <p v-if="show">Look at me!</p>
      </transition>
      <button v-on:click="show = !show">
        Toggle
      </button>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue';
  import componentsA from './componentsA.vue'
  import vSelect from './vSelect.vue'
  import mySlot from './mySlot.vue'

  export default {
      data(){
          return {
            name: 'Wang',
            data: '',
            htmlInfo: '<p>Hello V-HTML!</p>',
            textInfo: '<p>Hello V-TEXT!</p>',
            myBox: [],
            myRadio: "",
            cities: ["北京","上海","太原"],
            mySelect: "",
            flag: true,
            itemName: '',
            itemAge: '',
            list: [
              {name: 'xiaoWang', age: 10},
              {name: 'xiaoDing', age: 8},
              {name: 'xiaoZhang', age: 18}
            ],
            objectList: {
                name: 'objectList',
                age: 19,
                address: '家里蹲'
            },
            classA: 'redColor',
            classB: 'fontSize',
            myValue1: 0,
            show: true
          }
      },
      methods : {
          enterDown(){
              alert(this.data);
          },
          changeFlag(){
              this.flag=!this.flag;
          },
          addItem(){
              var item = {};
              item.name = this.itemName;
              item.age = this.itemAge;
              this.list.push(item);
          },
          deleteItem(index){
              //以下两种发法均可
              //this.list.splice(index,1);
              Vue.delete(this.list, index);
          },
          changeItem(){
              //不能直接使用如下方法
              //this.list[0] = {name: 'VueSet', age: 100};

              Vue.set(this.list, 0 , {name: 'VueSet', age: 100});
          },
          deleteItems(){
              this.list = [];
          },
          onComaMyEvent(msg){
              console.log('Emit My Event -' + msg);
          },
          childSelect(val){
              this.mySelect = val;
          }
      },
      computed: {
          myValue1WithotNumber(){
              return parseInt(this.myValue1) + 1;
          }
      },
      watch: {
          myValue1(newVal,oldVal){
            if(newVal == "111"){
              alert("您输入了一个特殊值");
            }
          }
      },
      components:{
          componentsA,
          vSelect,
          mySlot
      },
      filters: {
          checkedFilter(value){
              if(!value || (value instanceof Array && value.length === 0)) return "未选中";
              return value;
          }
      }
  }

</script>

<style>
  .redColor{
    color: red;
  }
  .fontSize{
    font-size: 10px;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s ease-out;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
    opacity: 0
  }
  .my-transition-enter-active, .my-transition-leave-active {
    transition: opacity .5s ease-out;
  }
  .my-transition-enter {
    transform: translateX(-100px);
    opacity: 0
  }
  .my-transition-leave-to{
    transform: translateX(100px);
    opacity: 0
  }
  .bounce-enter-active {
    animation: bounce-in .5s;
  }
  .bounce-leave-active {
    animation: bounce-in .5s reverse;
  }
  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
  }
</style>
