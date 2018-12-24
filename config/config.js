const path = require('path');

const config = {
    whsqd: {
        productDetailURL: 'https://chong.qq.com/tws/recycleevaluate/GetAttrListByModelId?appId=wx47031447c8352579&UidType=1',
        productPageSize: 50,
        brandURL: 'https://chong.qq.com/tws/recycleevaluate/GetModelListByBrandId',
    },
    env: function () {
        global.$config = this;
        return global.$config;
    }
};


module.exports = config.env();