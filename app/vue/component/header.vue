<template>
  <flex class="header" blocked align="center">
    <flex class="wrap" fulled valign="middle" align="between">
      <Npm class="npm" v-redirect="'/'" />
      <form id="search-form" class="header-search" action="/search" accept-charset="UTF-8" method="get">
        <input type="text" name="q" value="" placeholder="Search package...">
      </form>
    </flex>
  </flex>
</template>
<script>
  export default {
    name: 'Header'
  }
</script>
<style lang="less" scoped>
.header{
  // border-top: 3px solid #FC4D47;
  background: #fff;
  // box-shadow: 0 0 5px rgba(0,0,0,0.1);
  line-height: 30px;
  font-weight: 500;
  height: 60px;
  padding: 15px 0;
  .npm{
    width: 70px;
    cursor: pointer;
  }
  .wrap{
    width: 1140px;
    margin: 0 auto;
    height: 100%;
    form{
      width: 20%;
      display: inline-block;
    }
    input{
      background: rgba(0,0,0,0.04);
      border-radius: 4px;
      color: #808080;
      border: none;
      height: 30px;
      width: 100%;
      font-size: 12px;
      padding: 0 10px 0 35px;
      background-image: url("data:image/svg+xml;charset=utf8,%3Csvg width='16px' height='17px' viewBox='10 7 16 17' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E %3Cpath d='M20.8887919,16.9465022 L21.2947503,17.3530005 L21.765,17.3530005 L26,21.5885005 L26,23.0000005 L24.59,23.0000005 L20.355,18.7645005 L20.355,18.2967472 L19.9465015,17.8887904 C18.8981137,18.7312083 17.566227,19.2351973 16.116667,19.2349999 C12.7383906,19.2345399 10.0000003,16.495777 10,13.1175005 C9.99999986,11.4946054 10.6448635,9.93821634 11.7926581,8.79089065 C12.9404526,7.64356497 14.497105,6.99933729 16.12,7.00000051 C19.4982762,7.00138109 22.2359201,9.74089016 22.2349998,13.1191665 C22.2346051,14.5678283 21.7306967,15.8987568 20.8887919,16.9465022 Z M16.12,8.88250051 C18.4582731,8.88526117 20.3518386,10.7825559 20.3499987,13.1208299 C20.3481588,15.4591039 18.4516098,17.3534164 16.1133353,17.3524972 C13.7750608,17.3515781 11.8800016,15.4557752 11.88,13.1175005 C11.8806628,11.9936456 12.3277483,10.9160841 13.1229026,10.1218675 C13.9180569,9.32765094 14.9961451,8.88183727 16.12,8.88250051 L16.12,8.88250051 Z' id='search-icon' stroke='none' fill='%23ABABAB' fill-rule='evenodd'%3E%3C/path%3E %3C/svg%3E");
      background-repeat: no-repeat;
      background-position: center left 10px;
      outline: none;
    }
  }
}
</style>