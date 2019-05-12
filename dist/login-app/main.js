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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/UserService.ts":
/*!********************************!*\
  !*** ./src/app/UserService.ts ***!
  \********************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.getUser = function () {
        return this.http.get('http://192.168.21.1:8088/api/Users').map(function (res) { return res.json(); });
    };
    UserService.prototype.postUser = function (User) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        return this.http.post('http://localhost:64574/api/User/Post', User, options).map(function (res) { return res.json(); });
    };
    UserService.prototype.deleteUser = function (name) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        return this.http.delete('http://localhost:64574/api/User/Delete?Name=' + name, options).map(function (res) { return res.json(); });
    };
    UserService.prototype.updateUser = function (User) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        // let body = JSON.stringify(User);
        return this.http.put('http://localhost:64574/api/User/Put', User, options).map(function (res) { return res.json(); });
    };
    UserService.prototype.isLoggedIn = function () {
        if (localStorage.getItem('userToken')) {
            return true;
        }
        else {
            return false;
        }
    };
    UserService.prototype.getProduct = function () {
        return this.http.get('http://192.168.21.1:8088/api/Product').map(function (res) { return res.json(); });
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/_services/index.ts":
/*!************************************!*\
  !*** ./src/app/_services/index.ts ***!
  \************************************/
/*! exports provided: PagerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pager_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pager.service */ "./src/app/_services/pager.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PagerService", function() { return _pager_service__WEBPACK_IMPORTED_MODULE_0__["PagerService"]; });




/***/ }),

/***/ "./src/app/_services/pager.service.ts":
/*!********************************************!*\
  !*** ./src/app/_services/pager.service.ts ***!
  \********************************************/
/*! exports provided: PagerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagerService", function() { return PagerService; });
var PagerService = /** @class */ (function () {
    function PagerService() {
    }
    PagerService.prototype.getPager = function (totalItems, currentPage, pageSize) {
        if (currentPage === void 0) { currentPage = 1; }
        if (pageSize === void 0) { pageSize = 9; }
        // calculate total pages
        var totalPages = Math.ceil(totalItems / pageSize);
        // ensure current page isn't out of range
        if (currentPage < 1) {
            currentPage = 1;
        }
        else if (currentPage > totalPages) {
            currentPage = totalPages;
        }
        var startPage, endPage;
        if (totalPages <= 3) {
            // less than 10 total pages so show all
            startPage = 1;
            endPage = totalPages;
        }
        else {
            // more than 10 total pages so calculate start and end pages
            if (currentPage <= 2) {
                startPage = 1;
                endPage = 3;
            }
            else if (currentPage + 1 >= totalPages) {
                startPage = totalPages - 2;
                endPage = totalPages;
            }
            else {
                startPage = currentPage - 1;
                endPage = currentPage + 1;
            }
        }
        // calculate start and end item indexes
        var startIndex = (currentPage - 1) * pageSize;
        var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
        // create an array of pages to ng-repeat in the pager control
        var pages = Array.from(Array((endPage + 1) - startPage).keys()).map(function (i) { return startPage + i; });
        // return object with all pager properties required by the view
        return {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        };
    };
    return PagerService;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button{\r\n    padding-left:10px;\r\n}\r\n.example-header{\r\n    background-color: cadetblue;\r\n    background-size: 1px;\r\n}\r\nmat-sidenav-container{\r\n    background-color: cadetblue;\r\n}\r\nmat-sidenav{\r\n    padding-top:10px;\r\n    padding-right: 6px;\r\n    padding-left : 6px;\r\n}\r\n.option{\r\n    display: inline-flex;\r\n    vertical-align: middle;\r\n}\r\n/* mat-toolbar{\r\n    padding: 0px;\r\n} */\r\nbutton.menu{\r\n    padding-top: 13px;\r\n    padding-bottom: 13px;\r\n    padding-left: 0px;\r\n    padding-right: 0px;\r\n    /* border: 1px solid #e5e5e5;\r\n    -webkit-border-radius: 5px;\r\n        -moz-border-radius: 5px;\r\n            border-radius: 5px;\r\n    -webkit-box-shadow: 0 1px 2px rgba(0,0,0,.05);\r\n        -moz-box-shadow: 0 1px 2px rgba(0,0,0,.05);\r\n            box-shadow: 0 1px 2px rgba(0,0,0,.05); */\r\n}\r\nbutton.close{\r\n    padding-left: 0px;\r\n}\r\nimg.language{\r\n    padding-right:10px;\r\n}\r\nlabel.language{\r\n    display: inline-flex;\r\n    vertical-align: middle;\r\n    padding-right: 10px;\r\n}\r\nmat-toolbar .loginregister{\r\n    float:right;\r\n    position: relative;\r\n}\r\nmat-toolbar.mat-toolbar-single-row{\r\n    border: 1px solid #e5e5e5;\r\n    border-radius: 5px;\r\n    box-shadow: 0 1px 2px rgba(0,0,0,.05);\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar class=\"example-header\">\r\n  <mat-sidenav-container class=\"example-container\">\r\n    <button mat-button (click)=\"sidenav.toggle()\" class=\"menu\"><mat-icon class=\"menu-icon\">menu</mat-icon></button>\r\n  </mat-sidenav-container>\r\n  <nav class=\"navbar\">\r\n\r\n    <!-- logo -->\r\n    <div class=\"navbar-brand\" (click)=\"home()\">\r\n      <a class=\"navbar-item\">\r\n        <img src=\"assets/img/karma.png\">\r\n      </a>\r\n    </div>\r\n  </nav>\r\n  <div class=\"loginregister\">\r\n      <button class=\"btn btn-large btn-success\" (click)=\"login()\">{{ \"singinbutton\" | translate }}</button>             &nbsp;\r\n      <button class=\"btn btn-large btn-success\" (click)=\"register()\">{{ \"registerbutton\" | translate }}</button>&nbsp;\r\n  </div>\r\n</mat-toolbar>\r\n\r\n<mat-sidenav #sidenav [mode]=\"mode.over\">\r\n  <p><button mat-button (click)=\"sidenav.toggle()\" class=\"close\"><mat-icon>close</mat-icon></button></p>\r\n  <p>\r\n    <mat-radio-group class=\"example-radio-group\" [formControl]=\"mode\">\r\n      <label>FEATURES</label><br>\r\n        <label class=\"option\" (click)=\"home()\"><mat-icon (click)=\"home()\">home</mat-icon> HOME</label> <br>\r\n        <label class=\"option\"(click)=\"home()\"><mat-icon (click)=\"home()\"> local_grocery_store</mat-icon> PRODUCTS</label> <br>\r\n        <label class=\"option\"><mat-icon>add_shopping_cart</mat-icon> YOUR BAG</label> <br>\r\n        <label class=\"option\"><mat-icon>account_balance_wallet</mat-icon> PURCHASE</label> <br>\r\n        <label class=\"option\"><img src=\"assets/image/favorite.png\"> FAVORITE</label> <br>\r\n      <label>CONTACT</label> <br>\r\n        <label class=\"option\"><mat-icon>phone</mat-icon> USER CASE</label> <br>\r\n        <label class=\"option\"(click)=\"gmail()\"><img src=\"assets/img/gmail.png\"> GMAIL</label> <br>\r\n        <label class=\"option\"(click)=\"git()\"><img src=\"assets/img/github-logo.png\"> GIT</label> <br>\r\n      <label>LANGUAGE</label> <br>\r\n      <footer>\r\n        <label class=\"language\" (click)=\"changeLanguage('en')\"><img src=\"assets/img/united-kingdom.png\" class=\"language\">EN</label> <br>\r\n        <label class=\"language\" (click)=\"changeLanguage('de')\"><img src=\"assets/img/germany.png\" class=\"language\">DE</label>\r\n      </footer>\r\n    </mat-radio-group>\r\n  </p>\r\n</mat-sidenav>\r\n<router-outlet></router-outlet>\r\n<mat-toolbar class=\"example-header\"></mat-toolbar>\r\n<!-- <body background=\"assets/image/back.jpg\"><router-outlet></router-outlet></body> -->"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var localize_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! localize-router */ "./node_modules/localize-router/index.js");
/* harmony import */ var localize_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(localize_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppComponent = /** @class */ (function () {
    function AppComponent(translate, router, localize) {
        this.router = router;
        this.localize = localize;
        this.mode = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('over');
        this.translate = translate;
        this.router.config = this.localize.parser.routes;
    }
    AppComponent.prototype.changeLanguage = function (language) {
        this.switchLanguage(language);
        this.updateUrl();
        console.log(window.location.pathname.slice(4));
        console.log(window.location.pathname.slice(4));
    };
    AppComponent.prototype.switchLanguage = function (language) {
        this.localize.changeLanguage(language);
    };
    AppComponent.prototype.updateUrl = function () {
        if (window.location.pathname.slice(4) == 'login' || window.location.pathname.slice(4) == 'anmeldung') {
            this.router.navigate([this.localize.translateRoute('/login')]);
        }
        else if (window.location.pathname.slice(4) == 'register' || window.location.pathname.slice(4) == 'registrieren') {
            this.router.navigate([this.localize.translateRoute('/register')]);
        }
        else if (window.location.pathname.slice(4) == 'page' || window.location.pathname.slice(4) == 'seite') {
            this.router.navigate([this.localize.translateRoute('/page')]);
        }
    };
    AppComponent.prototype.home = function () {
        this.router.navigate([this.localize.translateRoute('/webpage')]);
    };
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.register = function () {
        this.router.navigate([this.localize.translateRoute('/register')]);
    };
    AppComponent.prototype.login = function () {
        this.router.navigate([this.localize.translateRoute('/login')]);
    };
    AppComponent.prototype.gmail = function () {
        location.href = 'https://gmail.com';
    };
    AppComponent.prototype.git = function () {
        location.href = 'https://github.com/MSM303';
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], localize_router__WEBPACK_IMPORTED_MODULE_3__["LocalizeRouterService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: HttpLoaderFactory, createTranslateLoader, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function() { return createTranslateLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_app_login_app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login-app/login-app.component */ "./src/app/login-app/login-app.component.ts");
/* harmony import */ var _data_binding_data_binding_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./data-binding/data-binding.component */ "./src/app/data-binding/data-binding.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _validation_control_messages_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./validation/control-messages.component */ "./src/app/validation/control-messages.component.ts");
/* harmony import */ var _page_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./page/page.component */ "./src/app/page/page.component.ts");
/* harmony import */ var _UserService__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./UserService */ "./src/app/UserService.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _page_edit_page_edit_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./page-edit/page-edit.component */ "./src/app/page-edit/page-edit.component.ts");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./auth/auth.guard */ "./src/app/auth/auth.guard.ts");
/* harmony import */ var _guards_confirmation_confirmation_guard__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./guards/confirmation/confirmation.guard */ "./src/app/guards/confirmation/confirmation.guard.ts");
/* harmony import */ var _auth_auth2_guard__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./auth/auth2.guard */ "./src/app/auth/auth2.guard.ts");
/* harmony import */ var localize_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! localize-router */ "./node_modules/localize-router/index.js");
/* harmony import */ var localize_router__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(localize_router__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var localize_router_http_loader__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! localize-router-http-loader */ "./node_modules/localize-router-http-loader/index.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/esm5/ngx-translate-http-loader.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _say_hi_say_hi_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./say-hi/say-hi.component */ "./src/app/say-hi/say-hi.component.ts");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _webpage_webpage_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./webpage/webpage.component */ "./src/app/webpage/webpage.component.ts");
/* harmony import */ var _productdetails_productdetails_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./productdetails/productdetails.component */ "./src/app/productdetails/productdetails.component.ts");
/* harmony import */ var _gallary_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./gallary.service */ "./src/app/gallary.service.ts");
/* harmony import */ var _gallary_directive__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./gallary.directive */ "./src/app/gallary.directive.ts");
/* harmony import */ var _services_pager_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./_services/pager.service */ "./src/app/_services/pager.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _detailproduct_detailproduct_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./detailproduct/detailproduct.component */ "./src/app/detailproduct/detailproduct.component.ts");
/* harmony import */ var jw_angular_social_buttons__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! jw-angular-social-buttons */ "./node_modules/jw-angular-social-buttons/lib/jw-angular-social-buttons.module.js");
/* harmony import */ var jw_angular_social_buttons__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(jw_angular_social_buttons__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var ngx_embed_video__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ngx-embed-video */ "./node_modules/ngx-embed-video/dist/index.js");
/* harmony import */ var ngx_embed_video__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(ngx_embed_video__WEBPACK_IMPORTED_MODULE_35__);
/* harmony import */ var ngx_facebook__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ngx-facebook */ "./node_modules/ngx-facebook/dist/esm/index.js");
/* harmony import */ var primeng_carousel__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! primeng/carousel */ "./node_modules/primeng/carousel.js");
/* harmony import */ var primeng_carousel__WEBPACK_IMPORTED_MODULE_37___default = /*#__PURE__*/__webpack_require__.n(primeng_carousel__WEBPACK_IMPORTED_MODULE_37__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



























// import { Observable } from 'rxjs';


// import { FlexLayoutModule } from "@angular/flex-layout";











var routes = [
    { path: 'login', component: _login_app_login_app_component__WEBPACK_IMPORTED_MODULE_7__["LoginAppComponent"], canActivate: [_auth_auth2_guard__WEBPACK_IMPORTED_MODULE_18__["AuthGuard2"]] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_9__["RegisterComponent"] },
    { path: 'webpage', component: _webpage_webpage_component__WEBPACK_IMPORTED_MODULE_27__["WebpageComponent"] },
    { path: 'databinding', component: _data_binding_data_binding_component__WEBPACK_IMPORTED_MODULE_8__["DataBindingComponent"] },
    { path: 'page', component: _page_page_component__WEBPACK_IMPORTED_MODULE_11__["PageComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]], },
    { path: 'pageedit', component: _page_edit_page_edit_component__WEBPACK_IMPORTED_MODULE_15__["PageEditComponent"] },
    { path: 'detailproduct', component: _detailproduct_detailproduct_component__WEBPACK_IMPORTED_MODULE_33__["DetailproductComponent"] },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
];
function HttpLoaderFactory(translate, location, settings, http) {
    return new localize_router_http_loader__WEBPACK_IMPORTED_MODULE_20__["LocalizeRouterHttpLoader"](translate, location, settings, http);
}
var createTranslateLoader = function (http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_22__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _login_app_login_app_component__WEBPACK_IMPORTED_MODULE_7__["LoginAppComponent"],
                _data_binding_data_binding_component__WEBPACK_IMPORTED_MODULE_8__["DataBindingComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_9__["RegisterComponent"],
                _validation_control_messages_component__WEBPACK_IMPORTED_MODULE_10__["ControlMessagesComponent"],
                _page_page_component__WEBPACK_IMPORTED_MODULE_11__["PageComponent"],
                _page_edit_page_edit_component__WEBPACK_IMPORTED_MODULE_15__["PageEditComponent"],
                _page_page_component__WEBPACK_IMPORTED_MODULE_11__["DialogOverviewExampleDialog"],
                _say_hi_say_hi_component__WEBPACK_IMPORTED_MODULE_24__["SayHiComponent"],
                _webpage_webpage_component__WEBPACK_IMPORTED_MODULE_27__["WebpageComponent"],
                _productdetails_productdetails_component__WEBPACK_IMPORTED_MODULE_28__["ProductdetailsComponent"],
                _gallary_directive__WEBPACK_IMPORTED_MODULE_30__["GallaryDirective"],
                _detailproduct_detailproduct_component__WEBPACK_IMPORTED_MODULE_33__["DetailproductComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes),
                _angular_http__WEBPACK_IMPORTED_MODULE_4__["HttpModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatPaginatorModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatCheckboxModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatDialogModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__["MatMenuModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_23__["HttpClientModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatTreeModule"],
                jw_angular_social_buttons__WEBPACK_IMPORTED_MODULE_34__["JwSocialButtonsModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__["TranslateLoader"],
                        useFactory: createTranslateLoader,
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_23__["HttpClient"]]
                    }
                }),
                // LocalizeRouterModule.forRoot(routes)
                localize_router__WEBPACK_IMPORTED_MODULE_19__["LocalizeRouterModule"].forRoot(routes, {
                    parser: {
                        provide: localize_router__WEBPACK_IMPORTED_MODULE_19__["LocalizeParser"],
                        useFactory: HttpLoaderFactory,
                        deps: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__["TranslateService"], _angular_common__WEBPACK_IMPORTED_MODULE_26__["Location"], localize_router__WEBPACK_IMPORTED_MODULE_19__["LocalizeRouterSettings"], _angular_common_http__WEBPACK_IMPORTED_MODULE_23__["HttpClient"]]
                    }
                }),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_32__["NgbModule"],
                ngx_embed_video__WEBPACK_IMPORTED_MODULE_35__["EmbedVideo"].forRoot(),
                ngx_facebook__WEBPACK_IMPORTED_MODULE_36__["FacebookModule"].forRoot(),
                primeng_carousel__WEBPACK_IMPORTED_MODULE_37__["CarouselModule"],
            ],
            entryComponents: [_page_page_component__WEBPACK_IMPORTED_MODULE_11__["PageComponent"], _page_page_component__WEBPACK_IMPORTED_MODULE_11__["DialogOverviewExampleDialog"]],
            providers: [_UserService__WEBPACK_IMPORTED_MODULE_12__["UserService"], _auth_auth_guard__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"], _guards_confirmation_confirmation_guard__WEBPACK_IMPORTED_MODULE_17__["ConfirmationGuard"], _auth_auth2_guard__WEBPACK_IMPORTED_MODULE_18__["AuthGuard2"], _gallary_service__WEBPACK_IMPORTED_MODULE_29__["GallaryService"], _services_pager_service__WEBPACK_IMPORTED_MODULE_31__["PagerService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.guard.ts":
/*!************************************!*\
  !*** ./src/app/auth/auth.guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard, AuthGuard2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard2", function() { return AuthGuard2; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _UserService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../UserService */ "./src/app/UserService.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _login_app_login_app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../login-app/login-app.component */ "./src/app/login-app/login-app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, userService) {
        var _this = this;
        this.router = router;
        this.userService = userService;
        this.data = Object.assign(_login_app_login_app_component__WEBPACK_IMPORTED_MODULE_4__["User"]);
        this.User = [];
        this.userService.getUser().subscribe(function (data) {
            _this.User = data;
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](_this.User);
            // console.log(data)
        });
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        var pathname = window.location.pathname;
        // if(pathname == '/login' && localStorage.getItem('userToken')){
        if (localStorage.getItem('userToken') != null) {
            // // logged in so return true
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
        // if(this.userService.isLoggedIn()){
        //   console.log('aaaaaa')
        //   return true;
        // }
        // else {
        //   window.alert("You dont have permission");
        //   return false;
        // }
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _UserService__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], AuthGuard);
    return AuthGuard;
}());

