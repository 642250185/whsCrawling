const request = require('superagent');
const config = require('../config/config');
const {getWhsCookie} = require('../util/whsCookie');

const {productDetailURL} = config.whsqd;

const getDetails = async (mid, cookie) => {
    try {
        const items = {};
        let result = await request.post(productDetailURL)
            .set('Cookie', cookie)
            .send({
                mid: mid,
                pageindex: 0,
                pagesize: 30,
                time: new Date().getTime()
            });
        result = JSON.parse(result.text);
        const {errcode, errstr} = result;
        if(errcode == 0){
            const {bid, bname, mid, mname, questions} = result.data;
            items.bid       = bid;
            items.bname     = bname;
            items.mid       = mid;
            items.mname     = mname;
            items.questions = questions;
            return items;
        } else {
            console.warn(`${errcode}  ${errstr}`);
            return items;
        }
    } catch (e) {
        console.error(e);
        return {};
    }
};

const crawlingSpuDetails = async (body) => {
    try {
        const cookie = await getWhsCookie();
        console.info(`mid: ${body.q}, 正在采集机型的详情数据.`);
        return await getDetails(body.q, cookie);
    } catch (e) {
        console.error(e);
        return {};
    }
};


exports.crawlingSpuDetails = crawlingSpuDetails;