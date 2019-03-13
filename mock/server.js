
const Koa = require('koa');
const Router = require('koa-router');
const koaStatic = require('koa-static');

const app = new Koa();
const router = new Router();

app
  .use(router.routes())
  .use(router.allowedMethods());

router.get('/', async (ctx, next) => {
  ctx.body = 'Hello World';
});

// 首页 --- 广告（超值特惠）
const homeAdData = require('./home/ad.js');
router.get('/api/homead', async (ctx, next) => {
  ctx.body = homeAdData;
});

// 首页 --- 推荐列表（猜你喜欢）
const homeListData = require('./home/list.js');
router.get('/api/homelist/:city/:page', async (ctx, next) => {
  // 参数
  const params = ctx.params;
  const paramsCity = params.city;
  const paramsPage = params.page;

  console.log('当前城市：' + paramsCity);
  console.log('当前页数：' + paramsPage);

  ctx.body = homeListData;

});

app.use(koaStatic(__dirname, './www'));

app.listen(3000);