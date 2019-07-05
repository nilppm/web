<template>
  <a-collapse defaultActiveKey="1" :bordered="false">
      <a-collapse-panel key="1" :style="customStyle">
        <template slot="header">
          This is panel header 1<a-icon type="question-circle-o" />
        </template>
        <p>{{text}}</p>
      </a-collapse-panel>
      <a-collapse-panel header="This is panel header 2" key="2" :style="customStyle">
        <p>{{text}}</p>
      </a-collapse-panel>
      <a-collapse-panel header="This is panel header 3" key="3" :style="customStyle">
        <p>{{text}}</p>
      </a-collapse-panel>
    </a-collapse>
</template>
<script>
  export default {
    name: 'PackageDepsPage',
    props: {
      pkg: Object
    },
    data () {
      return {
        text: `A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.`,
        customStyle: 'background: #f7f7f7;border-radius: 4px;margin-bottom: 24px;border: 0;overflow: hidden'
      }
    }
  }
</script>
<style lang="less" scoped>
</style>