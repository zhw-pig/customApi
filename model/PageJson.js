/**
 * @description 服务器返回给客户端的内容
 * @author lym
 */
class PageJson {
    constructor(status, msg, data) {
        this.status == true ? 'scuess' : 'fail';
        this.msg = msg;
        this.data = data || {};
    }
}

module.exports = PageJson;