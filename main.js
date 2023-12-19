(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/_common/appconfig.ts":
/*!**************************************!*\
  !*** ./src/app/_common/appconfig.ts ***!
  \**************************************/
/*! exports provided: AppConfig, URL_CONSTANTS, LANDING_URL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppConfig", function() { return AppConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "URL_CONSTANTS", function() { return URL_CONSTANTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LANDING_URL", function() { return LANDING_URL; });
var AppConfig = Object.freeze({
    BASE_URL: __BASE_URL
});
var URL_CONSTANTS = {
    BASE_URL: AppConfig.BASE_URL,
    // following are Customer specific
    ESTATEUSER: 'estateusers.php',
    ESTATEDWELLINGS: 'estatedwellings.php',
    ESTATES: 'estates.php',
    ESTATE: 'estate.php',
    LOAN: 'loan.php',
    LOANFAILURE: 'loanfailure.php',
    LOANPAYMENT: 'loanpayment.php',
    PAYMENT: 'payment.php',
    NOTIFICATION: 'notification.php',
    CUSTOMER: 'customer.php',
    TRANSACTION: 'transaction.php',
    PREPAID: 'prepaidcard.php',
    TRANSFER: 'transfer.php',
    KYC: 'kyc.php',
    TABAPAYCARD: 'tabapaycards.php',
    RESETCUSTOMER: 'resetcustomer.php',
    // following are estate specific
    ONBOARD: 'estateonboard.php',
    estateSETUP: 'estatesetup.php',
    BIZREPORT: 'bizreport.php',
    LOANREPORT: 'loanreport.php',
    DOCUMENT: 'estatedocument.php',
    SETTLEMENTREPORT: 'estatesetaccreport.php',
    estateBALACE: 'estatebalance.php',
    GLJOURNAL: 'estategljournal.php',
    REGISTERMOBILES: 'estateregmobiles.php',
    ONBOARDREPORT: 'estateonboardreport.php'
};
var LANDING_URL = URL_CONSTANTS.PAYMENT;


/***/ }),

/***/ "./src/app/_common/util.ts":
/*!*********************************!*\
  !*** ./src/app/_common/util.ts ***!
  \*********************************/
/*! exports provided: Util */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Util", function() { return Util; });
var Util = /** @class */ (function () {
    function Util() {
    }
    Util.getToday = function () {
        var dt = new Date();
        var tm = Util._today.getTime();
        dt.setTime(tm);
        return dt;
    };
    Util.setToday = function (today) {
        // debugger;
        // console.log("Today is: ", today);
        // Util._today = new Date();
        if (today != null && today != undefined && !isNaN(today.getDate())) {
            Util._today = new Date(today);
            console.log("Today is: ", this._today);
        }
        else {
            Util._today = new Date();
            console.log("Default date is: ", this._today);
        }
    };
    Util.clone = function (rec) {
        var str = JSON.stringify(rec);
        return JSON.parse(str);
    };
    Util.sleepFor = function (sleepDuration) {
        var now = new Date().getTime();
        while (new Date().getTime() < now + sleepDuration) { /* do nothing */ }
    };
    Util.getIdByCode = function (cd, arr) {
        var _id = null;
        arr.forEach(function (ele) {
            if (ele.code === cd) {
                _id = ele.id;
            }
        });
        return _id;
    };
    Util.local2UTC = function (dt) {
        var day = new Date();
        var off = day.getTimezoneOffset() * 60000;
        var utc = dt + off;
        day.setTime(utc);
        return day;
        // return new Date(
        //     Date.UTC(
        //       dt.getFullYear(), dt.getMonth(), dt.getDay(),
        //       dt.getHours(), dt.getMinutes(), dt.getSeconds(), dt.getMilliseconds()
        //     ));
    };
    Util.utc2Local = function (dt) {
        var day = new Date();
        var off = day.getTimezoneOffset() * 60000;
        var local = dt - off;
        day.setTime(local);
        return day;
    };
    Util.FormatNumbers = function (jobj) {
        return formatNumbers(jobj);
    };
    Util.Dates2Strings = function (jobj) {
        dates2Strings(jobj);
        return remove$Dates(jobj);
    };
    Util.TrimTimeFromDates = function (jobj, key) {
        return trimTimeInObj(jobj, key);
    };
    Util.GetValue = function (jobj, key) {
        return getValue(jobj, key);
    };
    Util.Base64Decode = function (str, ty) {
        return b64toBlob(str, ty);
    };
    Util.DOY2Date = function (str) {
        return doy2Date(str);
    };
    Util.isValidDateStr = function (dateStr) {
        var regexExp = /^\d{4}-\d{2}-\d{2}$/;
        if (dateStr.match(regexExp) === null) {
            return false;
        }
        var date = new Date(dateStr);
        var timestamp = date.getTime();
        if (typeof timestamp !== 'number' || Number.isNaN(timestamp)) {
            return false;
        }
        return true;
    };
    Util.getNetworkRcText = function (_cd) {
        var rc = [];
        rc = NETWORKCODES.hasOwnProperty(_cd) ?
            [NETWORKCODES[_cd].ISOReason, NETWORKCODES[_cd].ReasonforFailure, NETWORKCODES[_cd].ActionRequired]
            :
                ['Unknown NetworkRc code', '', 'Please contact technical support team'];
        return rc;
    };
    Util._today = new Date();
    return Util;
}());



/***/ }),

/***/ "./src/app/_directives/dropdown.directive.ts":
/*!***************************************************!*\
  !*** ./src/app/_directives/dropdown.directive.ts ***!
  \***************************************************/
/*! exports provided: DropDownDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropDownDirective", function() { return DropDownDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DropDownDirective = /** @class */ (function () {
    function DropDownDirective(_elementRef) {
        this._elementRef = _elementRef;
        this.isOpen = false;
    }
    DropDownDirective.prototype.toggleOpen = function () {
        this.isOpen = !this.isOpen;
    };
    DropDownDirective.prototype.onClick = function (targetElement) {
        var clickedInside = this._elementRef.nativeElement.contains(targetElement);
        if (!clickedInside) {
            this.isOpen = false;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.open'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DropDownDirective.prototype, "isOpen", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], DropDownDirective.prototype, "toggleOpen", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:click', ['$event.target']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], DropDownDirective.prototype, "onClick", null);
    DropDownDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[tf-dropdown]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], DropDownDirective);
    return DropDownDirective;
}());



/***/ }),

/***/ "./src/app/_models/billsetup.model.ts":
/*!********************************************!*\
  !*** ./src/app/_models/billsetup.model.ts ***!
  \********************************************/
/*! exports provided: BillSetup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillSetup", function() { return BillSetup; });
;
var BillSetup = /** @class */ (function () {
    function BillSetup(month, total, fixedcost, varcost) {
        this.month = month;
        this.total = total;
        this.fixedcost = fixedcost;
        this.varcost = varcost;
    }
    return BillSetup;
}());

;


/***/ }),

/***/ "./src/app/_models/community.model.ts":
/*!********************************************!*\
  !*** ./src/app/_models/community.model.ts ***!
  \********************************************/
/*! exports provided: Community */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Community", function() { return Community; });
;
var Community = /** @class */ (function () {
    function Community(_id, name, adress, city, state, country, zipcode) {
        this._id = _id;
        this.name = name;
        this.adress = adress;
        this.city = city;
        this.state = state;
        this.country = country;
        this.zipcode = zipcode;
    }
    return Community;
}());

;


/***/ }),

/***/ "./src/app/_models/user.model.ts":
/*!***************************************!*\
  !*** ./src/app/_models/user.model.ts ***!
  \***************************************/
/*! exports provided: VrtlUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VrtlUser", function() { return VrtlUser; });
;
var VrtlUser = /** @class */ (function () {
    function VrtlUser(customerId, estateId, estateSupport
    // public name?,
    // public password?,
    // public firstName?,
    // public lastName?,
    // public addressLine1?,
    // public addressLine2?,
    // public city?,
    // public country?,
    // public pincode?,
    // public contactNo?,
    // public email?,
    // public createdDate?,
    // public modifiedDate?,
    // public status?,
    // public isActive?,
    // public loggedOn?,
    // public mappedWith?,
    // public mobileRegId?
    ) {
        this.customerId = customerId;
        this.estateId = estateId;
        this.estateSupport = estateSupport;
    }
    return VrtlUser;
}());

;


/***/ }),

/***/ "./src/app/_services/data.service.ts":
/*!*******************************************!*\
  !*** ./src/app/_services/data.service.ts ***!
  \*******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _common_appconfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_common/appconfig */ "./src/app/_common/appconfig.ts");



//import { saveAs } from 'file-saver/FileSaver';

var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
    }
    DataService.prototype.deleteData = function (datatype, key, callback) {
        if (callback === void 0) { callback = null; }
        var url = _common_appconfig__WEBPACK_IMPORTED_MODULE_3__["URL_CONSTANTS"].BASE_URL + datatype + '/' + key;
        this.http
            .delete(url)
            .subscribe(function (data) {
            // console.log(data);
            if (callback != null) {
                callback(data);
            }
        });
    };
    DataService.prototype.updateData = function (datatype, key, obj, callback) {
        if (callback === void 0) { callback = null; }
        var url = _common_appconfig__WEBPACK_IMPORTED_MODULE_3__["URL_CONSTANTS"].BASE_URL + datatype + '/' + key;
        this.http
            .put(url, obj)
            .subscribe(function (data) {
            // console.log(data);
            if (callback != null) {
                callback(data);
            }
        });
    };
    DataService.prototype.addData = function (datatype, obj, callback) {
        if (callback === void 0) { callback = null; }
        // console.log(obj);
        var url = _common_appconfig__WEBPACK_IMPORTED_MODULE_3__["URL_CONSTANTS"].BASE_URL + datatype;
        this.http
            .post(url, obj)
            .subscribe(function (data) {
            // console.log(data);
            if (callback != null) {
                callback(data);
            }
        });
    };
    DataService.prototype.constructUrl = function (_url, _params) {
        if (_params === void 0) { _params = null; }
        if (_params != null && _params != undefined) {
            var p = '?';
            for (var i in _params) {
                p += i ? '&' : '';
                p += _params[i].key + '=' + _params[i].value;
            }
            _url += p;
        }
        return _url;
    };
    DataService.prototype.getData = function (datatype, callback, params) {
        if (callback === void 0) { callback = null; }
        if (params === void 0) { params = null; }
        var url = _common_appconfig__WEBPACK_IMPORTED_MODULE_3__["URL_CONSTANTS"].BASE_URL + datatype;
        if (params != null && params != undefined) {
            var p = '?';
            for (var i in params) {
                p += i ? '&' : '';
                p += params[i].key + '=' + params[i].value;
            }
            url += p;
        }
        console.log("GET :", url);
        this.http
            .get(url)
            .subscribe(function (data) {
            // console.log(data);
            if (callback != null) {
                callback(data);
            }
        });
    };
    DataService.prototype.getDataText = function (datatype, callback, params) {
        if (callback === void 0) { callback = null; }
        if (params === void 0) { params = null; }
        var url = this.constructUrl(_common_appconfig__WEBPACK_IMPORTED_MODULE_3__["URL_CONSTANTS"].BASE_URL + datatype, params);
        console.log("GET :", url);
        this.http
            .get(url, { responseType: 'text' })
            .subscribe(function (data) {
            if (callback != null) {
                callback(data);
            }
        });
    };
    // getFile(_url: string, fileType: string = 'pdf', fileName: string = undefined) {
    //   let url = URL_CONSTANTS.BASE_URL + _url;
    //   this.http
    //     .get(url, { observe: 'response', responseType: 'blob' })
    //     .subscribe(
    //     data => {
    //       let blob = new Blob([data.body], { type: 'application/pdf' });
    //       let fileUrl = window.URL.createObjectURL(blob);
    //       // if (fileName) saveAs(blob, fileName + fileType);
    //       if (fileName) saveAs(blob, fileName);
    //       else {
    //         if (window.navigator.msSaveOrOpenBlob) {
    //           window.navigator.msSaveOrOpenBlob(blob, fileUrl.split(':')[1] + '.pdf');
    //         } else {
    //           window.open(fileUrl);
    //         }
    //       }
    //     });
    // }
    DataService.prototype.getDummyData = function (url, callback, options) {
        if (callback === void 0) { callback = null; }
        if (options === void 0) { options = { responseType: 'json' }; }
        console.log("GET :", url);
        this.http.get(url, options)
            .subscribe(function (data) {
            if (callback != null) {
                callback(data);
            }
        });
    };
    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/login.component */ "./src/app/auth/login.component.ts");
/* harmony import */ var _customer_notification_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./customer/notification.component */ "./src/app/customer/notification.component.ts");
/* harmony import */ var _estate_dwellings_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./estate/dwellings.component */ "./src/app/estate/dwellings.component.ts");
/* harmony import */ var _estate_users_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./estate/users.component */ "./src/app/estate/users.component.ts");
/* harmony import */ var _estate_monthly_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./estate/monthly.component */ "./src/app/estate/monthly.component.ts");
/* harmony import */ var _estate_daily_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./estate/daily.component */ "./src/app/estate/daily.component.ts");
/* harmony import */ var _estate_weekly_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./estate/weekly.component */ "./src/app/estate/weekly.component.ts");
/* harmony import */ var _estate_billing_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./estate/billing.component */ "./src/app/estate/billing.component.ts");
/* harmony import */ var _estate_billsetup_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./estate/billsetup.component */ "./src/app/estate/billsetup.component.ts");
/* harmony import */ var _customer_community_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./customer/community.component */ "./src/app/customer/community.component.ts");
/* harmony import */ var _customer_dwsetup_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./customer/dwsetup.component */ "./src/app/customer/dwsetup.component.ts");



// import { ActivatedRoute } from '@angular/router';


// import { TransactionComponent } from './customer/transaction.component';
// import { PrepaidCardComponent } from './customer/prepaidcard.component';
// import { TransferComponent } from './customer/transfer.component';
// import { KycComponent } from './customer/kyc.component';
// import { LoanComponent } from './customer/loan.component';
// import { PaymentComponent } from './customer/payment.component';
// import { LoanPaymentComponent } from './customer/loanpayment.component';
// import { OnboardingComponent } from './estate/onboard.component';
// import { estateSetupComponent } from './estate/setup.component';
// import { estateBizReportComponent } from './estate/bizreport.component';
// import { estateLoanReportComponent } from './estate/loanreport.component';
// import { estateSettlementReportComponent } from './estate/settlementreport.component';
// import { estateLoansComponent } from './estate/loans.component';
// import { estateTranscardBalanceComponent } from './estate/transcardbalance.component';
// import { estateLoanDashboardComponent } from './estate/loandashboard.component';
// import { estateOnboardReportComponent } from './estate/onboardreport.component';









