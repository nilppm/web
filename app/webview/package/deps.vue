<template>
  <flex class="deps" blocked direction="column">
    <div class="item" v-for="name in types" :key="name">
      <div class="box" v-if="pkg[name] && Object.keys(pkg[name]).length">
        <div class="title">{{name}}</div>
        <div class="child">
          <Label @click.native="redirect(key)" class="label" :title="key" icon="branches" v-for="(value, key) in pkg[name]" :key="key">{{value}}</Label>
        </div>
      </div>
    </div>
  </flex>
</template>
<script>
  export default {
    name: 'PackageDepsPage',
    props: {
      pkg: Object
    },
    data () {
      return {
        types: [
          'dependencies',
          'devDependencies',
          'peerDependencies',
          'bundledDependencies',
          'optionalDependencies'
        ]
      }
    },
    methods: {
      redirect(name) {
        this.$redirect('/package/' + name);
      }
    }
  }
</script>
<style lang="less" scoped>
.deps{
  .item{
    margin-bottom: 20px;
    .title{
      text-transform: capitalize;
      padding: 5px 0;
      color:#FC4D47;
    }
    .child{
      .label{
        margin: 5px 10px;
        margin-left: 0;
        float: left;
        cursor: pointer;
      }
    }
  }
}
</style>