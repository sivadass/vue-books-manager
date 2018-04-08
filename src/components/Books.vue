<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>Project under contruction!</p>
  </div>
</template>

<script>
export default {
  name: "Books",
  data() {
    return {
      msg: "Welcome to Vue Books Manager"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
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
