const _ = require('lodash');
const Response = require('../util/response');
const {getSpuInfo} = require('../service/spuService');

const spuRouter = class spuRouter {

    async getSpuInfo(ctx, next){
        const {mid} = ctx.request.query;
        const body = new Response({});
        if(_.isEmpty(mid)){
            body.code = 400;
            body.message = "请求参数异常";
            body.items = {};
            ctx.body = body.getResult();
        } else {
            body.q = mid;
            ctx.body = await getSpuInfo(body);
        }
        await next();
    }

};

exports.getSpuInfo = async(ctx, next) => {
    return new spuRouter().getSpuInfo(ctx, next);
};