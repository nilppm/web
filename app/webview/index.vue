<template>
  <div class="wrap">
    <h1>Node's Private Package Manager</h1>
    <h2>Create the lightest and simple private source for you.</h2>
    <p class="disclaimer">Businesses and individuals can enjoy the stability and convenience brought by this project. </p>
    <p class="disclaimer" v-if="store.server && store.client">Client version: <span>v{{store.client.version}}</span> - Server version: <span>v{{store.server.version}}</span></p>
    <div class="cmd">
      <a href="https://github.com/nilppm/npm" class="cta" target="_blank">npm i @nilppm/npm --registry={{host}}</a>
    </div>
  </div>
</template>
<script>
  import store from '../../meta';
  export default {
    name: "IndexPage",
    data() {
      return {
        store,
        host: window.location.origin
      }
    }
  }
</script>
<style lang="less" scoped>
.wrap{
  width: 100%;
  margin: 0 auto;
  background-image: url(../../images/z.png);
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: 1145px 216px;
  background-color: rgb(250, 251, 252);
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
    display: inline-block;
    background: rgb(36, 41, 46);
    background-size: 20px;
    font-size: 14px;
    padding: 10px 42px 10px 42px;
    color: #fff;
    border-radius: 5px;
    text-align: center;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 10px 30px;
    font-family: "Open Sans", sans-serif;
  }
  .cmd{
    text-align: center;
    margin: 100px 0 250px 0;
  }
}
</style>