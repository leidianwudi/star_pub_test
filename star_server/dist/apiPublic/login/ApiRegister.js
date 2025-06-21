"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiRegister = ApiRegister;
const DBMgr_1 = require("../../db/DBMgr");
//必须和客户端角色的icon数量一致
const ROLE_COUNT = 4;
const LAST_NAMES = ['赵', '李', '张', '王', '姜', '刘', '孙', '吴', '上官', '欧阳', '百里', '武', '西门', '陈', '潘', '东方', '唐'];
const GIVEN_NAMES = ['天涯', '雪梨', '天天', '盼盼', '谋谋', '子轩', '童话', '子修', '婉儿', '松韵', '邱泽', '晨晨', '阳阳', '莎莎', '小小', '舞桐'];
function createRandomRole() {
    let lastName = LAST_NAMES[Math.floor(Math.random() * LAST_NAMES.length)];
    let givenName = GIVEN_NAMES[Math.floor(Math.random() * GIVEN_NAMES.length)];
    const visualId = Math.floor(Math.random() * ROLE_COUNT);
    return { name: lastName + givenName, visualId };
}
async function ApiRegister(call) {
    let hasUser = await DBMgr_1.dbUser.hasUser(call.req.account);
    if (hasUser) {
        call.error('USER_HAS_BEEN_EXIST');
        return;
    }
    await DBMgr_1.dbUser.insterNewUser(call.req.account, call.req.password);
    const uid = await DBMgr_1.dbUser.getUIDWithAccountAndPassword(call.req.account, call.req.password);
    const role = createRandomRole();
    await DBMgr_1.dbUser.updateUserInfoByUid(uid, { name: role.name, visualId: role.visualId });
    call.succ({});
}
