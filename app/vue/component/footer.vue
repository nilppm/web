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
          <a-icon type="trademark" /> 2019 Muzli by InVision · All Right Reserved. Read InVision's Privacy Policy and Terms of Service
        </div>
        <div class="linked">
          <a-icon type="github" />
          <a-icon type="ant-design" />
          <a-icon type="wechat" />
        </div>
      </div>
      <div class="column extras">
        <flex class="items" align="between" blocked>
          <flex class="item" :span="1" direction="column" blocked>
            <div class="chunk">总包数 / <span>100</span></div>
            <div class="chunk">总版本数 / <span>10034</span></div>
            <div class="chunk">总用户数 / <span>345</span></div>
          </flex>
          <flex class="item right" :span="1" direction="column" blocked>
            <div class="chunk">3910 / 天</div>
            <div class="chunk">34498 / 周</div>
            <div class="chunk">73845435 / 月</div>
          </flex>
        </flex>
      </div> 
      <div class="column fork">
        <strong>The best websites right in your inbox</strong>
        <div class="text">
          We send you a fresh package of inspiration from around the web. No spam, only quality stuff. Promise. :)
        </div>
        <flex class="subscribe" blocked align="between">
          <button>Fork from github</button>
        </flex>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Footer'
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
      display: inline;
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
        button{
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