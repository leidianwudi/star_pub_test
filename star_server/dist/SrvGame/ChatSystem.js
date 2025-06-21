"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chatSystem = exports.ChatSystem = void 0;
const HttpGameServer_1 = require("../common/HttpGameServer");
const WebsocketGameServer_1 = require("../common/WebsocketGameServer");
class ChatSystem {
    start() {
        HttpGameServer_1.internalRPCHttpService.asPrivate.listenMsg("game/ChatTransform", call => {
            if (call.msg.channel == 'all' || call.msg.channel == 'lobby') {
                WebsocketGameServer_1.websocketPublicServer.server.broadcastMsg("chat/Chat", call.msg);
            }
        });
    }
}
exports.ChatSystem = ChatSystem;
exports.chatSystem = new ChatSystem();
