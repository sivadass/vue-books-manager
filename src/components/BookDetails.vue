<template>
  <div class="container">
    <h1>{{ msg }}</h1>
    <ul>
      <li>Pages: #346</li>
      <li>Edition: May 2012</li>
      <li>Author: Gary Stephen</li>
      <li>Rating: 4.2/5</li>
    </ul>

    <ul>
      <li>Pages: #286</li>
      <li>Edition: May 2014</li>
      <li>Author: Susan Gray</li>
      <li>Rating: 4.5/5</li>
    </ul>

    <ul>
      <li>Pages: #288</li>
      <li>Edition: May 2017</li>
      <li>Author: Brian Oberian</li>
      <li>Rating: 4.7/5</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "BookDetail",
  data() {
    return {
      msg: "Book Details Page"
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
  color: #269965;
}
</style>