var routes = [
    { path: 'login', component: _auth_login_component__WEBPACK_IMPORTED_MODULE_3__["SigninComponent"] },
    { path: 'notification', component: _customer_notification_component__WEBPACK_IMPORTED_MODULE_4__["NotificationComponent"] },
    { path: 'dwellings', component: _estate_dwellings_component__WEBPACK_IMPORTED_MODULE_5__["estateDwellingsComponent"] },
    { path: 'users', component: _estate_users_component__WEBPACK_IMPORTED_MODULE_6__["estateUsersComponent"] },
    { path: 'monthly', component: _estate_monthly_component__WEBPACK_IMPORTED_MODULE_7__["EstateMonthlyConsumption"] },
    { path: 'daily', component: _estate_daily_component__WEBPACK_IMPORTED_MODULE_8__["EstateDailyConsumption"] },
    { path: 'weekly', component: _estate_weekly_component__WEBPACK_IMPORTED_MODULE_9__["EstateWeeklyConsumption"] },
    { path: 'monthlybilling', component: _estate_billing_component__WEBPACK_IMPORTED_MODULE_10__["EstateMonthlyBilling"] },
    { path: 'community', component: _customer_community_component__WEBPACK_IMPORTED_MODULE_12__["CommunityComponent"] },
    { path: 'comtysetup', component: _customer_dwsetup_component__WEBPACK_IMPORTED_MODULE_13__["DWSetupComponent"] },
    { path: 'billingsetup', component: _estate_billsetup_component__WEBPACK_IMPORTED_MODULE_11__["EstateMonthlyBillingSetup"] },
    { path: '**', component: _auth_login_component__WEBPACK_IMPORTED_MODULE_3__["SigninComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.\n<div style=\"text-align:center\">\n  <h1>\n    Welcome to {{ title }}!\n  </h1>\n  <img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n</div>\n<h2>Here are some links to help you start: </h2>\n<ul>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/tutorial\">Tour of Heroes</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/cli\">CLI Documentation</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://blog.angular.io/\">Angular blog</a></h2>\n  </li>\n</ul>\n\n<router-outlet></router-outlet> -->\n\n<!--The content below is only a placeholder and can be replaced.-->\n<div>\n  <vrtl-menu></vrtl-menu>\n</div>\n  \n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/auth.service */ "./src/app/auth/auth.service.ts");




var AppComponent = /** @class */ (function () {
    function AppComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.title = 'Verify RTL';
        this.loadedFeature = 'schedule';
    }
    AppComponent.prototype.ngOnInit = function () {
        if (!this.authService.isAuthenticated())
            this.router.navigate(['/']);
    };
    AppComponent.prototype.onNavigate = function (feature) {
        this.loadedFeature = feature;
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/calendar */ "./node_modules/primeng/calendar.js");
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_calendar__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var primeng_chart__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/chart */ "./node_modules/primeng/chart.js");
/* harmony import */ var primeng_chart__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primeng_chart__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var primeng_fieldset__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/fieldset */ "./node_modules/primeng/fieldset.js");
/* harmony import */ var primeng_fieldset__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(primeng_fieldset__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/tabview */ "./node_modules/primeng/tabview.js");
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(primeng_tabview__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./auth/auth.interceptor */ "./src/app/auth/auth.interceptor.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./_services/data.service */ "./src/app/_services/data.service.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _vrtl_menu_vrtl_menu_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./vrtl-menu/vrtl-menu.component */ "./src/app/vrtl-menu/vrtl-menu.component.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _auth_authtoken__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./auth/authtoken */ "./src/app/auth/authtoken.ts");
/* harmony import */ var _auth_login_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./auth/login.component */ "./src/app/auth/login.component.ts");
/* harmony import */ var _directives_dropdown_directive__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./_directives/dropdown.directive */ "./src/app/_directives/dropdown.directive.ts");
/* harmony import */ var _estate_dwellings_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./estate/dwellings.component */ "./src/app/estate/dwellings.component.ts");
/* harmony import */ var _estate_users_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./estate/users.component */ "./src/app/estate/users.component.ts");
/* harmony import */ var _estate_monthly_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./estate/monthly.component */ "./src/app/estate/monthly.component.ts");
/* harmony import */ var _estate_daily_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./estate/daily.component */ "./src/app/estate/daily.component.ts");
/* harmony import */ var _estate_weekly_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./estate/weekly.component */ "./src/app/estate/weekly.component.ts");
/* harmony import */ var _estate_billing_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./estate/billing.component */ "./src/app/estate/billing.component.ts");
/* harmony import */ var _estate_billsetup_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./estate/billsetup.component */ "./src/app/estate/billsetup.component.ts");
/* harmony import */ var _customer_community_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./customer/community.component */ "./src/app/customer/community.component.ts");
/* harmony import */ var _customer_dwsetup_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./customer/dwsetup.component */ "./src/app/customer/dwsetup.component.ts");
/* harmony import */ var _customer_notification_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./customer/notification.component */ "./src/app/customer/notification.component.ts");














// import { ListboxModule } from 'primeng/primeng';
// import { InputTextareaModule } from 'primeng/primeng';
// import { FileUploadModule } from 'primeng/primeng';
// import { TabViewModule } from 'primeng/primeng';
// import { RadioButtonModule } from 'primeng/primeng';
// import { Calendar } from 'primeng/primeng';










// import { LoanComponent } from './customer/loan.component';
// import { LoanPaymentComponent } from './customer/loanpayment.component';
// import { PaymentComponent } from './customer/payment.component';
// import { TransactionComponent } from './customer/transaction.component';
// import { estateBizReportComponent } from './estate/bizreport.component';
// import { estateLoanReportComponent } from './estate/loanreport.component';
// import { estateLoansComponent } from './estate/loans.component';
// import { estateTranscardBalanceComponent } from './estate/transcardbalance.component';
// import { OnboardingComponent } from './estate/onboard.component';
// import { estateSetupComponent } from './estate/setup.component';
// import { estateSettlementReportComponent } from './estate/settlementreport.component';
// import { estateLoanDashboardComponent } from './estate/loandashboard.component';
// import { estateOnboardReportComponent } from './estate/onboardreport.component';
// import { PrepaidCardComponent } from './customer/prepaidcard.component';
// import { TransferComponent } from './customer/transfer.component';
// import { KycComponent } from './customer/kyc.component';














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"], _vrtl_menu_vrtl_menu_component__WEBPACK_IMPORTED_MODULE_15__["VrtlMenuComponent"], _auth_login_component__WEBPACK_IMPORTED_MODULE_18__["SigninComponent"], _directives_dropdown_directive__WEBPACK_IMPORTED_MODULE_19__["DropDownDirective"],
                _customer_notification_component__WEBPACK_IMPORTED_MODULE_29__["NotificationComponent"], _estate_billsetup_component__WEBPACK_IMPORTED_MODULE_26__["EstateMonthlyBillingSetup"],
                _estate_dwellings_component__WEBPACK_IMPORTED_MODULE_20__["estateDwellingsComponent"], _estate_monthly_component__WEBPACK_IMPORTED_MODULE_22__["EstateMonthlyConsumption"], _estate_daily_component__WEBPACK_IMPORTED_MODULE_23__["EstateDailyConsumption"], _estate_weekly_component__WEBPACK_IMPORTED_MODULE_24__["EstateWeeklyConsumption"],
                _estate_users_component__WEBPACK_IMPORTED_MODULE_21__["estateUsersComponent"], _estate_billing_component__WEBPACK_IMPORTED_MODULE_25__["EstateMonthlyBilling"], _customer_community_component__WEBPACK_IMPORTED_MODULE_27__["CommunityComponent"], _customer_dwsetup_component__WEBPACK_IMPORTED_MODULE_28__["DWSetupComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_6__["GrowlModule"], primeng_primeng__WEBPACK_IMPORTED_MODULE_6__["MenubarModule"], primeng_primeng__WEBPACK_IMPORTED_MODULE_6__["SplitButtonModule"], primeng_primeng__WEBPACK_IMPORTED_MODULE_6__["ConfirmDialogModule"], primeng_primeng__WEBPACK_IMPORTED_MODULE_6__["DataTableModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_6__["DialogModule"], primeng_primeng__WEBPACK_IMPORTED_MODULE_6__["DropdownModule"], primeng_tabview__WEBPACK_IMPORTED_MODULE_10__["TabViewModule"], primeng_calendar__WEBPACK_IMPORTED_MODULE_7__["CalendarModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_13__["AppRoutingModule"], primeng_chart__WEBPACK_IMPORTED_MODULE_8__["ChartModule"], primeng_primeng__WEBPACK_IMPORTED_MODULE_6__["ButtonModule"], primeng_primeng__WEBPACK_IMPORTED_MODULE_6__["InputTextModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_6__["AutoCompleteModule"], primeng_fieldset__WEBPACK_IMPORTED_MODULE_9__["FieldsetModule"]
            ],
            providers: [
                _auth_auth_service__WEBPACK_IMPORTED_MODULE_16__["AuthService"], _auth_authtoken__WEBPACK_IMPORTED_MODULE_17__["AuthToken"], _services_data_service__WEBPACK_IMPORTED_MODULE_12__["DataService"], primeng_primeng__WEBPACK_IMPORTED_MODULE_6__["ConfirmationService"],
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_11__["AuthInterceptor"], multi: true },
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.interceptor.ts":
/*!******************************************!*\
  !*** ./src/app/auth/auth.interceptor.ts ***!
  \******************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _authtoken__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authtoken */ "./src/app/auth/authtoken.ts");




var clientId = "madura";
var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(aToken) {
        var _this = this;
        this.aToken = aToken;
        this.aToken.tokenEmitter.subscribe(function (_token) {
            _this.token = _token;
            console.log("token: ", _token);
        });
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        var val = this.token == null || this.token == '' ? ['', ''] : this.token.split(':');
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'customerId': val[0],
            'estateId': val[1]
        });
        console.log("Headers are:", headers);
        var copiedReq = req.clone({ headers: headers });
        return next.handle(copiedReq);
    };
    AuthInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_authtoken__WEBPACK_IMPORTED_MODULE_3__["AuthToken"]])
    ], AuthInterceptor);
    return AuthInterceptor;
}());



/***/ }),

/***/ "./src/app/auth/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_models/user.model */ "./src/app/_models/user.model.ts");
/* harmony import */ var _authtoken__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./authtoken */ "./src/app/auth/authtoken.ts");
/* harmony import */ var _common_appconfig__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_common/appconfig */ "./src/app/_common/appconfig.ts");






var AuthService = /** @class */ (function () {
    function AuthService(aToken, http) {
        this.aToken = aToken;
        this.http = http;
        this.init();
    }
    AuthService.prototype.init = function () {
        this.user = null;
        this.token = null;
        this.estateId = null;
        this.customerId = null;
    };
    AuthService.prototype.signinestate = function (estateId, callSuccess, callFail) {
        this.user = null;
        this.estateId = estateId;
        this.customerId = 'estate Name';
        __LOCAL ? this.verifyDummyestate(callSuccess, callFail) : this.verifyestate(callSuccess, callFail);
    };
    AuthService.prototype.verifyDummyestate = function (callSuccess, callFail) {
        this.user = new _models_user_model__WEBPACK_IMPORTED_MODULE_3__["VrtlUser"]();
        // this.user.firstName = this.customerId;
        // this.user.lastName = this.estateId;
        this.user.estateSupport = true;
        this.user.estateId = this.estateId;
        this.user.customerId = 'Ahaa Ohoo Community';
        this.aToken.setUser(this.user);
        this.setToken(this.customerId + ':' + this.estateId);
        console.log("Set Token Dummy estate: ", this.customerId + ':' + this.estateId);
        __CUSTOMERID = this.user.customerId;
        __estateID = this.user.estateId;
        callSuccess(this.user);
    };
    AuthService.prototype.verifyestate = function (callSuccess, callFail) {
        var _this = this;
        var url = _common_appconfig__WEBPACK_IMPORTED_MODULE_5__["URL_CONSTANTS"].BASE_URL + _common_appconfig__WEBPACK_IMPORTED_MODULE_5__["URL_CONSTANTS"].ESTATE + '?estateId=' + this.estateId;
        console.log(url);
        console.log(this);
        this.http
            .get(url, { observe: 'response' })
            .subscribe(function (resp) {
            console.log("estate Sign in", resp.body);
            if (resp.body == null) {
                console.log('No estate Data');
                _this.logout();
                callFail();
            }
            else {
                _this.user = resp.body;
                _this.user.estateSupport = true;
                console.log(_this.user);
                _this.aToken.setUser(_this.user);
                _this.customerId = _this.user.customerId;
                _this.estateId = _this.user.estateId;
                _this.setToken(_this.customerId + ':' + _this.estateId);
                __CUSTOMERID = _this.user.customerId;
                __estateID = _this.user.estateId;
                callSuccess(_this.user);
            }
        }, function (err) {
            console.log('fetch estate details failed');
            console.log('Error Details', err);
            _this.logout();
            callFail();
        });
    };
    AuthService.prototype.signinUser = function (customerId, estateId, callSuccess, callFail) {
        this.user = null;
        this.estateId = estateId;
        this.customerId = customerId;
        // this.setToken(this.customerId+':'+this.estateId);
        __LOCAL ? this.verifyDummyCustomer(callSuccess, callFail) : this.verifyCustomer(callSuccess, callFail);
    };
    AuthService.prototype.logout = function () {
        // this.aToken.setToken(' '); // do not set to null for AuthToken
        this.aToken.setToken(''); // do not set to null for AuthToken
        this.aToken.setUser(null);
        this.init();
    };
    AuthService.prototype.getToken = function () {
        return this.token;
    };
    AuthService.prototype.setToken = function (tok) {
        this.token = tok;
        this.aToken.setToken(tok);
    };
    AuthService.prototype.isAuthenticated = function () {
        return this.token != null;
    };
    AuthService.prototype.verifyDummyCustomer = function (callSuccess, callFail) {
        // this.setToken('Basic bmlqZXNoOnBkcWF0MjAxNQ==');
        // this.isAdmin = true;
        this.user = new _models_user_model__WEBPACK_IMPORTED_MODULE_3__["VrtlUser"]();
        // this.user.firstName = this.customerId;
        // this.user.lastName = this.estateId;
        this.user.estateId = this.estateId;
        this.user.customerId = this.customerId;
        this.user.estateSupport = false;
        this.aToken.setUser(this.user);
        this.setToken(this.customerId + ':' + this.estateId);
        __CUSTOMERID = this.user.customerId;
        __estateID = this.user.estateId;
        console.log("Set Token Dummy Customer: ", this.customerId + ':' + this.estateId);
        callSuccess(this.user);
    };
    // getUserRole(){
    //   return this.user != null ? this.user.role: null;
    // }
    AuthService.prototype.verifyCustomer = function (callSuccess, callFail) {
        var _this = this;
        var url = _common_appconfig__WEBPACK_IMPORTED_MODULE_5__["URL_CONSTANTS"].BASE_URL + _common_appconfig__WEBPACK_IMPORTED_MODULE_5__["URL_CONSTANTS"].CUSTOMER + '?customerId=' + this.customerId;
        console.log(url);
        console.log(this);
        this.http
            .get(url, { observe: 'response' })
            .subscribe(function (resp) {
            console.log("Customer Sign in", resp.body);
            if (resp.body == null) {
                console.log('No customer data found');
                _this.logout();
                callFail();
            }
            else {
                _this.user = resp.body;
                _this.user.estateSupport = false;
                console.log(_this.user);
                _this.aToken.setUser(_this.user);
                _this.customerId = _this.user.customerId;
                _this.estateId = _this.user.estateId;
                _this.setToken(_this.customerId + ':' + _this.estateId);
                __CUSTOMERID = _this.user.customerId;
                __estateID = _this.user.estateId;
                callSuccess(_this.user);
            }
        }, function (err) {
            console.log('fetch customer details failed');
            console.log('Error Details', err);
            _this.logout();
            callFail();
        });
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_authtoken__WEBPACK_IMPORTED_MODULE_4__["AuthToken"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/auth/authtoken.ts":
/*!***********************************!*\
  !*** ./src/app/auth/authtoken.ts ***!
  \***********************************/
/*! exports provided: AuthToken */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthToken", function() { return AuthToken; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/BehaviorSubject */ "./node_modules/rxjs-compat/_esm5/BehaviorSubject.js");



var AuthToken = /** @class */ (function () {
    function AuthToken() {
        this._token = new rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this._user = new rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.tokenEmitter = this._token.asObservable();
        this.userEmitter = this._user.asObservable();
        console.log('AuthToken');
    }
    AuthToken.prototype.setToken = function (token) {
        if (token != null || token != undefined)
            this._token.next(token);
    };
    AuthToken.prototype.setUser = function (user) {
        if (user != null || user != undefined)
            this._user.next(user);
    };
    AuthToken = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AuthToken);
    return AuthToken;
}());

// https://stackoverflow.com/questions/34376854/delegation-eventemitter-or-observable-in-angular2/35568924


/***/ }),

/***/ "./src/app/auth/login.component.html":
/*!*******************************************!*\
  !*** ./src/app/auth/login.component.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p-growl [value]=\"msgs\"></p-growl>\n<div class=\"container-fluid login-page\">\n  <div class=\"row\">\n    <div class=\"col-lg-4 col-lg-offset-4 col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2 col-xs-12\">\n      <div class=\"login-widget\">\n        <p class=\"text-center padding-top-20\">\n          <img src=\"./assets/images/aquesa_logo.png\" alt=\"Aquesa Water Meter\" class=\"img-responsive center-block max-height-120\">\n        </p>\n        <h3>Aquesa Support Tool</h3>\n        <form class=\"padding-left-right-30 padding-top-bottom-15\" (ngSubmit)=\"onSignin(f)\" #f=\"ngForm\">\n          <div class=\"form-group\">\n            <div class=\"input-group\">\n              <span class=\"input-group-addon\" id=\"basic-addon1\"><i class=\"fa fa-folder\"></i></span>\n               <p-dropdown [options]=\"supportlist\" [(ngModel)]=\"supportType\" [style]=\"{'width':'100%'}\"\n               appendTo=\"body\" name=\"supportType\" [required]=\"true\"></p-dropdown>\n            </div>\n          </div>\n          <div class=\"form-group\" *ngIf=\"supportType == 'cust'\">\n            <div class=\"input-group\">\n              <span class=\"input-group-addon\" id=\"basic-addon1\">\n                <i class=\"fa fa-user\"></i>\n              </span>\n              <input type=\"text\" class=\"form-control\" #customerId ngModel name=\"customerId\" placeholder=\"User Name / Phone Number\" aria-describedby=\"basic-addon1\" required>\n            </div>\n          </div>\n          <div class=\"form-group\" *ngIf=\"supportType == 'estate'\">\n            <div class=\"input-group\">\n              <span class=\"input-group-addon\" id=\"basic-addon1\">\n                <i class=\"fa fa-bank\"></i>\n              </span>\n              <input type=\"text\" class=\"form-control\" #estateId ngModel name=\"estateId\" id=\"estateId\" placeholder=\"Estate Manager\" aria-describedby=\"basic-addon1\" required>\n            </div>\n          </div>\n          <button type=\"submit\" [disabled]=\"!f.form.valid\" class=\"btn btn-success btn-default btn-block margin-top-25\">Proceed</button>\n        </form>\n        <!-- <div style=\"text-align:center;\">\n          <div>\n            <span (click)=\"forgotPwd(f)\" style=\"cursor: pointer;\">Forgot Password?</span>\n          </div>\n        </div> -->\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/auth/login.component.ts":
/*!*****************************************!*\
  !*** ./src/app/auth/login.component.ts ***!
  \*****************************************/
/*! exports provided: SigninComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninComponent", function() { return SigninComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth/auth.service.ts");


//import { Store } from '@ngrx/store';

// import * as fromApp from './auth.reducers';
// import * as AuthActions from './auth.actions';

var SigninComponent = /** @class */ (function () {
    function SigninComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.msgs = [];
        this.supportlist = [
            { label: 'Customer Service', value: 'cust' },
            { label: 'Estate Management', value: 'estate' }
        ];
    }
    SigninComponent.prototype.ngOnInit = function () {
        this.supportType = 'estate';
        this.estateSupport = false;
    };
    SigninComponent.prototype.onLogin = function (user) {
        console.log('Found valid customer data');
        this.estateSupport = user.estateSupport;
        var link = this.estateSupport ? 'DAILY' : 'COMMUNITY';
        switch (link) {
            case 'COMMUNITY': {
                this.router.navigate(['/community']);
                break;
            }
            case 'DAILY': {
                this.router.navigate(['/daily']);
                break;
            }
            default: {
                this.router.navigate(['/daily']);
                break;
            }
        }
    };
    SigninComponent.prototype.onLoginError = function () {
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Info Message', detail: 'Incorrect customer ID and/or estate id' });
    };
    SigninComponent.prototype.onSignin = function (form) {
        this.msgs = [];
        var sType = this.supportType;
        if (sType === 'estate') {
            var estateId = form.value.estateId;
            var customerId = 'estateuser';
            this.authService.signinestate(estateId, this.onLogin.bind(this), this.onLoginError.bind(this));
        }
        else {
            var customerId = form.value.customerId;
            var estateId = 'aquesa';
            //this.store.dispatch(new AuthActions.TrySignin({username: email, password: password}));
            this.authService.signinUser(customerId, estateId, this.onLogin.bind(this), this.onLoginError.bind(this));
        }
    };
    SigninComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signin',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/auth/login.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SigninComponent);
    return SigninComponent;
}());



