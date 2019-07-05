<template>
  <a-menu style="width: 256px" :selectedKeys="[pkg.version]" mode="inline" @click="redirect">
    <a-menu-item v-for="version in versionData" :key="version.name" icon="branches">
      <flex class="name" align="between" blocked fulled valign="middle">
        <span><a-icon type="branches" />{{version.name}}</span>
        <a-tag v-if="version.label" :color="version.label === 'latest' ? 'pink' : 'blue'">{{version.label}}</a-tag>
      </flex>
    </a-menu-item>
  </a-menu>
</template>
<script>
  export default {
    name: 'PackageVersionsPage',
    props: {
      pkg: Object
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
            label: i
          });
          keys.splice(index, 1);
        }
        keys = keys.sort().reverse().map(value => {
          return {
            name: value,
            label: null
          }
        });
        return distTags.concat(keys);
      }
    },
    methods: {
      redirect({ key }) {
        this.$redirect('/package/' + this.pkg.name + '/v/' + key);
      }
    }
  }
</script>
<style lang="less" scoped>
</style>