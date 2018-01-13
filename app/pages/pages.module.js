"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var module_import_guard_1 = require("../core/module-import-guard");
var items_component_1 = require("./items/items.component");
var item_detail_component_1 = require("./item-detail/item-detail.component");
var PagesModule = (function () {
    function PagesModule(parentModule) {
        module_import_guard_1.throwIfAlreadyLoaded(parentModule, 'PagesModule');
    }
    PagesModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule,
                common_1.CommonModule,
                nativescript_module_1.NativeScriptModule
            ],
            exports: [
                items_component_1.ItemsComponent,
                item_detail_component_1.ItemDetailComponent
            ],
            declarations: [
                items_component_1.ItemsComponent,
                item_detail_component_1.ItemDetailComponent
            ]
        }),
        __param(0, core_1.Optional()), __param(0, core_1.SkipSelf()),
        __metadata("design:paramtypes", [common_1.CommonModule])
    ], PagesModule);
    return PagesModule;
}());
exports.PagesModule = PagesModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicGFnZXMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTZEO0FBQzdELGdGQUE4RTtBQUM5RSwwQ0FBK0M7QUFDL0MsMENBQStDO0FBRS9DLG1FQUFtRTtBQUVuRSwyREFBeUQ7QUFDekQsNkVBQTBFO0FBaUIxRTtJQUNDLHFCQUFxQyxZQUEwQjtRQUM5RCwwQ0FBb0IsQ0FBQyxZQUFZLEVBQUUsYUFBYSxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUhXLFdBQVc7UUFmdkIsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFO2dCQUNMLHFCQUFZO2dCQUNaLHFCQUFZO2dCQUNaLHdDQUFrQjthQUNyQjtZQUNELE9BQU8sRUFBRTtnQkFDTCxnQ0FBYztnQkFDZCwyQ0FBbUI7YUFDdEI7WUFDRCxZQUFZLEVBQUU7Z0JBQ1YsZ0NBQWM7Z0JBQ2QsMkNBQW1CO2FBQ3RCO1NBQ0osQ0FBQztRQUVhLFdBQUEsZUFBUSxFQUFFLENBQUEsRUFBRSxXQUFBLGVBQVEsRUFBRSxDQUFBO3lDQUFlLHFCQUFZO09BRG5ELFdBQVcsQ0FJdkI7SUFBRCxrQkFBQztDQUFBLEFBSkQsSUFJQztBQUpZLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE9wdGlvbmFsLCBTa2lwU2VsZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IHsgdGhyb3dJZkFscmVhZHlMb2FkZWQgfSBmcm9tICcuLi9jb3JlL21vZHVsZS1pbXBvcnQtZ3VhcmQnO1xyXG5cclxuaW1wb3J0IHsgSXRlbXNDb21wb25lbnQgfSBmcm9tIFwiLi9pdGVtcy9pdGVtcy5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgSXRlbURldGFpbENvbXBvbmVudCB9IGZyb20gXCIuL2l0ZW0tZGV0YWlsL2l0ZW0tZGV0YWlsLmNvbXBvbmVudFwiO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgICBSb3V0ZXJNb2R1bGUsXHJcbiAgICAgICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgICAgIE5hdGl2ZVNjcmlwdE1vZHVsZVxyXG4gICAgXSxcclxuICAgIGV4cG9ydHM6IFtcclxuICAgICAgICBJdGVtc0NvbXBvbmVudCxcclxuICAgICAgICBJdGVtRGV0YWlsQ29tcG9uZW50XHJcbiAgICBdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgSXRlbXNDb21wb25lbnQsXHJcbiAgICAgICAgSXRlbURldGFpbENvbXBvbmVudFxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUGFnZXNNb2R1bGUge1xyXG5cdGNvbnN0cnVjdG9yKCBAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBwYXJlbnRNb2R1bGU6IENvbW1vbk1vZHVsZSkge1xyXG5cdFx0dGhyb3dJZkFscmVhZHlMb2FkZWQocGFyZW50TW9kdWxlLCAnUGFnZXNNb2R1bGUnKTtcclxuXHR9XHJcbn0iXX0=