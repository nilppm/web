<template>
  <flex class="label">
    <flex class="left" valign="middle">
      <a-icon :type="icon" v-if="icon" :theme="theme" />
      {{title}}
    </flex>
    <flex class="right" valign="middle"><slot /></flex>
  </flex>
</template>
<script>
  export default {
    name: 'Label',
    props: {
      title: String,
      icon: String,
      theme: String
    }
  }
</script>
<style lang="less" scoped>
@border-color:rgba(27,31,35,.2);
@border-radius: 3px;
.label{
  margin-left: 10px;
  .left,.right{
    padding: 3px 10px;
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
    color:#24292e;
    font-weight: 600;
  }
  .left{
    background-color: #eff3f6;
    background-image: linear-gradient(-180deg,#fafbfc,#eff3f6 90%);
    border: 1px solid @border-color;
    border-radius: @border-radius 0 0 @border-radius;
    background-position: -1px -1px;
    background-repeat: repeat-x;
    background-size: 110% 110%;
    i{
      margin-right: 5px;
    }
  }
  .right{
    border: 1px solid @border-color;
    border-left: 0;
    border-radius: 0 @border-radius @border-radius 0;
    background-color: #fff;
  }
}
</style>