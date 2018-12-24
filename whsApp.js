const Koa = require('koa');
const whsApp = new Koa();
const router = require('./router');
// const {errorHandle} = require('./middleware');

// app.use(errorHandle);
whsApp.use(router.routes());
whsApp.use(router.allowedMethods());

whsApp.listen(3040);
console.log('[demo] start-quick is starting at port 3040');