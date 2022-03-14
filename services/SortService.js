/**
 * @description 操作lym_goods_type_info表
 * @author lym
 */
const BaseService = require("./BaseService.js");
class SortService extends BaseService {
    constructor() {
        super("lym_goods_type_info");
    }
    async getGoodsByTypeId({typeId}) {
        let strSql = ` SELECT * from lym_goods_info where is_del = false and lym_goods_type_id = ? `;
        return await this.executeSql(strSql,[typeId]);
    }
}


module.exports = SortService;