var AuthGuard2 = /** @class */ (function () {
    function AuthGuard2(router, userService) {
        var _this = this;
        this.router = router;
        this.userService = userService;
        this.data = Object.assign(_login_app_login_app_component__WEBPACK_IMPORTED_MODULE_4__["User"]);
        this.User = [];
        this.userService.getUser().subscribe(function (data) {
            _this.User = data;
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](_this.User);
            // console.log(data)
        });
    }
    AuthGuard2.prototype.canActivate = function (next, state) {
        // if(!this.userService.isLoggedIn()){
        //     return true;
        // }
        // else {
        //     window.alert("Dont move");
        //     return false;
        // }
        if (localStorage.getItem('userToken') == null)
            return true;
        this.router.navigate(['/page']);
        return false;
    };
    return AuthGuard2;
}());



/***/ }),

/***/ "./src/app/auth/auth2.guard.ts":
/*!*************************************!*\
  !*** ./src/app/auth/auth2.guard.ts ***!
  \*************************************/
/*! exports provided: AuthGuard2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard2", function() { return AuthGuard2; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _UserService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../UserService */ "./src/app/UserService.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _login_app_login_app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../login-app/login-app.component */ "./src/app/login-app/login-app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthGuard2 = /** @class */ (function () {
    function AuthGuard2(router, userService) {
        var _this = this;
        this.router = router;
        this.userService = userService;
        this.data = Object.assign(_login_app_login_app_component__WEBPACK_IMPORTED_MODULE_4__["User"]);
        this.User = [];
        this.userService.getUser().subscribe(function (data) {
            _this.User = data;
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](_this.User);
            // console.log(data)
        });
    }
    AuthGuard2.prototype.canActivate = function (next, state) {
        // if(!this.userService.isLoggedIn()){
        //     return true;
        // }
        // else {
        //     window.alert("Dont move");
        //     return false;
        // }
        if (localStorage.getItem('userToken') == null)
            return true;
        this.router.navigate(['/page']);
        return false;
    };
    AuthGuard2 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _UserService__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], AuthGuard2);
    return AuthGuard2;
}());



/***/ }),

/***/ "./src/app/data-binding/data-binding.component.css":
/*!*********************************************************!*\
  !*** ./src/app/data-binding/data-binding.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "td{\r\n    width:100px;\r\n    text-align: center\r\n}"

/***/ }),

/***/ "./src/app/data-binding/data-binding.component.html":
/*!**********************************************************!*\
  !*** ./src/app/data-binding/data-binding.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div *ngFor = 'let data of Data'>{{data.name + data.pass}}</div>\n<div *ngFor = 'let data of Data'>\n  <table border=\"0.5\" width=\"150\" height=\"50\">\n    <tr>\n    <td bgcolor=\"yellow\">{{data.name}} </td>\n    <td>{{data.pass}}</td>\n    </tr>\n  </table>\n</div> -->\n\n\n<div class=\"matatable\">\n    <mat-form-field>\n        <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n      </mat-form-field>\n  <table mat-table class=\"mat-table\"[dataSource]=\"dataSource\" matSort >\n\n      <!-- <ng-container matColumnDef=\"select\">\n          <th mat-header-cell *matHeaderCellDef>\n            <mat-checkbox (change)=\"$event ? masterToggle() : null\"\n                          [checked]=\"selection.hasValue() && isAllSelected()\"\n                          [indeterminate]=\"selection.hasValue() && !isAllSelected()\">\n            </mat-checkbox>\n          </th>\n          <td mat-cell *matCellDef=\"let row\">\n            <mat-checkbox (click)=\"$event.stopPropagation()\"\n                          (change)=\"$event ? selection.toggle(row) : null\"\n                          [checked]=\"selection.isSelected(row)\">\n            </mat-checkbox>\n          </td>\n        </ng-container> -->\n\n    <ng-container matColumnDef=\"Name\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\n      <td mat-cell *matCellDef=\"let User\">\n         <mat-checkbox>{{User.Name}} </mat-checkbox>\n        </td>\n    </ng-container>\n    <ng-container matColumnDef=\"Email\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Email </th>\n      <td mat-cell *matCellDef=\"let User\"> {{User.Email}} </td>\n    </ng-container>\n    <ng-container matColumnDef=\"Username\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Username </th>\n      <td mat-cell *matCellDef=\"let User\"> {{User.Username}} </td>\n    </ng-container>\n    <ng-container matColumnDef=\"Password\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Password </th>\n      <td mat-cell *matCellDef=\"let User\"> {{User.Password}} </td>\n    </ng-container>\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" (click)=\"onRowClicked(row)\"></tr>\n  </table>\n    <mat-paginator \n      [pageSizeOptions]=\"[5,10,15]\"\n      showFirstLastButtons\n    ></mat-paginator>\n    <button class=\"btn btn-large btn-primary\" (click)=\"logout()\">Log out</button>\n    &nbsp;\n    <button class=\"btn btn-large btn-primary\" (click)=\"register()\">Register</button>\n</div>"

/***/ }),

/***/ "./src/app/data-binding/data-binding.component.ts":
/*!********************************************************!*\
  !*** ./src/app/data-binding/data-binding.component.ts ***!
  \********************************************************/
/*! exports provided: DataBindingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataBindingComponent", function() { return DataBindingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _UserService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../UserService */ "./src/app/UserService.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { UserService } from '../UserService';
// import { User } from '../login-app/login-app.component';
// @Component({
//   selector: 'app-data-binding',
//   templateUrl: './data-binding.component.html',
//   styleUrls: ['./data-binding.component.css']
// })
// export class DataBindingComponent implements OnInit {
//   Data = [
//     new Data("Minh","123"),
//     new Data("Hiếu","123"),
//     new Data("Hiếu","123")
//   ]
//   constructor() { }
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//   ngOnInit() {
//   }
// }
// export class Data{
//   constructor(public name:string, public pass:string){
//   }
// }






var DataBindingComponent = /** @class */ (function () {
    function DataBindingComponent(router, Userservice) {
        var _this = this;
        this.router = router;
        this.Userservice = Userservice;
        this.User = [];
        this.displayedColumns = ['Name', 'Email', 'Username', 'Password'];
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__["SelectionModel"](true, []);
        this.Userservice.getUser().subscribe(function (data) {
            _this.User = data;
            console.log(data);
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](_this.User);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        });
    }
    DataBindingComponent.prototype.isAllSelected = function () {
        var numSelected = this.selection.selected.length;
        var numRows = this.dataSource.data.length;
        return numSelected === numRows;
    };
    DataBindingComponent.prototype.masterToggle = function () {
        var _this = this;
        this.isAllSelected() ?
            this.selection.clear() :
            this.dataSource.data.forEach(function (row) { return _this.selection.select(row); });
    };
    DataBindingComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    DataBindingComponent.prototype.ngOnInit = function () {
    };
    DataBindingComponent.prototype.onRowClicked = function (row) {
        console.log('Row clicked: ', row);
    };
    DataBindingComponent.prototype.register = function () {
        this.router.navigate(['register']);
    };
    DataBindingComponent.prototype.logout = function () {
        this.router.navigate(['login']);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], DataBindingComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], DataBindingComponent.prototype, "sort", void 0);
    DataBindingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page',
            template: __webpack_require__(/*! ./data-binding.component.html */ "./src/app/data-binding/data-binding.component.html"),
            styles: [__webpack_require__(/*! ./data-binding.component.css */ "./src/app/data-binding/data-binding.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _UserService__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], DataBindingComponent);
    return DataBindingComponent;
}());



/***/ }),

/***/ "./src/app/detailproduct/detailproduct.component.css":
/*!***********************************************************!*\
  !*** ./src/app/detailproduct/detailproduct.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-grid-tile{\r\n    border: 1px solid #e5e5e5;\r\n  border-radius: 5px;\r\n  box-shadow: 0 1px 2px rgba(0,0,0,.05);\r\n  margin-top:18px;\r\n  margin-bottom: 18px;\r\n}\r\nimg.imageslide{\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    max-height:70%;\r\n    max-width: 100%;\r\n    height: 360px;\r\n    width: 700px;\r\n  }\r\n/* .namedetails{\r\n    text-align: center;\r\n    max-height: 100%;\r\n    max-width: 100%;\r\n} */\r\n.example-card {\r\n    width: 100%;\r\n    height: 100%;\r\n    float: left;\r\n    padding: 0px;\r\n  }\r\n.sale{\r\n    color: red;\r\n    display: inline-flex;\r\n    text-align: middle;\r\n}\r\ndiv.col{\r\n    max-height:100%;\r\n    max-width: 100%;\r\n}\r\n.detail-card{\r\n    width: 100%;\r\n    height: 100%;\r\n    float: left;\r\n    padding: 0px;  \r\n}\r\nmat-card.video{\r\n    max-height:100%;\r\n    max-width: 100%;\r\n}\r\niframe{\r\n    height:500px;\r\n    width: 100%;\r\n}\r\ntable {\r\n    border: 1px solid #e2e2e2;\r\n    width: 100%;\r\n    position: relative;\r\n    max-width: 100%;\r\n    background-color: transparent;\r\n    display: table;\r\n    border-spacing: 0;\r\n    border-collapse: collapse;\r\n    display: table;\r\n    border-collapse: separate;\r\n    border-spacing: 2px;\r\n    border-color: grey;\r\n}\r\ntd{\r\n    border: 1px solid #e5e5e5;\r\n  border-radius: 5px;\r\n  box-shadow: 0 1px 2px rgba(0,0,0,.05);\r\n}\r\nmat-card.sideright{\r\n    max-height:100%;\r\n    max-width:100%;\r\n    height:1080px;\r\n    width: 319px;\r\n    float: left;\r\n    padding: 0px;\r\n}\r\nli{\r\n    width: 288px;\r\n    height:75px;\r\n    border-bottom: 1px solid grey;\r\n    position: relative;\r\n    margin-right: 16px;\r\n}\r\nul{\r\n    width: 319px;\r\n    padding: 0px;\r\n    list-style: none;\r\n    margin: 0px;\r\n}"

/***/ }),

