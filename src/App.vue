<style>
@import "./stylesheets/global.css";
</style>
<template>
  <div id="app">
    <header>
      <ul>
        <li><a href="#/want-to-read">To Read</a></li>
        <li><a href="#/completed">Completed</a></li>
        <li><a href="#/reading-challenge">Currently Reading</a></li>
        <li><a href="#/book-detials">Quotes</a></li>
      </ul>
    </header>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>
