
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

// 搜索结果页 - 搜索结果 - 三个参数
var searchListData = require('./search/list');
router.get('/api/search/:page/:city/:category/:keyword', async (ctx, next) => {
  // 参数
  const params = ctx.params;
  const paramsPage = params.page;
  const paramsCity = params.city;
  const paramsCategory = params.category;
  const paramsKeyword = params.keyword;

  console.log('当前页数：' + paramsPage);
  console.log('当前城市：' + paramsCity);
  console.log('当前类别：' + paramsCategory);
  console.log('关键字：' + paramsKeyword);

  ctx.body = searchListData;
});

// 搜索结果页 - 搜索结果 - 两个参数
var searchListData = require('./search/list');
router.get('/api/search/:page/:city/:category', async (ctx, next) => {
  // 参数
  const params = ctx.params;
  const paramsPage = params.page;
  const paramsCity = params.city;
  const paramsCategory = params.category;

  console.log('当前页数：' + paramsPage);
  console.log('当前城市：' + paramsCity);
  console.log('当前类别：' + paramsCategory);

  ctx.body = searchListData;
});

app.use(koaStatic(__dirname, './www'));

app.listen(3000);