<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      Hexschool vue week 6 hw
      <br>
      <a  href="https://www.hexschool.com/courses/vue-training.html"
          target="_blank" rel="noopener">Vue 作品實戰班</a>
    </p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
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
