<template>
  <a-spin :spinning="!state.pkg.status" tip="正在加载模块数据..." class="spin-block">
    <div class="top" v-if="state.pkg.data">
      <div class="wrap">
        <flex class="title-bar" blocked align="between">
          <flex class="left" valign="middle">
            <a-icon type="hdd" theme="twoTone" twoToneColor="#DE3C35" />
            <div>
              <div>{{state.pkg.data.name}}</div>
              <flex class="desc" valign="middle" v-if="state.pkg.data.author">
                <img :src="state.pkg.data.author.avatar" :alt="state.pkg.data.author.nick" /> {{state.pkg.data.author.nick}} <span v-if="state.pkg.data.time">• Published {{time | Ago}}</span>
              </flex>
            </div>
          </flex>
          <flex class="right" valign="middle" fulled>
            <Label title="Version" icon="crown" theme="filled">{{state.pkg.data.version}}</Label>
            <Label title="Publish" icon="fire" theme="filled">{{state.pkg.data._nilppm ? 'Private' : 'Public'}}</Label>
          </flex>
        </flex>
        <div class="description" v-if="state.pkg.data.description">{{state.pkg.data.description}}</div>
        <ul class="tabs">
          <li :class="{active: current==='readme'}" @click="current='readme'"><a-icon type="read" />Readme</li>
          <li :class="{active: current==='deps'}" @click="current='deps'"><a-icon type="cluster" />Dependencies</li>
          <li :class="{active: current==='versions'}" @click="current='versions'" v-if="state.pkg.data.versions"><a-icon type="crown" />Versions</li>
        </ul>
      </div>
    </div>
    
    <div class="wrap" v-if="state.pkg.data">
      <div class="dist">
        <div class="sidebar">
          <div class="title">Install</div>
          <flex class="xcode" valign="middle">
            <svg viewBox="0 0 12.32 9.33">
              <g>
                <line x1="7.6" y1="8.9" x2="7.6" y2="6.9" class="st1"></line>
                <rect width="1.9" height="1.9"></rect>
                <rect x="1.9" y="1.9" width="1.9" height="1.9"></rect>
                <rect x="3.7" y="3.7" width="1.9" height="1.9"></rect>
                <rect x="1.9" y="5.6" width="1.9" height="1.9"></rect>
                <rect y="7.5" width="1.9" height="1.9"></rect>
              </g>
            </svg> 
            <code>cpm i <span>{{state.pkg.data.name}}<span v-if="vered" class="vered">@{{state.pkg.data.version}}</span></span></code>
          </flex>
          <div class="title" v-if="state.pkg.data._downloads && monthDownload > 0">Monthly downloads</div>
          <flex class="downloads" v-if="state.pkg.data._downloads && monthDownload > 0" blocked valign="bottom" >
            <div class="label-total">{{monthDownload}}</div>
            <flex class="chart" ref="chart" :span="1"></flex>
          </flex>
          <a-row class="row">
            <a-col :span="12" class="col" v-if="state.pkg.data.version">
              <div class="title">Version</div>
              <div class="data">{{state.pkg.data.version}}</div>
            </a-col>
            <a-col :span="12" class="col" v-if="state.pkg.data.license">
              <div class="title">License</div>
              <div class="data"><a :href="licenseUrl" target="_blank">{{state.pkg.data.license}}</a></div>
            </a-col>
            <a-col :span="12" class="col" v-if="state.pkg.data.homepage">
              <div class="title">Homepage</div>
              <div class="data"><a :href="state.pkg.data.homepage" target="_blank">{{homePage}}</a></div>
            </a-col>
             <a-col :span="12" class="col" v-if="state.pkg.data._repository">
              <div class="title">Repository</div>
              <div class="data"><a :href="state.pkg.data._repository.url" target="_blank"><a-icon :type="state.pkg.data._repository.type" />{{state.pkg.data._repository.type}}</a></div>
            </a-col>
            <a-col :span="12" class="col" v-if="state.pkg.data.time">
              <div class="title">last publish</div>
              <div class="data">{{time | Ago}}</div>
            </a-col>
          </a-row>
          <div class="title">Collaborators</div>
          <div class="maintainers">
            <a :href="'mailto:' + maintainer.email" v-for="maintainer in state.pkg.data.maintainers" :key="maintainer.name">
              <a-tooltip placement="top" >
                <template slot="title">
                  {{maintainer.nick}}: {{maintainer.email}}
                </template>
                <img :src="maintainer.avatar" :alt="maintainer.name">
              </a-tooltip>
            </a>
          </div>
        </div>
        <div class="content">
          <div v-if="current==='readme'">
            <Markdown v-if="state.pkg.data" :md="state.pkg.data.readme" />
            <p v-else>找不到README.md</p>
          </div>
          <div v-else-if="current==='deps'">
            <PackageDepsPage :pkg="state.pkg.data"></PackageDepsPage>
          </div>
          <div v-else-if="current==='versions'">
            <PackageVersionsPage :pkg="state.pkg.data" />
          </div>
        </div>
      </div>
    </div>
    <div></div>
  </a-spin>
