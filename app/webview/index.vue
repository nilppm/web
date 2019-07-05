<template>
  <div class="page">
    <img src="https://raw.githubusercontent.com/woxjs/wox/master/logo.svg?sanitize=true" alt="vue logo" />
    <h1>Wox.js Example</h1>
    <p class="desc">A dynamic loader MVC architecture based on <a href="https://vuejs.org/" target="_blank">Vue.js</a> development which use web virtual service and web virtual request mode.</p>
    <div class="links">
      <a href="https://github.com/woxjs/wox" target="_blank">GITHUB</a>
      <a href="https://github.com/woxjs/wox/issues" target="_blank">ISSUE</a>
      <a href="https://woxjs.github.io/" target="_blank">DOCS</a>
      <a href="https://www.npmjs.com/package/@wox/wox" target="_blank">NPM</a>
      <a href="https://www.npmjs.com/package/@wox/cli" target="_blank">COMMAND</a>
    </div>
    <h5>Web Virtual Request</h5>
    <p style="text-align:center;">{{value}} <br /><button @click="add" :disabled="doing">Add timestamp, delay 800ms.</button></p>
    <p class="copyright">Copyright@woxjs.github.io 2018-present</p>
  </div>
</template>
<script>
  export default {
    name: "IndexPage",
    data() {
      return {
        doing: false,
        value: null
      }
    },
    props: {
      timestamp: Number,
    },
    enter() {
      this.value = this.timestamp;
    },
    methods: {
      add() {
        if (this.doing) return;
        this.doing = true;
        this.$post('/timestamp', { delay: 800 }).then(timestamp => {
          this.value = timestamp;
          this.doing = false;
        }).catch(e => {
          this.doing = false;
          alert(e.message);
        });
      }
    }
  }
</script>
<style lang="less">
.page{
  padding: 100px 0;
  width:100%;
  box-sizing: border-box;
  .desc{
    padding: 0px 15px;
  }
  h5{
    border-top: 1px solid #f8f8f8;
    padding-top: 20px;
  }
  a{
    color:#46bd87;
    transition:all .3s ease-in;
    &:link,&:visited{
      text-decoration:underline;
    }
    &:hover{
      text-decoration: none;
    }
  }
  img{
    width: 100px;
  }
  &,h1, p, .links{
    text-align: center;
  }
  .links{
    margin-top: 30px;
    margin-bottom: 30px;
    a{
      padding: 0 8px;
      font-size:12px;
    }
  }
  .copyright{
    padding: 30px 0;
    font-size:10px;
    color:rgba(0,0,0,.2);
    transform: scale(.9);
    a:link,a:visited{
      color:rgba(0,0,0,.1);
    }
    a:hover{
      color:#46bd87;
    }
  }
  button{
    background-color: #46bd87;
    color:#fff;
    border: 1px solid transparent;
    padding: 8px 15px;
    border-radius: 4px;
    margin-top: 20px;
    transition: all .3s ease;
    &:disabled{
      background-color: #eee;
      color:#ccc;
    }
  }
}  
</style>
<style>
html,body{
  margin: 0;
  padding: 0;
}
</style>