<template>
  <div class="hello">
    <ul>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/study1">Study1</router-link>
      </li>
      <li>
        <router-link to="/user/Wang/18">User</router-link>
      </li>
      <li>
        <router-link to="/shop">Shopping</router-link>
      </li>
      <li>
        <router-link to="/redirect">Redirect</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
