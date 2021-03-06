"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var EventBusService = (function () {
    function EventBusService() {
        this.requestError = new core_1.EventEmitter();
        this.changeSharedOptions = new core_1.EventEmitter();
    }
    EventBusService.prototype.emitRequestError = function (data) {
        this.requestError.emit(data);
    };
    EventBusService.prototype.emitChangeSharedOptions = function (data) {
        this.changeSharedOptions.emit(data);
    };
    EventBusService = __decorate([
        core_1.Injectable()
        /**
         * @EventBusService used for connections between modules
         */
        ,
        __metadata("design:paramtypes", [])
    ], EventBusService);
    return EventBusService;
}());
exports.EventBusService = EventBusService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnQtYnVzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJldmVudC1idXMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RDtBQU96RDtJQUtDO1FBQ0MsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLG1CQUFZLEVBQUUsQ0FBQztRQUN2QyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxtQkFBWSxFQUFFLENBQUM7SUFDL0MsQ0FBQztJQUVNLDBDQUFnQixHQUF2QixVQUF3QixJQUFJO1FBQzNCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFTSxpREFBdUIsR0FBOUIsVUFBK0IsSUFBSTtRQUNsQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFoQlcsZUFBZTtRQUwzQixpQkFBVSxFQUFFO1FBRWI7O1dBRUc7OztPQUNVLGVBQWUsQ0FpQjNCO0lBQUQsc0JBQUM7Q0FBQSxBQWpCRCxJQWlCQztBQWpCWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5cclxuLyoqXHJcbiAqIEBFdmVudEJ1c1NlcnZpY2UgdXNlZCBmb3IgY29ubmVjdGlvbnMgYmV0d2VlbiBtb2R1bGVzXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgRXZlbnRCdXNTZXJ2aWNlIHtcclxuXHJcblx0cHVibGljIHJlcXVlc3RFcnJvcjogRXZlbnRFbWl0dGVyPGFueT47XHJcblx0cHVibGljIGNoYW5nZVNoYXJlZE9wdGlvbnM6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHRoaXMucmVxdWVzdEVycm9yID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cdFx0dGhpcy5jaGFuZ2VTaGFyZWRPcHRpb25zID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGVtaXRSZXF1ZXN0RXJyb3IoZGF0YSkge1xyXG5cdFx0dGhpcy5yZXF1ZXN0RXJyb3IuZW1pdChkYXRhKTtcclxuXHR9XHJcblx0XHJcblx0cHVibGljIGVtaXRDaGFuZ2VTaGFyZWRPcHRpb25zKGRhdGEpIHtcclxuXHRcdHRoaXMuY2hhbmdlU2hhcmVkT3B0aW9ucy5lbWl0KGRhdGEpO1xyXG5cdH1cclxufVxyXG4iXX0=