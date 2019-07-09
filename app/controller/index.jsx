import {
  Http,
  Controller,
  Interface
} from '@wox/wox';
import IndexPage from '../webview/index.vue';
import SearchPage from '../webview/search/index.vue';
import PackageService from '../service/package';
import store from '../../meta';

@Controller
export default class IndexController {
  @Http.Get
  async Home() {
    return <IndexPage />
  }

  @Http.Get('/search')
  @Interface.Service('PackageService', PackageService)
  async SearchPackage({ Service }) {
    const ctx = this.ctx;
    store.searcher.q = ctx.query.q;
    store.searcher.t = ctx.query.t;
    Service.PackageService.getSearchResult(ctx, ctx.query);
    return <SearchPage state={ctx.state} />
  }
}