/**
 * @description 操作lym_goods_info表
 * @author lym
 */
const BaseService = require("./BaseService.js");
class GoodService extends BaseService {
    constructor() {
        super("lym_goods_info");
    }
    // 根据查询参数，获取数据库数据
    async getGoodsBySearch({goodName}) {
        let strSql = ` SELECT a.*,b.lym_goods_type_name from lym_goods_info a
            INNER JOIN lym_goods_type_info b
            on a.lym_goods_type_id = b.lym_goods_type_id
            where a.is_del=false and b.is_del=false `;
        let strWhere = '';
        // if(goodType) {
        //     strWhere += ` and b.lym_goods_type_name like '%${goodType}%' `;
        // }
        if(goodName) {
            strWhere += ` and a.lym_goods_name like '%${goodName}%' `;
        }
        strSql += strWhere;
        return await this.executeSql(strSql);
    }

    async getGoodInfoById({id}) {
        let strSql = ` select * from lym_goods_info where is_del = false and lym_goods_id = ${id} `;
        return await this.executeSql(strSql,[id]);
    }
}


module.exports = GoodService;