/***/ "./src/app/detailproduct/detailproduct.component.html":
/*!************************************************************!*\
  !*** ./src/app/detailproduct/detailproduct.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-grid-list cols=\"8\" rowHeight=\"360px\">\n\n\t<mat-grid-tile [colspan]=\"5\" [rowspan]=\"1\">\n\t\t<ngb-carousel>\n\t\t\t<ng-template ngbSlide>\n\t\t\t\t<img src=\"https://manager.remaxvietnam.vn/asset/images/SanPham/phukiendienthoai/tainghe/tai-nghe-rb-s18/slide/tai-nghe-bluetooth-the-thao-remax-rb-s18-slide1-18062018163823.jpg\"\n\t\t\t\t alt=\"Random first slide\" class=\"imageslide\">\n\t\t\t\t<div class=\"carousel-caption\">\n\t\t\t\t\t<h3>First slide label</h3>\n\t\t\t\t</div>\n\t\t\t\t<!-- <button mat-button class=\"btn btn-warning\"><img src=\"assets/image/unfavorite.png\">Favorite</button> -->\n\t\t\t</ng-template>\n\t\t\t<ng-template ngbSlide>\n\t\t\t\t<img src=\"https://manager.remaxvietnam.vn/asset/images/SanPham/phukiendienthoai/tainghe/tai-nghe-rb-s18/slide/tai-nghe-bluetooth-the-thao-remax-rb-s18-slide2-18062018163825.jpg\"\n\t\t\t\t alt=\"Random second slide\" class=\"imageslide\">\n\t\t\t\t<div class=\"carousel-caption\">\n\t\t\t\t\t<h3>Second slide label</h3>\n\t\t\t\t</div>\n\t\t\t</ng-template>\n\t\t\t<ng-template ngbSlide>\n\t\t\t\t<img src=\"https://manager.remaxvietnam.vn/asset/images/SanPham/phukiendienthoai/tainghe/tai-nghe-rb-s18/slide/tai-nghe-bluetooth-the-thao-remax-rb-s18-slide5-18062018163830.jpg\"\n\t\t\t\t alt=\"Random third slide\" class=\"imageslide\">\n\t\t\t\t<div class=\"carousel-caption\">\n\t\t\t\t\t<h3>Third slide label</h3>\n\t\t\t\t</div>\n\t\t\t</ng-template>\n\t\t\t<ng-template ngbSlide>\n\t\t\t\t<img src=\"https://manager.remaxvietnam.vn/asset/images/SanPham/phukiendienthoai/tainghe/tai-nghe-rb-s18/slide/tai-nghe-bluetooth-the-thao-remax-rb-s18-slide6-18062018163832.jpg\"\n\t\t\t\t alt=\"Random four slide\" class=\"imageslide\">\n\t\t\t\t<div class=\"carousel-caption\">\n\t\t\t\t\t<h3>Four slide label</h3>\n\t\t\t\t</div>\n\t\t\t</ng-template>\n\t\t</ngb-carousel>\n\t</mat-grid-tile>\n\n\t<mat-grid-tile [colspan]=\"3\" [rowspan]=\"1\" *ngFor=\"let name of ids\" class=\"details\">\n\t\t<mat-card class=\"example-card\">\n\t\t\t<mat-card-header>\n\t\t\t\t<mat-card-title>\n\t\t\t\t\t<h1 class=\"namedetails\"><b>{{name.Name}}</b></h1>\n\t\t\t\t</mat-card-title>\n\t\t\t</mat-card-header>\n\t\t\t<mat-card-content>\n\t\t\t\t<div class=\"price\">\n\t\t\t\t\t<span class=\"sale\">\n\t\t\t\t\t\t<h4><b>{{name.Price}} $</b><img src=\"assets/image/hot-item.png\"><img src=\"assets/image/discount.png\"></h4>\n\t\t\t\t\t</span>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"guarantee\">\n\t\t\t\t\t<p><img src=\"assets/image/check.png\"><strong> Guarantee:</strong> 12 month, error 1 change 1</p>\n\t\t\t\t\t<p><img src=\"assets/image/check.png\"><strong> Contact:</strong> 0988.66.9798 (free of charge calls)</p>\n\t\t\t\t</div>\n\t\t\t</mat-card-content>\n\t\t\t<mat-card-content>\n\t\t\t\t<label>Số lượng</label>\n\t\t\t\t<p>\n\t\t\t\t\t<select id=\"optSoLuong\" class=\"form-control\">\n\t\t\t\t\t\t<option value=\"1\">1</option>\n\t\t\t\t\t\t<option value=\"2\">2</option>\n\t\t\t\t\t\t<option value=\"3\">3</option>\n\t\t\t\t\t\t<option value=\"4\">4</option>\n\t\t\t\t\t\t<option value=\"5\">5</option>\n\t\t\t\t\t</select>\n\t\t\t\t</p>\n\t\t\t\t<div id=\"addcart\" class=\"input-group\">\n\t\t\t\t\t<button class=\"btn btn-warning\"><img src=\"assets/image/cart.png\"><b> Add to cart</b></button>\n\t\t\t\t</div>\n\t\t\t</mat-card-content>\n\t\t\t<mat-card-content>\n\t\t\t\t<!-- <fb-like href=\"https://github.com/zyra/ngx-facebook\"></fb-like> -->\n\t\t\t\t<google-plus url={{url}}></google-plus>\n\t\t\t\t<tweet url={{url}} text={{text}}></tweet>\n\t\t\t</mat-card-content>\n\t\t</mat-card>\n\t</mat-grid-tile>\n\n\t<mat-grid-tile [colspan]=\"6\" [rowspan]=\"3\" *ngFor=\"let name of ids\">\n\t\t<mat-card class=\"detail-card\">\n\t\t\t<ngb-tabset>\n\t\t\t\t<ngb-tab title=\"Video\">\n\t\t\t\t\t<ng-template ngbTabContent>\n\t\t\t\t\t\t<b>\n\t\t\t\t\t\t\t<h3 style=\"color:lightgreen; text-align: center\">Product introduction video</h3>\n\t\t\t\t\t\t</b>\n\t\t\t\t\t\t<div style=\"text-align: center\">\n\t\t\t\t\t\t\tExperience a new level of music listening and conversation with the Remax TWS-1 headset with Bluetooth 4.2\n\t\t\t\t\t\t\ttechnology.\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div style=\"text-align: center\"><b>................. o0o .................</b></div>\n\t\t\t\t\t\t<mat-card>\n\t\t\t\t\t\t\t<iframe class=\"video\" src=\"https://www.youtube.com/embed/vaCs9hZB31Y\" frameborder=\"0\" allowfullscreen></iframe>\n\t\t\t\t\t\t</mat-card>\n\t\t\t\t\t</ng-template>\n\t\t\t\t</ngb-tab>\n\t\t\t\t<ngb-tab>\n\t\t\t\t\t<ng-template ngbTabTitle><b>Details</b></ng-template>\n\t\t\t\t\t<ng-template ngbTabContent>\n\t\t\t\t\t\t<b>\n\t\t\t\t\t\t\t<h3 style=\"color:lightgreen; text-align: center\">Product introduction</h3>\n\t\t\t\t\t\t</b>\n\t\t\t\t\t\t<div style=\"text-align: center\"><b>{{name.Details}}</b></div>\n\t\t\t\t\t\t<div class=\"text-center\">\n\t\t\t\t\t\t\t<img src=\"https://manager.remaxvietnam.vn/asset/images/SanPham/phukiendienthoai/tainghe/tai-nghe-tws-1/baiviet2/1-bo-2-tai-nghe-bluetooth-remax-tws-1-14082018093149.jpg\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div style=\"text-align: center\"></div>\n\t\t\t\t\t</ng-template>\n\t\t\t\t</ngb-tab>\n\t\t\t\t<ngb-tab title=\"Specifications\">\n\t\t\t\t\t<ng-template ngbTabContent>\n\t\t\t\t\t\tSpecifications\n\t\t\t\t\t\t<table>\n\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<td><strong>Product name:</strong></td>\n\t\t\t\t\t\t\t\t\t<td>1 set of 2 Remax TWS-1 Bluetooth headset&nbsp;</td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<td><strong>Model:</strong></td>\n\t\t\t\t\t\t\t\t\t<td>TWS-1</td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<td><strong>The firm:</strong></td>\n\t\t\t\t\t\t\t\t\t<td>Remax</td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<td><strong>Bluetooth connection:</strong></td>\n\t\t\t\t\t\t\t\t\t<td>4.2</td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<td><strong>Connection distance:</strong></td>\n\t\t\t\t\t\t\t\t\t<td>10m</td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<td><strong>Color:</strong></td>\n\t\t\t\t\t\t\t\t\t<td>Black/ Yellow</td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t</table>\n\t\t\t\t\t</ng-template>\n\t\t\t\t</ngb-tab>\n\t\t\t\t<ngb-tab title=\"Comment\">\n\t\t\t\t\t<ng-template ngbTabContent>\n\t\t\t\t\t\t<mat-card>1111\n\t\t\t\t\t\t</mat-card>\n\t\t\t\t\t</ng-template>\n\t\t\t\t</ngb-tab>\n\t\t\t\t<ngb-tab title=\"Other product\">\n\t\t\t\t\t<ng-template ngbTabContent>\n\t\t\t\t\t\t<ngb-carousel>\n\t\t\t\t\t\t\t<ng-template ngbSlide>\n\t\t\t\t\t\t\t\t<img src=\"assets/image/image1.jpg\" alt=\"Random first slide\" class=\"imageslide\">\n\t\t\t\t\t\t\t\t<div class=\"carousel-caption\">\n\t\t\t\t\t\t\t\t\t<mat-card-title *ngFor=\"let product of ids\">{{ product.Name }}</mat-card-title>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<!-- <button mat-button class=\"btn btn-warning\"><img src=\"assets/image/unfavorite.png\">Favorite</button> -->\n\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t<ng-template ngbSlide>\n\t\t\t\t\t\t\t\t<mat-grid-list [cols]=\"4\" rowHeight=\"1:1\" class=\"shoplist\">\n\t\t\t\t\t\t\t\t\t<mat-grid-tile *ngFor=\"let product of pagedItems\" class=\"shop\">\n\t\t\t\t\t\t\t\t\t\t<mat-card class=\"example-card\">\n\t\t\t\t\t\t\t\t\t\t\t<mat-card-header>\n\t\t\t\t\t\t\t\t\t\t\t\t<div mat-card-avatar class=\"example-header-image\"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t<mat-card-title>{{ product.Name }}</mat-card-title>\n\t\t\t\t\t\t\t\t\t\t\t\t<mat-card-subtitle>$ {{ product.Price }}</mat-card-subtitle>\n\t\t\t\t\t\t\t\t\t\t\t</mat-card-header>\n\t\t\t\t\t\t\t\t\t\t\t<img mat-card-image src=\"https://i.dell.com/sites/imagecontent/consumer/merchandizing/en/PublishingImages/Franchise-category/xpslt/cs1601g0012_xps_13_9365_2in1_pdp_module4.jpg\"\n\t\t\t\t\t\t\t\t\t\t\t alt=\"Photo of a Shiba Inu\" class=\"itemimage\">\n\t\t\t\t\t\t\t\t\t\t\t<mat-card-actions>\n\t\t\t\t\t\t\t\t\t\t\t\t<button mat-button class=\"btn btn-warning\"><img src=\"assets/image/unfavorite.png\">Favorite</button>\n\t\t\t\t\t\t\t\t\t\t\t\t<button mat-button class=\"btn btn-warning\" (click)=\"detail(product.Id)\"><img src=\"assets/image/loupe.png\">Detail</button>\n\t\t\t\t\t\t\t\t\t\t\t\t<button mat-button class=\"btn btn-warning\"><img src=\"assets/image/shopping-bag.png\"> Add to cart</button>\n\t\t\t\t\t\t\t\t\t\t\t</mat-card-actions>\n\t\t\t\t\t\t\t\t\t\t</mat-card>\n\t\t\t\t\t\t\t\t\t</mat-grid-tile>\n\t\t\t\t\t\t\t\t</mat-grid-list>\n\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t</ngb-carousel>\n\t\t\t\t\t</ng-template>\n\t\t\t\t</ngb-tab>\n\t\t\t</ngb-tabset>\n\t\t</mat-card>\n\t</mat-grid-tile>\n\n\t<mat-grid-tile [colspan]=\"2\" [rowspan]=\"3\">\n\t\t<mat-card class=\"sideright\">\n\t\t\t<mat-card-header>\n\t\t\t\t<ul>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a href=\"/chinh-sach-giao-hang.html\">\n\t\t\t\t\t\t\t<img src=\"assets/side/car.png\">\n\t\t\t\t\t\t\t<b>Giao hàng toàn quốc</b>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a href=\"/chinh-sach-giao-hang.html\">\n\t\t\t\t\t\t\t<img src=\"assets/side/shoppingcart.png\">\n\t\t\t\t\t\t\t<b>Miễn phí vận chuyển với tổng hóa đơn trên 800.000 Vnđ</b>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a href=\"/chinh-sach-bao-hanh.html\">\n\t\t\t\t\t\t\t<img src=\"assets/side/circle.png\">\n\t\t\t\t\t\t\t<b>Chính sách bảo hành 1 năm với hầu hết các mặt hàng</b>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a href=\"/trung-tam-ho-tro-khach-hang.html\">\n\t\t\t\t\t\t\t<img src=\"assets/side/check.png\">\n\t\t\t\t\t\t\t<b>Tư vấn sản phẩm dịch vụ: <br>08.00-22.00 hàng ngày</b>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\n\t\t\t\t</ul>\n\t\t\t\t<div class=\"fb-comments\" data-href=\"https://developers.facebook.com/docs/plugins/comments#configurator\"\n\t\t\t\t data-numposts=\"5\"></div>\n\t\t\t</mat-card-header>\n\t\t</mat-card>\n\t</mat-grid-tile>\n\n</mat-grid-list>"

/***/ }),

/***/ "./src/app/detailproduct/detailproduct.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/detailproduct/detailproduct.component.ts ***!
  \**********************************************************/
/*! exports provided: DetailproductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailproductComponent", function() { return DetailproductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _UserService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../UserService */ "./src/app/UserService.ts");
/* harmony import */ var _webpage_webpage_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../webpage/webpage.component */ "./src/app/webpage/webpage.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var localize_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! localize-router */ "./node_modules/localize-router/index.js");
/* harmony import */ var localize_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(localize_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var ngx_embed_video__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-embed-video */ "./node_modules/ngx-embed-video/dist/index.js");
/* harmony import */ var ngx_embed_video__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ngx_embed_video__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var ngx_facebook__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-facebook */ "./node_modules/ngx-facebook/dist/esm/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var DetailproductComponent = /** @class */ (function () {
    function DetailproductComponent(userService, router, localize, embedService, fb) {
        var _this = this;
        this.userService = userService;
        this.router = router;
        this.localize = localize;
        this.embedService = embedService;
        this.fb = fb;
        this.productdata = Object.assign(_webpage_webpage_component__WEBPACK_IMPORTED_MODULE_2__["Product"]);
        this.id = localStorage.getItem('id');
        this.idn = parseInt(this.id, 10);
        this.ids = [];
        var initParams = {
            appId: '1234566778',
            xfbml: true,
            version: 'v2.8'
        };
        fb.init(initParams);
        this.userService.getProduct().subscribe(function (productdata) {
            _this.Product = productdata;
            _this.productdataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](_this.Product);
            _this.productdataSource.paginator = _this.paginator;
            _this.productdataSource.sort = _this.sort;
            _this.Products = productdata.find(function (x) { return x.Id === _this.idn; });
        });
        this.updateURL();
    }
    DetailproductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getProduct().subscribe(function (productdata) {
            _this.Product = productdata;
            _this.productdataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](_this.Product);
            _this.productdataSource.paginator = _this.paginator;
            _this.productdataSource.sort = _this.sort;
            _this.Products = productdata.find(function (x) { return x.Id === _this.idn; });
            _this.ids.push(_this.Products);
        });
    };
    DetailproductComponent.prototype.updateURL = function () {
        if (history.pushState) {
            var newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + '?id=' + this.id;
            window.history.pushState({ path: newurl }, '', newurl);
        }
    };
    DetailproductComponent.prototype.updateURLs = function () {
        console.log(window.location.pathname.slice(4));
        if (window.location.pathname.slice(4) == 'detailproduct' || window.location.pathname.slice(4) == 'detailprodukt') {
            this.router.navigate([this.localize.translateRoute('/detailproduct')]);
            this.updateURL();
        }
        this.updateURL();
    };
    DetailproductComponent.prototype.click = function () {
        var _this = this;
        console.log(1);
        console.log(this.Products.find(function (x) { return x.Id === _this.idn; }));
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], DetailproductComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], DetailproductComponent.prototype, "sort", void 0);
    DetailproductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-detailproduct',
            template: __webpack_require__(/*! ./detailproduct.component.html */ "./src/app/detailproduct/detailproduct.component.html"),
            styles: [__webpack_require__(/*! ./detailproduct.component.css */ "./src/app/detailproduct/detailproduct.component.css")]
        }),
        __metadata("design:paramtypes", [_UserService__WEBPACK_IMPORTED_MODULE_1__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], localize_router__WEBPACK_IMPORTED_MODULE_5__["LocalizeRouterService"],
            ngx_embed_video__WEBPACK_IMPORTED_MODULE_6__["EmbedVideoService"], ngx_facebook__WEBPACK_IMPORTED_MODULE_7__["FacebookService"]])
    ], DetailproductComponent);
    return DetailproductComponent;
}());



/***/ }),

/***/ "./src/app/gallary.directive.ts":
/*!**************************************!*\
  !*** ./src/app/gallary.directive.ts ***!
  \**************************************/