/***/ }),

/***/ "./src/app/customer/community.component.html":
/*!***************************************************!*\
  !*** ./src/app/customer/community.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p-confirmDialog header=\"Delete Confirmation\" icon=\"fa fa-trash\" width=\"425\"></p-confirmDialog>\n\n<p-growl [value]=\"msgs\"></p-growl>\n\n<div class=\"container-fluid margin-top-10\">\n  <h4 class=\"table-head\">Communities</h4>\n\n  <div>\n    <p-dataTable #dt [value]=\"communities\" [globalFilter]=\"gb\" [loading]=\"loading\" loadingIcon=\"fa-spinner\" dataKey=\"_id\" [rows]=\"10\"\n      [paginator]=\"true\" [pageLinks]=\"5\" [rowsPerPageOptions]=\"[10,25,50,100]\" paginatorPosition=\"top\" [reorderableColumns]=\"true\"\n      [resizableColumns]=\"true\" rowHover=\"true\" selectionMode=\"single\" [(selection)]=\"comty\" (onRowSelect)=\"onComtySelect($event)\"\n      (onRowUnselect)=\"onComtyUnSelect($event)\">\n\n      <p-header>\n        <div class=\"ui-helper-clearfix\" style=\"width:100%;overflow:visible\">\n          <i class=\"fa fa-search\" style=\"float:left; vertical-align: middle\">&nbsp;&nbsp;</i>\n          <input #gb type=\"text\" pInputText size=\"50\" placeholder=\"Search Text\" style=\"float:left\">\n          <!-- <button type=\"button\" pButton icon=\"fa fa-file-o\" iconPos=\"left\" label=\"Download CSV\" (click)=\"dt.exportCSV()\" style=\"float:right\"></button> -->\n        </div>\n      </p-header>\n\n      <p-column field=\"_id\" header=\"ID\" [sortable]=\"true\"></p-column>\n      <p-column field=\"name\" header=\"Name\" [sortable]=\"true\"></p-column>\n      <p-column field=\"address\" header=\"Address\" [sortable]=\"true\"></p-column>\n      <p-column field=\"city\" header=\"City\" [sortable]=\"true\"></p-column>\n      <p-column field=\"state\" header=\"State\" [sortable]=\"true\"></p-column>\n      <p-column field=\"country\" header=\"Country\" [sortable]=\"true\"></p-column>\n      <p-column field=\"zipcode\" header=\"PIN Code\" [sortable]=\"true\"></p-column>\n      <p-column field=\"email\" header=\"EMail\" [sortable]=\"true\"></p-column>\n      <p-column field=\"ph\" header=\"Phone\" [sortable]=\"true\"></p-column>\n\n      <p-footer>\n        <div class=\"ui-helper-clearfix\" style=\"width:100%\">\n          <button type=\"button\" pButton icon=\"fa fa-plus\" style=\"float:left\" (click)=\"onAdd()\" label=\"Add\" [ngStyle]=\"{'margin-right':'1em'}\"></button>\n          <button type=\"button\" pButton icon=\"fa fa-pencil\" style=\"float:left\" (click)=\"onEdit(comty)\" label=\"Edit\" *ngIf=\"selectRec\" [ngStyle]=\"{'margin-right':'1em'}\"></button>\n          <button type=\"button\" pButton icon=\"fa fa-search\" style=\"float:left\" (click)=\"onEdit(comty)\" label=\"View\" *ngIf=\"selectRec\"></button>\n          <!-- <button type=\"button\" pButton icon=\"fa-file\" style=\"float:left\" label=\"Download Report\" *ngIf=\"showGetReportButton\"></button> -->\n        </div>\n      </p-footer>\n    </p-dataTable>\n  </div>\n\n  <form #f=\"ngForm\" novalidate *ngIf=\"showEditDlg\">\n    <fieldset [disabled]=\"!isEditable(rec)\">\n      <p-dialog showEffect=\"fade\" [(minWidth)]=\"dlgWidth\" [modal]=\"true\" [responsive]=\"true\" [(header)]=\"hdr\" [(visible)]=\"showEditDlg\" (onShow)=\"onDlgShow($event)\"\n        (onHide)=\"onDlgHide($event)\">\n        <div class=\"ui-grid ui-grid-responsive ui-fluid ui-grid-pad\" *ngIf=\"rec\">\n          <div class=\"ui-grid-row\">\n            <div class=\"ui-grid-col-2\">\n              <label for=\"comtyName\">Name</label>\n            </div>\n            <div class=\"ui-grid-col-10\">\n              <input pInputText id=\"comtyName\" name=\"comtyName\" [(ngModel)]=\"rec.name\" required />\n            </div>\n          </div>\n          <div class=\"ui-grid-row\">\n            <div class=\"ui-grid-col-2\">\n              <label for=\"dwtypes\">Dwelling Types</label>\n            </div>\n            <div class=\"ui-grid-col-10\">\n              <span class=\"p-fluid\">\n                <p-autoComplete [(ngModel)]=\"rec.dwtypes\"\n                [suggestions]=\"fldwtypes\" (completeMethod)=\"filterdwtypes($event)\"\n                name=\"country\" [multiple]=\"true\"></p-autoComplete>\n              </span>\n            </div>\n          </div>\n          <div class=\"ui-grid-row\">\n            <div class=\"ui-grid-col-2\">\n              <label for=\"tags\">Tags</label>\n            </div>\n            <div class=\"ui-grid-col-10\">\n              <span class=\"p-fluid\">\n                <p-autoComplete [(ngModel)]=\"rec.tags\"\n                [suggestions]=\"fltags\" (completeMethod)=\"filtertags($event)\"\n                name=\"tags\" [multiple]=\"true\"></p-autoComplete>\n              </span>\n            </div>\n          </div>\n          <div><hr></div>\n          <div class=\"ui-grid-row\">\n            <div class=\"ui-grid-col-2\">\n              <label for=\"comtyAddr\">Address</label>\n            </div>\n            <div class=\"ui-grid-col-10\">\n              <input pInputText id=\"comtyAddr\" name=\"comtyAddr\" [(ngModel)]=\"rec.address\" required />\n            </div>\n          </div>\n          <div class=\"ui-grid-row\">\n            <div class=\"ui-grid-col-2\">\n              <label for=\"city\">City</label>\n            </div>\n            <div class=\"ui-grid-col-4\">\n              <input pInputText id=\"city\" name=\"city\" [(ngModel)]=\"rec.city\" required />\n            </div>\n            <div class=\"ui-grid-col-2\">\n              <label for=\"state\">State</label>\n            </div>\n            <div class=\"ui-grid-col-4\">\n              <input pInputText id=\"state\" name=\"state\" [(ngModel)]=\"rec.state\" required />\n            </div>\n          </div>\n          <div class=\"ui-grid-row\">\n            <div class=\"ui-grid-col-2\">\n              <label for=\"ctry\">Country</label>\n            </div>\n            <div class=\"ui-grid-col-4\">\n              <!-- <input pInputText id=\"ctry\" name=\"ctry\" [(ngModel)]=\"rec.country\" required /> -->\n              <span class=\"p-fluid\">\n                <p-autoComplete [(ngModel)]=\"rec.country\"\n                [suggestions]=\"filteredCountries\" (completeMethod)=\"filterCountry($event)\"\n                name=\"country\" [multiple]=\"false\"></p-autoComplete>\n              </span>\n            </div>\n            <div class=\"ui-grid-col-2\">\n              <label for=\"zip\">PIN</label>\n            </div>\n            <div class=\"ui-grid-col-4\">\n              <input pInputText id=\"zip\" name=\"zipcode\" [(ngModel)]=\"rec.zipcode\" required />\n            </div>\n          </div>\n          <div class=\"ui-grid-row\">\n            <div class=\"ui-grid-col-2\">\n              <label for=\"tz\">TimeZone</label>\n            </div>\n            <div class=\"ui-grid-col-4\">\n              <input pInputText id=\"tz\" name=\"tz\" [(ngModel)]=\"rec.tz\" required />\n            </div>\n          </div>\n          <div class=\"ui-grid-row\">\n            <div class=\"ui-grid-col-2\">\n              <label for=\"email\">Email</label>\n            </div>\n            <div class=\"ui-grid-col-4\">\n              <input pInputText id=\"email\" name=\"email\" [(ngModel)]=\"rec.email\" required />\n            </div>\n            <div class=\"ui-grid-col-2\">\n              <label for=\"ph\">Phone</label>\n            </div>\n            <div class=\"ui-grid-col-4\">\n              <input pInputText id=\"ph\" name=\"ph\" [(ngModel)]=\"rec.ph\" required />\n            </div>\n          </div>\n        </div>\n        <p-footer>\n          <button class=\"ui-button-success\" pButton icon=\"fa-check\" (click)=\"onSave()\" label=\"Save\" [disabled]=\"!f.form.valid\" *ngIf=\"rec.statusText != 'Deleted'\"></button>\n        </p-footer>\n      </p-dialog>\n    </fieldset>\n  </form>\n\n</div>\n\n<!-- *ngIf=\"rec.statusText == 'Draft' && !f.dirty\" -->"

/***/ }),

/***/ "./src/app/customer/community.component.ts":
/*!*************************************************!*\
  !*** ./src/app/customer/community.component.ts ***!
  \*************************************************/
/*! exports provided: CommunityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommunityComponent", function() { return CommunityComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/data.service */ "./src/app/_services/data.service.ts");
/* harmony import */ var _common_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_common/util */ "./src/app/_common/util.ts");
/* harmony import */ var _auth_authtoken__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../auth/authtoken */ "./src/app/auth/authtoken.ts");
/* harmony import */ var _models_community_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_models/community.model */ "./src/app/_models/community.model.ts");







var CommunityComponent = /** @class */ (function () {
    function CommunityComponent(service, confirm, aToken) {
        var _this = this;
        this.service = service;
        this.confirm = confirm;
        this.aToken = aToken;
        this.communities = [];
        this.showEditDlg = false;
        this.showRevokeDlg = false;
        this.selectRec = false;
        this.msgs = [];
        this.aToken.userEmitter.subscribe(function (_token) {
            _this.user = ''; // _token;
        });
    }
    CommunityComponent.prototype.ngOnInit = function () {
        // console.log(this.user);
        this.showEditDlg = false;
        this.dlgWidth = window.innerWidth > 780 ? 780 : window.innerWidth;
        console.log('Window Width:  ', this.dlgWidth);
        console.log("COmmunities Called");
        __LOCAL ? this.getDummyCommunitiesData() : this.getCommunitiesData();
        this.ctryList = ['India', 'Pakistan', 'Bangladesh'];
        this.dwtypes = ['1BHK', '2BHK', '2.5BHK', '3BHK', '3.5BHK', '4BHK', 'Villa', 'Villment'];
        this.tags = [];
    };
    CommunityComponent.prototype.filterCountry = function (event) {
        //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
        var filtered = [];
        var query = event.query;
        for (var i = 0; i < this.ctryList.length; i++) {
            var country = this.ctryList[i];
            if (country.toLowerCase().indexOf(query.toLowerCase()) == 0) {
                filtered.push(country);
            }
        }
        this.filteredCountries = filtered;
        // console.log("filter county list", this.filteredCountries);
    };
    CommunityComponent.prototype.filterdwtypes = function (event) {
        //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
        var filtered = [];
        var query = event.query;
        for (var i = 0; i < this.dwtypes.length; i++) {
            var dw = this.dwtypes[i];
            if (dw.toLowerCase().indexOf(query.toLowerCase()) == 0) {
                filtered.push(dw);
            }
        }
        this.fldwtypes = filtered;
        // console.log("filter dw types", this.fldwtypes);
    };
    CommunityComponent.prototype.filtertags = function (event) {
        //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
        var filtered = [];
        var query = event.query;
        for (var i = 0; i < this.tags.length; i++) {
            var dw = this.tags[i];
            if (dw.toLowerCase().indexOf(query.toLowerCase()) == 0) {
                filtered.push(dw);
            }
        }
        if (!filtered.length) {
            filtered.push(query);
        }
        this.fltags = filtered;
        // console.log("filter Tags list", this.fltags, query);
    };
    CommunityComponent.prototype.getDummyCommunitiesData = function () {
        var _this = this;
        this.loading = true;
        var params = [];
        this.service.getDummyData("./assets/data/communities.json", this.callBackCommunitiesData.bind(this), { params: params });
        setTimeout(function () { _this.loading = false; }, 30000);
    };
    CommunityComponent.prototype.getCommunitiesData = function () {
    };
    CommunityComponent.prototype.callBackCommunitiesData = function (_data) {
        // console.log(_data);
        this.communities = _data;
        this.loading = false;
    };
    CommunityComponent.prototype.onComtySelect = function (event) {
        // console.log(event);
        this.selectRec = true;
    };
    CommunityComponent.prototype.onComtyUnSelect = function (event) {
        // console.log(event);
        this.selectRec = false;
    };
    CommunityComponent.prototype.onEdit = function (event) {
        this.selectRec = true;
        this.rec = _common_util__WEBPACK_IMPORTED_MODULE_4__["Util"].clone(event);
        this.hdr = this.isEditable(this.rec) ? 'Update Community' : 'View Community';
        // this.setFormData();
        this.currRec = this.copyForUpdate(this.rec);
        this.showEditDlg = true;
    };
    CommunityComponent.prototype.onAdd = function () {
        this.rec = new _models_community_model__WEBPACK_IMPORTED_MODULE_6__["Community"]('');
        this.showEditDlg = true;
        this.selectRec = false;
        this.hdr = 'Add Community';
    };
    CommunityComponent.prototype.copyForUpdate = function (from) {
        var to = _common_util__WEBPACK_IMPORTED_MODULE_4__["Util"].clone(from);
        return to;
    };
    CommunityComponent.prototype.updateFromForm = function () {
    };
    CommunityComponent.prototype.onSave = function () {
        this.msgs = [];
        this.updateFromForm();
        if (this.rec._id != null) {
            // console.log(this.copyForUpdate(this.rec));
            // this.service.updateData(URL_CONSTANTS.AUDIT, this.rec.auditId, this.copyForUpdate(this.rec), this.processResponse.bind(this));
        }
        else {
            // console.log(this.rec);
            // this.service.addData(URL_CONSTANTS.AUDIT, this.rec, this.processResponse.bind(this));
        }
    };
    CommunityComponent.prototype.isEditable = function (sch) {
        if (!this.selectRec)
            return true;
        if (sch == null || sch == undefined || !this.selectRec)
            return false;
    };
    CommunityComponent.prototype.onDlgShow = function (event) {
        if (this.selectRec) {
        }
    };
    CommunityComponent.prototype.onDlgHide = function (event) {
        // console.log(event);
    };
    CommunityComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'menu-communities',
            template: __webpack_require__(/*! ./community.component.html */ "./src/app/customer/community.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"],
            primeng_primeng__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"],
            _auth_authtoken__WEBPACK_IMPORTED_MODULE_5__["AuthToken"]])
    ], CommunityComponent);
    return CommunityComponent;
}());



