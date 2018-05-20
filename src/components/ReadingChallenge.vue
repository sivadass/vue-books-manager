<template>
  <div class="container">
    <h1>{{ msg }}</h1>
    <p>You have <strong>20</strong> more books to complete this year.</p>
    <p><strong>4</strong> books behind the schedule.</p>
  </div>
</template>

<script>
export default {
  name: "ReadingChallenge",
  data() {
    return {
      msg: "Reading Challenge"
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
