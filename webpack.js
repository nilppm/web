import configs from '#/.wox';
import { Wox } from '@wox/wox';

const app = new Wox(configs);
const path = 'popstate' === app.history_event_name 
  ? window.location.pathname 
  : app.history_parse(window.location.hash.replace(/^\#/, '')).pathname;
let redirect_url;
if ('/' === path && app.$config.url !== '/') {
  redirect_url = app.$config.url;
}
app.createServer(redirect_url).then(() => {
  if (redirect_url) {
    return app.history_url_render(app.$config.url);
  }
}).catch(e => {
  app.destoryServer();
  return app.emit('error', e);
});