/***/ }),

/***/ "./src/app/customer/dwsetup.component.html":
/*!*************************************************!*\
  !*** ./src/app/customer/dwsetup.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p-confirmDialog header=\"Delete Confirmation\" icon=\"fa fa-trash\" width=\"425\"></p-confirmDialog>\n\n<p-growl [value]=\"msgs\"></p-growl>\n\n<div class=\"container-fluid margin-top-10\">\n  <h4 class=\"table-head\">Community Dwelling Setup</h4>\n\n  <div class=\"panel panel-default form-panel\">\n    <div class=\"panel-body\">\n      <form class=\"form-horizontal\" (ngSubmit)=\"getDWSetup(comty)\">\n        <div class=\"ui-grid ui-grid-responsive ui-fluid ui-grid-pad\">\n          <div class=\"ui-grid-row\">\n            <div class=\"ui-grid-col-8\">\n                <p-dropdown [options]=\"communities\" [(ngModel)]=\"comty\" appendTo=\"body\" name=\"comty\" (onChange)=\"filterByComty(comty)\"></p-dropdown>\n            </div>\n            <div class=\"ui-grid-col-2\">\n              <button class=\"btn btn-primary min-width-150\" type=\"submit\">\n                <span class=\"fa fa-search padding-right-15 \"></span>Submit</button>\n            </div>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n\n  <div>\n    <p-dataTable #dt [value]=\"dwsetups\" [globalFilter]=\"gb\" [loading]=\"loading\" loadingIcon=\"fa-spinner\" dataKey=\"_id\" [rows]=\"10\"\n      [paginator]=\"true\" [pageLinks]=\"5\" [rowsPerPageOptions]=\"[10,25,50,100]\" paginatorPosition=\"top\" [reorderableColumns]=\"true\"\n      [resizableColumns]=\"true\" rowHover=\"true\" selectionMode=\"single\" [(selection)]=\"comty\" (onRowSelect)=\"onDwSelect($event)\"\n      (onRowUnselect)=\"onComtyUnSelect($event)\">\n\n      <p-header>\n        <div class=\"ui-helper-clearfix\" style=\"width:100%;overflow:visible\">\n          <i class=\"fa fa-search\" style=\"float:left; vertical-align: middle\">&nbsp;&nbsp;</i>\n          <input #gb type=\"text\" pInputText size=\"50\" placeholder=\"Search Text\" style=\"float:left\">\n          <!-- <button type=\"button\" pButton icon=\"fa fa-file-o\" iconPos=\"left\" label=\"Download CSV\" (click)=\"dt.exportCSV()\" style=\"float:right\"></button> -->\n        </div>\n      </p-header>\n\n      <p-column field=\"_id\" header=\"ID\" [sortable]=\"true\"></p-column>\n      <p-column field=\"unit\" header=\"Unit No\" [sortable]=\"true\"></p-column>\n      <p-column field=\"type\" header=\"Type\" [sortable]=\"true\"></p-column>\n      <p-column field=\"count\" header=\"# Meters\" [sortable]=\"true\"></p-column>\n\n      <p-footer>\n        <div class=\"ui-helper-clearfix\" style=\"width:100%\">\n          <button type=\"button\" pButton icon=\"fa fa-plus\" style=\"float:left\" (click)=\"onAdd()\" label=\"Add\" [ngStyle]=\"{'margin-right':'1em'}\"></button>\n          <button type=\"button\" pButton icon=\"fa fa-pencil\" style=\"float:left\" (click)=\"onEdit(comty)\" label=\"Edit\" *ngIf=\"selectRec\" [ngStyle]=\"{'margin-right':'1em'}\"></button>\n          <button type=\"button\" pButton icon=\"fa fa-search\" style=\"float:left\" (click)=\"onEdit(comty)\" label=\"View\" *ngIf=\"selectRec\"></button>\n          <!-- <button type=\"button\" pButton icon=\"fa-file\" style=\"float:left\" label=\"Download Report\" *ngIf=\"showGetReportButton\"></button> -->\n        </div>\n      </p-footer>\n    </p-dataTable>\n  </div>\n\n  <form #f=\"ngForm\" novalidate *ngIf=\"showEditDlg\">\n    <fieldset [disabled]=\"!isEditable(rec)\">\n      <p-dialog showEffect=\"fade\" [(minWidth)]=\"dlgWidth\" [modal]=\"true\" [responsive]=\"true\" [(header)]=\"hdr\" [(visible)]=\"showEditDlg\" (onShow)=\"onDlgShow($event)\"\n        (onHide)=\"onDlgHide($event)\">\n        <div class=\"ui-grid ui-grid-responsive ui-fluid ui-grid-pad\" *ngIf=\"rec\">\n          <div class=\"ui-grid-row\">\n            <div class=\"ui-grid-col-2\">\n              <label for=\"name\">Name</label>\n            </div>\n            <div class=\"ui-grid-col-4\">\n              <input pInputText id=\"name\" name=\"unit\" [(ngModel)]=\"rec.name\" required />\n            </div>\n            <div class=\"ui-grid-col-2\">\n              <label for=\"type\">Type</label>\n            </div>\n            <div class=\"ui-grid-col-4\">\n              <input pInputText id=\"type\" name=\"type\" [(ngModel)]=\"rec.type\" required />\n            </div>\n          </div>\n          <div class=\"ui-grid-row\">\n            <div class=\"ui-grid-col-2\">\n              <label for=\"block\">Block</label>\n            </div>\n            <div class=\"ui-grid-col-4\">\n              <input pInputText id=\"block\" name=\"block\" [(ngModel)]=\"rec.block\" required />\n            </div>\n            <div class=\"ui-grid-col-2\">\n              <label for=\"floor\">Floor</label>\n            </div>\n            <div class=\"ui-grid-col-4\">\n              <input pInputText id=\"floor\" name=\"floor\" [(ngModel)]=\"rec.floor\" required />\n            </div>\n          </div>\n\n          <div class=\"ui-grid-row\">\n            <div class=\"ui-grid-col-3\">\n              <label for=\"deviceId\">Device ID</label>\n            </div>\n            <div class=\"ui-grid-col-3\">\n              <label for=\"serialno\">Serial Num</label>\n            </div>\n            <div class=\"ui-grid-col-2\">\n              <label for=\"tag\">Tag</label>\n            </div>\n            <div class=\"ui-grid-col-2\">\n              <label for=\"status\">Status</label>\n            </div>\n          </div>\n          <div class=\"ui-grid-row\">\n            <div class=\"ui-grid-col-3\"><input pInputText id=\"deviceId\" name=\"deviceId\" [(ngModel)]=\"rec.deviceId\" required /></div>\n            <div class=\"ui-grid-col-3\"><input pInputText id=\"serialno\" name=\"serialno\" [(ngModel)]=\"rec.serialno\" required /></div>\n            <div class=\"ui-grid-col-2\">\n              <p-dropdown [options]=\"tagList\" [(ngModel)]=\"rec.tag\" appendTo=\"body\" name=\"tag\" (onChange)=\"changetag(rec.tag)\"></p-dropdown>\n            </div>\n            <div class=\"ui-grid-col-2\">\n              <p-dropdown [options]=\"statusList\" [(ngModel)]=\"rec.status\" appendTo=\"body\" name=\"status\" (onChange)=\"changestatus(rec.status)\"></p-dropdown>\n            </div>\n          </div>\n          <div class=\"ui-grid-row\">\n            <div class=\"ui-grid-col-3\"><input pInputText id=\"deviceId\" name=\"deviceId\" [(ngModel)]=\"rec.deviceId\" required /></div>\n            <div class=\"ui-grid-col-3\"><input pInputText id=\"serialno\" name=\"serialno\" [(ngModel)]=\"rec.serialno\" required /></div>\n            <div class=\"ui-grid-col-2\">\n              <p-dropdown [options]=\"tagList\" [(ngModel)]=\"rec.tag\" appendTo=\"body\" name=\"tag\" (onChange)=\"changetag(rec.tag)\"></p-dropdown>\n            </div>\n            <div class=\"ui-grid-col-2\">\n              <p-dropdown [options]=\"statusList\" [(ngModel)]=\"rec.status\" appendTo=\"body\" name=\"status\" (onChange)=\"changestatus(rec.status)\"></p-dropdown>\n            </div>\n            <div class=\"ui-grid-col-1\">\n              <button type=\"button\" pButton icon=\"fa fa-plus\" style=\"float:left\" (click)=\"onSave()\" label=\".\" [ngStyle]=\"{'margin-right':'1em'}\"></button>\n            </div>\n          </div>\n        </div>\n        <p-footer>\n          <button class=\"ui-button-success\" pButton icon=\"fa-check\" (click)=\"onSave()\" label=\"Save\" [disabled]=\"!f.form.valid\" *ngIf=\"rec.statusText != 'Deleted'\"></button>\n        </p-footer>\n      </p-dialog>\n    </fieldset>\n  </form>\n\n</div>\n\n<!-- *ngIf=\"rec.statusText == 'Draft' && !f.dirty\" -->"

/***/ }),

/***/ "./src/app/customer/dwsetup.component.ts":
/*!***********************************************!*\
  !*** ./src/app/customer/dwsetup.component.ts ***!
  \***********************************************/
/*! exports provided: DWSetupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DWSetupComponent", function() { return DWSetupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/data.service */ "./src/app/_services/data.service.ts");
/* harmony import */ var _common_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_common/util */ "./src/app/_common/util.ts");
/* harmony import */ var _auth_authtoken__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../auth/authtoken */ "./src/app/auth/authtoken.ts");
/* harmony import */ var _models_community_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_models/community.model */ "./src/app/_models/community.model.ts");







var DWSetupComponent = /** @class */ (function () {
    function DWSetupComponent(service, confirm, aToken) {
        var _this = this;
        this.service = service;
        this.confirm = confirm;
        this.aToken = aToken;
        this.communities = [];
        this.dwsetups = [];
        this.showEditDlg = false;
        this.selectRec = false;
        this.msgs = [];
        this.aToken.userEmitter.subscribe(function (_token) {
            _this.user = ''; // _token;
        });
    }
    DWSetupComponent.prototype.ngOnInit = function () {
        // console.log(this.user);
        this.showEditDlg = false;
        this.dlgWidth = window.innerWidth > 780 ? 780 : window.innerWidth;
        // console.log('Window Width:  ', this.dlgWidth);
        // console.log("DW Setup Called");
        __LOCAL ? this.getDummyDwSetupData() : this.getDwSetupData();
        this.statusList = [{ label: 'Active', value: 'active' }, { label: 'Inactive', value: 'inactive' }, { label: 'Deleted', value: 'deleted' }];
        this.tagList = [{ label: 'Cauvery', value: 'Cauvery' }, { label: 'Borewell', value: 'Borewell' }, { label: 'General', value: 'Genereal' }];
        this.communities = [{ label: 'Aha Oho Enclave', value: 'AHA' }, { label: 'Fantastic Four Villas', value: 'FFV' }];
    };
    DWSetupComponent.prototype.getDummyDwSetupData = function () {
        var _this = this;
        this.loading = true;
        var params = [];
        this.service.getDummyData("./assets/data/dwsetup.json", this.callBackDwSetupData.bind(this), { params: params });
        setTimeout(function () { _this.loading = false; }, 1000);
    };
    DWSetupComponent.prototype.getDwSetupData = function () {
    };
    DWSetupComponent.prototype.filterByComty = function (_data) {
    };
    DWSetupComponent.prototype.callBackDwSetupData = function (_data) {
        // console.log(_data);
        this.dwsetups = _data;
        this.loading = false;
    };
    DWSetupComponent.prototype.getDWSetup = function (_comty) {
    };
    DWSetupComponent.prototype.onDwSelect = function (event) {
        // console.log(event);
        this.selectRec = true;
    };
    DWSetupComponent.prototype.onDwUnSelect = function (event) {
        // console.log(event);
        this.selectRec = false;
    };
    DWSetupComponent.prototype.onEdit = function (event) {
        this.selectRec = true;
        this.rec = _common_util__WEBPACK_IMPORTED_MODULE_4__["Util"].clone(event);
        this.hdr = this.isEditable(this.rec) ? 'Update Dwelling' : 'View Dwelling';
        // this.setFormData();
        this.currRec = this.copyForUpdate(this.rec);
        this.showEditDlg = true;
    };
    DWSetupComponent.prototype.onAdd = function () {
        this.rec = new _models_community_model__WEBPACK_IMPORTED_MODULE_6__["Community"]('');
        this.showEditDlg = true;
        this.selectRec = false;
        this.hdr = 'Add Dwelling';
    };
    DWSetupComponent.prototype.copyForUpdate = function (from) {
        var to = _common_util__WEBPACK_IMPORTED_MODULE_4__["Util"].clone(from);
        return to;
    };
    DWSetupComponent.prototype.updateFromForm = function () {
    };
    DWSetupComponent.prototype.changetag = function (evt) {
    };
    DWSetupComponent.prototype.changestatus = function (evt) {
    };
    DWSetupComponent.prototype.onSave = function () {
        this.msgs = [];
        this.updateFromForm();
        if (this.rec._id != null) {
            // console.log(this.copyForUpdate(this.rec));
            // this.service.updateData(URL_CONSTANTS.AUDIT, this.rec.auditId, this.copyForUpdate(this.rec), this.processResponse.bind(this));
        }
        else {
            // console.log(this.rec);
            // this.service.addData(URL_CONSTANTS.AUDIT, this.rec, this.processResponse.bind(this));
        }
    };
    DWSetupComponent.prototype.isEditable = function (sch) {
        if (!this.selectRec)
            return true;
        if (sch == null || sch == undefined || !this.selectRec)
            return false;
    };
    DWSetupComponent.prototype.onDlgShow = function (event) {
        if (this.selectRec) {
        }
    };
    DWSetupComponent.prototype.onDlgHide = function (event) {
        // console.log(event);
    };
    DWSetupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'menu-dwsetup',
            template: __webpack_require__(/*! ./dwsetup.component.html */ "./src/app/customer/dwsetup.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"],
            primeng_primeng__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"],
            _auth_authtoken__WEBPACK_IMPORTED_MODULE_5__["AuthToken"]])
    ], DWSetupComponent);
    return DWSetupComponent;
}());



