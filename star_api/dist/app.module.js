"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const admin_module_1 = require("./admin/admin.module");
const typeorm_1 = require("@nestjs/typeorm");
const auth_module_1 = require("./auth/auth.module");
const search_module_1 = require("./search/search.module");
const GamebarModule_1 = require("./game/gameBar/GamebarModule");
const GameBaseModule_1 = require("./game/gameBase/GameBaseModule");
const NoticeModule_1 = require("./notify/notice/NoticeModule");
const menu_module_1 = require("./menu/menu.module");
const role_module_1 = require("./role/role.module");
const admin_entity_1 = require("./admin/entities/admin.entity");
const menu_entity_1 = require("./menu/entities/menu.entity");
const role_entity_1 = require("./role/entities/role.entity");
const role_menu_entity_1 = require("./role/entities/role_menu.entity");
const slots_module_1 = require("./slots/slots.module");
const configuration_1 = require("./configuration");
const slots_settings_entity_1 = require("./slots/entities/slots_settings.entity");
const autocode_module_1 = require("./autocode/autocode.module");
const En_Notice_1 = require("./notify/notice/entities/En_Notice");
const menu_bar_module_1 = require("./menubar/menu.bar.module");
const menu_bar_entity_1 = require("./menubar/entities/menu.bar.entity");
const UserModule_1 = require("./users/UserModule");
const En_User_1 = require("./users/entities/En_User");
const En_GameBar_1 = require("./game/gameBar/entities/En_GameBar");
const En_GameBase_1 = require("./game/gameBase/entities/En_GameBase");
const En_GameType_1 = require("./game/gameType/entities/En_GameType");
const GameTypeModule_1 = require("./game/gameType/GameTypeModule");
const ReportDayGameModule_1 = require("./report/reportGame/ReportDayGameModule");
const ReportDayPersonModule_1 = require("./report/reportPerson/ReportDayPersonModule");
const En_ReportDayGame_1 = require("./report/reportGame/entities/En_ReportDayGame");
const En_ReportDayPerson_1 = require("./report/reportPerson/entities/En_ReportDayPerson");
const En_SystemTask_1 = require("./system/systemTask/entities/En_SystemTask");
const SystemTaskModule_1 = require("./system/systemTask/SystemTaskModule");
const En_PokerRoom_1 = require("./game/pokerRoom/entities/En_PokerRoom");
const PokerRoomModule_1 = require("./game/pokerRoom/PokerRoomModule");
const En_GameOdds_1 = require("./game/gameOdds/entities/En_GameOdds");
const En_GameOddsExt_1 = require("./game/gameOddsExt/entities/En_GameOddsExt");
const GameOddsModule_1 = require("./game/gameOdds/GameOddsModule");
const GameOddsExtModule_1 = require("./game/gameOddsExt/GameOddsExtModule");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                ignoreEnvFile: true,
                isGlobal: true,
                load: [configuration_1.default],
            }),
            typeorm_1.TypeOrmModule.forRootAsync({
                imports: [],
                useFactory: (config) => {
                    const mysql = config.get('mysql');
                    console.log('mysql config:', mysql);
                    return {
                        type: 'mysql',
                        entities: [admin_entity_1.Admin, menu_bar_entity_1.MenuBar, menu_entity_1.Menu, role_entity_1.Role, role_menu_entity_1.RoleMenu, En_Notice_1.En_Notice, slots_settings_entity_1.SlotsSettings, En_User_1.En_User,
                            En_GameBar_1.En_GameBar, En_GameBase_1.En_GameBase, En_GameType_1.En_GameType, En_ReportDayGame_1.En_ReportDayGame, En_ReportDayPerson_1.En_ReportDayPerson, En_SystemTask_1.En_SystemTask,
                            En_PokerRoom_1.En_PokerRoom, En_GameOdds_1.En_GameOdds, En_GameOddsExt_1.En_GameOddsExt],
                        ...mysql,
                    };
                },
                inject: [config_1.ConfigService],
            }),
            autocode_module_1.AutocodeModule,
            admin_module_1.AdminModule,
            auth_module_1.AuthModule,
            search_module_1.SearchModule,
            NoticeModule_1.NoticeModule,
            menu_bar_module_1.MenuBarModule,
            menu_module_1.MenuModule,
            role_module_1.RoleModule,
            slots_module_1.SlotsModule,
            UserModule_1.UserModule,
            GamebarModule_1.GameBarModule,
            GameBaseModule_1.GameBaseModule,
            GameTypeModule_1.GameTypeModule,
            ReportDayGameModule_1.ReportDayGameModule,
            ReportDayPersonModule_1.ReportDayPersonModule,
            SystemTaskModule_1.SystemTaskModule,
            PokerRoomModule_1.PokerRoomModule,
            GameOddsModule_1.GameOddsModule,
            GameOddsExtModule_1.GameOddsExtModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map