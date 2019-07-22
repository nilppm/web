<template>
  <div class="footer">
    <div class="wrap">
      <div class="column social">
        <flex class="logen" valign="middle">
          <img src="https://static.npmjs.com/b0f1a8318363185cc2ea6a40ac23eeb2.png" alt="cpm logo" />
          <div>
            <div class="webname">NILPPM</div>
            <div class="webdesc">Node's package manager</div>
          </div>
        </flex>
        <div class="text">
          <a-icon type="trademark" /> 2019 Nilppm by <a href="https://github.com/cevio" target="_blank">Author[Cevio]</a> · All Right Reserved. All interfaces are from the official <a href="https://www.npmjs.com/" target="_blank">NPM</a> registry.
        </div>
        <div class="linked">
          <a-icon type="github" />
          <a-icon type="ant-design" />
          <a-icon type="chrome" />
          <a-icon type="html5" />
        </div>
      </div>
      <div class="column extras" v-if="store.server">
        <flex class="items" align="between" blocked>
          <flex class="item" :span="1" direction="column" blocked>
            <div class="chunk">
              <flex blocked fulled align="between" valign="middle">
                <span>Packages</span>
                <span>{{store.server.total.package}}</span>
              </flex>
            </div>
            <div class="chunk">
              <flex blocked fulled align="between" valign="middle">
                <span>Versions</span>
                <span>{{store.server.total.version}}</span>
              </flex>
            </div>
            <div class="chunk">
              <flex blocked fulled align="between" valign="middle">
                <span>Users</span>
                <span>{{store.server.total.user}}</span>
              </flex>
            </div>
            <div class="chunk">
              <flex blocked fulled align="between" valign="middle">
                <span>Free Memory</span>
                <span>{{cache}}</span>
              </flex>
            </div>
          </flex>
          <flex class="item right" :span="1" direction="column" blocked>
            <div class="chunk">
              <flex blocked fulled align="between" valign="middle">
                <span>Downloads</span>
                <span>{{store.server.total.download}}</span>
              </flex>
            </div>
            <div class="chunk">
              <flex blocked fulled align="between" valign="middle">
                <span>Day</span>
                <span>{{store.server.total.dayDownloads}}</span>
              </flex>
            </div>
            <div class="chunk">
              <flex blocked fulled align="between" valign="middle">
                <span>Week</span>
                <span>{{store.server.total.weekDownloads}}</span>
              </flex>
            </div>
            <div class="chunk">
              <flex blocked fulled align="between" valign="middle">
                <span>Month</span>
                <span>{{store.server.total.monthDownloads}}</span>
              </flex>
            </div>
          </flex>
        </flex>
      </div> 
      <div class="column fork">
        <strong>Thanks for using</strong>
        <div class="text">
          If you feel that this program meets your needs and feels good during use, please help promote it. Of course, if you have any questions, you can use the <a href="https://github.com/nilppm/npm/issues" target="_blank">issue</a> to communicate with the author.
        </div>
        <flex class="subscribe" blocked align="between">
          <a href="https://github.com/nilppm/npm" target="_blank" class="button">Fork / star on github</a>
        </flex>
      </div>
    </div>
  </div>
</template>
<script>
  import store from '../../../meta';
  export default {
    name: 'Footer',
    data() {
      return {
        store
      }
    },
    renderError(h, e) {console.log(e)},
    computed: {
      cache() {
        if (!this.store.server) return '-';
        return ((this.store.server.machine.freemem / this.store.server.machine.totalmem) * 100).toFixed(2) + '%';
      }
    }
  }
</script>
<style lang="less" scoped>
.footer{
  padding: 50px 0;
  box-shadow: inset 0 1px 0 rgba(216,216,216,0.3);
  font-size: 12px;
  color: #919191;
  background: #fff;
  width: 100%;
  .wrap{
    width: 1140px;
    margin: 0 auto;
    &:after{
      clear: both;
      content: '.';
      display: block;
      height: 0;
      overflow: hidden;
      visibility: hidden;
      width: 0;
    }
    .column{
      display: block;
      float: left;
      margin-left: 10px;
      margin-right: 10px;
    }
    .social{
      width: 360px;
      .logen{
        margin-bottom: 30px;
        img{
          margin-right: 15px;
          border-radius: 3px;
        }
        .webname{
          color:#000;
          font-weight: 700;
        }
        .webdesc{
          color: #FC4D47;
        }
      }
      .linked{
        font-size: 30px;
        i{
          margin-right: 15px;
          svg{
            color: #ccc;
          }
        }
      }
      .text{
        margin-bottom: 30px;
        color: 919191;
      }
    }
    .extras{
      width: 360px;
      .items{
        .item{
          padding-right: 20px;
          .chunk{
            display: block;
            padding: 10px 0;
            border-bottom: solid 1px #f6f6f6;
            transition: all 0.1s;
            width: 100%;
            cursor: pointer;
            &:hover{
              border-color:#FC4D47;
              color:#FC4D47;
            }
          }
          &.right{
            .chunk{
              text-align: right;
            }
          }
        }
      }
    }
    .fork{
      width: 360px;
      strong{
        display: inline-block;
        font-weight: 500;
        font-family: "Helvetica Neue", Helvetica, Arial, Verdana, Tahoma, sans-serif;
        margin-bottom: 10px;
        color: #000;
        font-size: 13px;
        margin-bottom: 20px;
      }
      .text{
        margin-bottom: 20px;
      }
      .subscribe{
        .input{
          margin-right: 15px;
        }
        .button{
          background-color: #FC4D47;
          border-radius: 4px;
          color: #fff;
          border: none;
          padding: 5px 15px;
          font-size: 12px;
          outline: none;
          cursor: pointer;
        }
      }
    }
  }
}
</style>