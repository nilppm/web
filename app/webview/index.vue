<template>
  <div class="wrap">
    <h1>Node's Private Package Manager</h1>
    <h2>Create the lightest and simple private source for you.</h2>
    <p class="disclaimer">Businesses and individuals can enjoy the stability and convenience brought by this project. </p>
    <p class="disclaimer" v-if="store.server && store.client">Client version: <span>v{{store.client.version}}</span> - Server version: <span>v{{store.server.version}}</span></p>
    <div class="cmd">
      <a href="https://github.com/nilppm/npm" class="cta" target="_blank">npm i @nilppm/npm</a>
    </div>
  </div>
</template>
<script>
  import store from '../../meta';
  export default {
    name: "IndexPage",
    data() {
      return {
        store
      }
    }
  }
</script>
<style lang="less" scoped>
.wrap{
  width: 1140px;
  margin: 0 auto;
  h1 {
    font-family: "Playfair Display", "Open Sans", sans-serif;
    font-weight: 400;
    font-size: 50px;
    text-align: center;
    padding: 100px 0 30px 0;
    margin: 0;
  }
  h2{
    font-size: 18px;
    font-weight: 300;
    font-family: "Open Sans", sans-serif;
    text-align: center;
  }
  p.disclaimer{
    font-family: "Open Sans", sans-serif;
    font-weight: 300;
    text-align: center;
    span{
      color:#FC4D47;
    }
  }
  a.cta{
    width: 330px;
    display: inline-block;
    background: #000;
    background-size: 20px;
    font-size: 18px;
    color: #fff;
    height: 64px;
    line-height: 64px;
    border-radius: 100px;
    text-align: center;
    margin: 100px 0 150px 0;
    font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,Courier,monospace;
  }
  .cmd{
    text-align: center;
  }
}
</style>