/***/ }),

/***/ "./src/app/customer/notification.component.html":
/*!******************************************************!*\
  !*** ./src/app/customer/notification.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <p-confirmDialog header=\"Delete Confirmation\" icon=\"fa fa-trash\" width=\"425\"></p-confirmDialog> -->\n\n<p-growl [value]=\"msgs\"></p-growl>\n\n<div class=\"container-fluid margin-top-10\">\n  <h4 class=\"table-head\">Customer ({{customerId}}) - Notifications</h4>\n\n  <p-dataTable #dt [value]=\"notifications\" [globalFilter]=\"gb\" [loading]=\"loading\" loadingIcon=\"fa-spinner\" [rows]=\"10\" [paginator]=\"true\"\n    dataKey=\"_id\" [pageLinks]=\"5\" [rowsPerPageOptions]=\"[10,20,50,100]\" paginatorPosition=\"top\" [reorderableColumns]=\"true\"\n    [resizableColumns]=\"true\" rowHover=\"true\" (onRowDblclick)=\"onRowDblClk($event)\">\n    <p-header>\n      <div class=\"ui-helper-clearfix\" style=\"width:100%\">\n        <i class=\"fa fa-search\" style=\"float:left; vertical-align: middle\">&nbsp;&nbsp;</i>\n        <input #gb type=\"text\" pInputText size=\"50\" placeholder=\"Search Text\" style=\"float:left\">\n        <!-- <button type=\"button\" pButton icon=\"fa fa-file-o\" iconPos=\"left\" label=\"Download CSV\" (click)=\"dt.exportCSV()\" style=\"float:right\"></button> -->\n      </div>\n    </p-header>\n\n    <p-column field=\"notificationMethod\" header=\"Method\" [sortable]=\"true\"></p-column>\n    <p-column field=\"notificationType\" header=\"Type\" [sortable]=\"true\"></p-column>\n    <p-column field=\"notificationStatus\" header=\"Status\" [sortable]=\"true\"></p-column>\n    <p-column field=\"messageTitle\" header=\"Title\" [sortable]=\"true\"></p-column>\n    <p-column field=\"creationDateTime\" header=\"Created At\" [sortable]=\"true\"></p-column>\n\n    <p-footer>\n      <div class=\"ui-helper-clearfix\" style=\"width:100%\">\n        <!-- <button type=\"button\" pButton icon=\"fa fa-plus\" style=\"float:left\" (click)=\"onAdd()\" label=\"Add\"></button> -->\n      </div>\n    </p-footer>\n\n  </p-dataTable>\n\n  <form #f=\"ngForm\" novalidate>\n    <p-dialog styleClass=\"dlg\" [(header)]=\"hdr\" [closeOnEscape]=\"false\" minWidth=650 showEffect=\"fade\" [(visible)]=\"showDlg\" [modal]=\"true\" [responsive]=\"true\" (onShow)=\"onDlgShow($event)\">\n      <div class=\"ui-grid ui-grid-responsive ui-fluid ui-grid-pad\" *ngIf=\"rec\">\n        <div class=\"ui-grid-row\">\n          <div class=\"ui-grid-col-2\">\n            <label>Created At</label>\n          </div>\n          <div class=\"ui-grid-col-4\">\n            {{rec.creationDateTime}}\n          </div>\n          <div class=\"ui-grid-col-2\">\n            <label>Sent At</label>\n          </div>\n          <div class=\"ui-grid-col-4\">\n            {{rec.sentDateTime}}\n          </div>\n        </div>\n        <div class=\"ui-grid-row\">\n          <div class=\"ui-grid-col-2\">\n            <label>Status</label>\n          </div>\n          <div class=\"ui-grid-col-4\">\n            {{rec.notificationStatus}}\n          </div>\n          <div class=\"ui-grid-col-2\">\n            <label>Notification Type</label>\n          </div>\n          <div class=\"ui-grid-col-4\">\n            {{rec.notificationType}}\n          </div>\n        </div>\n        <div class=\"ui-grid-row\">\n          <div class=\"ui-grid-col-2\">\n            <label>Message</label>\n          </div>\n          <div class=\"ui-grid-col-10\">\n            {{rec.messageBody}}\n          </div>\n        </div>\n      </div>\n      <p-footer>\n        <!-- <button class=\"ui-button-success\" pButton icon=\"fa fa-check\" (click)=\"onSave()\" label=\"Save\" [disabled]=\"!f.form.valid\"></button>\n        <button class=\"ui-button-danger\" pButton icon=\"fa fa-close\" (click)=\"onDelete()\" label=\"Delete\" *ngIf=\"editRec\"></button> -->\n      </p-footer>\n    </p-dialog>\n  </form>\n\n</div>"

/***/ }),

/***/ "./src/app/customer/notification.component.ts":
/*!****************************************************!*\
  !*** ./src/app/customer/notification.component.ts ***!
  \****************************************************/
/*! exports provided: NotificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationComponent", function() { return NotificationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/data.service */ "./src/app/_services/data.service.ts");
/* harmony import */ var _common_appconfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_common/appconfig */ "./src/app/_common/appconfig.ts");
/* harmony import */ var _common_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_common/util */ "./src/app/_common/util.ts");






var NotificationComponent = /** @class */ (function () {
    function NotificationComponent(service, confirm) {
        this.service = service;
        this.confirm = confirm;
        this.notifications = [];
        this.showDlg = false;
        this.editRec = false;
        this.msgs = [];
    }
    NotificationComponent.prototype.ngOnInit = function () {
        this.customerId = __CUSTOMERID;
        __LOCAL ? this.getDummyNotifications() : this.getNotifications();
    };
    NotificationComponent.prototype.getDummyNotifications = function () {
        var _this = this;
        this.loading = true;
        this.service.getDummyData("./assets/data/notifications.json", this.callBack.bind(this));
        setTimeout(function () { _this.loading = false; }, 30000);
    };
    NotificationComponent.prototype.getNotifications = function () {
        var _this = this;
        this.loading = true;
        console.log('get ...', _common_appconfig__WEBPACK_IMPORTED_MODULE_4__["URL_CONSTANTS"].NOTIFICATION);
        this.service.getData(_common_appconfig__WEBPACK_IMPORTED_MODULE_4__["URL_CONSTANTS"].NOTIFICATION, this.callBack.bind(this));
        setTimeout(function () { _this.loading = false; }, 30000);
    };
    NotificationComponent.prototype.callBack = function (arr) {
        var d1 = { payments: arr };
        _common_util__WEBPACK_IMPORTED_MODULE_5__["Util"].Dates2Strings(d1);
        _common_util__WEBPACK_IMPORTED_MODULE_5__["Util"].FormatNumbers(d1);
        this.notifications = arr;
        this.loading = false;
    };
    NotificationComponent.prototype.onRowDblClk = function (event) {
        this.showDlg = true;
        this.editRec = true;
        this.rec = _common_util__WEBPACK_IMPORTED_MODULE_5__["Util"].clone(event.data); //event.data is selected row data
        this.hdr = 'Inquire Notification';
    };
    NotificationComponent.prototype.onDlgShow = function (event) {
        if (this.editRec) {
        }
    };
    NotificationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'menu-notification',
            template: __webpack_require__(/*! ./notification.component.html */ "./src/app/customer/notification.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"], primeng_primeng__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"]])
    ], NotificationComponent);
    return NotificationComponent;
}());



/***/ }),

/***/ "./src/app/estate/billing.component.html":
/*!***********************************************!*\
  !*** ./src/app/estate/billing.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <p-confirmDialog header=\"Delete Confirmation\" icon=\"fa fa-trash\" width=\"425\"></p-confirmDialog> -->\n\n<p-growl [value]=\"msgs\"></p-growl>\n\n<div class=\"container-fluid margin-top-10\">\n  <h4 class=\"table-head\">{{hdr}}</h4>\n\n  <div>\n    <form #f=\"ngForm\" novalidate>\n      <div class=\"ui-grid ui-grid-responsive ui-fluid ui-grid-pad\">\n        <div class=\"ui-grid-row\">\n          <div class=\"ui-grid-col-2\">\n            <span style=display:inline-block; ><label>Month</label>&nbsp;\n            <p-calendar readonlyInput=\"true\" dateFormat=\"MM yy\" view=\"month\" [showIcon]=\"true\" [(ngModel)]=\"selectedmonth\" name=\"month\" #month=\"ngModel\"\n            (onSelect)=\"changeMonth(selectedmonth)\"></p-calendar></span>\n          </div>\n          <div class=\"ui-grid-col-10\">&nbsp;</div>\n        </div>\n        <hr class=\"divider\"/>\n      </div>\n    </form>\n  </div>\n\n  <div>\n  <p-dataTable #dt [value]=\"billingData\" [globalFilter]=\"gb\" [loading]=\"loading\" loadingIcon=\"fa-spinner\" [rows]=\"10\" [paginator]=\"true\"\n    dataKey=\"id\" [pageLinks]=\"5\" [rowsPerPageOptions]=\"[10,25,50,100]\" paginatorPosition=\"top\" [reorderableColumns]=\"true\"\n    [resizableColumns]=\"true\" rowHover=\"true\">\n    <p-header>\n      <div class=\"ui-helper-clearfix\" style=\"width:100%\">\n        <i class=\"fa fa-search\" style=\"float:left; vertical-align: middle\">&nbsp;&nbsp;</i>\n        <input #gb type=\"text\" pInputText size=\"50\" placeholder=\"Search Text\" style=\"float:left\">\n        <button type=\"button\" pButton icon=\"fa fa-file-o\" iconPos=\"left\" label=\"Download CSV\" (click)=\"dt.exportCSV()\" style=\"float:right\"></button>\n      </div>\n    </p-header>\n\n    <p-column field=\"month\" header=\"Month\" [sortable]=\"true\"></p-column>\n    <p-column field=\"unit\" header=\"Unit No.\" [sortable]=\"true\"></p-column>\n    <p-column field=\"value\" header=\"Consumption\" [sortable]=\"true\"></p-column>\n    <p-column field=\"amt\" header=\"Total Amount\" [sortable]=\"true\"></p-column>\n\n    <p-footer>\n      <div class=\"ui-helper-clearfix\" style=\"width:100%\">\n        <!-- <button type=\"button\" pButton icon=\"fa fa-download\" style=\"float:left\" (click)=\"onDownload()\" label=\"Download Data\"></button> -->\n      </div>\n    </p-footer>\n  </p-dataTable>\n  </div>\n\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/estate/billing.component.ts":
/*!*********************************************!*\
  !*** ./src/app/estate/billing.component.ts ***!
  \*********************************************/
/*! exports provided: EstateMonthlyBilling */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstateMonthlyBilling", function() { return EstateMonthlyBilling; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/data.service */ "./src/app/_services/data.service.ts");





var EstateMonthlyBilling = /** @class */ (function () {
    function EstateMonthlyBilling(service, route, confirm) {
        this.service = service;
        this.route = route;
        this.confirm = confirm;
    }
    EstateMonthlyBilling.prototype.ngOnInit = function () {
        this.hdr = 'Estate Monthly Water Consumption Billing';
        console.log("Billing Called");
        __LOCAL ? this.getDummyBillingData() : this.getBillingData();
    };
    EstateMonthlyBilling.prototype.getDummyBillingData = function () {
        var _this = this;
        this.loading = true;
        var params = [];
        this.service.getDummyData("./assets/data/billing.json", this.callBackBillingData.bind(this), { params: params });
        setTimeout(function () { _this.loading = false; }, 30000);
    };
    EstateMonthlyBilling.prototype.getBillingData = function () {
    };
    EstateMonthlyBilling.prototype.callBackBillingData = function (_data) {
        // console.log(_data);
        this.billingData = _data;
        this.loading = false;
    };
    EstateMonthlyBilling.prototype.changeMonth = function (event) {
        console.log("Month Changed", event);
    };
    EstateMonthlyBilling = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'menu-billing',
            template: __webpack_require__(/*! ./billing.component.html */ "./src/app/estate/billing.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], primeng_primeng__WEBPACK_IMPORTED_MODULE_3__["ConfirmationService"]])
    ], EstateMonthlyBilling);
    return EstateMonthlyBilling;
}());



/***/ }),

/***/ "./src/app/estate/billsetup.component.html":
/*!*************************************************!*\
  !*** ./src/app/estate/billsetup.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <p-confirmDialog header=\"Delete Confirmation\" icon=\"fa fa-trash\" width=\"425\"></p-confirmDialog> -->\n\n<p-growl [value]=\"msgs\"></p-growl>\n\n<div class=\"container-fluid margin-top-10\">\n  <h4 class=\"table-head\">Estate Billing Setup For Monthly Water Consumption</h4>\n\n  <div>\n  <p-dataTable #dt [value]=\"billingSetupData\" [globalFilter]=\"gb\" [loading]=\"loading\" loadingIcon=\"fa-spinner\" [rows]=\"10\" [paginator]=\"true\"\n    dataKey=\"month\" [pageLinks]=\"5\" [rowsPerPageOptions]=\"[10,25,50,100]\" paginatorPosition=\"top\" [reorderableColumns]=\"true\"\n    [resizableColumns]=\"true\" rowHover=\"true\" selectionMode=\"single\" [(selection)]=\"billsetup\" (onRowSelect)=\"onBillSelect($event)\"\n    (onRowUnselect)=\"onBillUnSelect($event)\">\n    <p-header>\n      <div class=\"ui-helper-clearfix\" style=\"width:100%\">\n        <i class=\"fa fa-search\" style=\"float:left; vertical-align: middle\">&nbsp;&nbsp;</i>\n        <input #gb type=\"text\" pInputText size=\"50\" placeholder=\"Search Text\" style=\"float:left\">\n        <!-- <button type=\"button\" pButton icon=\"fa fa-file-o\" iconPos=\"left\" label=\"Download CSV\" (click)=\"dt.exportCSV()\" style=\"float:right\"></button> -->\n      </div>\n    </p-header>\n\n    <p-column field=\"month\" header=\"Month\" [sortable]=\"true\"></p-column>\n    <p-column field=\"total\" header=\"Total Consumption\" [sortable]=\"true\"></p-column>\n    <p-column field=\"fixedcost\" header=\"Fixed Cost\" [sortable]=\"true\"></p-column>\n    <p-column field=\"varcost\" header=\"Variable Cost\" [sortable]=\"true\"></p-column>\n\n    <p-footer>\n      <div class=\"ui-helper-clearfix\" style=\"width:100%\">\n        <button type=\"button\" pButton icon=\"fa fa-plus\" style=\"float:left\" (click)=\"onAdd()\" label=\"Add\" [ngStyle]=\"{'margin-right':'1em'}\"></button>\n        <button type=\"button\" pButton icon=\"fa fa-pencil\" style=\"float:left\" (click)=\"onEdit(billsetup)\" label=\"Edit\" *ngIf=\"selectRec\" [ngStyle]=\"{'margin-right':'1em'}\"></button>\n        <button type=\"button\" pButton icon=\"fa fa-search\" style=\"float:left\" (click)=\"onEdit(billsetup)\" label=\"View\" *ngIf=\"selectRec\"></button>\n      <!-- <button type=\"button\" pButton icon=\"fa fa-download\" style=\"float:left\" (click)=\"onDownload()\" label=\"Download Data\"></button> -->\n      </div>\n    </p-footer>\n  </p-dataTable>\n  </div>\n\n  <form #f=\"ngForm\" novalidate *ngIf=\"showEditDlg\">\n    <fieldset [disabled]=\"!isEditable(rec)\">\n      <p-dialog showEffect=\"fade\" [(minWidth)]=\"dlgWidth\" [modal]=\"true\" [responsive]=\"true\" [(header)]=\"hdr\" [(visible)]=\"showEditDlg\" (onShow)=\"onDlgShow($event)\"\n        (onHide)=\"onDlgHide($event)\">\n        <div class=\"ui-grid ui-grid-responsive ui-fluid ui-grid-pad\" *ngIf=\"rec\">\n          <div class=\"ui-grid-row\">\n            <div class=\"ui-grid-col-2\">\n              <label for=\"comtyName\">Month</label>\n            </div>\n            <div class=\"ui-grid-col-10\">\n              <input pInputText id=\"month\" name=\"month\" [(ngModel)]=\"rec.month\" required />\n            </div>\n          </div>\n          <div class=\"ui-grid-row\">\n            <div class=\"ui-grid-col-2\">\n              <label for=\"city\">Fixed Cost</label>\n            </div>\n            <div class=\"ui-grid-col-4\">\n              <input pInputText id=\"fixedcost\" name=\"fixedcost\" [(ngModel)]=\"rec.fixedcost\" required />\n            </div>\n            <div class=\"ui-grid-col-2\">\n              <label for=\"state\">Variable Cost</label>\n            </div>\n            <div class=\"ui-grid-col-4\">\n              <input pInputText id=\"varcost\" name=\"varcost\" [(ngModel)]=\"rec.varcost\" required />\n            </div>\n          </div>\n        </div>\n        <p-footer>\n          <button class=\"ui-button-success\" pButton icon=\"fa-check\" (click)=\"onSave()\" label=\"Save\" [disabled]=\"!f.form.valid\" *ngIf=\"rec.statusText != 'Deleted'\"></button>\n        </p-footer>\n      </p-dialog>\n    </fieldset>\n  </form>\n\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/estate/billsetup.component.ts":
/*!***********************************************!*\
  !*** ./src/app/estate/billsetup.component.ts ***!
  \***********************************************/
