"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var module_import_guard_1 = require("../core/module-import-guard");
var item_service_1 = require("./item/item.service");
var ServicesModule = (function () {
    function ServicesModule(parentModule) {
        module_import_guard_1.throwIfAlreadyLoaded(parentModule, 'ServiceModule');
    }
    ServicesModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule
            ],
            providers: [
                item_service_1.ItemService
            ]
        }),
        __param(0, core_1.Optional()), __param(0, core_1.SkipSelf()),
        __metadata("design:paramtypes", [common_1.CommonModule])
    ], ServicesModule);
    return ServicesModule;
}());
exports.ServicesModule = ServicesModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZXMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2VydmljZXMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTZEO0FBQzdELDBDQUErQztBQUUvQyxtRUFBbUU7QUFFbkUsb0RBQWtEO0FBVWxEO0lBQ0Msd0JBQXFDLFlBQTBCO1FBQzlELDBDQUFvQixDQUFDLFlBQVksRUFBRSxlQUFlLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBSFcsY0FBYztRQVIxQixlQUFRLENBQUM7WUFDTixPQUFPLEVBQUU7Z0JBQ0wscUJBQVk7YUFDZjtZQUNELFNBQVMsRUFBRTtnQkFDUCwwQkFBVzthQUNkO1NBQ0osQ0FBQztRQUVhLFdBQUEsZUFBUSxFQUFFLENBQUEsRUFBRSxXQUFBLGVBQVEsRUFBRSxDQUFBO3lDQUFlLHFCQUFZO09BRG5ELGNBQWMsQ0FJMUI7SUFBRCxxQkFBQztDQUFBLEFBSkQsSUFJQztBQUpZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE9wdGlvbmFsLCBTa2lwU2VsZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5cclxuaW1wb3J0IHsgdGhyb3dJZkFscmVhZHlMb2FkZWQgfSBmcm9tICcuLi9jb3JlL21vZHVsZS1pbXBvcnQtZ3VhcmQnO1xyXG5cclxuaW1wb3J0IHsgSXRlbVNlcnZpY2UgfSBmcm9tICcuL2l0ZW0vaXRlbS5zZXJ2aWNlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgQ29tbW9uTW9kdWxlXHJcbiAgICBdLFxyXG4gICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAgSXRlbVNlcnZpY2VcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFNlcnZpY2VzTW9kdWxlIHtcclxuXHRjb25zdHJ1Y3RvciggQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgcGFyZW50TW9kdWxlOiBDb21tb25Nb2R1bGUpIHtcclxuXHRcdHRocm93SWZBbHJlYWR5TG9hZGVkKHBhcmVudE1vZHVsZSwgJ1NlcnZpY2VNb2R1bGUnKTtcclxuXHR9XHJcbn0iXX0=