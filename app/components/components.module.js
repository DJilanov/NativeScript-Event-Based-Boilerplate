"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var module_import_guard_1 = require("../core/module-import-guard");
// import { ItemComponent } from './item/item.component';
var ComponentsModule = (function () {
    function ComponentsModule(parentModule) {
        module_import_guard_1.throwIfAlreadyLoaded(parentModule, 'ComponentsModule');
    }
    ComponentsModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule
            ],
            exports: [],
            declarations: []
        }),
        __param(0, core_1.Optional()), __param(0, core_1.SkipSelf()),
        __metadata("design:paramtypes", [common_1.CommonModule])
    ], ComponentsModule);
    return ComponentsModule;
}());
exports.ComponentsModule = ComponentsModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50cy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb21wb25lbnRzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUE2RDtBQUM3RCwwQ0FBK0M7QUFFL0MsbUVBQW1FO0FBRW5FLHlEQUF5RDtBQWF6RDtJQUNDLDBCQUFxQyxZQUEwQjtRQUM5RCwwQ0FBb0IsQ0FBQyxZQUFZLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBSFcsZ0JBQWdCO1FBWDVCLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRTtnQkFDTCxxQkFBWTthQUNmO1lBQ0QsT0FBTyxFQUFFLEVBRVI7WUFDRCxZQUFZLEVBQUUsRUFFYjtTQUNKLENBQUM7UUFFYSxXQUFBLGVBQVEsRUFBRSxDQUFBLEVBQUUsV0FBQSxlQUFRLEVBQUUsQ0FBQTt5Q0FBZSxxQkFBWTtPQURuRCxnQkFBZ0IsQ0FJNUI7SUFBRCx1QkFBQztDQUFBLEFBSkQsSUFJQztBQUpZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBPcHRpb25hbCwgU2tpcFNlbGYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuXHJcbmltcG9ydCB7IHRocm93SWZBbHJlYWR5TG9hZGVkIH0gZnJvbSAnLi4vY29yZS9tb2R1bGUtaW1wb3J0LWd1YXJkJztcclxuXHJcbi8vIGltcG9ydCB7IEl0ZW1Db21wb25lbnQgfSBmcm9tICcuL2l0ZW0vaXRlbS5jb21wb25lbnQnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgICBDb21tb25Nb2R1bGVcclxuICAgIF0sXHJcbiAgICBleHBvcnRzOiBbXHJcbiAgICAgICAgXHJcbiAgICBdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcblxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50c01vZHVsZSB7XHJcblx0Y29uc3RydWN0b3IoIEBPcHRpb25hbCgpIEBTa2lwU2VsZigpIHBhcmVudE1vZHVsZTogQ29tbW9uTW9kdWxlKSB7XHJcblx0XHR0aHJvd0lmQWxyZWFkeUxvYWRlZChwYXJlbnRNb2R1bGUsICdDb21wb25lbnRzTW9kdWxlJyk7XHJcblx0fVxyXG59Il19