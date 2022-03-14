/**
 * @description 操作lym_user_info表
 * @author lym
 */
const BaseService = require("./BaseService.js");
class UserService extends BaseService {
    constructor() {
        super("lym_user_info");
    }
    async loginByTel({tel,pwd}) {
        let strSql = ` select * from lym_user_info where is_del=false and  lym_user_id=? and lym_user_pwd=? `;
        let result = await this.executeSql(strSql,[tel,pwd]);
        return result
    }
    async regByTel({user_id,user_name,user_pwd,user_sex}) {    
        let strSql = ` INSERT INTO ${this.tableName}  (lym_user_id, lym_user_name,lym_user_pwd,lym_user_sex) VALUES (?, ?,?,?) `;
        let results =  await this.executeSql(strSql,[user_id,user_name,user_pwd,user_sex]);
        return results.affectedRows > 0;
    }
    async editPwdById({user_pwd,user_id}) {
        let strSql = ` UPDATE ${this.tableName} SET lym_user_pwd = ? WHERE is_del = false and lym_user_id = ? `;
        let results =  await this.executeSql(strSql,[user_pwd,user_id]);
        return results.affectedRows > 0;
    }
}

module.exports = UserService;