/*! exports provided: EstateMonthlyBillingSetup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstateMonthlyBillingSetup", function() { return EstateMonthlyBillingSetup; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/data.service */ "./src/app/_services/data.service.ts");
/* harmony import */ var _models_billsetup_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_models/billsetup.model */ "./src/app/_models/billsetup.model.ts");
/* harmony import */ var _common_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_common/util */ "./src/app/_common/util.ts");







var EstateMonthlyBillingSetup = /** @class */ (function () {
    function EstateMonthlyBillingSetup(service, route, confirm) {
        this.service = service;
        this.route = route;
        this.confirm = confirm;
        this.selectRec = false;
        this.showEditDlg = false;
    }
    EstateMonthlyBillingSetup.prototype.ngOnInit = function () {
        this.showEditDlg = false;
        this.hdr = 'Estate Billing Setup For Monthly Water Consumption';
        console.log("Billing Called");
        __LOCAL ? this.getDummyBillingSetupData() : this.getBillingData();
    };
    EstateMonthlyBillingSetup.prototype.getDummyBillingSetupData = function () {
        var _this = this;
        this.loading = true;
        var params = [];
        this.service.getDummyData("./assets/data/billsetup.json", this.callBackBillingSetupData.bind(this), { params: params });
        setTimeout(function () { _this.loading = false; }, 30000);
    };
    EstateMonthlyBillingSetup.prototype.getBillingData = function () {
    };
    EstateMonthlyBillingSetup.prototype.callBackBillingSetupData = function (_data) {
        // console.log(_data);
        this.billingSetupData = _data;
        this.loading = false;
    };
    EstateMonthlyBillingSetup.prototype.onBillSelect = function (event) {
        // console.log(event);
        this.selectRec = true;
    };
    EstateMonthlyBillingSetup.prototype.onBillUnSelect = function (event) {
        // console.log(event);
        this.selectRec = false;
    };
    EstateMonthlyBillingSetup.prototype.copyForUpdate = function (from) {
        var to = _common_util__WEBPACK_IMPORTED_MODULE_6__["Util"].clone(from);
        return to;
    };
    EstateMonthlyBillingSetup.prototype.isEditable = function (sch) {
        if (!this.selectRec)
            return true;
        if (sch == null || sch == undefined || !this.selectRec)
            return false;
    };
    EstateMonthlyBillingSetup.prototype.onEdit = function (event) {
        this.selectRec = true;
        this.rec = _common_util__WEBPACK_IMPORTED_MODULE_6__["Util"].clone(event);
        this.hdr = this.isEditable(this.rec) ? 'Update Billing Setup' : 'View Billing Setup';
        // this.setFormData();
        this.currRec = this.copyForUpdate(this.rec);
        this.showEditDlg = true;
    };
    EstateMonthlyBillingSetup.prototype.onAdd = function () {
        this.rec = new _models_billsetup_model__WEBPACK_IMPORTED_MODULE_5__["BillSetup"]('');
        this.showEditDlg = true;
        this.selectRec = false;
        this.hdr = 'Add Billing Setup';
    };
    EstateMonthlyBillingSetup.prototype.changeMonth = function (event) {
        console.log("Month Changed", event);
    };
    EstateMonthlyBillingSetup.prototype.onDlgShow = function (event) {
        if (this.selectRec) {
        }
    };
    EstateMonthlyBillingSetup.prototype.onDlgHide = function (event) {
        // console.log(event);
    };
    EstateMonthlyBillingSetup = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'menu-billing',
            template: __webpack_require__(/*! ./billsetup.component.html */ "./src/app/estate/billsetup.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], primeng_primeng__WEBPACK_IMPORTED_MODULE_3__["ConfirmationService"]])
    ], EstateMonthlyBillingSetup);
    return EstateMonthlyBillingSetup;
}());



/***/ }),

/***/ "./src/app/estate/daily.component.html":
/*!*********************************************!*\
  !*** ./src/app/estate/daily.component.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <p-confirmDialog header=\"Delete Confirmation\" icon=\"fa fa-trash\" width=\"425\"></p-confirmDialog> -->\n\n<p-growl [value]=\"msgs\"></p-growl>\n\n<div class=\"container-fluid margin-top-10\">\n  <h4 class=\"table-head\">{{hdr}}</h4>\n\n  <div>\n    <form #f=\"ngForm\" novalidate>\n      <div class=\"ui-grid ui-grid-responsive ui-fluid ui-grid-pad\">\n        <div class=\"ui-grid-row\">\n          <div class=\"ui-grid-col-2\">\n            <label>Date</label>&nbsp;&nbsp;&nbsp;\n            <p-calendar dateFormat=\"dd M yy\" [showIcon]=\"true\" [(ngModel)]=\"dailydate\" name=\"dailyDate\" #dailyDate=\"ngModel\"\n            utc=\"true\" (onSelect)=\"changeDate(dailydate)\"></p-calendar>\n            <!-- <p-calendar readonlyInput=\"true\" dateFormat=\"dd/mm/yy\" [showIcon]=\"true\" [(ngModel)]=\"dailydate\" name=\"dailyDate\" #dailyDate=\"ngModel\"\n            utc=\"true\" [maxDate]=\"maxDate\" placeholder=\"To\"></p-calendar> -->\n          </div>\n          <div class=\"ui-grid-col-2\">\n            <label>Chart Type</label>&nbsp;&nbsp;&nbsp;\n            <p-dropdown [options]=\"chartTypes\" [(ngModel)]=\"chartType\" appendTo=\"body\" name=\"charttype\" (onChange)=\"changeChart(chartType)\"></p-dropdown>\n          </div>\n          <div class=\"ui-grid-col-2\">\n            <label>Dwelling</label>&nbsp;&nbsp;&nbsp;\n            <p-dropdown [options]=\"dwellingList\" [(ngModel)]=\"dwelling\" appendTo=\"body\" name=\"charttype\" (onChange)=\"changeDwelling(dwelling)\"></p-dropdown>\n          </div>\n          <div class=\"ui-grid-col-8\">&nbsp;</div>\n        </div>\n        <hr class=\"divider\"/>\n      </div>\n    </form>\n  </div>\n\n  <div class=\"card\" *ngIf=\"!datatable\">\n    <p-chart #chart type=\"{{chartType}}\" [data]=\"basicData\" [options]=\"basicOptions\" [width]=\"400\" [height]=\"400\"></p-chart>\n  </div>\n\n  <div *ngIf=\"datatable\">\n  <p-dataTable #dt [value]=\"dailyData\" [globalFilter]=\"gb\" [loading]=\"loading\" loadingIcon=\"fa-spinner\" [rows]=\"10\" [paginator]=\"true\"\n    dataKey=\"id\" [pageLinks]=\"5\" [rowsPerPageOptions]=\"[10,25,50,100]\" paginatorPosition=\"top\" [reorderableColumns]=\"true\"\n    [resizableColumns]=\"true\" rowHover=\"true\">\n    <p-header>\n      <div class=\"ui-helper-clearfix\" style=\"width:100%\">\n        <i class=\"fa fa-search\" style=\"float:left; vertical-align: middle\">&nbsp;&nbsp;</i>\n        <input #gb type=\"text\" pInputText size=\"50\" placeholder=\"Search Text\" style=\"float:left\">\n        <button type=\"button\" pButton icon=\"fa fa-file-o\" iconPos=\"left\" label=\"Download CSV\" (click)=\"dt.exportCSV()\" style=\"float:right\"></button>\n      </div>\n    </p-header>\n\n    <p-column field=\"date\" header=\"Date\" [sortable]=\"true\"></p-column>\n    <p-column field=\"unit\" header=\"Unit No.\" [sortable]=\"true\"></p-column>\n    <p-column field=\"hour\" header=\"Hour\" [sortable]=\"true\"></p-column>\n    <p-column field=\"value\" header=\"Consumption\" [sortable]=\"true\"></p-column>\n\n    <p-footer>\n      <div class=\"ui-helper-clearfix\" style=\"width:100%\">\n        <!-- <button type=\"button\" pButton icon=\"fa fa-download\" style=\"float:left\" (click)=\"onDownload()\" label=\"Download Data\"></button> -->\n      </div>\n    </p-footer>\n  </p-dataTable>\n  </div>\n\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/estate/daily.component.ts":
/*!*******************************************!*\
  !*** ./src/app/estate/daily.component.ts ***!
  \*******************************************/
/*! exports provided: EstateDailyConsumption */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstateDailyConsumption", function() { return EstateDailyConsumption; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var primeng_components_chart_chart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/components/chart/chart */ "./node_modules/primeng/components/chart/chart.js");
/* harmony import */ var primeng_components_chart_chart__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_components_chart_chart__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services/data.service */ "./src/app/_services/data.service.ts");
/* harmony import */ var _common_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_common/util */ "./src/app/_common/util.ts");







var EstateDailyConsumption = /** @class */ (function () {
    function EstateDailyConsumption(service, route, confirm) {
        this.service = service;
        this.route = route;
        this.confirm = confirm;
        this.chartTypes = [
            { label: 'Bar', value: 'bar' },
            { label: 'Line', value: 'line' }, { label: 'Doughnut', value: 'doughnut' },
            { label: 'Pie', value: 'pie' }, { label: 'Table', value: 'table' }
        ];
        this.dwellingList = [
            { label: 'All', value: 'all' }, { label: 'A101', value: 'A101' },
            { label: 'B101', value: 'B101' }, { label: 'C101', value: 'C101' }
        ];
    }
    EstateDailyConsumption.prototype.ngOnInit = function () {
        this.hdr = 'Estate Daily Water Consumption';
        console.log("Daily Called");
        this.chartType = 'bar';
        this.dwelling = 'all';
        this.datatable = false;
        this.dailydate = _common_util__WEBPACK_IMPORTED_MODULE_6__["Util"].getToday();
        this.setOptions();
        this.basicData = {
            labels: ['00', '01'],
            datasets: [
                {
                    label: 'Daily Water Consumption',
                    data: [540, 325],
                    backgroundColor: ['rgba(255, 159, 64, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(153, 102, 255, 0.2)'],
                }
            ]
        };
        __LOCAL ? this.getDummyDailyData() : this.getDailyData();
    };
    EstateDailyConsumption.prototype.setOptions = function () {
        var documentStyle = getComputedStyle(document.documentElement);
        var textColor = documentStyle.getPropertyValue('--text-color');
        var textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        var surfaceBorder = documentStyle.getPropertyValue('--surface-border');
        this.basicOptions = {
            plugins: {
                legend: {
                    labels: { color: textColor }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: { color: textColorSecondary },
                    grid: { color: surfaceBorder, drawBorder: false }
                },
                x: {
                    ticks: { color: textColorSecondary },
                    grid: { color: surfaceBorder, drawBorder: false }
                }
            }
        };
    };
    EstateDailyConsumption.prototype.getDummyDailyData = function () {
        var _this = this;
        this.loading = true;
        var params = [];
        this.service.getDummyData("./assets/data/daily.json", this.callBackDailyData.bind(this), { params: params });
        setTimeout(function () { _this.loading = false; }, 30000);
    };
    EstateDailyConsumption.prototype.getDailyData = function () {
    };
    EstateDailyConsumption.prototype.changeDate = function (event) {
        console.log("Date Changed", event);
    };
    EstateDailyConsumption.prototype.callBackDailyData = function (_data) {
        var _this = this;
        // console.log(_data);
        this.labels = [];
        this.data = [];
        this.dailyData = _data;
        _data.forEach(function (ele) {
            // let d1 = ele;
            _this.labels.push(_common_util__WEBPACK_IMPORTED_MODULE_6__["Util"].GetValue(ele, 'hour'));
            _this.data.push(_common_util__WEBPACK_IMPORTED_MODULE_6__["Util"].GetValue(ele, 'value'));
        });
        this.basicData.labels = this.labels;
        this.basicData.datasets[0].data = this.data;
        this.datatable = this.chartType == 'table' ? true : false;
        if (!this.datatable) {
            this.chart.reinit();
        }
        ;
        this.loading = false;
    };
    EstateDailyConsumption.prototype.changeChart = function (event) {
        var _this = this;
        console.log("ChartType Changed", event);
        this.basicData.type = this.chartType; //doughnut, Pie, Line
        this.datatable = this.chartType == 'table' ? true : false;
        setTimeout(function () {
            if (!_this.datatable) {
                _this.chart.reinit();
            }
            ;
        }, 100);
    };
    EstateDailyConsumption.prototype.changeDwelling = function (event) {
        console.log("Dwelling Changed", event);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('chart'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", primeng_components_chart_chart__WEBPACK_IMPORTED_MODULE_4__["UIChart"])
    ], EstateDailyConsumption.prototype, "chart", void 0);
    EstateDailyConsumption = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'menu-daily',
            template: __webpack_require__(/*! ./daily.component.html */ "./src/app/estate/daily.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], primeng_primeng__WEBPACK_IMPORTED_MODULE_3__["ConfirmationService"]])
    ], EstateDailyConsumption);
    return EstateDailyConsumption;
}());



/***/ }),

/***/ "./src/app/estate/dwellings.component.html":
/*!*************************************************!*\
  !*** ./src/app/estate/dwellings.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <p-confirmDialog header=\"Delete Confirmation\" icon=\"fa fa-trash\" width=\"425\"></p-confirmDialog> -->\n\n<p-growl [value]=\"msgs\"></p-growl>\n\n<div class=\"container-fluid margin-top-10\">\n  <h4 class=\"table-head\">{{hdr}}</h4>\n  <p-dataTable #dt [value]=\"dwellings\" [globalFilter]=\"gb\" [loading]=\"loading\" loadingIcon=\"fa-spinner\" [rows]=\"10\" [paginator]=\"true\"\n    dataKey=\"loanId\" [pageLinks]=\"5\" [rowsPerPageOptions]=\"[10,25,50,100]\" paginatorPosition=\"top\" [reorderableColumns]=\"true\"\n    [resizableColumns]=\"true\" rowHover=\"true\">\n    <p-header>\n      <div class=\"ui-helper-clearfix\" style=\"width:100%\">\n        <i class=\"fa fa-search\" style=\"float:left; vertical-align: middle\">&nbsp;&nbsp;</i>\n        <input #gb type=\"text\" pInputText size=\"50\" placeholder=\"Search Text\" style=\"float:left\">\n        <!-- <button type=\"button\" pButton icon=\"fa fa-file-o\" iconPos=\"left\" label=\"Download CSV\" (click)=\"dt.exportCSV()\" style=\"float:right\"></button> -->\n      </div>\n    </p-header>\n\n    <p-column field=\"unit\" header=\"Unit No.\" [sortable]=\"true\"></p-column>\n    <p-column field=\"type\" header=\"Type\" [sortable]=\"true\"></p-column>\n    <p-column field=\"ownername\" header=\"Owner Name\" [sortable]=\"true\"></p-column>\n    <p-column field=\"ownerph\" header=\"Owner Ph\" [sortable]=\"true\"></p-column>\n    <!-- <p-column field=\"mlaApplicable\" header=\"MLA\" [sortable]=\"true\"></p-column>\n    <p-column field=\"autopayEnabled\" header=\"AutoPay\" [sortable]=\"true\"></p-column>\n    <p-column field=\"originalPrincipal\" header=\"Principle\" [sortable]=\"true\"></p-column>\n    <p-column field=\"principalOutstanding\" header=\"Outstanding\" [sortable]=\"true\"></p-column>\n    <p-column field=\"principalOverdue\" header=\"Overdue\" [sortable]=\"true\"></p-column>\n    <p-column field=\"createDateTime\" header=\"Created At\" [sortable]=\"true\"></p-column>\n    <p-column field=\"firstPaymentSystemDate\" header=\"First Payment\" [sortable]=\"true\"></p-column>\n    <p-column field=\"nextPaymentSystemDate\" header=\"Next Payment\" [sortable]=\"true\"></p-column>\n    <p-column field=\"finalPaymentDate\" header=\"Final Payment\" [sortable]=\"true\"></p-column> -->\n\n    <p-footer>\n      <div class=\"ui-helper-clearfix\" style=\"width:100%\">\n        <!-- <button type=\"button\" pButton icon=\"fa fa-download\" style=\"float:left\" (click)=\"onDownload()\" label=\"Download Document\"></button> -->\n      </div>\n    </p-footer>\n  </p-dataTable>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/estate/dwellings.component.ts":
/*!***********************************************!*\
  !*** ./src/app/estate/dwellings.component.ts ***!
  \***********************************************/
