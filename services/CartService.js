/**
 * @description 操作lym_shooping_car_info表
 * @author lym
 */
const BaseService = require("./BaseService.js");
class CartService extends BaseService {
    constructor() {
        super("lym_shopping_car_info");
    }
    
    async addCart({user_id,goods_id,buy_count}) {
        let strSql = ` INSERT INTO ${this.tableName}  (lym_user_id, lym_goods_id,lym_buy_count) VALUES (?,?,?) `;
        let results =  await this.executeSql(strSql,[user_id,goods_id,buy_count]);
        return results.affectedRows > 0;
    }

    // 更新购物车
    async updateCart({buy_count,user_id,goods_id}) {
        let strSql = ` UPDATE ${this.tableName} SET lym_buy_count = ? WHERE is_del = false and lym_user_id = ? and lym_goods_id = ? `;
        let results =  await this.executeSql(strSql,[buy_count,user_id,goods_id]);
        return results.affectedRows > 0;
    }

    //
    getUserAllCarList({user_id}) {
        let strSql = ` SELECT * from (
            SELECT a.lym_shopping_car_id,a.lym_buy_count,a.lym_user_id,b.* FROM lym_shopping_car_info a
            INNER JOIN lym_goods_info b
            on a.lym_goods_id = b.lym_goods_id
            where a.is_del = FALSE and b.is_del = FALSE) c 
            where c.lym_user_id = ${user_id} and c.is_del = FALSE `;
        return this.executeSql(strSql,[user_id]);
    }
    // 根据购物车id移除购物车
    async removeCarById({car_id}) {
        let strSql = ` UPDATE lym_shopping_car_info set is_del = true where lym_shopping_car_id = ? `;
        let result = await this.executeSql(strSql,[car_id]);
        return result.affectedRows > 0;
    }
}


module.exports = CartService;