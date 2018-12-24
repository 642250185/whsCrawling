module.exports = class Pageination {

    constructor(params) {
        if(!params) {
            params = {};
        }
        this.q                  = params.q || 0;
        this.code               = Number(params.code) || 200;
        this.message            = params.message || "successful";
    }

    getResult() {
        return {
            info: {
                code    : this.code,
                message : this.message
            },
            items: this.items
        };
    }
};