</template>
<script>
  import PackageDepsPage from './deps';
  import PackageVersionsPage from './versions';
  import licenseUrl from 'oss-license-name-to-url';
  import G2 from '@antv/g2';
  export default {
    name: 'PackagePage',
    props: {
      state: Object,
      vered: Boolean
    },
    data() {
      return {
        current: 'readme'
      }
    },
    renderError(h, e) {
      this.$message.error(e.message);
    },
    components: {
      PackageDepsPage,
      PackageVersionsPage
    },
    computed: {
      monthDownload() {
        if (!this.state.pkg.data._downloads || !this.state.pkg.data._downloads.month) return 0;
        return this.state.pkg.data._downloads.month.reduce((value, data) => value + data.downloads, 0);
      },
      author() {
        return typeof this.state.pkg.data.author !== 'string' ? this.state.pkg.data.author.name : this.state.pkg.data.author;
      },
      time() {
        return this.state.pkg.data.time[this.state.pkg.data.version];
      },
      licenseUrl(url) {
        if (!this.state.pkg.data) return 'javascript:void(0);';
        return licenseUrl(this.state.pkg.data.license);
      },
      homePage() {
        if (!this.state.pkg.data) return;
        const exec = /http(s)?:\/\/([^\/]+)/.exec(this.state.pkg.data.homepage);
        if (!exec) return;
        return exec[2];
      }
    },
    watch: {
      ['state.pkg.data._downloads.month'](value) {
        this.$nextTick(() => {
          this.init();
          this.render(value);
        });
      }
    },
    methods: {
      init() {
        if (this.chart) return;
        this.chart = new G2.Chart({
          container: this.$refs.chart.$el,
          forceFit: true,
          height: 50,
          padding: [5, 0, 5, 5]
        });
      },
      render(value) {
        const chart = this.chart;
        chart.source(value);
        chart.legend(false);
        chart.axis(false);
        chart.tooltip({ type: 'mini' });
        chart.area().position('day*downloads').shape('smooth').opacity(0.2);
        chart.line().position('day*downloads').opacity(1).shape('smooth');
        chart.render();
      }
    }
  }
</script>
<style lang="less" scoped>
.spin-block{
  min-height: 540px;
}
.wrap{
  width: 1140px;
  margin: 0 auto;
}
.dist{
  padding: 30px 0;
  &:after{
    clear: both;
    content: ' ';
    display: block;
    width: 100%;
    height: 0;
  }
  .content{
    margin-right: 360px;
    position: relative;
  }
  .sidebar{
    float: right;
    width: 330px;
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
    color:#24292e;
    .maintainers{
      a{
        img{
          width: 32px;
          margin: 5px 5px 5px 0;
        }
      }
    }
    .title{
      font-size: 12px;
      padding-bottom: 5px;
      color:#ccc;
      padding-top: 10px;
    }
    .downloads{
      .label-total{
        padding-right: 15px;
      }
      .chart{
        height: 50px;
      }
    }
    .xcode{
      border: 1px solid #eee;
      border-left: 6px solid #e1e1e1;
      font-family: Fira Mono,Andale Mono,Consolas,monospace;
      letter-spacing: 0;
      font-variant-ligatures: none;
      white-space: nowrap;
      overflow: hidden;
      padding: 10px 1rem;
      border-radius: .25rem;
      margin-top: 5px;
      margin-bottom: 5px;
      code{
        span{
          color:#FC4D47;
          .vered{
            color:#ccc;
          }
        }
      }
      svg{
        width: 0.9em;
        height: 0.9em;
        flex: none;
        fill: rgba(0, 0, 0, .5);
      }
    }
    .row{
      .col{
        border-bottom: 1px solid #eee;
        .data{
          padding-bottom: 5px;
          font-weight: 600;
          font-size: 13px;
          // font-family: 'Source Sans Pro', 'Lucida Grande', sans-serif;
          a{
            color:#24292e;
            &:link,&:visited{
              color:#24292e;
              text-decoration: underline;
            }
            &:hover{
              color:#FC4D47;
            }
            i{
              margin-right: 5px;
            }
          }
        }
      }
    }
  }
}

.top{
  background-color: #fafbfc;
  border-bottom: 1px solid rgba(216, 216, 216, 0.3);
  .title-bar{
    padding: 30px 0 24px 0;
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
    color:#24292e;
    font-weight: 600;
    .left{
      font-size: 14px;
      i{
        margin-right:10px;
        font-size:28px;
      }
      .desc{
        font-size:10px;
        color:rgba(252,77,71,.4);
        font-family: Fira Mono,Andale Mono,Consolas,monospace;
        img{
          width: 16px;
          margin-right: 5px;
          border-radius: 100%;
        }
      }
    }
    .right{
      font-size:12px;
      span{
        margin: 0 5px;
        &.private{
          color:#FC4D47;
        }
        &.public{
          color:#19a974;
        }
      }
    }
  }
  .description{
    margin-bottom: 24px;
    width: 50%;
  }
  ul.tabs{
    list-style: none;
    margin: 0;
    padding: 0;
    position: relative;
    top:1px;
    &::after{
      clear: both;
      display: block;
      content: ' ';
      height:0;
      width: 0;
    }
    li{
      float: left;
      padding: 7px 15px 8px;
      color:#586069;
      font-size: 13px;
      border: 1px solid transparent;
      border-radius: 3px 3px 0 0;
      border-top: 3px solid transparent;
      cursor: pointer;
      &.active{
        background-color: #fff;
        border-color: #FC4D47 #e1e4e8 #fff;
        color:#24292e;
      }
      i{
        margin-right: 5px;
      }
    }
  }
}
</style>