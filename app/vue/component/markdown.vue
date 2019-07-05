<template>
  <div v-html="html" class="markdown-body"></div>
</template>
<script>
  import Markdown from 'markdown-it';
  import hljs from 'highlight.js';
  export default {
    name: 'Markdown',
    props: {
      md: String
    },
    computed: {
      html() {
        if (!this.md) return '<p>Not found</p>';
        const md = new Markdown({
          html: true,
          highlight: function (str, lang) {
            if (lang && hljs.getLanguage(lang)) {
              try {
                return hljs.highlight(lang, str).value;
              } catch (__) {}
            }
            return '';
          }
        });
        return md.render(this.md || 'Cannot find README.md in this package');
      }
    }
  }
</script>
<style lang="less" scoped>
.markdown-body{
  width: 100%;
  font-size: 14px;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
  table{
    overflow: inherit!important;
  }
  code{
    font-size:12px;
  }
}
</style>