/*! exports provided: GallaryDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GallaryDirective", function() { return GallaryDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GallaryDirective = /** @class */ (function () {
    function GallaryDirective(_renderer, el) {
        this._renderer = _renderer;
        this.el = el;
        this.slidePosition = 0;
        this.currentSlide = 0;
    }
    GallaryDirective.prototype.onClick = function ($event) {
        if ($event.attributes.class.nodeValue) {
            var clickBtn = $event.attributes.class.nodeValue;
        }
        if (clickBtn.indexOf('prevbtn') !== -1) {
            this.nextSlide();
        }
        if (clickBtn.indexOf('nextbtn') !== -1) {
            this.prevSlide();
        }
        if (clickBtn.indexOf('dotBox') !== -1) {
            var findActiveDot = this.el.nativeElement.getElementsByClassName('activeDot')[0];
            this._renderer.removeClass(findActiveDot, 'activeDot');
            //this._renderer.removeClass(parent,'active');
            //this._renderer.removeClass(element,'active');
            this._renderer.addClass($event, 'activeDot');
            var slideto = $event.attributes.slideto.nodeValue;
            this.currentSlide = slideto;
            this.slideGallaryTo(this.currentSlide);
        }
    };
    GallaryDirective.prototype.onSwipeLeft = function ($event) {
        this.prevSlide();
    };
    GallaryDirective.prototype.onSwipeRight = function ($event) {
        this.nextSlide();
    };
    GallaryDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (!this.itemMd) {
            this.itemMd = 3;
        }
        if (!this.itemSm) {
            this.itemSm = 2;
        }
        if (!this.itemXs) {
            this.itemXs = 1;
        }
        if (!this.speed) {
            this.speed = 4000;
        }
        if (!this.autoplay) {
            this.autoplay = false;
        }
        this.gallaryLength(this.el.nativeElement, this.gallarySlide);
        if (this.autoplay) {
            setInterval(function () {
                if (_this.currentSlide < (_this.noOfSlideItem - 1)) {
                    _this.currentSlide += 1;
                }
                else {
                    _this.currentSlide = 0;
                }
                _this.slideGallaryTo(_this.currentSlide);
            }, this.speed);
        }
    };
    GallaryDirective.prototype.onResize = function () {
        this.slidePosition = 0;
        var removeChild = this.el.nativeElement.getElementsByClassName('dots-control')[0];
        this._renderer.removeChild(this.el.nativeElement, removeChild);
        this.gallaryLength(this.el.nativeElement, this.gallarySlide);
    };
    GallaryDirective.prototype.gallaryLength = function (parent, className) {
        if (!parent)
            return;
        this.slideItemWidth = parent.offsetWidth;
        this.item = this.el.nativeElement.getElementsByClassName('items')[0];
        var children = this.item.getElementsByClassName(className);
        if (!children)
            return;
        this.noOfSlideItem = children.length;
        var documentWidth = document.body.offsetWidth;
        if (documentWidth > 991) {
            this.noOfSlideItem = Math.ceil(this.noOfSlideItem / this.itemMd);
            this.itemInOneSlide = this.itemMd;
        }
        else if (documentWidth > 767) {
            this.noOfSlideItem = Math.ceil(this.noOfSlideItem / this.itemSm);
            this.itemInOneSlide = this.itemSm;
        }
        else {
            this.noOfSlideItem = Math.ceil(this.noOfSlideItem / this.itemXs);
            this.itemInOneSlide = this.itemXs;
        }
        var slideWidth = (100 / this.itemInOneSlide);
        for (var i = 0; i < children.length; i++) {
            // console.log(children.length)
            children[i].setAttribute('style', 'width:' + slideWidth + '%');
        }
        ;
        var divElement = this._renderer.createElement('div');
        this._renderer.addClass(divElement, "dots-control");
        for (var i = 0; i < this.noOfSlideItem; i++) {
            var childDot = this._renderer.createElement('div');
            this._renderer.addClass(childDot, "dotBox");
            if (i == 0) {
                this._renderer.addClass(childDot, "activeDot");
            }
            this._renderer.setAttribute(childDot, "slideto", "" + i);
            this._renderer.appendChild(divElement, childDot);
        }
        this._renderer.appendChild(parent, divElement);
        this.slideGallary();
    };
    GallaryDirective.prototype.slideGallary = function () {
        this.item.style.transform =
            'translate3d(' + (-this.slidePosition * this.slideItemWidth) + 'px,0,0)';
        // console.log(this.slideItemWidth)
        // console.log(this.slidePosition)
    };
    GallaryDirective.prototype.slideGallaryTo = function (item) {
        this.slidePosition = item;
        this.item.style.transform =
            'translate3d(' + (-this.slidePosition * this.slideItemWidth) + 'px,0,0)';
        // console.log(this.slideItemWidth)
        // console.log(this.slidePosition)
    };
    GallaryDirective.prototype.nextSlide = function () {
        this.slidePosition = Math.max(this.slidePosition - 1, 0);
        this.slideGallary();
    };
    GallaryDirective.prototype.prevSlide = function () {
        this.slidePosition = Math.min(this.slidePosition + 1, this.noOfSlideItem - 1);
        this.slideGallary();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], GallaryDirective.prototype, "gallarySlide", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('gallaryBoxID'),
        __metadata("design:type", String)
    ], GallaryDirective.prototype, "gallaryBoxID", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('item-md'),
        __metadata("design:type", Number)
    ], GallaryDirective.prototype, "itemMd", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('item-sm'),
        __metadata("design:type", Number)
    ], GallaryDirective.prototype, "itemSm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('item-xs'),
        __metadata("design:type", Number)
    ], GallaryDirective.prototype, "itemXs", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('autoplay'),
        __metadata("design:type", Boolean)
    ], GallaryDirective.prototype, "autoplay", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('speed'),
        __metadata("design:type", Number)
    ], GallaryDirective.prototype, "speed", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click', ['$event.target']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], GallaryDirective.prototype, "onClick", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('swipeleft', ['$event.type']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], GallaryDirective.prototype, "onSwipeLeft", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('swiperight', ['$event.type']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], GallaryDirective.prototype, "onSwipeRight", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], GallaryDirective.prototype, "onResize", null);
    GallaryDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[gallarySlide]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], GallaryDirective);
    return GallaryDirective;
}());

;


/***/ }),

/***/ "./src/app/gallary.service.ts":
/*!************************************!*\
  !*** ./src/app/gallary.service.ts ***!
  \************************************/
/*! exports provided: GallaryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GallaryService", function() { return GallaryService; });
var GallaryService = /** @class */ (function () {
    function GallaryService() {
        this.images = [
            { title: "Text 1", image: "image1.jpg" },
            { title: "Text 2", image: "image2.webp" },
            { title: "Text 3", image: "image3.webp" },
            { title: "Text 4", image: "image4.webp" }
        ];
    }
    return GallaryService;
}());



/***/ }),

/***/ "./src/app/guards/confirmation/confirmation.guard.ts":
/*!***********************************************************!*\
  !*** ./src/app/guards/confirmation/confirmation.guard.ts ***!
  \***********************************************************/
/*! exports provided: ConfirmationGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationGuard", function() { return ConfirmationGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ConfirmationGuard = /** @class */ (function () {
    function ConfirmationGuard() {
    }
    ConfirmationGuard.prototype.canDeactivate = function (component, next, state) {
        // if(localStorage.getItem('userToken') != null){return true}
        return component.confirm();
    };
    ConfirmationGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], ConfirmationGuard);
    return ConfirmationGuard;
}());



/***/ }),

/***/ "./src/app/login-app/login-app.component.css":
/*!***************************************************!*\
  !*** ./src/app/login-app/login-app.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* input.ng-invalid {\r\n    background-color: lightgray; Màu trong ô username và password\r\n}\r\ninput[type=\"username\"]:placeholder-shown,\r\ninput[type=\"password\"]:placeholder-shown{\r\n    border:2px solid silver; Tô đen vùng khung và làm dày vùng khung\r\n    padding: 3px 19px; Kích thước ô\r\n    -webkit-border-radius: 5px;\r\n        -moz-border-radius: 5px;\r\n            border-radius: 5px;\r\n    -webkit-box-shadow: 0 1px 2px rgba(0,0,0,.05);\r\n        -moz-box-shadow: 0 1px 2px rgba(0,0,0,.05);\r\n            box-shadow: 0 1px 2px rgba(0,0,0,.05);\r\n\r\n}\r\n\r\nbody {\r\n    margin: 0;\r\n    font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif; Loại font chữ\r\n    font-size: 18px; Kích thước font chữ\r\n    line-height: 20px;\r\n    color: #333333;\r\n    background-color: #ffffff;\r\n}\r\n\r\n.form-signin {\r\n    max-width: 390px;\r\n    padding: 35px 35px 29px;\r\n    margin:0 auto 20px;\r\n    background-color: #fff;\r\n    border: 1px solid #e5e5e5;\r\n    -webkit-border-radius: 5px;\r\n        -moz-border-radius: 5px;\r\n            border-radius: 5px;\r\n    -webkit-box-shadow: 0 1px 2px rgba(0,0,0,.05);\r\n        -moz-box-shadow: 0 1px 2px rgba(0,0,0,.05);\r\n            box-shadow: 0 1px 2px rgba(0,0,0,.05);\r\n}\r\n\r\n.form-signin .form-signin-heading,\r\n.form-signin .checkbox{\r\n    margin-bottom: 10px;\r\n}\r\n.form-signin input[type=\"username\"],\r\n.form-signin input[type=\"password\"] {\r\n    font-size: 16px;\r\n    height: auto;\r\n    margin-bottom: 15px;\r\n    padding:7px 67px;\r\n    border: 1px solid black;\r\n    border-left: 5px solid blue;\r\n    -webkit-border-radius: 5px;\r\n        -moz-border-radius: 5px;\r\n            border-radius: 5px;\r\n    -webkit-box-shadow: 0 1px 2px rgba(0,0,0,.05);\r\n        -moz-box-shadow: 0 1px 2px rgba(0,0,0,.05);\r\n            box-shadow: 0 1px 2px rgba(0,0,0,.05);\r\n}\r\n.container{\r\n    background-color: #f5f5f5;\r\n    height: 700px;\r\n    padding-top:100px;\r\n}\r\n.btn-primary {\r\n    color: #ffffff;\r\n    text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);\r\n    background-color: #006dcc;\r\n    background-image: -moz-linear-gradient(top, #0088cc, #0044cc);\r\n    background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#0088cc), to(#0044cc));\r\n    background-image: -webkit-linear-gradient(top, #0088cc, #0044cc);\r\n    background-image: -o-linear-gradient(top, #0088cc, #0044cc);\r\n    background-image: linear-gradient(to bottom, #0088cc, #0044cc);\r\n    background-repeat: repeat-x;\r\n    border-color: #0044cc #0044cc #002a80;\r\n    border-color: rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.25);\r\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff0088cc', endColorstr='#ff0044cc', GradientType=0);\r\n    filter: progid:DXImageTransform.Microsoft.gradient(enabled=false);\r\n}\r\n.btn-large {\r\n    padding: 11px 19px;\r\n    font-size: 17.5px;\r\n    -webkit-border-radius: 6px;\r\n    -moz-border-radius: 6px;\r\n    border-radius: 6px;\r\n}\r\n.control{\r\n    height:1px;\r\n}\r\ninput[type=\"username\"].ng-pristine.ng-invalid.ng-touched ,\r\ninput[type=\"password\"].ng-pristine.ng-invalid.ng-touched \r\n{\r\n    border-left: 5px solid red;\r\n}\r\napp-control-messages{\r\n    color: red;\r\n} */\r\n.mat-form-field {\r\n    width: 400px;\r\n    font-size: 16px;\r\n    font-family: Roboto,\"Helvetica Neue\",sans-serif;\r\n  }\r\nbutton{\r\n    margin-top: 10px;\r\n    margin-right: 20px;\r\n  }\r\nbody {\r\n    margin: 0;\r\n    font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\r\n    font-size: 18px; \r\n    line-height: 20px;\r\n    color: #333333;\r\n    background-color: #f5f5f5;\r\n}\r\n.container{\r\n    background-color: #f5f5f5;\r\n    height: 600px;\r\n    width: 1304px;\r\n    padding-top:100px;\r\n}\r\n.form-signin {\r\n    max-width: 480px;\r\n    padding: 35px 35px 29px;\r\n    margin:0 auto 20px;\r\n    background-color: #fff;\r\n    border: 1px solid #e5e5e5;\r\n    border-radius: 5px;\r\n    box-shadow: 0 1px 2px rgba(0,0,0,.05);\r\n}\r\napp-control-messages{\r\n    color: red;\r\n    font-size: 12px; \r\n}\r\n.matmenu{\r\n    padding:30px;\r\n    float: right;\r\n}\r\n.mat-menu-item{\r\n    font-size: 14px;\r\n}"

/***/ }),

/***/ "./src/app/login-app/login-app.component.html":
/*!****************************************************!*\
  !*** ./src/app/login-app/login-app.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n    <div class=\"container\">\n        <form class=\"form-signin\" id=\"login\" [formGroup]=\"login\">\n            <p class=\"form-signin-heading\">{{ \"signin\" | translate }}</p>\n            <div class=\"control-group\">\n                <mat-form-field class=\"controls\" type=\"controls\">\n                    <input matInput placeholder='{{ \"enterusername/email\" | translate }}' id=\"username\" name=\"username\" type=\"username\" formControlName=\"username\"\n                        required>\n                    <mat-error>\n                        <app-control-messages [control]=\"login.controls.username\" name=\"User name\"></app-control-messages>\n                    </mat-error>\n                </mat-form-field>\n            </div>\n            <div class=\"control-group\">\n                <mat-form-field class=\"controls\" type=\"controls\">\n                    <input matInput placeholder='{{ \"enterpassword\" | translate }}' id=\"password\" name=\"password\" type=\"password\" formControlName=\"password\"\n                        required>\n                    <mat-error>\n                        <app-control-messages [control]=\"login.controls.password\" name=\"Pass word\"></app-control-messages>\n                    </mat-error>\n                </mat-form-field>\n            </div>\n            &nbsp;\n            <div class=\"control-group\">\n                <input type=\"submit\" class=\"btn btn-large btn-primary\" name=\"btnsubmit\" (click)=\"submit()\" [disabled]=\"!login.valid\" value='{{ \"singinbutton\" | translate }}'>                &nbsp;\n                <input type=\"button\" class=\"btn btn-large btn-primary\" (click)=\"register()\" value='{{ \"registerbutton\" | translate }}'>\n            </div>\n        </form>\n    </div>\n</body>"

/***/ }),

/***/ "./src/app/login-app/login-app.component.ts":
/*!**************************************************!*\
  !*** ./src/app/login-app/login-app.component.ts ***!
  \**************************************************/
/*! exports provided: User, LoginAppComponent, patternValidator, forbiddenNameValidator, sameName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginAppComponent", function() { return LoginAppComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "patternValidator", function() { return patternValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forbiddenNameValidator", function() { return forbiddenNameValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sameName", function() { return sameName; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _validation_validation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../validation/validation.service */ "./src/app/validation/validation.service.ts");
/* harmony import */ var _UserService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../UserService */ "./src/app/UserService.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var localize_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! localize-router */ "./node_modules/localize-router/index.js");
/* harmony import */ var localize_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(localize_router__WEBPACK_IMPORTED_MODULE_7__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var User = /** @class */ (function () {
    function User(name, email, username, password, confirmpassword) {
        this.Name = name;
        this.email = email;
        this.Username = username;
        this.Password = password;
        this.confirmpassword = confirmpassword;
    }
    return User;
}());

var LoginAppComponent = /** @class */ (function () {
    function LoginAppComponent(myForm, router, userService, translate, localize) {
        var _this = this;
        this.myForm = myForm;
        this.router = router;
        this.userService = userService;
        this.localize = localize;
        this.data = Object.assign(User);
        this.User = [];
        this.userService.getUser().subscribe(function (data) {
            _this.User = data;
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](_this.User);
        });
        this.translate = translate;
    }
    LoginAppComponent.prototype.buildForm = function () {
        this.login = this.myForm.group({
            username: this.myForm.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _validation_validation_service__WEBPACK_IMPORTED_MODULE_3__["ValidationService"].usernameValidator]),
            password: this.myForm.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _validation_validation_service__WEBPACK_IMPORTED_MODULE_3__["ValidationService"].passwordValidator,])
        });
    };
    LoginAppComponent.prototype.ngOnInit = function () {
        this.buildForm();
    };
    LoginAppComponent.prototype.submit = function () {
        var _this = this;
        this.userService.getUser().subscribe(function (data) {
            _this.User = data;
            var text = _this.dataSource.data.find(function (x) { return x.Username === _this.login.value.username && x.Password === _this.login.value.password; });
            if (text) {
                console.log('form submitted!!!');
                localStorage.setItem('userToken', _this.login.value.username);
                _this.router.navigate(['/', _this.translate.currentLang, _this.localize.translateRoute('page')]);
            }
            else {
                console.log('form can not submitted!!!');
                _this.router.navigateByUrl(_this.router.url);
            }
        });
        console.log(this.dataSource.data.find(function (x) { return x.Username === _this.login.value.username; }));
    };
    LoginAppComponent.prototype.register = function () {
        this.router.navigate(['/', this.translate.currentLang, this.localize.translateRoute('register')]);
    };
    LoginAppComponent.prototype.webpage = function () {
        console.log(this.localize.translateRoute('/webpage'));
        this.router.navigate([this.localize.translateRoute('/webpage')]);
    };
    LoginAppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login-app',
            template: __webpack_require__(/*! ./login-app.component.html */ "./src/app/login-app/login-app.component.html"),
            styles: [__webpack_require__(/*! ./login-app.component.css */ "./src/app/login-app/login-app.component.css")],
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _UserService__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"], localize_router__WEBPACK_IMPORTED_MODULE_7__["LocalizeRouterService"]])
    ], LoginAppComponent);
    return LoginAppComponent;
}());

function patternValidator(regexp) {
    return function (control) {
        var value = control.value;
        if (value === '') {
            return null;
        }
        return !regexp.test(value) ? { 'patternInvalid': { regexp: regexp } } : null;
    };
}
function forbiddenNameValidator(nameRe) {
    return function (control) {
        var forbidden = nameRe.test(control.value);
        return forbidden ? { 'forbiddenName': { value: control.value } } : null;
    };
}
// export function hasExclamationMark(input: FormControl) {
//   const user = 
//   console.log(user)
//   const m = this.User.find(name => name.username === this.login.value.username)
//   console.log(m)
//   const v = input.value.indexOf("admin")
//   console.log(v) 
//   // if(){}
//   const hasExclamation = input.value.indexOf('!') >= 0;
//   return hasExclamation ? null : { needsExclamation: true };
// }
function sameName(same) {
    return function (control) {
        var value = control.value;
        if (value === '') {
            return null;
        }
        return !same.test(value) ? { 'same name': { same: same } } : null;
    };
}


