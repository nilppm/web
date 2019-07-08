<template>
<table class="versions" colspan="0" cellspan="0" border="0">
  <thead>
    <tr>
      <th class="name">版本号</th>
      <th class="desc">描述</th>
      <th class="time">发布时间</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="version in versionData" :key="version.name" :class="{active: version.name === pkg.version}">
      <td class="name">
        <Label @click.native="redirect(version.name)" class="label" :title="version.label || 'none'" icon="crown">{{version.name}}</Label>
      </td>
      <td class="desc">{{pkg.versions[version.name].description}}</td>
      <td class="time">{{new Date(pkg.time[version.name]) | Ago}}</td>
    </tr>
  </tbody>
</table>
</template>
<script>
  export default {
    name: 'PackageVersionsPage',
    props: {
      pkg: Object
    },
    data() {
      return {
        columns: [
          {
            title: ' '
          },
          {
            dataIndex: 'name',
            title: '版本号'
          }
        ]
      }
    },
    computed: {
      versionData() {
        let keys = Object.keys(this.pkg.versions);
        const _distTags = this.pkg['dist-tags'];
        const distTags = [];
        for (const i in _distTags) {
          const index = keys.indexOf(_distTags[i]);
          if (index === -1) continue;
          distTags.push({
            name: _distTags[i],
            label: i,
          });
          keys.splice(index, 1);
        }
        keys = keys.sort().reverse().map(value => {
          return {
            name: value,
            label: null,
          }
        });
        return distTags.concat(keys);
      }
    },
    methods: {
      redirect(name) {
        this.$redirect('/package/' + this.pkg.name + '/v/' + name);
      }
    }
  }
</script>
<style lang="less" scoped>
.versions{
  width: 100%;
  th,td{
    padding: 10px 15px;
  }
  th{
    font-weight: 100;
  }
  .time{
    text-align: right;
  }
  .icon{
    width: 30px;
    font-size: 14px;
  }
  td{
    border-top: 1px solid #eee;
  }
  tr.active{
    td{
      background-color: #e6f7ff;
    }
  }
  .name{
    .label{
      margin: 5px 10px;
      margin-left: 0;
      float: left;
      cursor: pointer;
    }
  }
  .desc{
    max-width: 300px;
  }
  .time{
    max-width: 100px;
  }
}
</style>