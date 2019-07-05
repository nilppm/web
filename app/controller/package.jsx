import { Http, Controller, Interface } from '@wox/wox';
import PackagePage from '../webview/package/index.vue';
import PackageService from '../service/package';

/**
 * package uri mode
 *  - `/vue`                    /:pkgname
 *  - `/vue/1.0.0`              /:pkgname/:version
 *  - `/@nelts/nelts`           /@:scope/:pkgname
 *  - `/@nelts/nelts/1.0.0`     /@:scope/:pkgname/:version
 */

@Controller('/package')
export default class {
  @Http.Get('/@:scope/:pkgname/v/:version')
  @Interface.Service('PackageService', PackageService)
  async RenderPackagePageWithScopePkgnameAndVersion({ Service }) {
    const ctx = this.ctx;
    Service.PackageService.getPackageInfo(ctx, `@${ctx.params.scope}/${ctx.params.pkgname}`, ctx.params.version);
    return <PackagePage state={ctx.state} />
  }

  @Http.Get('/@:scope/:pkgname')
  @Interface.Service('PackageService', PackageService)
  async RenderPackagePageWithScopeAndPkgname({ Service }) {
    const ctx = this.ctx;
    Service.PackageService.getPackageInfo(ctx, `@${ctx.params.scope}/${ctx.params.pkgname}`);
    return <PackagePage state={ctx.state} />
  }

  @Http.Get('/:pkgname/v/:version')
  @Interface.Service('PackageService', PackageService)
  async RenderPackagePageWithPkgnameAndVersion({ Service }) {
    const ctx = this.ctx;
    Service.PackageService.getPackageInfo(ctx, ctx.params.pkgname, ctx.params.version);
    return <PackagePage state={ctx.state} />
  }

  @Http.Get('/:pkgname')
  @Interface.Service('PackageService', PackageService)
  async RenderPackagePageWithPkgname({ Service }) {
    const ctx = this.ctx;
    Service.PackageService.getPackageInfo(ctx, ctx.params.pkgname);
    return <PackagePage state={ctx.state} />
  }
}
