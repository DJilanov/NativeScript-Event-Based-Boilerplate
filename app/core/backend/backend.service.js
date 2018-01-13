"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/mergeMap");
var environment_1 = require("../../environments/environment");
var BackendService = (function () {
    function BackendService(http) {
        this.http = http;
    }
    BackendService.prototype.backendRequest = function (requestTarget, requestType, requestData) {
        if (requestType === 'post') {
            return this.http.post(environment_1.environment.apiUrl + requestTarget, requestData);
        }
        else if (requestType === 'get') {
            return this.http.get(environment_1.environment.apiUrl + requestTarget, {
                params: requestData
            });
        }
    };
    BackendService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], BackendService);
    return BackendService;
}());
exports.BackendService = BackendService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2VuZC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYmFja2VuZC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLHNDQUFnRTtBQUdoRSxzQ0FBb0M7QUFFcEMsOERBQTZEO0FBRTdEO0lBRUMsd0JBQ1MsSUFBVTtRQUFWLFNBQUksR0FBSixJQUFJLENBQU07SUFHbkIsQ0FBQztJQUVELHVDQUFjLEdBQWQsVUFBZSxhQUFhLEVBQUUsV0FBVyxFQUFFLFdBQVc7UUFDckQsRUFBRSxDQUFDLENBQUMsV0FBVyxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDNUIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLHlCQUFXLENBQUMsTUFBTSxHQUFHLGFBQWEsRUFBRSxXQUFXLENBQUMsQ0FBQztRQUN4RSxDQUFDO1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFdBQVcsS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ2xDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyx5QkFBVyxDQUFDLE1BQU0sR0FBRyxhQUFhLEVBQUU7Z0JBQ3hELE1BQU0sRUFBRSxXQUFXO2FBQ25CLENBQUMsQ0FBQztRQUNKLENBQUM7SUFDRixDQUFDO0lBaEJXLGNBQWM7UUFEMUIsaUJBQVUsRUFBRTt5Q0FJRyxXQUFJO09BSFAsY0FBYyxDQWtCMUI7SUFBRCxxQkFBQztDQUFBLEFBbEJELElBa0JDO0FBbEJZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBVUkxTZWFyY2hQYXJhbXMsIEh0dHAsIFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcblxyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWVyZ2VNYXAnO1xyXG5cclxuaW1wb3J0IHsgZW52aXJvbm1lbnQgfSBmcm9tICcuLi8uLi9lbnZpcm9ubWVudHMvZW52aXJvbm1lbnQnO1xyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBCYWNrZW5kU2VydmljZSB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHJpdmF0ZSBodHRwOiBIdHRwXHJcblx0KSB7IFxyXG5cclxuXHR9XHJcblxyXG5cdGJhY2tlbmRSZXF1ZXN0KHJlcXVlc3RUYXJnZXQsIHJlcXVlc3RUeXBlLCByZXF1ZXN0RGF0YSwpIHtcclxuXHRcdGlmIChyZXF1ZXN0VHlwZSA9PT0gJ3Bvc3QnKSB7XHJcblx0XHRcdHJldHVybiB0aGlzLmh0dHAucG9zdChlbnZpcm9ubWVudC5hcGlVcmwgKyByZXF1ZXN0VGFyZ2V0LCByZXF1ZXN0RGF0YSk7XHJcblx0XHR9IGVsc2UgaWYgKHJlcXVlc3RUeXBlID09PSAnZ2V0Jykge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5odHRwLmdldChlbnZpcm9ubWVudC5hcGlVcmwgKyByZXF1ZXN0VGFyZ2V0LCB7XHJcblx0XHRcdFx0cGFyYW1zOiByZXF1ZXN0RGF0YSBcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxufVxyXG4iXX0=