<template>
<a-spin :spinning="!state.list.status" tip="正在加载列表数据..." class="list">
  <div class="wrap">
    <flex class="total" blocked align="between" valign="middle">
      <div class="left">共找到 {{state.list.data.total}} 个{{state.list.t == 1 ? '私有' : '公有'}}包</div>
      <a-pagination :current="page" :total="state.list.data.total" @change="change" :page-size="20" />
    </flex>
    <div class="items">
      <div class="item" v-for="chunk in state.list.data.objects" :key="chunk.name + '-' + state.list.t" v-redirect="'/package/' + chunk.name">
        <flex class="title" blocked valign="middle" align="between">
          <div class="name">{{chunk.name}}</div>
          <div class="ids">
            <Label title="Version" icon="crown" theme="filled">{{chunk.version}}</Label>
          </div>
        </flex>
        <div class="desc">{{chunk.description}}</div>
        <flex class="info">
          <div class="left">
            <span class="date">Published {{new Date(chunk._created) | Ago}} •</span>
            <a-tooltip placement="top" v-for="user in chunk.maintainers" :key="user.name">
              <template slot="title">
                {{user.nick}}: {{user.email}}
              </template>
              <a-avatar class="maintainer" :src="user.avatar"  :size="24" />
            </a-tooltip>
          </div>
          <div class="right"></div>
        </flex>
      </div>
    </div>
  </div>
</a-spin>
</template>
<script>
  export default {
    name: 'SearchIndexPage',
    props: {
      state: Object
    },
    computed: {
      page() {
        return Number(this.state.list.p)
      }
    },
    methods: {
      change(page) {
        this.$redirect(`/search?q=${this.state.list.q}&p=${page}&t=${this.state.list.t}`);
      }
    }
  }
</script>
<style lang="less" scoped>
.list{
  background-color: #fafbfc;
  width: 100%;
  padding: 30px 0;
  min-height: 50px;
  .wrap{
    width: 1140px;
    margin: 0 auto;
    .items{
      padding-bottom: 15px;
      .item{
        border: 1px solid #eee;
        margin-top: 15px;
        padding:10px  15px;
        background-color: #fff;
        cursor: pointer;
        border-radius: 4px;
        .title{
          padding-bottom: 5px;
          .name{
            font-size:13px;
            font-weight: 600;
          }
        }
        .desc{
          padding-bottom: 5px;
          max-width: 70%;
        }
        .info{
          padding-top: 5px;
          opacity: .5;
          transition: all .3s ease;
          .left{
            span.date{
              margin-right: 5px;
              transition: all .3s ease;
            }
            .maintainer{
              margin-right: 5px;
            }
          }
          &:hover{
            opacity: 1;
            .left{
              span.date{
                color:#FC4D47;
              }
            }
          }
        }
      }
    }
  }
}
</style>