/***/ }),

/***/ "./src/app/page-edit/page-edit.component.css":
/*!***************************************************!*\
  !*** ./src/app/page-edit/page-edit.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input.ng-invalid {\r\n    background-color: lightgray;\r\n}\r\ndiv {\r\n    background-color: white;\r\n    height: auto;\r\n}\r\nh2 {\r\n    height:16px;\r\n    font-size: 15px;\r\n    color: crimson;\r\n}\r\nbody {\r\n    margin: 0;\r\n    font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\r\n    font-size: 14px;\r\n    line-height: 20px;\r\n    color: #333333;\r\n    background-color: #ffffff;\r\n}\r\n.form-edit {\r\n    max-width: 400px;\r\n    padding: 19px 29px 29px 50px;\r\n    margin:0 auto 20px;\r\n    background-color: #fff;\r\n    border: 1px solid #e5e5e5;\r\n    border-radius: 5px;\r\n    box-shadow: 0 1px 2px rgba(0,0,0,.05);\r\n}\r\n.form-edit .form-edit-heading{\r\n    margin-bottom: 10px;\r\n}\r\n.form-edit input[type=\"newName\"],\r\n.form-edit input[type=\"newEmail\"],\r\n.form-edit input[type=\"newUsername\"],\r\n.form-edit input[type=\"newPassword\"],\r\n.form-edit input[type=\"rePassword\"] {\r\n    font-size: 16px;\r\n    height: auto;\r\n    margin-bottom: 15px;\r\n    padding:7px 50px;\r\n    border: 1px solid black;\r\n    border-radius: 5px;\r\n    box-shadow: 0 1px 2px rgba(0,0,0,.05);\r\n}\r\n.container{\r\n    background-color: #f5f5f5;\r\n    height: auto;\r\n    padding:30px;\r\n}\r\n.btn-primary {\r\n    color: #ffffff;\r\n    text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);\r\n    background-color: #006dcc;\r\n    background-image: linear-gradient(to bottom, #0088cc, #0044cc);\r\n    background-repeat: repeat-x;\r\n    border-color: #0044cc #0044cc #002a80;\r\n    border-color: rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.25);\r\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff0088cc', endColorstr='#ff0044cc', GradientType=0);\r\n    filter: progid:DXImageTransform.Microsoft.gradient(enabled=false);\r\n}\r\n.btn-large {\r\n    padding: 11px 19px;\r\n    font-size: 17.5px;\r\n    border-radius: 6px;\r\n}\r\n.control{\r\n    height:1px;\r\n}\r\napp-control-messages{\r\n    color: red;\r\n}"

/***/ }),

/***/ "./src/app/page-edit/page-edit.component.html":
/*!****************************************************!*\
  !*** ./src/app/page-edit/page-edit.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n  <div class=\"container\">\n      <form class=\"form-edit\" id=\"edit\" [formGroup]=\"edit\">\n          <h1 class=\"form-edit-heading\">Edit form</h1>\n          <div class=\"control-group\">\n              <label class=\"control-label\" for=\"inputnewName\">Your New Name:</label>\n              <div class=\"controls\" type=\"controls\">\n                  <input placeholder=\"Enter your new Name\" id=\"newName\" name=\"newName\" type=\"newName\" formControlName=\"newName\">\n                 <app-control-messages [control]=\"edit.controls.newName\" name=\"new Name\"></app-control-messages>\n\n              </div>\n          </div>\n          <div class=\"control-group\">\n              <label class=\"control-label\" for=\"inputnewEmail\">Your New Email:</label>\n              <div class=\"controls\" type=\"controls\">\n                  <input placeholder=\"Enter your new Email\" id=\"newEmail\" name=\"newEmail\" type=\"newEmail\" formControlName=\"newEmail\">\n                   <app-control-messages [control]=\"edit.controls.newEmail\" name=\"new Email\"></app-control-messages>\n              </div>\n          </div>\n          <div class=\"control-group\">\n              <label class=\"control-label\" for=\"inputnewUsername\">New Username:</label>\n              <div class=\"controls\" type=\"controls\">\n                  <input placeholder=\"Enter your newUsername\" id=\"newUsername\" name=\"newUsername\" type=\"newUsername\" formControlName=\"newUsername\">\n                  <app-control-messages [control]=\"edit.controls.newUsername\" name=\"new User name\"></app-control-messages>\n                   </div>\n          </div>\n          <div class=\"control-group\">\n              <label class=\"control-label\" for=\"inputnewPassword\">New Password:</label>\n              <div class=\"controls\" type=\"controls\">\n                  <input placeholder=\"Enter new Password\" id=\"newPassword\" name=\"newPassword\" type=\"newPassword\" formControlName=\"newPassword\">\n                  <app-control-messages [control]=\"edit.controls.newPassword\" name=\"new Password\"></app-control-messages>\n                  </div>\n          </div>\n          <div class=\"control-group\">\n              <label class=\"control-label\" for=\"inputConfirmpassword\">Confirm new Password:</label>\n              <div class=\"controls\" type=\"controls\">\n                  <input placeholder=\"Confirm new Password\" id=\"rePassword\" name=\"rePassword\" type=\"rePassword\" formControlName=\"rePassword\">\n                  <app-control-messages [control]=\"edit.controls.rePassword\" name=\"new Confirm password\"></app-control-messages>\n                  </div>\n          </div>\n          <div class=\"control-group\">\n              <input type=\"submit\" class=\"btn btn-large btn-primary\" name=\"btnsubmit\" (click)=\"change()\" value=\"Change\"> &nbsp;\n              <input type=\"button\" class=\"btn btn-large btn-primary\" name=\"btnback\" (click)=\"back()\" value=\"Back\">\n          </div>\n      </form>\n  </div>\n</body>"

/***/ }),

/***/ "./src/app/page-edit/page-edit.component.ts":
/*!**************************************************!*\
  !*** ./src/app/page-edit/page-edit.component.ts ***!
  \**************************************************/
/*! exports provided: editUser, PageEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editUser", function() { return editUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageEditComponent", function() { return PageEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/@angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _page_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../page/page.component */ "./src/app/page/page.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var editUser = /** @class */ (function () {
    function editUser(newName, newEmail, newUsername, newPassword, rePassword) {
        this.newName = newName;
        this.newEmail = newEmail;
        this.newUsername = newUsername;
        this.newPassword = newPassword;
        this.rePassword = rePassword;
    }
    return editUser;
}());

var PageEditComponent = /** @class */ (function () {
    function PageEditComponent(myForm, router, cmp) {
        this.myForm = myForm;
        this.router = router;
        this.cmp = cmp;
        // user: User[] = [];
        this.editUser = [];
    }
    PageEditComponent.prototype.buildForm = function () {
        this.edit = this.myForm.group({});
    };
    PageEditComponent.prototype.ngOnInit = function () {
        this.buildForm();
    };
    PageEditComponent.prototype.click = function () {
        console.log(this.cmp.click);
    };
    PageEditComponent.prototype.back = function () {
        this.router.navigate(['page']);
    };
    PageEditComponent.prototype.change = function () {
        console.log("edit user success");
        console.log(this.cmp.user);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], PageEditComponent.prototype, "name", void 0);
    PageEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            providers: [_page_page_component__WEBPACK_IMPORTED_MODULE_2__["PageComponent"]],
            selector: 'app-page-edit',
            template: __webpack_require__(/*! ./page-edit.component.html */ "./src/app/page-edit/page-edit.component.html"),
            styles: [__webpack_require__(/*! ./page-edit.component.css */ "./src/app/page-edit/page-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _page_page_component__WEBPACK_IMPORTED_MODULE_2__["PageComponent"]])
    ], PageEditComponent);
    return PageEditComponent;
}());



/***/ }),

/***/ "./src/app/page/dialog-overview-example-dialog.css":
/*!*********************************************************!*\
  !*** ./src/app/page/dialog-overview-example-dialog.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-form-field {\r\n    width: 500px;\r\n    font-family: Roboto,\"Helvetica Neue\",sans-serif;\r\n  }\r\n  button{\r\n    margin-top: 10px;\r\n    margin-right: 20px;\r\n  }\r\n  .btn-danger{\r\n  margin-left: 470px;\r\n}\r\n  ::ng-deep.mat-dialog-container{\r\n  padding-top: 1px;\r\n  padding-bottom: 1px;\r\n  height: 600px;\r\n}\r\n  .mat-dialog-actions{\r\n  padding-top:5px;\r\n}\r\n  ::ng-deep.cdk-overlay-pane{\r\n  max-height: 470px;\r\n  /* height:1px; */\r\n}\r\n  element.style{\r\n  height: 600px;\r\n}\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/page/dialog-overview-example-dialog.html":
/*!**********************************************************!*\
  !*** ./src/app/page/dialog-overview-example-dialog.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mat-dialog\">\r\n    <div mat-dialog-actions>\r\n        <button mat-button class=\"btn btn-danger\" [mat-dialog-close]=\"data\">X</button>\r\n    </div>\r\n    <!-- <h1 i18n=\"User welcome|An introduction header for this sample\">Hello {{data.Name}}</h1> -->\r\n    <h1 mat-dialog-title>{{ \"hi\" | translate }} {{data.Name}}</h1>\r\n    <p>{{ \"comment\" | translate }}</p>\r\n    <!-- <mat-form-field>\r\n    <input matInput placeholder=\"Enter your new Email\" type=\"Email\" [(ngModel)]=\"data.Email\" required>\r\n  </mat-form-field>\r\n  <mat-form-field>\r\n    <input matInput placeholder=\"Enter your new Username\" type=\"Username\" [(ngModel)]=\"data.Username\"required>\r\n  </mat-form-field>\r\n  <mat-form-field>\r\n    <input matInput placeholder=\"Enter your new Password\" type=\"Password\" [(ngModel)]=\"data.Password\" type=\"password\"required>\r\n  </mat-form-field>\r\n  <mat-form-field>\r\n    <input matInput placeholder=\"Enter your new Confirmpassword\" type=\"Confirmpassword\" [(ngModel)]=\"data.Confirmpassword\" type=\"password\"required>\r\n  </mat-form-field> -->\r\n    <form class=\"form-dialogs\" id=\"dialogs\" [formGroup]=\"dialogs\">\r\n        <mat-form-field class=\"controls\" type=\"controls\">\r\n            <input matInput placeholder='{{ \"enteremail\" | translate }}' id=\"Email\" name=\"Email\" type=\"Email\" formControlName=\"Email\" required>\r\n            <mat-error>\r\n                <app-control-messages [control]=\"dialogs.controls.Email\" name=\"Email\"></app-control-messages>\r\n            </mat-error>\r\n        </mat-form-field>\r\n        <mat-form-field class=\"controls\" type=\"controls\">\r\n            <input matInput placeholder='{{ \"enterusername\" | translate }}' id=\"Username\" name=\"Username\" type=\"Username\" formControlName=\"Username\"\r\n                required>\r\n            <mat-error>\r\n                <app-control-messages [control]=\"dialogs.controls.Username\" name=\"Username\"></app-control-messages>\r\n            </mat-error>\r\n        </mat-form-field>\r\n        <mat-form-field class=\"controls\" type=\"controls\">\r\n            <input matInput placeholder='{{ \"enterpassword\" | translate }}' id=\"Password\" name=\"Password\" type=\"Password\" formControlName=\"Password\"\r\n                required>\r\n            <mat-error>\r\n                <app-control-messages [control]=\"dialogs.controls.Password\" name=\"Password\"></app-control-messages>\r\n            </mat-error>\r\n        </mat-form-field>\r\n        <mat-form-field class=\"controls\" type=\"controls\">\r\n            <input matInput placeholder='{{ \"enterconfirmpassword\" | translate }}' id=\"Confirmpassword\" name=\"Confirmpassword\" type=\"Confirmpassword\"\r\n                formControlName=\"Confirmpassword\" required>\r\n            <mat-error>\r\n                <app-control-messages [control]=\"dialogs.controls.Confirmpassword\" name=\"Confirmpassword\"></app-control-messages>\r\n            </mat-error>\r\n        </mat-form-field>\r\n    </form>\r\n    <div mat-dialog-actions>\r\n        <button mat-button class=\"btn btn-large btn-primary\" (click)=\"onNoClick()\" cdkFocusInitial>{{ \"updatebutton\" | translate }}</button>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/page/page.component.css":
/*!*****************************************!*\
  !*** ./src/app/page/page.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n  width: 100%;\r\n}\r\n.container{\r\n    max-width: 100%;\r\n}\r\n.matatable {\r\n  padding-left: 30px;\r\n  padding-right: 30px;\r\n  padding-top: 5px;\r\n  padding-bottom: 50px;\r\n}\r\ndiv {\r\n  display: block;\r\n}\r\n.mat-table {\r\n  font-family: Roboto,\"Helvetica Neue\",sans-serif;\r\n  background: #fff;\r\n  box-shadow: 0 5px 5px -3px rgba(0,0,0,.2), 0 8px 10px 1px rgba(0,0,0,.14), 0 3px 14px 2px rgba(0,0,0,.12);\r\n}\r\nmat-header-row, mat-row, td.mat-cell, th.mat-header-cell{    \r\n  border-bottom-color: rgba(0,0,0,.12);\r\n}\r\n.mat-form-field{\r\nbox-sizing: content-box;\r\nwidth: 600px;\r\n}\r\nmat-paginator {\r\n  font-family: Roboto,\"Helvetica Neue\",sans-serif;\r\n  background: #fff;\r\n  box-shadow: 0 5px 5px -3px rgba(0,0,0,.2), 0 8px 10px 1px rgba(0,0,0,.14), 0 3px 14px 2px rgba(0,0,0,.12);\r\n}\r\nbutton{\r\n  margin-top: 10px;\r\n  margin-right: 20px;\r\n}\r\n::ng-deep  .mat-checkbox-input{\r\nbox-sizing: content-box;\r\nmargin: 40px;\r\n}"

/***/ }),

/***/ "./src/app/page/page.component.html":
/*!******************************************!*\
  !*** ./src/app/page/page.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"matatable\">\n  <mat-form-field>\n    <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder='{{ \"filter\" | translate }}'>\n  </mat-form-field>\n  <table mat-table class=\"mat-table\" [dataSource]=\"dataSource\" matSort>\n    <ng-container matColumnDef=\"Select\">\n        <th mat-header-cell *matHeaderCellDef>\n          <mat-checkbox (change)=\"$event ? masterToggle() : null\"\n                        [checked]=\"selection.hasValue() && isAllSelected()\"\n                        [indeterminate]=\"selection.hasValue() && !isAllSelected()\">\n          </mat-checkbox>\n        </th>\n        <td mat-cell *matCellDef=\"let row\">\n          <mat-checkbox (click)=\"$event.stopPropagation()\"\n                        (change)=\"$event ? selection.toggle(row) : null\"\n                        [checked]=\"selection.isSelected(row)\">\n          </mat-checkbox>\n        </td>\n      </ng-container>\n    <ng-container matColumnDef=\"Name\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> {{ \"name\" | translate }} </th>\n      <td mat-cell *matCellDef=\"let User\">{{User.Name}}</td>\n    </ng-container>\n    <ng-container matColumnDef=\"Email\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> {{ \"email\" | translate }} </th>\n      <td mat-cell *matCellDef=\"let User\"> {{User.Email}} </td>\n    </ng-container>\n    <ng-container matColumnDef=\"Username\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> {{ \"username\" | translate }} </th>\n      <td mat-cell *matCellDef=\"let User\"> {{User.Username}} </td>\n    </ng-container>\n    <ng-container matColumnDef=\"Password\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> {{ \"password\" | translate }} </th>\n      <td mat-cell *matCellDef=\"let User\"> {{User.Password}}\n      </td>\n    </ng-container>\n    <ng-container matColumnDef=\"Confirmpassword\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> {{ \"confirmpassword\" | translate }} </th>\n      <td mat-cell *matCellDef=\"let User\"> {{User.Confirmpassword}}\n      </td>\n    </ng-container>\n    <ng-container matColumnDef=\"Edit\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> {{ \"edit\" | translate }} </th>\n        <td mat-cell *matCellDef=\"let User\">\n          <button mat-raised-button class=\"btn btn-success\" style=\"margin-bottom:10px;\" (click)=\"openDialog(User)\">{{ \"edit\" | translate }}</button>\n        </td>\n      </ng-container>\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n  </table>\n  <mat-paginator [pageSizeOptions]=\"[5,10,15]\" showFirstLastButtons></mat-paginator>\n  <button class=\"btn btn-large btn-primary\" (click)=\"logout()\">{{ \"logoutbutton\" | translate }}</button>\n  <button class=\"btn btn-large btn-primary\" (click)=\"register()\">{{ \"registerbutton\" | translate }}</button>\n  <!-- <button class=\"btn btn-large btn-primary\" (click)=\"delete()\">Delete</button> -->\n  <button mat-raised-button class=\"btn btn-large btn-primary\"  (click)=\"removeSelectedRows()\">\n      {{ \"deletebutton\" | translate }}\n    </button>\n</div>\n\n<!-- <div>\n  <h2>{{ 'HOME.TITLE' | translate }}</h2>\n  <label>\n    {{ 'HOME.SELECT' | translate }}\n    <select #langSelect (change)=\"translate.use(langSelect.value)\">\n      <option *ngFor=\"let lang of translate.getLangs()\" [value]=\"lang\" [selected]=\"lang === translate.currentLang\">{{ lang }}</option>\n    </select>\n  </label>\n</div> -->"

/***/ }),

