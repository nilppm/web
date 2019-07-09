import './meta';
import axios from 'axios';
import Vue from 'vue';
import 'ant-design-vue/dist/antd.css';
import './style.less';
import 'highlight.js/styles/xcode.css';
import 'github-markdown-css';
import Antd from 'ant-design-vue';
Vue.use(Antd);
export default app => {
  // app.on('setup', options => {});
  // app.on('PluginDidInstalled', () => {});
  // app.on('DecorateDidInstalled', () => {});
  // app.on('RouterWillInstall', () => {});
  // app.on('RouterDidInstalled', () => {});
  // app.on('ServerWillCreate', () => {});
  // app.on('ServerDidCreated', () => {});
  // app.on('start', () => {});
  // app.on('stop', () => {});
  app.on('error', err => Antd.message.error(err.message));
  app.context.ajax = axios.create();
  app.context.ajax.interceptors.response.use(response => response.data);
  app.on('start', ctx => ctx.state = Vue.observable({}));
}