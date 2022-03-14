/**
 * @description 操作lym_address_info表
 * @author lym
 */
const BaseService = require("./BaseService.js");
class AddrService extends BaseService {
    constructor() {
        super("lym_address_info");
    }
    
    getAddrListByUserId({user_id}) {
        let strSql = ` SELECT * from ${this.tableName} where is_del = false and lym_user_id = ${user_id} `;
        return this.executeSql(strSql,[user_id]);
    }
    //  ${this.tableName}  (lym_user_id, lym_goods_id,lym_buy_count) VALUES (?,?,?)
    async addAddressByUser({user_id,addr}) {
        let strSql = ` INSERT INTO ${this.tableName} (lym_user_id,lym_address_desc) values (?,?) `;
        let results = await this.executeSql(strSql,[user_id,addr]);
        return results.affectedRows > 0;
    }
    getAddrByAddrId({addr_id}) {
        let strSql = ` SELECT * from ${this.tableName} where is_del = false and lym_address_id = ${addr_id} `;
        return this.executeSql(strSql,[addr_id]);
    }
    async updateAddressById({addr_desc,addr_id}) {
        let strSql = ` UPDATE ${this.tableName} SET lym_address_desc = ? WHERE is_del = false and lym_address_id = ?  `;
        let results =  await this.executeSql(strSql,[addr_desc,addr_id]);
        return results.affectedRows > 0;
    }
    
    async delAddressById({addr_id}) {
        let strSql = ` UPDATE ${this.tableName} SET is_del = true WHERE  lym_address_id = ?  `;
        let results =  await this.executeSql(strSql,[addr_id]);
        return results.affectedRows > 0;
    }
}


module.exports = AddrService;