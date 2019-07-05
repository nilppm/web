import Vue from 'vue';
export default class {
  getPackageInfo(ctx, pathname, version) {
    let url = `/api/package/${pathname}`;
    if (version) url += '/v/' + version;
    Vue.set(ctx.state, 'pkg', {
      status: 0,
      data: null,
      message: null,
    });
    ctx.ajax.get(url).then(data => {
      ctx.state.pkg.data = data;
      ctx.state.pkg.status = 2;
      // if (ctx.state.pkg.data._repository && ctx.state.pkg.data._repository.type === 'github') {
      //   return this.getGithubMetaData(ctx, ctx.state.pkg.data._repository.url);
      // }
    })/*.then(() => ctx.state.pkg.status = 2)*/.catch(e => {
      ctx.state.pkg.status = 1;
      ctx.state.pkg.message = e.message;
    });
  }

  async getGithubMetaData(ctx, url) {
    const result = await ctx.ajax.post('/api/package/github/repo/metadata', {
      pathname: url.split('/').slice(-2).join('/')
    });
    Vue.set(ctx.state.pkg.data._repository, 'meta', result);
  }
}