/***/ "./src/app/page/page.component.ts":
/*!****************************************!*\
  !*** ./src/app/page/page.component.ts ***!
  \****************************************/
/*! exports provided: PageComponent, DialogOverviewExampleDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageComponent", function() { return PageComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogOverviewExampleDialog", function() { return DialogOverviewExampleDialog; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _UserService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../UserService */ "./src/app/UserService.ts");
/* harmony import */ var _login_app_login_app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../login-app/login-app.component */ "./src/app/login-app/login-app.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _validation_validation_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../validation/validation.service */ "./src/app/validation/validation.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var localize_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! localize-router */ "./node_modules/localize-router/index.js");
/* harmony import */ var localize_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(localize_router__WEBPACK_IMPORTED_MODULE_9__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




// import { DataSource } from '@angular/cdk/collections';







// import {TranslateService} from 'ng2-translate';

var PageComponent = /** @class */ (function () {
    function PageComponent(router, userService, dialog, translate, localize) {
        var _this = this;
        this.router = router;
        this.userService = userService;
        this.dialog = dialog;
        this.translate = translate;
        this.localize = localize;
        this.User = [];
        this.selectUser = [];
        this.user = [];
        // user: User[] = [];
        this.data = Object.assign(_login_app_login_app_component__WEBPACK_IMPORTED_MODULE_3__["User"]);
        this.displayedColumns = ['Select', 'Name', 'Email', 'Username', 'Password', 'Edit'];
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__["SelectionModel"](true, []);
        console.log(localStorage.getItem('userToken'));
        var newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + '?username=' + localStorage.getItem('userToken');
        window.history.pushState({ path: newurl }, newurl);
        this.userService.getUser().subscribe(function (data) {
            _this.User = data;
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](_this.User);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        });
        console.log(localStorage.getItem('userToken'));
        var newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + '?username=' + localStorage.getItem('userToken');
        window.history.pushState({ path: newurl }, newurl);
    }
    PageComponent.prototype.isAllSelected = function () {
        var numSelected = this.selection.selected.length;
        var numRows = this.dataSource.data.length;
        return numSelected === numRows;
    };
    PageComponent.prototype.masterToggle = function () {
        var _this = this;
        this.isAllSelected() ?
            this.selection.clear() :
            this.dataSource.data.forEach(function (row) { return _this.selection.select(row); });
    };
    PageComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    PageComponent.prototype.ngOnInit = function () {
        console.log(localStorage.getItem('userToken'));
        var newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + '?username=' + localStorage.getItem('userToken');
        window.history.pushState({ path: newurl }, newurl);
    };
    PageComponent.prototype.onRowClicked = function (e, row) {
        var _this = this;
        this.name = row;
        if (e.checked) {
            var n = this.user.find(function (u) { return u == _this.name; });
            if (n) {
                console.log(this.user);
            }
            else {
                this.user.push(row);
            }
        }
        else {
            var m = this.user.find(function (u) { return u == _this.name; });
            this.user.splice(this.user.indexOf(row), 1);
        }
        // console.log(this.user)
        // if(n=this.name){
        //   this.user.splice(this.user.indexOf(row));
        // console.log(this.user)
        // }
        // console.log(n)
    };
    PageComponent.prototype.click = function (row) {
        console.log(row);
        this.router.navigate(['/', this.translate.currentLang, this.localize.translateRoute('pageedit')]);
    };
    PageComponent.prototype.register = function () {
        this.router.navigate(['/', this.translate.currentLang, this.localize.translateRoute('register')]);
    };
    PageComponent.prototype.logout = function () {
        localStorage.removeItem('userToken');
        this.router.navigate(['/', this.translate.currentLang, this.localize.translateRoute('login')]);
    };
    // delete() {
    //   for (var i = 0; i < this.user.length; i++) {
    //     var User = this.user[i];
    //     console.log(User)
    //     this.userService.deleteUser(User).subscribe(data => {
    //       console.log(data)
    //       // console.log(User)
    //       if (data.Name == User) {
    //         console.log("Delete user success!!!")
    //         var t = this.dataSource.data.findIndex(x => x.Name === User);
    //         this.dataSource.data.splice(t, 1);
    //         this.dataSource = new MatTableDataSource<User>(this.dataSource.data);
    //         this.dataSource.sort = this.sort;
    //         this.dataSource.paginator = this.paginator;
    //         this.user = [];
    //       }
    //       else {
    //         console.log("Delete user not success!!!")
    //       }
    //     });
    //   }
    //   // this.dataSource = new MatTableDataSource<User>(this.dataSource.data);
    //   // this.dataSource.sort = this.sort;
    //   // this.dataSource.paginator = this.paginator;
    //   // this.user = [];
    // }
    PageComponent.prototype.removeSelectedRows = function () {
        var _this = this;
        if (confirm('Are you sure you want to delete this user into the database?')) {
            this.selection.selected.forEach(function (item) {
                _this.userService.deleteUser(item.Name).subscribe(function (data) {
                    if (data.Name == item.Name) {
                        console.log("Delete user success!!!");
                        var index = _this.dataSource.data.findIndex(function (d) { return d === item; });
                        // console.log(this.dataSource.data.findIndex(d => d === item));
                        _this.dataSource.data.slice(index);
                        _this.dataSource.data.splice(index, 1);
                        _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](_this.dataSource.data);
                        _this.dataSource.sort = _this.sort;
                        _this.dataSource.paginator = _this.paginator;
                        _this.user = [];
                    }
                    else {
                        console.log("Delete user not success!!!");
                    }
                });
                _this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__["SelectionModel"](true, []);
            });
        }
        else { }
    };
    PageComponent.prototype.openDialog = function (row) {
        var _this = this;
        // this.dialog.afterOpen.subscribe
        var g = Object.assign({}, row);
        var dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
            width: '550px',
            height: '450px',
            data: g,
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log(row);
            var update = result;
            console.log(result);
            if (result.Email != row.Email || result.Username != row.Username || result.Password != row.Password) {
                _this.userService.updateUser(result).subscribe(function (data) {
                    console.log('Successfull change User');
                    console.log('The dialog was closed');
                    var t = _this.dataSource.data.findIndex(function (x) { return x === row; });
                    // console.log(t);
                    _this.dataSource.data.splice(t, 1, result);
                    _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](_this.dataSource.data);
                    _this.dataSource.sort = _this.sort;
                    _this.dataSource.paginator = _this.paginator;
                    _this.user = [];
                    // console.log(update)
                    // console.log(row)
                    console.log("user have been changed!!!");
                });
                _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](_this.dataSource.data);
                _this.dataSource.sort = _this.sort;
                _this.dataSource.paginator = _this.paginator;
                _this.user = [];
            }
            else {
                console.log("User not change!!!");
                _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](_this.dataSource.data);
                _this.dataSource.sort = _this.sort;
                _this.dataSource.paginator = _this.paginator;
                _this.user = [];
            }
        });
    };
    PageComponent.prototype.confirm = function () {
        // if(localStorage.getItem('userToken') != null){
        //   this.router.navigate(['page']);
        //   console.log('sdf')}
        // if(this.router.navigate(['login'])){
        //   console.log('hsdhfbdshbf')
        // }
        return confirm('Are you sure you want to navigate away?');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"])
    ], PageComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"])
    ], PageComponent.prototype, "sort", void 0);
    PageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page',
            template: __webpack_require__(/*! ./page.component.html */ "./src/app/page/page.component.html"),
            styles: [__webpack_require__(/*! ./page.component.css */ "./src/app/page/page.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _UserService__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"], localize_router__WEBPACK_IMPORTED_MODULE_9__["LocalizeRouterService"]])
    ], PageComponent);
    return PageComponent;
}());

var DialogOverviewExampleDialog = /** @class */ (function () {
    function DialogOverviewExampleDialog(myForm, dialogRef, data) {
        this.myForm = myForm;
        this.dialogRef = dialogRef;
        this.data = data;
        // console.log(data)
    }
    DialogOverviewExampleDialog.prototype.buildForm = function () {
        var Name = this.data.Name;
        var Email = this.data.Email;
        var Username = this.data.Username;
        var Password = this.data.Password;
        var Confirmpassword = this.data.Confirmpassword;
        this.dialogs = this.myForm.group({
            // Name: this.myForm.control(Name, [Validators.required]),
            Email: this.myForm.control(Email, [/*ValidationService.getErrorEmail,*/ _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]),
            Username: this.myForm.control(Username, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required /*,ValidationService.getErrorUsername*/]),
            Password: this.myForm.control(Password, [/*ValidationService.getRepasswordError2,*/ _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(8), _validation_validation_service__WEBPACK_IMPORTED_MODULE_7__["ValidationService"].passwordValidator]),
            Confirmpassword: this.myForm.control(Confirmpassword, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required,]),
        });
    };
    DialogOverviewExampleDialog.prototype.onNoClick = function () {
        this.dialogRef.close(this.dialogs.value);
        console.log(this.dialogs.value);
        console.log(this.data.Email);
    };
    DialogOverviewExampleDialog.prototype.ngOnInit = function () {
        this.buildForm();
    };
    DialogOverviewExampleDialog = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page',
            template: __webpack_require__(/*! ./dialog-overview-example-dialog.html */ "./src/app/page/dialog-overview-example-dialog.html"),
            styles: [__webpack_require__(/*! ./dialog-overview-example-dialog.css */ "./src/app/page/dialog-overview-example-dialog.css")]
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"], Object])
    ], DialogOverviewExampleDialog);
    return DialogOverviewExampleDialog;
}());



/***/ }),

/***/ "./src/app/productdetails/productdetails.component.css":
/*!*************************************************************!*\
  !*** ./src/app/productdetails/productdetails.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/productdetails/productdetails.component.html":
/*!**************************************************************!*\
  !*** ./src/app/productdetails/productdetails.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"productinfoModal\" class=\"modal fade\" role=\"dialog\">\n  <div class=\"modal-dialog\">\n\n    <!-- Modal content-->\n    <div class=\"modal-content\" *ngIf=\"fulldetails\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        <h4 class=\"modal-title\">{{fulldetails.product_name}}</h4>\n      </div>\n      <div class=\"modal-body\">\n        <p>{{fulldetails.product_details}}</p>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n      </div>\n    </div>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/productdetails/productdetails.component.ts":
/*!************************************************************!*\
  !*** ./src/app/productdetails/productdetails.component.ts ***!
  \************************************************************/
