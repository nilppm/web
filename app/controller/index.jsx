import {
  Http,
  Controller,
  Interface
} from '@wox/wox';
import IndexPage from '../webview/index.vue';
import IndexService from '../service/index';

@Controller
export default class IndexController {
  @Http.Get
  async Home() {
    const timestamp = await this.ctx.post('/timestamp');
    return <IndexPage timestamp={timestamp} />
  }

  @Http.Post('/timestamp')
  @Interface.Service('index', IndexService)
  async TimeStamp({ Service }) {
    const body = this.ctx.req.body || {};
    return await Service.index.getTime(body.delay);
  }
}