/*! exports provided: estateDwellingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "estateDwellingsComponent", function() { return estateDwellingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/data.service */ "./src/app/_services/data.service.ts");
/* harmony import */ var _common_appconfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_common/appconfig */ "./src/app/_common/appconfig.ts");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_5__);






var estateDwellingsComponent = /** @class */ (function () {
    // loantype: string;
    function estateDwellingsComponent(service, route, confirm) {
        this.service = service;
        this.route = route;
        this.confirm = confirm;
        this.showDlg = false;
        this.editRec = false;
        this.msgs = [];
    }
    estateDwellingsComponent.prototype.ngOnInit = function () {
        this.hdr = 'All Dwellings';
        console.log('Dwellings called');
        this.dwellings = [];
        __LOCAL ? this.getDummyEstateDwellings() : this.getEstateDwellings();
    };
    estateDwellingsComponent.prototype.getDummyEstateDwellings = function () {
        var _this = this;
        this.loading = true;
        var params = [];
        this.service.getDummyData("./assets/data/dwellings.json", this.callBackEstateDwellings.bind(this), { params: params });
        setTimeout(function () { _this.loading = false; }, 30000);
    };
    estateDwellingsComponent.prototype.getEstateDwellings = function () {
        var _this = this;
        this.loading = true;
        var params = [];
        console.log('get ...', _common_appconfig__WEBPACK_IMPORTED_MODULE_4__["URL_CONSTANTS"].ESTATEDWELLINGS);
        this.service.getData(_common_appconfig__WEBPACK_IMPORTED_MODULE_4__["URL_CONSTANTS"].ESTATEDWELLINGS, this.callBackEstateDwellings.bind(this), params);
        setTimeout(function () { _this.loading = false; }, 30000);
    };
    estateDwellingsComponent.prototype.callBackEstateDwellings = function (_data) {
        this.dwellings = _data;
        this.loading = false;
    };
    estateDwellingsComponent.prototype.onRowDblClk = function (event) {
    };
    estateDwellingsComponent.prototype.onDlgShow = function (event) {
        if (this.editRec) {
        }
    };
    estateDwellingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'menu-dwellings',
            template: __webpack_require__(/*! ./dwellings.component.html */ "./src/app/estate/dwellings.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], primeng_primeng__WEBPACK_IMPORTED_MODULE_5__["ConfirmationService"]])
    ], estateDwellingsComponent);
    return estateDwellingsComponent;
}());



/***/ }),

/***/ "./src/app/estate/monthly.component.html":
/*!***********************************************!*\
  !*** ./src/app/estate/monthly.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <p-confirmDialog header=\"Delete Confirmation\" icon=\"fa fa-trash\" width=\"425\"></p-confirmDialog> -->\n\n<p-growl [value]=\"msgs\"></p-growl>\n\n<div class=\"container-fluid margin-top-10\">\n  <h4 class=\"table-head\">{{hdr}}</h4>\n\n  <div>\n    <form #f=\"ngForm\" novalidate>\n      <div class=\"ui-grid ui-grid-responsive ui-fluid ui-grid-pad\">\n        <div class=\"ui-grid-row\">\n          <div class=\"ui-grid-col-2\">\n            <label>Month</label>&nbsp;&nbsp;&nbsp;\n            <p-calendar readonlyInput=\"true\" dateFormat=\"MM yy\" view=\"month\" [showIcon]=\"true\" [(ngModel)]=\"selectedmonth\" name=\"month\" #month=\"ngModel\"\n            (onSelect)=\"changeMonth(selectedmonth)\"></p-calendar>\n            <!-- <p-calendar readonlyInput=\"true\" dateFormat=\"dd/mm/yy\" [showIcon]=\"true\" [(ngModel)]=\"dailydate\" name=\"dailyDate\" #dailyDate=\"ngModel\"\n            utc=\"true\" [maxDate]=\"maxDate\" placeholder=\"To\"></p-calendar> -->\n          </div>\n          <div class=\"ui-grid-col-2\">\n            <label>Chart Type</label>&nbsp;&nbsp;&nbsp;\n            <p-dropdown [options]=\"chartTypes\" [(ngModel)]=\"chartType\" appendTo=\"body\" name=\"charttype\" (onChange)=\"changeChart(chartType)\"></p-dropdown>\n          </div>\n          <div class=\"ui-grid-col-2\">\n            <label>Dwelling</label>&nbsp;&nbsp;&nbsp;\n            <p-dropdown [options]=\"dwellingList\" [(ngModel)]=\"dwelling\" appendTo=\"body\" name=\"charttype\" (onChange)=\"changeDwelling(dwelling)\"></p-dropdown>\n          </div>\n          <div class=\"ui-grid-col-8\">&nbsp;</div>\n        </div>\n        <hr class=\"divider\"/>\n      </div>\n    </form>\n  </div>\n\n  <div class=\"card\" *ngIf=\"!datatable\">\n    <p-chart #chart type=\"{{chartType}}\" [data]=\"basicData\" [options]=\"basicOptions\" [width]=\"400\" [height]=\"400\"></p-chart>\n  </div>\n\n  <div *ngIf=\"datatable\">\n  <p-dataTable #dt [value]=\"monthlyData\" [globalFilter]=\"gb\" [loading]=\"loading\" loadingIcon=\"fa-spinner\" [rows]=\"10\" [paginator]=\"true\"\n    dataKey=\"id\" [pageLinks]=\"5\" [rowsPerPageOptions]=\"[10,25,50,100]\" paginatorPosition=\"top\" [reorderableColumns]=\"true\"\n    [resizableColumns]=\"true\" rowHover=\"true\">\n    <p-header>\n      <div class=\"ui-helper-clearfix\" style=\"width:100%\">\n        <i class=\"fa fa-search\" style=\"float:left; vertical-align: middle\">&nbsp;&nbsp;</i>\n        <input #gb type=\"text\" pInputText size=\"50\" placeholder=\"Search Text\" style=\"float:left\">\n        <button type=\"button\" pButton icon=\"fa fa-file-o\" iconPos=\"left\" label=\"Download CSV\" (click)=\"dt.exportCSV()\" style=\"float:right\"></button>\n      </div>\n    </p-header>\n\n    <p-column field=\"date\" header=\"Date\" [sortable]=\"true\"></p-column>\n    <p-column field=\"unit\" header=\"Unit No.\" [sortable]=\"true\"></p-column>\n    <p-column field=\"day\" header=\"Day\" [sortable]=\"true\"></p-column>\n    <p-column field=\"value\" header=\"Consumption\" [sortable]=\"true\"></p-column>\n\n    <p-footer>\n      <div class=\"ui-helper-clearfix\" style=\"width:100%\">\n        <!-- <button type=\"button\" pButton icon=\"fa fa-download\" style=\"float:left\" (click)=\"onDownload()\" label=\"Download Data\"></button> -->\n      </div>\n    </p-footer>\n  </p-dataTable>\n  </div>\n\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/estate/monthly.component.ts":
/*!*********************************************!*\
  !*** ./src/app/estate/monthly.component.ts ***!
  \*********************************************/
/*! exports provided: EstateMonthlyConsumption */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstateMonthlyConsumption", function() { return EstateMonthlyConsumption; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var primeng_components_chart_chart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/components/chart/chart */ "./node_modules/primeng/components/chart/chart.js");
/* harmony import */ var primeng_components_chart_chart__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_components_chart_chart__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services/data.service */ "./src/app/_services/data.service.ts");
/* harmony import */ var _common_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_common/util */ "./src/app/_common/util.ts");







var EstateMonthlyConsumption = /** @class */ (function () {
    function EstateMonthlyConsumption(service, route, confirm) {
        this.service = service;
        this.route = route;
        this.confirm = confirm;
        this.chartTypes = [
            { label: 'Bar', value: 'bar' },
            { label: 'Line', value: 'line' }, { label: 'Doughnut', value: 'doughnut' },
            { label: 'Pie', value: 'pie' }, { label: 'Table', value: 'table' }
        ];
        this.dwellingList = [
            { label: 'All', value: 'all' }, { label: 'A101', value: 'A101' },
            { label: 'B101', value: 'B101' }, { label: 'C101', value: 'C101' }
        ];
    }
    EstateMonthlyConsumption.prototype.ngOnInit = function () {
        this.hdr = 'Estate Monthly Water Consumption';
        console.log("Monthly Called");
        this.chartType = 'bar';
        this.dwelling = 'all';
        this.datatable = false;
        this.selectedmonth = _common_util__WEBPACK_IMPORTED_MODULE_6__["Util"].getToday();
        this.setOptions();
        this.basicData = {
            labels: [
                '00', '01', '02', '03'
            ],
            datasets: [
                {
                    label: 'Monthly Water Consumption',
                    data: [540, 325, 702, 620],
                    backgroundColor: ['rgba(255, 159, 64, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(153, 102, 255, 0.2)'],
                }
            ]
        };
        __LOCAL ? this.getDummyMonthlyData() : this.getMonthlyData();
    };
    EstateMonthlyConsumption.prototype.setOptions = function () {
        var documentStyle = getComputedStyle(document.documentElement);
        var textColor = documentStyle.getPropertyValue('--text-color');
        var textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        var surfaceBorder = documentStyle.getPropertyValue('--surface-border');
        this.basicOptions = {
            plugins: {
                legend: {
                    labels: { color: textColor }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: { color: textColorSecondary },
                    grid: { color: surfaceBorder, drawBorder: false }
                },
                x: {
                    ticks: { color: textColorSecondary },
                    grid: { color: surfaceBorder, drawBorder: false }
                }
            }
        };
    };
    EstateMonthlyConsumption.prototype.getDummyMonthlyData = function () {
        var _this = this;
        this.loading = true;
        var params = [];
        this.service.getDummyData("./assets/data/monthly.json", this.callBackHourlyData.bind(this), { params: params });
        setTimeout(function () { _this.loading = false; }, 30000);
    };
    EstateMonthlyConsumption.prototype.getMonthlyData = function () {
    };
    EstateMonthlyConsumption.prototype.changeMonth = function (event) {
        console.log("Month Changed", event);
    };
    EstateMonthlyConsumption.prototype.callBackHourlyData = function (_data) {
        var _this = this;
        // console.log(_data);
        this.labels = [];
        this.data = [];
        this.monthlyData = _data;
        _data.forEach(function (ele) {
            // let d1 = ele;
            _this.labels.push(_common_util__WEBPACK_IMPORTED_MODULE_6__["Util"].GetValue(ele, 'date'));
            _this.data.push(_common_util__WEBPACK_IMPORTED_MODULE_6__["Util"].GetValue(ele, 'value'));
        });
        this.basicData.labels = this.labels;
        this.basicData.datasets[0].data = this.data;
        this.datatable = this.chartType == 'table' ? true : false;
        if (!this.datatable) {
            this.chart.reinit();
        }
        ;
        this.loading = false;
    };
    EstateMonthlyConsumption.prototype.changeChart = function (event) {
        var _this = this;
        console.log("ChartType Changed", event);
        this.basicData.type = this.chartType; //doughnut, Pie, Line
        this.datatable = this.chartType == 'table' ? true : false;
        setTimeout(function () {
            if (!_this.datatable) {
                _this.chart.reinit();
            }
            ;
        }, 100);
    };
    EstateMonthlyConsumption.prototype.changeDwelling = function (event) {
        console.log("Dwelling Changed", event);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('chart'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", primeng_components_chart_chart__WEBPACK_IMPORTED_MODULE_4__["UIChart"])
    ], EstateMonthlyConsumption.prototype, "chart", void 0);
    EstateMonthlyConsumption = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'menu-monthly',
            template: __webpack_require__(/*! ./monthly.component.html */ "./src/app/estate/monthly.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], primeng_primeng__WEBPACK_IMPORTED_MODULE_3__["ConfirmationService"]])
    ], EstateMonthlyConsumption);
    return EstateMonthlyConsumption;
}());



/***/ }),

/***/ "./src/app/estate/users.component.html":
/*!*********************************************!*\
  !*** ./src/app/estate/users.component.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <p-confirmDialog header=\"Delete Confirmation\" icon=\"fa fa-trash\" width=\"425\"></p-confirmDialog> -->\n\n<p-growl [value]=\"msgs\"></p-growl>\n\n<div class=\"container-fluid margin-top-10\">\n  <h4 class=\"table-head\">{{hdr}}</h4>\n  <p-dataTable #dt [value]=\"users\" [globalFilter]=\"gb\" [loading]=\"loading\" loadingIcon=\"fa-spinner\" [rows]=\"10\" [paginator]=\"true\"\n    dataKey=\"userId\" [pageLinks]=\"5\" [rowsPerPageOptions]=\"[10,25,50,100]\" paginatorPosition=\"top\" [reorderableColumns]=\"true\"\n    [resizableColumns]=\"true\" rowHover=\"true\">\n    <p-header>\n      <div class=\"ui-helper-clearfix\" style=\"width:100%\">\n        <i class=\"fa fa-search\" style=\"float:left; vertical-align: middle\">&nbsp;&nbsp;</i>\n        <input #gb type=\"text\" pInputText size=\"50\" placeholder=\"Search Text\" style=\"float:left\">\n        <!-- <button type=\"button\" pButton icon=\"fa fa-file-o\" iconPos=\"left\" label=\"Download CSV\" (click)=\"dt.exportCSV()\" style=\"float:right\"></button> -->\n      </div>\n    </p-header>\n\n    <p-column field=\"unit\" header=\"Unit No.\" [sortable]=\"true\"></p-column>\n    <p-column field=\"type\" header=\"Type\" [sortable]=\"true\"></p-column>\n    <p-column field=\"username\" header=\"User Name\" [sortable]=\"true\"></p-column>\n    <p-column field=\"userph\" header=\"User Ph\" [sortable]=\"true\"></p-column>\n    <p-column field=\"useremail\" header=\"User Email\" [sortable]=\"true\"></p-column>\n    <!-- <p-column field=\"mlaApplicable\" header=\"MLA\" [sortable]=\"true\"></p-column>\n    <p-column field=\"autopayEnabled\" header=\"AutoPay\" [sortable]=\"true\"></p-column>\n    <p-column field=\"originalPrincipal\" header=\"Principle\" [sortable]=\"true\"></p-column>\n    <p-column field=\"principalOutstanding\" header=\"Outstanding\" [sortable]=\"true\"></p-column>\n    <p-column field=\"principalOverdue\" header=\"Overdue\" [sortable]=\"true\"></p-column>\n    <p-column field=\"createDateTime\" header=\"Created At\" [sortable]=\"true\"></p-column>\n    <p-column field=\"firstPaymentSystemDate\" header=\"First Payment\" [sortable]=\"true\"></p-column>\n    <p-column field=\"nextPaymentSystemDate\" header=\"Next Payment\" [sortable]=\"true\"></p-column>\n    <p-column field=\"finalPaymentDate\" header=\"Final Payment\" [sortable]=\"true\"></p-column> -->\n\n    <p-footer>\n      <div class=\"ui-helper-clearfix\" style=\"width:100%\">\n        <!-- <button type=\"button\" pButton icon=\"fa fa-download\" style=\"float:left\" (click)=\"onDownload()\" label=\"Download Document\"></button> -->\n      </div>\n    </p-footer>\n  </p-dataTable>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/estate/users.component.ts":
/*!*******************************************!*\
  !*** ./src/app/estate/users.component.ts ***!
  \*******************************************/