/*! exports provided: ProductdetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductdetailsComponent", function() { return ProductdetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductdetailsComponent = /** @class */ (function () {
    function ProductdetailsComponent() {
    }
    ProductdetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.list.subscribe(function (det) {
            console.log(det);
            _this.fulldetails = det;
            $("#productinfoModal").modal('show');
        }, function (error) {
            console.log(error);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"])
    ], ProductdetailsComponent.prototype, "list", void 0);
    ProductdetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-productdetails',
            template: __webpack_require__(/*! ./productdetails.component.html */ "./src/app/productdetails/productdetails.component.html"),
            styles: [__webpack_require__(/*! ./productdetails.component.css */ "./src/app/productdetails/productdetails.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProductdetailsComponent);
    return ProductdetailsComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* input.ng-invalid {\r\n    background-color: lightgray;\r\n}\r\ndiv {\r\n    background-color: white;\r\n    height: auto;\r\n}\r\nh2 {\r\n    height:16px;\r\n    font-size: 15px;\r\n    color: crimson;\r\n}\r\nbody {\r\n    margin: 0;\r\n    font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\r\n    font-size: 14px;\r\n    line-height: 20px;\r\n    color: #333333;\r\n    background-color: #ffffff;\r\n}\r\n.form-register {\r\n    max-width: 400px;\r\n    padding: 19px 29px 29px 50px;\r\n    margin:0 auto 20px;\r\n    background-color: #fff;\r\n    border: 1px solid #e5e5e5;\r\n    -webkit-border-radius: 5px;\r\n        -moz-border-radius: 5px;\r\n            border-radius: 5px;\r\n    -webkit-box-shadow: 0 1px 2px rgba(0,0,0,.05);\r\n        -moz-box-shadow: 0 1px 2px rgba(0,0,0,.05);\r\n            box-shadow: 0 1px 2px rgba(0,0,0,.05);\r\n}\r\n.form-register .form-register-heading{\r\n    margin-bottom: 10px;\r\n}\r\n.form-register input[type=\"name\"],\r\n.form-register input[type=\"email\"],\r\n.form-register input[type=\"username\"],\r\n.form-register input[type=\"password\"],\r\n.form-register input[type=\"password\"] {\r\n    font-size: 16px;\r\n    height: auto;\r\n    margin-bottom: 15px;\r\n    padding:7px 50px;\r\n    border: 1px solid black;\r\n    -webkit-border-radius: 5px;\r\n        -moz-border-radius: 5px;\r\n            border-radius: 5px;\r\n    -webkit-box-shadow: 0 1px 2px rgba(0,0,0,.05);\r\n        -moz-box-shadow: 0 1px 2px rgba(0,0,0,.05);\r\n            box-shadow: 0 1px 2px rgba(0,0,0,.05);\r\n}\r\n.container{\r\n    background-color: #f5f5f5;\r\n    height: auto;\r\n    padding:30px;\r\n}\r\n.btn-primary {\r\n    color: #ffffff;\r\n    text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);\r\n    background-color: #006dcc;\r\n    background-image: -moz-linear-gradient(top, #0088cc, #0044cc);\r\n    background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#0088cc), to(#0044cc));\r\n    background-image: -webkit-linear-gradient(top, #0088cc, #0044cc);\r\n    background-image: -o-linear-gradient(top, #0088cc, #0044cc);\r\n    background-image: linear-gradient(to bottom, #0088cc, #0044cc);\r\n    background-repeat: repeat-x;\r\n    border-color: #0044cc #0044cc #002a80;\r\n    border-color: rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.25);\r\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff0088cc', endColorstr='#ff0044cc', GradientType=0);\r\n    filter: progid:DXImageTransform.Microsoft.gradient(enabled=false);\r\n}\r\n.btn-large {\r\n    padding: 11px 19px;\r\n    font-size: 17.5px;\r\n    -webkit-border-radius: 6px;\r\n    -moz-border-radius: 6px;\r\n    border-radius: 6px;\r\n}\r\n.control{\r\n    height:1px;\r\n}\r\napp-control-messages{\r\n    color: red;\r\n} */\r\n\r\n.mat-form-field {\r\n    width: 400px;\r\n    font-size: 16px;\r\n    font-family: Roboto,\"Helvetica Neue\",sans-serif;\r\n  }\r\n\r\nbutton{\r\n    margin-top: 10px;\r\n    margin-right: 20px;\r\n  }\r\n\r\nbody {\r\n    margin: 0;\r\n    font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\r\n    font-size: 18px; \r\n    line-height: 20px;\r\n    color: #333333;\r\n    background-color: #f5f5f5;\r\n}\r\n\r\n.container{\r\n    background-color: #f5f5f5;\r\n    height: 660px;\r\n    width: 1304px;\r\n    padding-top:50px;\r\n}\r\n\r\n.form-register {\r\n    max-width: 480px;\r\n    padding: 35px 35px 29px;\r\n    margin:0 auto 20px;\r\n    background-color: #fff;\r\n    border: 1px solid #e5e5e5;\r\n    border-radius: 5px;\r\n    box-shadow: 0 1px 2px rgba(0,0,0,.05);\r\n}\r\n\r\napp-control-messages{\r\n    color: red;\r\n    font-size: 12px; \r\n}"

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <body>\n    <div class=\"container\">\n        <form class=\"form-register\" id=\"register\" [formGroup]=\"register\">\n            <h1 class=\"form-register-heading\">Register form</h1>\n            <div class=\"control-group\">\n                <label class=\"control-label\" for=\"inputName\">Your Name:</label>\n                <div class=\"controls\" type=\"controls\">\n                    <input placeholder=\"Enter your Name\" id=\"name\" name=\"name\" type=\"name\" formControlName=\"name\">\n                   <app-control-messages [control]=\"register.controls.name\" name=\"Name\"></app-control-messages>\n\n                </div>\n            </div>\n            <div class=\"control-group\">\n                <label class=\"control-label\" for=\"inputEmail\">Your Email:</label>\n                <div class=\"controls\" type=\"controls\">\n                    <input placeholder=\"Enter your Email\" id=\"email\" name=\"email\" type=\"email\" formControlName=\"email\">\n                     <app-control-messages [control]=\"register.controls.email\" name=\"Email\"></app-control-messages>\n                </div>\n            </div>\n            <div class=\"control-group\">\n                <label class=\"control-label\" for=\"inputUsername\">Username:</label>\n                <div class=\"controls\" type=\"controls\">\n                    <input placeholder=\"Enter your Username\" id=\"username\" name=\"username\" type=\"username\" formControlName=\"username\">\n                    <app-control-messages [control]=\"register.controls.username\" name=\"User name\"></app-control-messages>\n                     </div>\n            </div>\n            <div class=\"control-group\">\n                <label class=\"control-label\" for=\"inputPassword\">Password:</label>\n                <div class=\"controls\" type=\"controls\">\n                    <input placeholder=\"Enter Password\" id=\"password\" name=\"password\" type=\"password\" formControlName=\"password\">\n                    <app-control-messages [control]=\"register.controls.password\" name=\"Password\"></app-control-messages>\n                    </div>\n            </div>\n            <div class=\"control-group\">\n                <label class=\"control-label\" for=\"inputConfirmpassword\">Confirm Password:</label>\n                <div class=\"controls\" type=\"controls\">\n                    <input placeholder=\"Confirm your Password\" id=\"confirmpassword\" name=\"confirmpassword\" type=\"password\" formControlName=\"confirmpassword\">\n                    <app-control-messages [control]=\"register.controls.confirmpassword\" name=\"Confirm password\"></app-control-messages>\n                    </div>\n            </div>\n            <div class=\"control-group\">\n                <input type=\"submit\" class=\"btn btn-large btn-primary\" name=\"btnsubmit\" (click)=\"submit()\" value=\"Sign up\"> &nbsp;\n                <input type=\"button\" class=\"btn btn-large btn-primary\" name=\"btnback\" (click)=\"back()\" value=\"Back\">\n            </div>\n        </form>\n    </div>\n</body> -->\n\n<body>\n    <div class=\"container\">\n        <form class=\"form-register\" id=\"register\" [formGroup]=\"register\">\n            <p class=\"form-register-heading\">{{ \"register\" | translate }}</p>\n            <div class=\"control-group\">\n                <mat-form-field class=\"controls\" type=\"controls\">\n                    <input matInput placeholder='{{ \"entername\" | translate }}' id=\"name\" name=\"name\" type=\"name\" formControlName=\"name\" required>\n                    <mat-error>\n                        <app-control-messages [control]=\"register.controls.name\" name=\"Name\"></app-control-messages>\n                    </mat-error>\n                </mat-form-field>\n                <!-- <app-control-messages [control]=\"register.controls.name\" name=\"Name\"></app-control-messages> -->\n            </div>\n            <div class=\"control-group\">\n                <mat-form-field class=\"controls\" type=\"controls\">\n                    <input matInput placeholder='{{ \"enteremail\" | translate }}' id=\"email\" name=\"email\" type=\"email\" formControlName=\"email\" required>\n                    <mat-error>\n                        <app-control-messages [control]=\"register.controls.email\" name=\"Email\"></app-control-messages>\n                    </mat-error>\n                </mat-form-field>\n            </div>\n            <div class=\"control-group\">\n                <mat-form-field class=\"controls\" type=\"controls\">\n                    <input matInput placeholder='{{ \"enterusername\" | translate }}' id=\"username\" name=\"username\" type=\"username\" formControlName=\"username\"\n                        required>\n                    <mat-error>\n                        <app-control-messages [control]=\"register.controls.username\" name=\"User name\"></app-control-messages>\n                    </mat-error>\n                </mat-form-field>\n            </div>\n            <div class=\"control-group\">\n                <mat-form-field class=\"controls\" type=\"controls\">\n                    <input matInput placeholder='{{ \"enterpassword\" | translate }}' id=\"password\" name=\"password\" type=\"password\" formControlName=\"password\" required>\n                    <mat-error>\n                        <app-control-messages [control]=\"register.controls.password\" name=\"Password\"></app-control-messages>\n                    </mat-error>\n                </mat-form-field>\n            </div>\n            <div class=\"control-group\">\n                <mat-form-field class=\"controls\" type=\"controls\">\n                    <input matInput placeholder='{{ \"enterconfirmpassword\" | translate }}' id=\"confirmpassword\" name=\"confirmpassword\" type=\"password\" formControlName=\"confirmpassword\"\n                        required>\n                    <mat-error>\n                        <app-control-messages [control]=\"register.controls.confirmpassword\" name=\"Confirm password\"></app-control-messages>\n                    </mat-error>\n                </mat-form-field>\n            </div>\n            &nbsp;\n            <div class=\"control-group\">\n                <input type=\"submit\" class=\"btn btn-large btn-primary\" name=\"btnsubmit\" (click)=\"submit()\" value='{{ \"signupbutton\" | translate }}'>                &nbsp;\n                <input type=\"button\" class=\"btn btn-large btn-primary\" name=\"btnback\" (click)=\"back()\" value='{{ \"backbutton\" | translate }}'>\n            </div>\n        </form>\n    </div>\n</body>"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_app_login_app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../login-app/login-app.component */ "./src/app/login-app/login-app.component.ts");
/* harmony import */ var _validation_validation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../validation/validation.service */ "./src/app/validation/validation.service.ts");
/* harmony import */ var _UserService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../UserService */ "./src/app/UserService.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var localize_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! localize-router */ "./node_modules/localize-router/index.js");
/* harmony import */ var localize_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(localize_router__WEBPACK_IMPORTED_MODULE_7__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(myForm, userService, router, translate, localize) {
        this.myForm = myForm;
        this.userService = userService;
        this.router = router;
        this.localize = localize;
        this.translate = translate;
    }
    RegisterComponent.prototype.buildForm = function () {
        this.register = this.myForm.group({
            name: this.myForm.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            email: this.myForm.control('', [/*ValidationService.getErrorEmail,*/ _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            username: this.myForm.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required /*,ValidationService.getErrorUsername*/]),
            password: this.myForm.control('', [_validation_validation_service__WEBPACK_IMPORTED_MODULE_4__["ValidationService"].getRepasswordError2, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8), _validation_validation_service__WEBPACK_IMPORTED_MODULE_4__["ValidationService"].passwordValidator]),
            confirmpassword: this.myForm.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _validation_validation_service__WEBPACK_IMPORTED_MODULE_4__["ValidationService"].getRepasswordError]),
        });
    };
    RegisterComponent.prototype.ngOnInit = function () {
        this.buildForm();
    };
    RegisterComponent.prototype.submit = function () {
        var _this = this;
        if (this.register.valid) {
            var name = this.register.controls.name.value;
            var password = this.register.controls.password.value;
            var email = this.register.controls.email.value;
            var username = this.register.controls.username.value;
            var confirmpassword = this.register.controls.confirmpassword.value;
            var user = new _login_app_login_app_component__WEBPACK_IMPORTED_MODULE_3__["User"](name, email, username, password, confirmpassword);
            this.userService.postUser(user).subscribe(function (data) {
                user = data;
                console.log(_this.translate.currentLang, _this.localize.translateRoute('page'));
                _this.router.navigate(['/', _this.translate.currentLang, _this.localize.translateRoute('page')]);
                console.log(_this.translate.currentLang, _this.localize.translateRoute('page'));
                alert('thanh cong');
            });
        }
    };
    RegisterComponent.prototype.back = function () {
        if (localStorage.getItem('userToken') != null) {
            this.router.navigate([this.localize.translateRoute('/page')]);
        }
        else {
            this.router.navigate([this.localize.translateRoute('login')]);
            console.log(this.localize.translateRoute('/login'));
        }
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _UserService__WEBPACK_IMPORTED_MODULE_5__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"],
            localize_router__WEBPACK_IMPORTED_MODULE_7__["LocalizeRouterService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/say-hi/say-hi.component.css":
/*!*********************************************!*\
  !*** ./src/app/say-hi/say-hi.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/say-hi/say-hi.component.html":
/*!**********************************************!*\
  !*** ./src/app/say-hi/say-hi.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  say-hi works!\n</p>\n"

/***/ }),

/***/ "./src/app/say-hi/say-hi.component.ts":
/*!********************************************!*\
  !*** ./src/app/say-hi/say-hi.component.ts ***!
  \********************************************/
/*! exports provided: SayHiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SayHiComponent", function() { return SayHiComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SayHiComponent = /** @class */ (function () {
    function SayHiComponent() {
    }
    SayHiComponent.prototype.ngOnInit = function () {
    };
    SayHiComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-say-hi',
            template: __webpack_require__(/*! ./say-hi.component.html */ "./src/app/say-hi/say-hi.component.html"),
            styles: [__webpack_require__(/*! ./say-hi.component.css */ "./src/app/say-hi/say-hi.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SayHiComponent);
    return SayHiComponent;
}());



/***/ }),

/***/ "./src/app/validation/control-messages.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/validation/control-messages.component.ts ***!
  \**********************************************************/
/*! exports provided: ControlMessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlMessagesComponent", function() { return ControlMessagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _validation_validation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../validation/validation.service */ "./src/app/validation/validation.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ControlMessagesComponent = /** @class */ (function () {
    function ControlMessagesComponent() {
    }
    Object.defineProperty(ControlMessagesComponent.prototype, "errorMessage", {
        get: function () {
            var _controls = this.control.parent.controls;
            // console.log(_controls);
            if (_controls instanceof Object) {
                var key = Object.keys(_controls);
                // console.log(key)
            }
            for (var propertyName in this.control.errors) {
                // console.log(_controls);
                if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched || this.control.dirty) {
                    return this.name + _validation_validation_service__WEBPACK_IMPORTED_MODULE_2__["ValidationService"].getValidatorErrorMessage(propertyName, this.control.errors[propertyName]);
                }
            }
            return null;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"])
    ], ControlMessagesComponent.prototype, "control", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ControlMessagesComponent.prototype, "name", void 0);
    ControlMessagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-control-messages',
            template: "<div *ngIf =\"errorMessage !== null\">{{errorMessage}}</div>",
            styleUrls: [],
        }),
        __metadata("design:paramtypes", [])
    ], ControlMessagesComponent);
    return ControlMessagesComponent;
}());



/***/ }),

/***/ "./src/app/validation/validation.service.ts":
/*!**************************************************!*\
  !*** ./src/app/validation/validation.service.ts ***!
  \**************************************************/
