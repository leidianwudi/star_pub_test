"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = require("assert");
const room_1 = require("./room");
describe("api", () => {
    it("update user info", async () => {
        let client = await (0, room_1.createLobbyClient)("test", "111111");
        let uid = client.uid;
        let res = await client.callApi("lobby/GetUserInfo", { uid: uid });
        (0, assert_1.strict)(res.isSucc);
        console.log("get user info:", res.res);
        let res2 = await client.callApi("lobby/UpdateUserInfo", { visualId: 2, introduction: "hello world" });
        (0, assert_1.strict)(res2.isSucc);
        {
            let res = await client.callApi("lobby/GetUserInfo", { uid: uid });
            (0, assert_1.strict)(res.isSucc);
            console.log("get user info:", res.res);
        }
    });
});
