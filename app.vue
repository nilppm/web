<template>
  <flex blocked direction="column">
    <Header />
    <flex class="body" blocked>
      <WoxViewPage></WoxViewPage>
    </flex>
    <Footer />
  </flex>
</template>
<script>
  export default {
    name: 'Application'
  }
</script>