/*! exports provided: ValidationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationService", function() { return ValidationService; });
var ValidationService = /** @class */ (function () {
    // dataSource: MatTableDataSource<User>;
    //  data = Object.assign(User);
    // User: User[] = [];
    function ValidationService(userService) {
        this.userService = userService;
        // this.userService.getUser().subscribe(data=>{this.User = data;
        //     this.dataSource = new MatTableDataSource(this.User);})
    }
    ValidationService.getValidatorErrorMessage = function (validatorName, validatorValue) {
        var config = {
            'required': " required !!!!",
            // 'required': `${name} Required` ,
            'invalidName': ' invalid name.',
            'invalidEmail': ' invalid email.',
            'invalidUsername': ' invalid. Username must be at least 4 character long.',
            'invalidPassword': ' invalid. Passwword must be at least 8-30 character.',
            'minlength': " minimum length " + validatorValue.requiredLength,
            'sameEmail': ' has been used !!!',
            'sameUsername': ' has been used !!!',
            'samePass': ' not match!!!',
            'samePass2': ' not match!!!'
        };
        return config[validatorName];
    };
    ValidationService.usernameValidator = function (control) {
        if (control.value.match(/^[a-zA-Z0-9!@#$%^&*]{4,30}$/)) {
            return null;
        }
        else {
            return { 'invalidUsername': true };
        }
    };
    ValidationService.passwordValidator = function (control) {
        if (control.value.match(/^[a-zA-Z0-9!@#$%^&*]{8,30}$/)) {
            return null;
        }
        else {
            return { 'invalidPassword': true };
        }
    };
    ValidationService.getErrorEmail = function (control) {
        var user = [];
        user = JSON.parse(localStorage.getItem('user'));
        var user3 = user.find(function (c) { return c.email === control.value; });
        if (user3) {
            return { 'sameEmail': true };
        }
        else {
            return null;
        }
    };
    // static getErrorUsername(control) {
    //     var user = [];
    //     user = JSON.parse(localStorage.getItem('user'));
    //     var user3 = user.find(c => c.username === control.value)
    //     if (user3) {
    //         return { 'sameUsername': true }
    //     }
    //     else {
    //         return null;
    //     }
    // }
    ValidationService.getRepasswordError = function (control) {
        if (control && control.value) {
            if (control.value == control.parent.get('password').value && control.value) {
                control.parent.get('password').setErrors(null);
                return null;
            }
            else {
                return { 'samePass': true };
            }
        }
    };
    ValidationService.getRepasswordError2 = function (control) {
        if (control && control.value) {
            if (control.value == control.parent.get('confirmpassword').value && control.value) {
                control.parent.get('confirmpassword').setErrors(null);
                return null;
            }
            else {
                return { 'samePass2': true };
            }
        }
    };
    return ValidationService;
}());



/***/ }),

/***/ "./src/app/webpage/webpage.component.css":
/*!***********************************************!*\
  !*** ./src/app/webpage/webpage.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* \r\n.container {\r\n    margin-top: 30px;\r\n  }\r\n  .gallary-wrap{\r\n    display: flex;\r\n    flex-direction: column;\r\n    flex: 1;\r\n    overflow: hidden;\r\n    position: relative;\r\n  }\r\n  \r\n  .gallary-wrap .items{\r\n    white-space: nowrap;\r\n    transition: transform 1s ease-in-out;\r\n  }\r\n  .gallary-wrap .items .item{\r\n    display: inline-block;\r\n    overflow: hidden;\r\n    text-align: center;\r\n  }\r\n  .slider-controller{\r\n    position: absolute;\r\n    top: 50%;\r\n    transform: translateY(-50%);\r\n    left: 0px;\r\n    width: 100%;\r\n    height: auto;\r\n    overflow: hidden;\r\n    height: 50px;\r\n  }\r\n  .slideBtn{\r\n      height: 50px;\r\n      background-size: contain;\r\n      padding: 10px;\r\n      width: 50px;\r\n      border: 0px;\r\n      top: 0%;\r\n      position: absolute;\r\n      background-repeat: no-repeat;\r\n      background-color: transparent;\r\n      color: transparent;\r\n  }\r\n  .slider-controller .prevbtn{\r\n    left: 10px;\r\n    background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGhlaWdodD0iNTEycHgiIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgd2lkdGg9IjUxMnB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48cG9seWdvbiBwb2ludHM9IjM1MiwxMTUuNCAzMzEuMyw5NiAxNjAsMjU2IDMzMS4zLDQxNiAzNTIsMzk2LjcgMjAxLjUsMjU2ICIvPjwvc3ZnPg==');\r\n  }\r\n  .slider-controller .nextbtn{\r\n    right: 10px;\r\n    background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGhlaWdodD0iNTEycHgiIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgd2lkdGg9IjUxMnB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48cG9seWdvbiBwb2ludHM9IjE2MCwxMTUuNCAxODAuNyw5NiAzNTIsMjU2IDE4MC43LDQxNiAxNjAsMzk2LjcgMzEwLjUsMjU2ICIvPjwvc3ZnPg==');\r\n    \r\n  }\r\n  .item img{\r\n    max-height: 100%;\r\n    max-width: 100%;\r\n    user-select: none;\r\n  }\r\n  .dots-control {\r\n    width: 100%;\r\n    text-align: center;\r\n    height: 20px;\r\n  }\r\n  \r\n  .dots-control .dotBox {\r\n    width: 10px;\r\n    height: 10px;\r\n    background: #ddd;\r\n    border: 1px solid #999;\r\n    display: inline-block;\r\n    margin: 5px;\r\n    border-radius: 50%;\r\n    cursor: pointer;\r\n  }\r\n  .dots-control .dotBox.activeDot {\r\n    background: #6b482f;\r\n  } */\r\n\r\ntable.shoppingcart{\r\n  height: 160px;\r\n  width: 100%;\r\n  background-color: #fff;\r\n  border: 1px solid #e5e5e5;\r\n  border-radius: 5px;\r\n  box-shadow: 0 1px 2px rgba(0,0,0,.05);\r\n}\r\n\r\ntd.image{\r\n  width: 35%;\r\n  text-align: center;\r\n}\r\n\r\ntd.nameprice{\r\n  width: 65%;\r\n}\r\n\r\ntr.button{\r\n  width: 100%;\r\n  text-align: center;\r\n  border: 1px solid #e5e5e5;\r\n  border-radius: 5px;\r\n  box-shadow: 0 1px 2px rgba(0,0,0,.05);\r\n}\r\n\r\ntd.add{\r\n  text-align: center;\r\n  width: 32%;\r\n}\r\n\r\ntd.favorite{\r\n  text-align: center;\r\n  width: 32%;\r\n}\r\n\r\na {\r\n  cursor: pointer;\r\n}\r\n\r\n.imageslide{\r\n  display: block;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  max-height:50%;\r\n  max-width: 100%;\r\n}\r\n\r\n.pagination{\r\n  padding-top: 20px;\r\n  padding-right: 15px;\r\n}\r\n\r\n.example-card {\r\n  max-width: 400px;\r\n  /* padding-top: 10px;\r\n  margin:10px; */\r\n  border: 1px solid #e5e5e5;\r\n  border-radius: 5px;\r\n  box-shadow: 0 1px 2px rgba(0,0,0,.05);\r\n}\r\n\r\n.example-header-image {\r\n  background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');\r\n  background-size: cover;\r\n}\r\n\r\n.itemimage{\r\n  border: 1px solid #e5e5e5;\r\n  max-width: 100%;\r\n  display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n  border-radius: 5px;\r\n  box-shadow: 0 1px 2px rgba(0,0,0,.05);\r\n}\r\n\r\nmat-card-title{\r\n  max-height: 40px;\r\n  height:40px;\r\n  margin:0px;\r\n}\r\n\r\nmat-card-actions{\r\n  padding:0px;\r\n  display: block;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\n\r\nngb-carousel{\r\n  padding-top: 10px;\r\n  padding-bottom: 10px;\r\n}\r\n\r\nmat-grid-tile{\r\n  max-width: 100%;\r\n  max-height: 100%;\r\n}\r\n\r\nmat-grid-list{\r\n  max-width: 100%;\r\n  max-height: 100%;\r\n  padding: 0px;\r\n}\r\n\r\nmat-card.example-card{\r\n  max-width: 100%;\r\n  max-height: 100%;\r\n}\r\n\r\nfigure.mat-figure{\r\n  max-width: 100%;\r\n  max-height: 100%;\r\n}\r\n\r\ndiv.shoppinglist{\r\n  border: 1px solid #e5e5e5;\r\n  border-radius: 5px;\r\n  box-shadow: 0 1px 2px rgba(0,0,0,.05);\r\n  margin:20px;\r\n}"

/***/ }),

/***/ "./src/app/webpage/webpage.component.html":
/*!************************************************!*\
  !*** ./src/app/webpage/webpage.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"row\">\n  <div class=\"gallary-wrap\" gallarySlide=\"item\" gallaryBoxID=\"items\" item-md=4 item-sm=2 item-xs=1 autoplay=\"true\">\n    <div class=\"items\" id=\"items\">\n      <div *ngFor=\"let image of gallaryimage\" class=\"item\">\n        <img src=\"assets/image/{{image.image}}\" alt=\"{{ image.title }}\">\n      </div>\n    </div>\n    <div class=\"slider-controller\">\n      <button class=\"prevbtn slideBtn\">Prev</button>\n      <button class=\"nextbtn slideBtn\">next</button>\n    </div>\n  </div>\n</div> -->\n<div>\n<ngb-carousel>\n    <ng-template ngbSlide>\n      <img src=\"assets/image/image1.jpg\" alt=\"Random first slide\" class=\"imageslide\">\n      <div class=\"carousel-caption\">\n        <h3>First slide label</h3>\n      </div>\n    </ng-template>\n    <ng-template ngbSlide>\n      <img src=\"assets/image/image2.webp\" alt=\"Random second slide\" class=\"imageslide\">\n      <div class=\"carousel-caption\">\n        <h3>Second slide label</h3>\n      </div>\n    </ng-template>\n    <ng-template ngbSlide>\n      <img src=\"assets/image/image3.webp\" alt=\"Random third slide\" class=\"imageslide\">\n      <div class=\"carousel-caption\">\n        <h3>Third slide label</h3>\n      </div>\n    </ng-template>\n    <ng-template ngbSlide>\n        <img src=\"assets/image/image4.webp\" alt=\"Random four slide\" class=\"imageslide\">\n        <div class=\"carousel-caption\">\n          <h3>Four slide label</h3>\n        </div>\n      </ng-template>\n  </ngb-carousel>\n</div>\n\n\n\n<div class=\"shoppinglist\">\n  <mat-grid-list [cols]=\"breakpoint\" rowHeight=\"1:1\" class=\"shoplist\" (window:resize)=\"onResize($event)\">\n      <mat-grid-tile *ngFor=\"let product of pagedItems\" class=\"shop\">\n\n  <mat-card class=\"example-card\">\n      <mat-card-header>\n        <div mat-card-avatar class=\"example-header-image\"></div>\n        <mat-card-title>{{ product.Name }}</mat-card-title>\n        <mat-card-subtitle>$ {{ product.Price }}</mat-card-subtitle>\n      </mat-card-header>\n      <img mat-card-image src=\"https://i.dell.com/sites/imagecontent/consumer/merchandizing/en/PublishingImages/Franchise-category/xpslt/cs1601g0012_xps_13_9365_2in1_pdp_module4.jpg\" alt=\"Photo of a Shiba Inu\" class=\"itemimage\">\n      <mat-card-actions>\n        <button mat-button class=\"btn btn-warning\" (click)=\"favorite(product.Id)\"><img src=\"assets/image/unfavorite.png\">Favorite</button>\n        <button mat-button class=\"btn btn-warning\" (click)=\"detail(product.Id)\"><img src=\"assets/image/loupe.png\">Detail</button>\n        <button mat-button class=\"btn btn-warning\"><img src=\"assets/image/shopping-bag.png\"> Add to cart</button>\n      </mat-card-actions>\n    </mat-card>\n\n  </mat-grid-tile>\n</mat-grid-list>\n</div>\n<!-- \n<mat-grid-list cols=\"3\" rowHeight=\"160px\">\n  <mat-grid-tile *ngFor=\"let product of pagedItems\">\n    <table class=\"shoppingcart\">\n      <tr class=\"imagenameprice\">\n        <td class=\"image\"><img src=\"https://dummyimage.com/100x100.png/cc0000/ffffff\"></td>\n        <td class=\"nameprice\">\n      <tr>\n        {{ product.Name }}\n      </tr>\n      <tr>\n        $ {{ product.Price }}\n      </tr>\n      <tr class=\"details\" ><button class=\"btn btn-link\" style=\"padding-left: 0px;\">Details</button></tr>\n      </td>\n      </tr>\n      <tr class=\"button\">\n        <td class=\"favorite\"><button class=\"btn btn-warning\"><img src=\"assets/image/unfavorite.png\"> Favorite</button></td>\n        <td class=\"add\"><button class=\"btn btn-warning\"><img src=\"assets/image/shopping-bag.png\"> Add to cart</button></td>\n      </tr>\n    </table>\n  </mat-grid-tile>\n</mat-grid-list> -->\n<ul *ngIf=\"pager.pages && pager.pages.length\" class=\"pagination justify-content-end\">\n    <li [ngClass]=\"{disabled:pager.currentPage === 1}\" class=\"page-item\">\n        <a class=\"page-link\" (click)=\"setPage(1)\">First</a>\n    </li>\n    <li [ngClass]=\"{disabled:pager.currentPage === 1}\" class=\"page-item\">\n        <a class=\"page-link\" (click)=\"setPage(pager.currentPage - 1)\">Previous</a>\n    </li>\n    <li *ngFor=\"let page of pager.pages\" [ngClass]=\"{active:pager.currentPage === page}\" class=\"page-item\">\n        <a class=\"page-link\" (click)=\"setPage(page)\">{{page}}</a>\n    </li>\n    <li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\" class=\"page-item\">\n        <a class=\"page-link\" (click)=\"setPage(pager.currentPage + 1)\">Next</a>\n    </li>\n    <li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\" class=\"page-item\">\n        <a class=\"page-link\" (click)=\"setPage(pager.totalPages)\">Last</a>\n    </li>\n</ul>\n\n<!-- <mat-grid-list cols=\"2\" rowHeight=\"2000px\">\n  <mat-grid-tile>\n    <div class=\"matatable\">\n      <table mat-table class=\"mat-table\" [dataSource]=\"productdataSource\" matSort>\n        <ul>\n          <li *ngFor=\"let product of Product\">\n            {{ product.Image }}\n          </li>\n        </ul>\n        <ng-container matColumnDef=\"Image\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> {{\"Image\"}} </th>\n          <td mat-cell *matCellDef=\"let Product\"><img src=\"https://dummyimage.com/100x100.png/cc0000/ffffff\"></td>\n        </ng-container>\n        <ng-container matColumnDef=\"Name\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> {{ \"Name\"}} </th>\n          <td mat-cell *matCellDef=\"let Product\"> {{Product.Name}} </td>\n        </ng-container> \n        <ng-container matColumnDef=\"Price\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> {{ \"Price\"}} </th>\n          <td mat-cell *matCellDef=\"let Product\"> {{Product.Price}} </td>\n        </ng-container>\n        <ng-container matColumnDef=\"Details\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> {{ \"Details\"}} </th>\n          <td mat-cell *matCellDef=\"let Product\"> {{Product.Details}} </td>\n        </ng-container>\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n      </table>\n      <mat-paginator [pageSizeOptions]=\"[10,20,30]\" showFirstLastButtons></mat-paginator>\n    </div>\n  </mat-grid-tile>\n</mat-grid-list> -->"

/***/ }),

/***/ "./src/app/webpage/webpage.component.ts":
/*!**********************************************!*\
  !*** ./src/app/webpage/webpage.component.ts ***!
  \**********************************************/
/*! exports provided: Product, WebpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product", function() { return Product; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebpageComponent", function() { return WebpageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _UserService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../UserService */ "./src/app/UserService.ts");
/* harmony import */ var _gallary_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../gallary.service */ "./src/app/gallary.service.ts");
/* harmony import */ var _services_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/index */ "./src/app/_services/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var localize_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! localize-router */ "./node_modules/localize-router/index.js");
/* harmony import */ var localize_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(localize_router__WEBPACK_IMPORTED_MODULE_6__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var Product = /** @class */ (function () {
    function Product(Id, Image, Name, Price, Details, Quanlity) {
        this.Id = Id;
        this.Image = Image;
        this.Name = Name;
        this.Price = Price;
        this.Details = Details;
        this.Quanlity = Quanlity;
    }
    return Product;
}());

var WebpageComponent = /** @class */ (function () {
    function WebpageComponent(userService, gallaryservice, pagerService, router, localize) {
        var _this = this;
        this.userService = userService;
        this.gallaryservice = gallaryservice;
        this.pagerService = pagerService;
        this.router = router;
        this.localize = localize;
        this.Id = [];
        // pager object
        this.pager = {};
        this.productdata = Object.assign(Product);
        this.displayedColumns = ['Image', 'Name', 'Price', 'Details'];
        this.userService.getProduct().subscribe(function (productdata) {
            _this.Product = productdata;
            _this.productdataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](_this.Product);
            _this.productdataSource.paginator = _this.paginator;
            _this.productdataSource.sort = _this.sort;
            // initialize to page 1
            _this.setPage(1);
            _this.productItem = _this.Product.length;
        });
        localStorage.removeItem('id');
    }
    WebpageComponent.prototype.ngOnInit = function () {
        localStorage.removeItem('id');
        this.gallaryimage = this.gallaryservice.images;
        if (window.innerWidth <= 810) {
            this.breakpoint = 1;
            this.itemperPage = 5;
            this.pagerService.getPager(200, 1, 5);
        }
        else if (window.innerWidth <= 1200 && window.innerWidth > 810) {
            this.breakpoint = 2;
            this.itemperPage = 6;
            this.pagerService.getPager(200, 1, 6);
        }
        else if (window.innerWidth > 1200) {
            this.breakpoint = 3;
            this.itemperPage = 9;
            this.pagerService.getPager(200, 1, 9);
        }
    };
    WebpageComponent.prototype.onResize = function (event) {
        if (event.target.innerWidth <= 810) {
            this.breakpoint = 1;
            this.itemperPage = 5;
            this.pagerService.getPager(200).pageSize = 5;
        }
        else if (event.target.innerWidth <= 1200 && event.target.innerWidth > 810) {
            this.breakpoint = 2;
            this.itemperPage = 6;
            this.pagerService.getPager(200).pageSize = 6;
        }
        else if (event.target.innerWidth > 1200) {
            this.breakpoint = 3;
            this.itemperPage = 9;
            this.pagerService.getPager(200).pageSize = 9;
        }
    };
    WebpageComponent.prototype.setPage = function (page) {
        // get pager object from service
        this.pager = this.pagerService.getPager(this.Product.length, page, this.itemperPage);
        // get current page of items
        this.pagedItems = this.Product.slice(this.pager.startIndex, this.pager.endIndex + 1);
    };
    WebpageComponent.prototype.detail = function (id) {
        console.log(id);
        localStorage.setItem('id', id);
        this.router.navigate([this.localize.translateRoute('/detailproduct')]);
    };
    WebpageComponent.prototype.favorite = function (id) {
        for (var i = -1; i < this.Id.length; i++) {
            console.log(id);
            if (this.Id.length == 0) {
                this.Id.push(id);
                console.log(this.Id);
                // console.log("true")
                return this.Id;
            }
            else if (id !== this.Id[i]) {
                this.Id.push(id);
                console.log('1');
            }
            // else{
            //   this.Id.push(id);
            // }
        }
        console.log(this.Id);
        // this.productId = this.Id.toString();
        // localStorage.setItem('favorite',this.productId);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], WebpageComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], WebpageComponent.prototype, "sort", void 0);
    WebpageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-webpage',
            template: __webpack_require__(/*! ./webpage.component.html */ "./src/app/webpage/webpage.component.html"),
            styles: [__webpack_require__(/*! ./webpage.component.css */ "./src/app/webpage/webpage.component.css")]
        }),
        __metadata("design:paramtypes", [_UserService__WEBPACK_IMPORTED_MODULE_2__["UserService"], _gallary_service__WEBPACK_IMPORTED_MODULE_3__["GallaryService"], _services_index__WEBPACK_IMPORTED_MODULE_4__["PagerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], localize_router__WEBPACK_IMPORTED_MODULE_6__["LocalizeRouterService"]])
    ], WebpageComponent);
    return WebpageComponent;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\admin\login-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map