/*! exports provided: estateUsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "estateUsersComponent", function() { return estateUsersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/data.service */ "./src/app/_services/data.service.ts");
/* harmony import */ var _common_appconfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_common/appconfig */ "./src/app/_common/appconfig.ts");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_5__);






var estateUsersComponent = /** @class */ (function () {
    // loantype: string;
    function estateUsersComponent(service, route, confirm) {
        this.service = service;
        this.route = route;
        this.confirm = confirm;
        this.showDlg = false;
        this.editRec = false;
        this.msgs = [];
    }
    estateUsersComponent.prototype.ngOnInit = function () {
        this.hdr = 'All Estate Users';
        console.log('Users called');
        this.users = [];
        __LOCAL ? this.getDummyEstateUsers() : this.getEstateUsers();
    };
    estateUsersComponent.prototype.getDummyEstateUsers = function () {
        var _this = this;
        this.loading = true;
        var params = [];
        this.service.getDummyData("./assets/data/users.json", this.callBackEstateUsers.bind(this), { params: params });
        setTimeout(function () { _this.loading = false; }, 30000);
    };
    estateUsersComponent.prototype.getEstateUsers = function () {
        var _this = this;
        this.loading = true;
        var params = [];
        console.log('get ...', _common_appconfig__WEBPACK_IMPORTED_MODULE_4__["URL_CONSTANTS"].ESTATEUSER);
        this.service.getData(_common_appconfig__WEBPACK_IMPORTED_MODULE_4__["URL_CONSTANTS"].ESTATEUSER, this.callBackEstateUsers.bind(this), params);
        setTimeout(function () { _this.loading = false; }, 30000);
    };
    estateUsersComponent.prototype.callBackEstateUsers = function (_data) {
        this.users = _data;
        this.loading = false;
    };
    estateUsersComponent.prototype.onRowDblClk = function (event) {
    };
    estateUsersComponent.prototype.onDlgShow = function (event) {
        if (this.editRec) {
        }
    };
    estateUsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'menu-users',
            template: __webpack_require__(/*! ./users.component.html */ "./src/app/estate/users.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], primeng_primeng__WEBPACK_IMPORTED_MODULE_5__["ConfirmationService"]])
    ], estateUsersComponent);
    return estateUsersComponent;
}());



/***/ }),

/***/ "./src/app/estate/weekly.component.html":
/*!**********************************************!*\
  !*** ./src/app/estate/weekly.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <p-confirmDialog header=\"Delete Confirmation\" icon=\"fa fa-trash\" width=\"425\"></p-confirmDialog> -->\n\n<p-growl [value]=\"msgs\"></p-growl>\n\n<div class=\"container-fluid margin-top-10\">\n  <h4 class=\"table-head\">{{hdr}}</h4>\n\n  <div>\n    <form #f=\"ngForm\" novalidate>\n      <div class=\"ui-grid ui-grid-responsive ui-fluid ui-grid-pad\">\n        <div class=\"ui-grid-row\">\n          <div class=\"ui-grid-col-2\">\n            <label>Chart Type</label>&nbsp;&nbsp;&nbsp;\n            <p-dropdown [options]=\"chartTypes\" [(ngModel)]=\"chartType\" appendTo=\"body\" name=\"charttype\" (onChange)=\"changeChart(chartType)\"></p-dropdown>\n          </div>\n          <div class=\"ui-grid-col-2\">\n            <label>Dwelling</label>&nbsp;&nbsp;&nbsp;\n            <p-dropdown [options]=\"dwellingList\" [(ngModel)]=\"dwelling\" appendTo=\"body\" name=\"charttype\" (onChange)=\"changeDwelling(dwelling)\"></p-dropdown>\n          </div>\n          <div class=\"ui-grid-col-8\">&nbsp;</div>\n        </div>\n        <hr class=\"divider\"/>\n      </div>\n    </form>\n  </div>\n\n  <div class=\"card\" *ngIf=\"!datatable\">\n    <p-chart #chart type=\"{{chartType}}\" [data]=\"basicData\" [options]=\"basicOptions\" [width]=\"400\" [height]=\"400\"></p-chart>\n  </div>\n\n  <div *ngIf=\"datatable\">\n  <p-dataTable #dt [value]=\"weeklyData\" [globalFilter]=\"gb\" [loading]=\"loading\" loadingIcon=\"fa-spinner\" [rows]=\"10\" [paginator]=\"true\"\n    dataKey=\"id\" [pageLinks]=\"5\" [rowsPerPageOptions]=\"[10,25,50,100]\" paginatorPosition=\"top\" [reorderableColumns]=\"true\"\n    [resizableColumns]=\"true\" rowHover=\"true\">\n    <p-header>\n      <div class=\"ui-helper-clearfix\" style=\"width:100%\">\n        <i class=\"fa fa-search\" style=\"float:left; vertical-align: middle\">&nbsp;&nbsp;</i>\n        <input #gb type=\"text\" pInputText size=\"50\" placeholder=\"Search Text\" style=\"float:left\">\n        <!-- <button type=\"button\" pButton icon=\"fa fa-file-o\" iconPos=\"left\" label=\"Download CSV\" (click)=\"dt.exportCSV()\" style=\"float:right\"></button> -->\n      </div>\n    </p-header>\n\n    <p-column field=\"date\" header=\"Date\" [sortable]=\"true\"></p-column>\n    <p-column field=\"day\" header=\"Day\" [sortable]=\"true\"></p-column>\n    <p-column field=\"unit\" header=\"Unit No.\" [sortable]=\"true\"></p-column>\n    <p-column field=\"value\" header=\"Consumption\" [sortable]=\"true\"></p-column>\n\n    <p-footer>\n      <div class=\"ui-helper-clearfix\" style=\"width:100%\">\n        <!-- <button type=\"button\" pButton icon=\"fa fa-download\" style=\"float:left\" (click)=\"onDownload()\" label=\"Download Data\"></button> -->\n      </div>\n    </p-footer>\n  </p-dataTable>\n  </div>\n\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/estate/weekly.component.ts":
/*!********************************************!*\
  !*** ./src/app/estate/weekly.component.ts ***!
  \********************************************/
/*! exports provided: EstateWeeklyConsumption */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstateWeeklyConsumption", function() { return EstateWeeklyConsumption; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var primeng_components_chart_chart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/components/chart/chart */ "./node_modules/primeng/components/chart/chart.js");
/* harmony import */ var primeng_components_chart_chart__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_components_chart_chart__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services/data.service */ "./src/app/_services/data.service.ts");
/* harmony import */ var _common_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_common/util */ "./src/app/_common/util.ts");







var EstateWeeklyConsumption = /** @class */ (function () {
    function EstateWeeklyConsumption(service, route, confirm) {
        this.service = service;
        this.route = route;
        this.confirm = confirm;
        this.chartTypes = [
            { label: 'Bar', value: 'bar' },
            { label: 'Line', value: 'line' }, { label: 'Doughnut', value: 'doughnut' },
            { label: 'Pie', value: 'pie' }, { label: 'Table', value: 'table' }
        ];
        this.dwellingList = [
            { label: 'All', value: 'all' }, { label: 'A101', value: 'A101' },
            { label: 'B101', value: 'B101' }, { label: 'C101', value: 'C101' }
        ];
    }
    EstateWeeklyConsumption.prototype.ngOnInit = function () {
        this.hdr = 'Estate Weekly Water Consumption';
        console.log("Weekly Called");
        this.chartType = 'bar';
        this.dwelling = 'all';
        this.datatable = false;
        this.setOptions();
        this.basicData = {
            labels: [
                '00', '01', '02', '03', '04', '05', '06'
            ],
            datasets: [
                {
                    label: 'Weekly Water Consumption',
                    data: [540, 325, 702, 620, 540, 325, 702],
                    backgroundColor: ['rgba(255, 159, 64, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(153, 102, 255, 0.2)'],
                }
            ]
        };
        __LOCAL ? this.getDummyWeeklyData() : this.getWeeklyData();
    };
    EstateWeeklyConsumption.prototype.setOptions = function () {
        var documentStyle = getComputedStyle(document.documentElement);
        var textColor = documentStyle.getPropertyValue('--text-color');
        var textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        var surfaceBorder = documentStyle.getPropertyValue('--surface-border');
        this.basicOptions = {
            plugins: {
                legend: {
                    labels: { color: textColor }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: { color: textColorSecondary },
                    grid: { color: surfaceBorder, drawBorder: false }
                },
                x: {
                    ticks: { color: textColorSecondary },
                    grid: { color: surfaceBorder, drawBorder: false }
                }
            }
        };
    };
    EstateWeeklyConsumption.prototype.getDummyWeeklyData = function () {
        var _this = this;
        this.loading = true;
        var params = [];
        this.service.getDummyData("./assets/data/weekly.json", this.callBackWeeklyData.bind(this), { params: params });
        setTimeout(function () { _this.loading = false; }, 30000);
    };
    EstateWeeklyConsumption.prototype.getWeeklyData = function () {
    };
    EstateWeeklyConsumption.prototype.callBackWeeklyData = function (_data) {
        var _this = this;
        // console.log(_data);
        this.labels = [];
        this.data = [];
        this.weeklyData = _data;
        _data.forEach(function (ele) {
            // let d1 = ele;
            _this.labels.push(_common_util__WEBPACK_IMPORTED_MODULE_6__["Util"].GetValue(ele, 'day'));
            _this.data.push(_common_util__WEBPACK_IMPORTED_MODULE_6__["Util"].GetValue(ele, 'value'));
        });
        this.basicData.labels = this.labels;
        this.basicData.datasets[0].data = this.data;
        this.datatable = this.chartType == 'table' ? true : false;
        if (!this.datatable) {
            this.chart.reinit();
        }
        ;
        this.loading = false;
    };
    EstateWeeklyConsumption.prototype.changeChart = function (event) {
        var _this = this;
        console.log("ChartType Changed", event);
        this.basicData.type = this.chartType; //doughnut, Pie, Line
        this.datatable = this.chartType == 'table' ? true : false;
        setTimeout(function () {
            if (!_this.datatable) {
                _this.chart.reinit();
            }
            ;
        }, 100);
    };
    EstateWeeklyConsumption.prototype.changeDwelling = function (event) {
        console.log("Dwelling Changed", event);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('chart'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", primeng_components_chart_chart__WEBPACK_IMPORTED_MODULE_4__["UIChart"])
    ], EstateWeeklyConsumption.prototype, "chart", void 0);
    EstateWeeklyConsumption = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'menu-weekly',
            template: __webpack_require__(/*! ./weekly.component.html */ "./src/app/estate/weekly.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], primeng_primeng__WEBPACK_IMPORTED_MODULE_3__["ConfirmationService"]])
    ], EstateWeeklyConsumption);
    return EstateWeeklyConsumption;
}());



/***/ }),

/***/ "./src/app/vrtl-menu/vrtl-menu.component.html":
/*!****************************************************!*\
  !*** ./src/app/vrtl-menu/vrtl-menu.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\n<div *ngIf=\"displayMenu\">\n    <p-menubar [model]=\"items\">\n        <input type=\"text\" pInputText placeholder=\"Search\">\n        <button pButton label=\"Logout\" icon=\"fa-sign-out\"></button>\n    </p-menubar>\n</div>\n-->\n\n<nav class=\"navbar navbar-inverse\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <a href=\"#\" class=\"navbar-brand\">Aquesa - Support Tool</a>\n    </div>\n\n    <div class=\"collapse navbar-collapse\" *ngIf=\"auth.isAuthenticated()\">\n      <ul class=\"nav navbar-nav\" *ngIf=\"!estateSupport\">\n\n        <li class=\"dropdown\" tf-dropdown >\n          <a class=\"dropdown-toggle\" role=\"button\">Communities<span class=\"caret\"></span></a>\n          <ul class=\"dropdown-menu\">\n            <li><a routerLink=\"/community/\">Community List</a></li>\n            <li><hr/></li>\n            <li><a routerLink=\"/comtysetup/\">Dwelling Setup</a></li>\n          </ul>\n        </li>\n\n        <li><a routerLink=\"/notification/\">Notifications</a></li>\n\n      </ul>\n\n\n      <ul class=\"nav navbar-nav\" *ngIf=\"estateSupport\">\n        <li class=\"dropdown\" tf-dropdown >\n          <a class=\"dropdown-toggle\" role=\"button\">Setup<span class=\"caret\"></span></a>\n          <ul class=\"dropdown-menu\">\n            <li><a routerLink=\"/dwellings/\">Dwellings</a></li>\n            <li><a routerLink=\"/users/\">Users</a></li>\n          </ul>\n        </li>\n\n        <li class=\"dropdown\" tf-dropdown >\n          <a class=\"dropdown-toggle\" role=\"button\">Maintainance<span class=\"caret\"></span></a>\n          <ul class=\"dropdown-menu\">\n            <li><a routerLink=\"/setup/\">Operate Valve</a></li>\n          </ul>\n        </li>\n      <!-- </ul>\n\n      <ul class=\"nav navbar-nav\" *ngIf=\"estateSupport\"> -->\n        <li class=\"dropdown\" tf-dropdown >\n          <a class=\"dropdown-toggle\" role=\"button\">Reports<span class=\"caret\"></span></a>\n          <ul class=\"dropdown-menu\">\n            <li><a routerLink=\"/daily/\">Daily Usage</a></li>\n            <li><a routerLink=\"/weekly/\">Weekly Usage</a></li>\n            <li><a routerLink=\"/monthly/\">Monthly Usage</a></li>\n          </ul>\n        </li>\n\n        <li class=\"dropdown\" tf-dropdown >\n          <a class=\"dropdown-toggle\" role=\"button\">Billing<span class=\"caret\"></span></a>\n          <ul class=\"dropdown-menu\">\n            <li><a routerLink=\"/billingsetup/\">Billing Setup</a></li>\n            <li><a routerLink=\"/monthlybilling/\">Monthly Billing</a></li>\n          </ul>\n        </li>\n\n      </ul>\n\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li class=\"dropdown\" tf-dropdown>\n          <a class=\"dropdown-toggle\" role=\"button\">{{ userName }} <span class=\"caret\"></span></a>\n          <ul class=\"dropdown-menu\">\n            <li><a style=\"cursor: pointer;\" (click)=\"onLogout()\">Quit</a></li>\n          </ul>\n        </li>\n      </ul>\n\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/vrtl-menu/vrtl-menu.component.ts":
/*!**************************************************!*\
  !*** ./src/app/vrtl-menu/vrtl-menu.component.ts ***!
  \**************************************************/
/*! exports provided: VrtlMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VrtlMenuComponent", function() { return VrtlMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _auth_authtoken__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth/authtoken */ "./src/app/auth/authtoken.ts");





//declare var showMenu: boolean;
var VrtlMenuComponent = /** @class */ (function () {
    function VrtlMenuComponent(auth, router, aToken) {
        var _this = this;
        this.auth = auth;
        this.router = router;
        this.aToken = aToken;
        this.aToken.userEmitter.subscribe(function (_token) {
            console.log("atoken.userEmitter :", _token);
            _this.user = _token;
            if (_this.user != null && _this.user != undefined) {
                // this.userName = this.user.firstName + ' ' + this.user.lastName;
                _this.userName = _this.user.customerId + ' ' + _this.user.estateId;
                _this.estateSupport = _this.user.estateSupport;
            }
        });
    }
    VrtlMenuComponent.prototype.ngOnInit = function () {
        this.userName = '';
        this.estateSupport = true;
    };
    VrtlMenuComponent.prototype.onLogout = function () {
        this.auth.logout();
        this.user = null;
        this.userName = '';
        this.router.navigate(['/']);
    };
    VrtlMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'vrtl-menu',
            template: __webpack_require__(/*! ./vrtl-menu.component.html */ "./src/app/vrtl-menu/vrtl-menu.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _auth_authtoken__WEBPACK_IMPORTED_MODULE_4__["AuthToken"]])
    ], VrtlMenuComponent);
    return VrtlMenuComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\DVJS_Projects\Angular\AquesaSupport\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map