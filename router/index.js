const koaRouter = require('koa-router');
const router = koaRouter({prefix: '/api'});
const spuRouter = require('./spuRouter');

router.get('/spuInfo', spuRouter.getSpuInfo);


module.exports = router;