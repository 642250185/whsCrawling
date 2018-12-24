const _ = require('lodash');
const {crawlingSpuDetails} = require('../spider/spuDetails');

const getSpuInfo = async(body) => {
    try {
        const spuInfo = await crawlingSpuDetails(body);
        if(_.isEmpty(spuInfo)){
            body.code = 404;
            body.message = "该机型不存在";
            body.items = {};
            return body.getResult();
        }
        body.items = spuInfo;
        return body.getResult();
    } catch (e) {
        console.error(e);
        return body.getResult();
    }
};


exports.getSpuInfo = getSpuInfo;