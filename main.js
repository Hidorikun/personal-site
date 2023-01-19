(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/about-me-card/about-me-card.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/about-me-card/about-me-card.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-sm-12\">\n      <div class=\"box-shadow-full\">\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <div class=\"row\">\n              <div class=\"col-sm-6 col-md-5\">\n                <div class=\"about-img\">\n                  <img src=\"../assets/img/profil.jpg\" class=\"img-fluid rounded b-shadow-a\" alt=\"\">\n                </div>\n              </div>\n              <div class=\"col-sm-6 col-md-7\">\n                <div class=\"about-info\" >\n                  <p><span class=\"title-s\">Name: </span> <span>Vele Radu-George</span></p>\n                  <p><span class=\"title-s\">Profile: </span> <span>Software engineer</span></p>\n                  <p style=\"word-break: break-all\"><span class=\"title-s\" >Email: </span> <span>georgevele2016@gmail.com</span></p>\n                </div>\n              </div>\n            </div>\n            <div class=\"skill-mf\">\n              <p class=\"title-s\">Skills:</p>\n              <div style=\"display: flex; flex-wrap: wrap;\">\n                <img *ngFor=\"let skill of skills\" [src]=\"skill.logo\" class=\"logo img-fluid rounded b-shadow-a\" [title]=\"skill.name\">\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-6\">\n            <div class=\"about-me pt-4 pt-md-0\">\n              <div class=\"title-box-2\">\n                <h5 class=\"title-left\">\n                  About me\n                </h5>\n              </div>\n              <p class=\"lead\">\n                Hi there, I am George. I have completed my bachelor in Computer Science and now I'm studying a\n                master's in Software Engineering and working part time in the industry.\n              </p>\n              <p class=\"lead\">\n                I like learning and improving my skills whenever possible.\n              </p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!--&lt;!&ndash;/ Nav Star /&ndash;&gt;-->\n<!--<nav class=\"navbar navbar-b navbar-trans navbar-expand-md fixed-top\" id=\"mainNav\">-->\n<!--  <div class=\"container\">-->\n<!--    <button class=\"navbar-toggler collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarDefault\"-->\n<!--            aria-controls=\"navbarDefault\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">-->\n<!--      <span></span>-->\n<!--      <span></span>-->\n<!--      <span></span>-->\n<!--    </button>-->\n<!--    <div class=\"navbar-collapse collapse justify-content-end\" id=\"navbarDefault\">-->\n<!--      <ul class=\"navbar-nav\">-->\n<!--        <li class=\"nav-item\">-->\n<!--          <a class=\"nav-link js-scroll active\" href=\"#home\">Home</a>-->\n<!--        </li>-->\n<!--        <li class=\"nav-item\">-->\n<!--          <a class=\"nav-link js-scroll\" href=\"#about\">About</a>-->\n<!--        </li>-->\n<!--        <li class=\"nav-item\">-->\n<!--          <a class=\"nav-link js-scroll\" href=\"#projects\">Projects</a>-->\n<!--        </li>-->\n<!--        <li class=\"nav-item\">-->\n<!--          <a class=\"nav-link js-scroll\" href=\"#contact\">Contact</a>-->\n<!--        </li>-->\n<!--      </ul>-->\n<!--    </div>-->\n<!--  </div>-->\n<!--</nav>-->\n<!--&lt;!&ndash;/ Nav End /&ndash;&gt;-->\n\n\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/chess/chess.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/chess/chess.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page\">\n  <div cdkDropListGroup\n       [ngClass]=\"getBoardClasses()\">\n    <ng-container *ngFor=\"let row of getBoard(); let i = index\">\n      <div *ngFor=\"let cell of row; let j = index\"\n           cdkDropList\n           class=\"cell\"\n           (cdkDropListDropped)=\"dropPiece(cell)\"\n           [ngClass]=\"getCellClasses(cell)\">\n\n          <fa-icon *ngIf=\"!!cell.piece\"\n                   cdkDrag\n                   (cdkDragStarted)=\"dragPiece(cell.piece)\"\n                   [cdkDragDisabled]=\"pieceDisabled(cell.piece)\"\n                   cdkDragBoundary=\".board\"\n                   [icon]=\"cell.piece.icon\"\n                   [ngClass]=\"getPieceClasses(cell.piece)\">\n          </fa-icon>\n      </div>\n    </ng-container>\n\n    <div class=\"dark-captured-container\">\n      <fa-icon *ngFor=\"let piece of getDarkCapturedPieces()\"\n               [icon]=\"piece.icon\"\n               [styles]=\"{'stroke': 'black', 'stroke-width': '10px'}\"\n               class=\"captured-piece\"\n      ></fa-icon>\n    </div>\n    <div class=\"light-captured-container\">\n      <fa-icon *ngFor=\"let piece of getLightCapturedPieces()\"\n               [icon]=\"piece.icon\"\n               [styles]=\"{'stroke': 'black', 'stroke-width': '10px'}\"\n               class=\"captured-piece\"\n      ></fa-icon>\n    </div>\n    <div *ngIf=\"gameEnded()\" class=\"dialog-wrapper\" >\n\n      <fa-icon [icon]=\"faBookmark\" class=\"fa-4x ribbon-side-left\" [rotate]=\"90\"></fa-icon>\n      <fa-icon [icon]=\"faBookmark\" class=\"fa-4x ribbon-side-right\" [rotate]=\"270\"></fa-icon>\n\n      <div class=\"dialog\"></div>\n\n      <fa-icon *ngIf=\"!!getlastMovedPiece()\"\n               [icon]=\"getlastMovedPiece().icon\"\n               [ngClass]=\"getDialogPieceClasses(getlastMovedPiece())\">\n      </fa-icon>\n\n      <div class=\"ribbon\">\n        <h3>{{getVictoryMessage()}}</h3>\n      </div>\n\n\n    </div>\n    <div *ngIf=\"shouldUpdateLatestPiece()\" class=\"piece-selection\">\n      <h3>Upgrade time!</h3>\n      <fa-icon *ngFor=\"let piece of getPieceSelection()\"\n               [icon]=\"piece.icon\"\n               (click)=\"selectPiece(piece)\"\n               [ngClass]=\"getSelectionPieceClasses(piece)\"\n               class=\"selection-piece\"\n      ></fa-icon>\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/profile/profile.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/profile/profile.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"home\" class=\"intro route bg-image\" style=\"background-image: url(/assets/img/jita.jpg)\">\n  <div class=\"overlay-itro\"></div>\n  <div class=\"intro-content display-table\">\n    <div class=\"table-cell\">\n      <div class=\"container\">\n        <!--<p class=\"display-6 color-d\">Hello, world!</p>-->\n        <h1 class=\"intro-title mb-4\">I am George Vele</h1>\n        <p class=\"intro-subtitle\"> Software Engineer</p>\n        <!-- <p class=\"pt-3\"><a class=\"btn btn-primary btn js-scroll px-4\" href=\"#about\" role=\"button\">Learn More</a></p> -->\n      </div>\n    </div>\n  </div>\n</div>\n\n<section id=\"about\" class=\"about-mf sect-pt4 route\">\n  <app-about-me-card></app-about-me-card>\n</section>\n\n<div class=\"section-counter paralax-mf bg-image\" style=\"background-image: url(/assets/img/counters-bg.jpg)\">\n  <div class=\"overlay-mf\"></div>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-sm-6 col-lg-6\">\n        <div class=\"counter-box pt-4 pt-md-0\">\n          <div class=\"counter-ico\">\n            <span class=\"ico-circle\"><i class=\"ion-ios-calendar-outline\"></i></span>\n          </div>\n          <div class=\"counter-num\">\n            <p class=\"counter\">{{yearsOfExperience | number:'1.1-1'}}</p>\n            <span class=\"counter-text\">YEARS OF EXPERIENCE</span>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-sm-6 col-lg-6\">\n        <div class=\"counter-box pt-4 pt-md-0\">\n          <div class=\"counter-ico\">\n            <span class=\"ico-circle\"><i class=\"ion-ribbon-a\"></i></span>\n          </div>\n          <div class=\"counter-num\">\n            <p class=\"counter\">11</p>\n            <span class=\"counter-text\">AWARDS WON</span>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<section id=\"projects\" class=\"portfolio-mf sect-pt4 route\">\n  <app-project-list></app-project-list>\n</section>\n\n<section class=\"paralax-mf footer-paralax bg-image sect-mt4 route\" style=\"background-image: url(/assets/img/overlay-bg.jpg)\">\n  <div class=\"overlay-mf\"></div>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-sm-12\">\n        <div class=\"contact-mf\">\n          <div id=\"contact\" class=\"box-shadow-full\">\n            <div class=\"row\">\n              <div class=\"col-md-12\">\n                <div class=\"title-box-2 pt-4 pt-md-0\">\n                  <h5 class=\"title-left\">\n                    Get in Touch\n                  </h5>\n                </div>\n                <div class=\"more-info\">\n                  <p class=\"lead\">\n                    If you want to contact me, here are some ways you can do so.\n                  </p>\n                  <ul class=\"list-ico\">\n                    <li><span class=\"ion-ios-email-outline\"></span> georgevele2016@gmail.com</li>\n                  </ul>\n                </div>\n                <div class=\"socials\">\n                  <ul>\n                    <li><a href=\"https://www.facebook.com/george.vele.7\"><span class=\"ico-circle\"><i class=\"ion-social-facebook\"></i></span></a></li>\n                    <li><a href=\"https://www.linkedin.com/in/velegeorge/\"><span class=\"ico-circle\"><i class=\"ion-social-linkedin\"></i></span></a></li>\n                  </ul>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <footer>\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-sm-12\">\n          <div class=\"copyright-box\">\n            <p class=\"copyright\">&copy; Copyright <strong>George Vele</strong>. All Rights Reserved</p>\n            <div class=\"credits\">\n              <!--\n                All the links in the footer should remain intact.\n                You can delete the links only if you purchased the pro version.\n                Licensing information: https://bootstrapmade.com/license/\n                Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/buy/?theme=DevFolio\n              -->\n              Designed by <a href=\"https://bootstrapmade.com/\">BootstrapMade</a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </footer>\n</section>\n\n<a href=\"#\" class=\"back-to-top\"><i class=\"fa fa-chevron-up\"></i></a>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/project-list/project-list.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/project-list/project-list.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-sm-12\">\n      <div class=\"title-box text-center\">\n        <h3 class=\"title-a\">\n          Projects\n        </h3>\n        <p class=\"subtitle-a\">\n          For more cool projects, please visit my\n          <a href=\"https://github.com/Hidorikun\" class=\"btn-link\">GitHub</a>\n          page\n        </p>\n        <div class=\"line-mf\"></div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div *ngFor=\"let project of projects\" class=\"col-md-4\">\n      <div class=\"work-box\">\n        <a [href]=\"project.thumbnail\" data-lightbox=\"gallery-mf\">\n          <div class=\"work-img\">\n            <img [src]=\"project.thumbnail\" alt=\"\" class=\"img-fluid\">\n          </div>\n        </a>\n        <div class=\"work-content\">\n          <div class=\"row\">\n            <div class=\"col-sm-8\">\n              <h2 class=\"w-title\">{{project.name}}</h2>\n              <div class=\"w-more\">\n                <span class=\"w-ctegory\">{{project.category}}</span> / <span class=\"w-date\">{{project.year}}</span>\n              </div>\n            </div>\n            <div class=\"col-sm-4\">\n              <div class=\"w-like\">\n                <a [href]=\"project.gitLink\"><span class=\"ion-social-github\"></span></a>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

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

/***/ "./src/app/about-me-card/about-me-card.component.css":
/*!***********************************************************!*\
  !*** ./src/app/about-me-card/about-me-card.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logo {\n  height: 80px;\n  width: 80px;\n  padding: 4px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQtbWUtY2FyZC9hYm91dC1tZS1jYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2Fib3V0LW1lLWNhcmQvYWJvdXQtbWUtY2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ28ge1xuICBoZWlnaHQ6IDgwcHg7XG4gIHdpZHRoOiA4MHB4O1xuICBwYWRkaW5nOiA0cHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/about-me-card/about-me-card.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/about-me-card/about-me-card.component.ts ***!
  \**********************************************************/
/*! exports provided: AboutMeCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutMeCardComponent", function() { return AboutMeCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutMeCardComponent = /** @class */ (function () {
    function AboutMeCardComponent() {
        this.skills = [
            {
                name: 'Angular2',
                logo: '../../assets/img/angular-logo.png'
            },
            {
                name: 'Java',
                logo: '../../assets/img/java-logo-2.png'
            },
            {
                name: 'Kotlin',
                logo: '../../assets/img/kotlin-logo.png'
            },
            {
                name: 'C++',
                logo: '../../assets/img/cpp-logo.png'
            },
            {
                name: 'Python3',
                logo: '../../assets/img/python-logo.png'
            },
            {
                name: 'Spring Boot',
                logo: '../../assets/img/spring-boot.png'
            },
            {
                name: 'Git',
                logo: '../../assets/img/git-logo.png'
            },
            {
                name: 'SQL',
                logo: '../../assets/img/sql-logo.png'
            },
            {
                name: 'MongoDB',
                logo: '../../assets/img/mongo-logo.png'
            }
        ];
    }
    AboutMeCardComponent.prototype.ngOnInit = function () {
    };
    AboutMeCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about-me-card',
            template: __webpack_require__(/*! raw-loader!./about-me-card.component.html */ "./node_modules/raw-loader/index.js!./src/app/about-me-card/about-me-card.component.html"),
            styles: [__webpack_require__(/*! ./about-me-card.component.css */ "./src/app/about-me-card/about-me-card.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutMeCardComponent);
    return AboutMeCardComponent;
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
/* harmony import */ var _chess_chess_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chess/chess.component */ "./src/app/chess/chess.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");





var routes = [
    { path: 'chess', component: _chess_chess_component__WEBPACK_IMPORTED_MODULE_3__["ChessComponent"] },
    { path: '', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"] },
    { path: '**', redirectTo: '' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

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


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'personal-site';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _about_me_card_about_me_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./about-me-card/about-me-card.component */ "./src/app/about-me-card/about-me-card.component.ts");
/* harmony import */ var _project_list_project_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./project-list/project-list.component */ "./src/app/project-list/project-list.component.ts");
/* harmony import */ var _chess_chess_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./chess/chess.component */ "./src/app/chess/chess.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _about_me_card_about_me_card_component__WEBPACK_IMPORTED_MODULE_5__["AboutMeCardComponent"],
                _chess_chess_component__WEBPACK_IMPORTED_MODULE_7__["ChessComponent"],
                _project_list_project_list_component__WEBPACK_IMPORTED_MODULE_6__["ProjectListComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_8__["ProfileComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__["FontAwesomeModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_10__["DragDropModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/chess/chess.component.css":
/*!*******************************************!*\
  !*** ./src/app/chess/chess.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page {\n  width: 100%;\n  height: 100%;\n  padding-top: 60px;\n\n  background: rgb(21,52,184);\n  background: radial-gradient(circle, rgba(21,52,184,1) 0%, rgba(44,9,121,1) 38%, rgba(23,0,42,1) 100%);\n}\n\n.board {\n  position: relative;\n\n  display: grid;\n  grid-template-rows: repeat(8, 12.5%);\n  grid-template-columns: repeat(8, 12.5%);\n\n  margin: auto;\n  width: 600px;\n  height: 600px;\n}\n\n.cell {\n\n  text-align: center;\n  z-index: 0;\n  background:\n    radial-gradient(white 15%, transparent 16%) 0 0,\n    radial-gradient(white 15%, transparent 16%) 8px 8px,\n    radial-gradient(rgba(234, 234, 234, 0.9) 15%, transparent 20%) 0 1px,\n    radial-gradient(rgba(234, 234, 234, 0.9) 15%, transparent 20%) 8px 9px;\n  background-color: #ffffff;\n  background-size:16px 16px;\n\n  border: 2px solid white\n}\n\n.dark-cell {\n  z-index: 0;\n  background:\n    linear-gradient(27deg, #151515 5px, transparent 5px) 0 5px,\n    linear-gradient(207deg, #151515 5px, transparent 5px) 10px 0px,\n    linear-gradient(27deg, #222 5px, transparent 5px) 0px 10px,\n    linear-gradient(207deg, #222 5px, transparent 5px) 10px 5px,\n    linear-gradient(90deg, #1b1b1b 10px, transparent 10px),\n    linear-gradient(#1d1d1d 25%, #1a1a1a 25%, #1a1a1a 50%, transparent 50%, transparent 75%, #242424 75%, #242424);\n  background-color: #131313;\n  background-size: 20px 20px;\n\n  border: 2px solid black;\n}\n\n.light-piece {\n  color: gray;\n}\n\n.dark-piece {\n  color: rgb(3, 66, 184);\n}\n\n.check {\n  border: 5px dashed red;\n}\n\n.highlighted {\n    /*background: rgba(128, 255, 83, 0.72);*/\n\n  border: 5px dashed rgb(128, 255, 83);\n}\n\n.dialog-wrapper {\n  position: relative;\n  left: 200px;\n  bottom: 402px;\n  height: 200px;\n  width: 200px;\n}\n\n.dialog {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  border-radius: 13px;\n  box-shadow: 0 0 10px black;\n  background: radial-gradient(circle, rgba(245,245,245,1) 0%, rgba(255,255,255,1) 100%);\n}\n\n.dialog-piece {\n  position: absolute;\n}\n\n.l-30 {\n  left: 30%;\n}\n\n.l-35 {\n  left: 35%;\n}\n\n.ribbon {\n  background: rgb(128, 255, 83);\n  height: 26%;\n  width: 110%;\n  position: absolute;\n  left: -5%;\n  top: 60%;\n\n  text-align: center;\n}\n\n.ribbon-side-left {\n  position: absolute;\n  left: -15%;\n  color: rgb(108, 215, 80);\n  top: 50%;\n}\n\n.ribbon-side-right {\n  position: absolute;\n  right: -15%;\n  color: rgb(108, 215, 80);\n  top: 50%;\n}\n\n.dark-captured-container {\n  position: absolute;\n  top: -55px;\n  width: 100%;\n  color: gray;\n}\n\n.light-captured-container {\n  position: absolute;\n  bottom: -55px;\n  width: 100%;\n  color: rgb(3, 66, 184);\n}\n\n.captured-piece {\n  font-size: 2rem;\n  padding-right: 8px\n}\n\n.piece-selection-wrapper {\n  border: 2px solid green;\n  position: relative;\n  left: 200px;\n  bottom: 402px;\n  height: 200px;\n  width: 200px;\n}\n\n.piece-selection {\n  border: 2px solid green;\n  position: relative;\n  left: 150px;\n  bottom: 376px;\n  height: 152px;\n  width: 300px;\n  border-radius: 13px;\n  box-shadow: 0 0 10px black;\n  background: radial-gradient(circle, rgba(245,245,245,1) 0%, rgba(255,255,255,1) 100%);\n  text-align: center;\n}\n\n.selection-piece {\n  padding: 8px;\n  cursor: pointer;\n}\n\n.selection-piece:hover {\n  padding: 3px;\n  border: 5px dashed rgb(3, 66, 184);\n}\n\n.red-glow {\n  -webkit-animation: red-glow 1s ease-in-out infinite alternate;\n          animation: red-glow 1s ease-in-out infinite alternate;\n}\n\n.gold-glow {\n  -webkit-animation: gold-glow 1s ease-in-out infinite alternate;\n          animation: gold-glow 1s ease-in-out infinite alternate;\n}\n\n.green-glow {\n  -webkit-animation: green-glow 1s ease-in-out infinite alternate;\n          animation: green-glow 1s ease-in-out infinite alternate;\n}\n\n@-webkit-keyframes red-glow {\n  from {\n    box-shadow: 0 0 10px 10px #fff,\n    0 0 20px #fff,\n    0 0 30px red,\n    0 0 40px red,\n    0 0 50px red,\n    0 0 60px red,\n    0 0 70px red;\n  }\n  to {\n    box-shadow: 0 0 20px #fff,\n    0 0 30px #ff3737,\n    0 0 40px #ff3737,\n    0 0 50px #ff3737,\n    0 0 60px #ff3737,\n    0 0 70px #ff3737,\n    0 0 80px #ff3737;\n  }\n}\n\n@keyframes red-glow {\n  from {\n    box-shadow: 0 0 10px 10px #fff,\n    0 0 20px #fff,\n    0 0 30px red,\n    0 0 40px red,\n    0 0 50px red,\n    0 0 60px red,\n    0 0 70px red;\n  }\n  to {\n    box-shadow: 0 0 20px #fff,\n    0 0 30px #ff3737,\n    0 0 40px #ff3737,\n    0 0 50px #ff3737,\n    0 0 60px #ff3737,\n    0 0 70px #ff3737,\n    0 0 80px #ff3737;\n  }\n}\n\n@-webkit-keyframes green-glow {\n  from {\n    box-shadow: 0 0 10px 10px #fff,\n    0 0 20px #fff,\n    0 0 30px rgb(108, 215, 80),\n    0 0 40px rgb(108, 215, 80),\n    0 0 50px rgb(108, 215, 80),\n    0 0 60px rgb(108, 215, 80),\n    0 0 70px rgb(108, 215, 80);\n  }\n  to {\n    box-shadow: 0 0 20px #fff,\n    0 0 30px rgb(128, 255, 83),\n    0 0 40px rgb(128, 255, 83),\n    0 0 50px rgb(128, 255, 83),\n    0 0 60px rgb(128, 255, 83),\n    0 0 70px rgb(128, 255, 83),\n    0 0 80px rgb(128, 255, 83);\n  }\n}\n\n@keyframes green-glow {\n  from {\n    box-shadow: 0 0 10px 10px #fff,\n    0 0 20px #fff,\n    0 0 30px rgb(108, 215, 80),\n    0 0 40px rgb(108, 215, 80),\n    0 0 50px rgb(108, 215, 80),\n    0 0 60px rgb(108, 215, 80),\n    0 0 70px rgb(108, 215, 80);\n  }\n  to {\n    box-shadow: 0 0 20px #fff,\n    0 0 30px rgb(128, 255, 83),\n    0 0 40px rgb(128, 255, 83),\n    0 0 50px rgb(128, 255, 83),\n    0 0 60px rgb(128, 255, 83),\n    0 0 70px rgb(128, 255, 83),\n    0 0 80px rgb(128, 255, 83);\n  }\n}\n\n@-webkit-keyframes gold-glow {\n  from {\n    box-shadow: 0 0 10px 10px #fff,\n    0 0 20px #fff,\n    0 0 30px gold,\n    0 0 40px gold,\n    0 0 50px gold,\n    0 0 60px gold,\n    0 0 70px gold;\n  }\n  to {\n    box-shadow: 0 0 20px #fff,\n    0 0 30px #ffe843,\n    0 0 40px #ffe843,\n    0 0 50px #ffe843,\n    0 0 60px #ffe843,\n    0 0 70px #ffe843,\n    0 0 80px #ffe843;\n  }\n}\n\n@keyframes gold-glow {\n  from {\n    box-shadow: 0 0 10px 10px #fff,\n    0 0 20px #fff,\n    0 0 30px gold,\n    0 0 40px gold,\n    0 0 50px gold,\n    0 0 60px gold,\n    0 0 70px gold;\n  }\n  to {\n    box-shadow: 0 0 20px #fff,\n    0 0 30px #ffe843,\n    0 0 40px #ffe843,\n    0 0 50px #ffe843,\n    0 0 60px #ffe843,\n    0 0 70px #ffe843,\n    0 0 80px #ffe843;\n  }\n}\n\n/* hang */\n\n.hvr-hang {\n  display: inline-block;\n  vertical-align: middle;\n  transform: perspective(1px) translateZ(0);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n}\n\n.hvr-hang:hover,\n.hvr-hang:focus,\n.cdk-drop-list-dragging.highlighted.piece-container,\n.cdk-drop-list-dragging.highlighted,\n.highlighted{\n  -webkit-animation-name: hvr-hang-sink, hvr-hang;\n          animation-name: hvr-hang-sink, hvr-hang;\n  -webkit-animation-duration: .3s, 1.5s;\n          animation-duration: .3s, 1.5s;\n  -webkit-animation-delay: 0s, .3s;\n          animation-delay: 0s, .3s;\n  -webkit-animation-timing-function: ease-out, ease-in-out;\n          animation-timing-function: ease-out, ease-in-out;\n  -webkit-animation-iteration-count: 1, infinite;\n          animation-iteration-count: 1, infinite;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-direction: normal, alternate;\n          animation-direction: normal, alternate;\n}\n\n@-webkit-keyframes hvr-hang {\n  0% {\n    transform: translateY(-10px);\n  }\n  50% {\n    transform: translateY(-5px);\n  }\n  100% {\n    transform: translateY(-10px);\n  }\n}\n\n@keyframes hvr-hang {\n  0% {\n    transform: translateY(-10px);\n  }\n  50% {\n    transform: translateY(-5px);\n  }\n  100% {\n    transform: translateY(-10px);\n  }\n}\n\n@-webkit-keyframes hvr-hang-sink {\n  100% {\n    transform: translateY(-10px);\n  }\n}\n\n@keyframes hvr-hang-sink {\n  100% {\n    transform: translateY(-10px);\n  }\n}\n\n/* shadow drop bottom */\n\n.shadow-drop-top {\n  -webkit-animation-name: shadow-drop-top, shadow-drop-top-pulse;\n          animation-name: shadow-drop-top, shadow-drop-top-pulse;\n  -webkit-animation-duration: .5s, 2s;\n          animation-duration: .5s, 2s;\n  -webkit-animation-delay: 0s, .5s;\n          animation-delay: 0s, .5s;\n  -webkit-animation-timing-function: cubic-bezier(0.250, 0.460, 0.450, 0.940), ease-in-out;\n          animation-timing-function: cubic-bezier(0.250, 0.460, 0.450, 0.940), ease-in-out;\n  -webkit-animation-iteration-count: 1, infinite;\n          animation-iteration-count: 1, infinite;\n  -webkit-animation-direction: normal, alternate;\n          animation-direction: normal, alternate;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n}\n\n@-webkit-keyframes shadow-drop-top {\n  from {\n    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);\n  }\n  to {\n    box-shadow: 0 -55px 20px -40px rgba(255, 255, 255, 0.2),\n                0 -55px 30px -40px rgba(62, 121, 255, 0.2),\n                0 -55px 40px -40px rgba(38, 128, 255, 0.2),\n                0 -55px 55px -40px rgba(29, 106, 255, 0.2)\n  }\n}\n\n@keyframes shadow-drop-top {\n  from {\n    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);\n  }\n  to {\n    box-shadow: 0 -55px 20px -40px rgba(255, 255, 255, 0.2),\n                0 -55px 30px -40px rgba(62, 121, 255, 0.2),\n                0 -55px 40px -40px rgba(38, 128, 255, 0.2),\n                0 -55px 55px -40px rgba(29, 106, 255, 0.2)\n  }\n}\n\n@-webkit-keyframes shadow-drop-top-pulse {\n  from {\n    box-shadow: 0 -55px 20px -40px rgba(255, 255, 255, 0.2),\n                0 -55px 30px -40px rgba(62, 121, 255, 0.2),\n                0 -55px 40px -40px rgba(38, 128, 255, 0.2),\n                0 -55px 55px -40px rgba(29, 106, 255, 0.2)\n  }\n  to {\n    box-shadow: 0 -55px 20px -40px rgba(255, 255, 255, 0.5),\n                0 -55px 30px -40px rgba(62, 121, 255, 0.5),\n                0 -55px 40px -40px rgba(38, 128, 255, 0.5),\n                0 -55px 55px -40px rgba(29, 106, 255, 0.5)\n\n  }\n}\n\n@keyframes shadow-drop-top-pulse {\n  from {\n    box-shadow: 0 -55px 20px -40px rgba(255, 255, 255, 0.2),\n                0 -55px 30px -40px rgba(62, 121, 255, 0.2),\n                0 -55px 40px -40px rgba(38, 128, 255, 0.2),\n                0 -55px 55px -40px rgba(29, 106, 255, 0.2)\n  }\n  to {\n    box-shadow: 0 -55px 20px -40px rgba(255, 255, 255, 0.5),\n                0 -55px 30px -40px rgba(62, 121, 255, 0.5),\n                0 -55px 40px -40px rgba(38, 128, 255, 0.5),\n                0 -55px 55px -40px rgba(29, 106, 255, 0.5)\n\n  }\n}\n\n/* shadow drop bottom */\n\n.shadow-drop-bottom {\n  -webkit-animation-name: shadow-drop-bottom, shadow-drop-bottom-pulse;\n          animation-name: shadow-drop-bottom, shadow-drop-bottom-pulse;\n  -webkit-animation-duration: .5s, 2s;\n          animation-duration: .5s, 2s;\n  -webkit-animation-delay: 0s, .5s;\n          animation-delay: 0s, .5s;\n  -webkit-animation-timing-function: cubic-bezier(0.250, 0.460, 0.450, 0.940), ease-in-out;\n          animation-timing-function: cubic-bezier(0.250, 0.460, 0.450, 0.940), ease-in-out;\n  -webkit-animation-iteration-count: 1, infinite;\n          animation-iteration-count: 1, infinite;\n  -webkit-animation-direction: normal, alternate;\n          animation-direction: normal, alternate;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n}\n\n@-webkit-keyframes shadow-drop-bottom {\n  from {\n    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);\n  }\n  to {\n    box-shadow: 0 55px 20px -40px rgba(255, 255, 255, 0.2),\n    0 55px 30px -40px rgba(62, 121, 255, 0.2),\n    0 55px 40px -40px rgba(38, 128, 255, 0.2),\n    0 55px 55px -40px rgba(29, 106, 255, 0.2)\n  }\n}\n\n@keyframes shadow-drop-bottom {\n  from {\n    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);\n  }\n  to {\n    box-shadow: 0 55px 20px -40px rgba(255, 255, 255, 0.2),\n    0 55px 30px -40px rgba(62, 121, 255, 0.2),\n    0 55px 40px -40px rgba(38, 128, 255, 0.2),\n    0 55px 55px -40px rgba(29, 106, 255, 0.2)\n  }\n}\n\n@-webkit-keyframes shadow-drop-bottom-pulse {\n  from {\n    box-shadow: 0 55px 20px -40px rgba(255, 255, 255, 0.2),\n    0 55px 30px -40px rgba(62, 121, 255, 0.2),\n    0 55px 40px -40px rgba(38, 128, 255, 0.2),\n    0 55px 55px -40px rgba(29, 106, 255, 0.2)\n  }\n  to {\n    box-shadow: 0 55px 20px -40px rgba(255, 255, 255, 0.5),\n    0 55px 30px -40px rgba(62, 121, 255, 0.5),\n    0 55px 40px -40px rgba(38, 128, 255, 0.5),\n    0 55px 55px -40px rgba(29, 106, 255, 0.5)\n  }\n}\n\n@keyframes shadow-drop-bottom-pulse {\n  from {\n    box-shadow: 0 55px 20px -40px rgba(255, 255, 255, 0.2),\n    0 55px 30px -40px rgba(62, 121, 255, 0.2),\n    0 55px 40px -40px rgba(38, 128, 255, 0.2),\n    0 55px 55px -40px rgba(29, 106, 255, 0.2)\n  }\n  to {\n    box-shadow: 0 55px 20px -40px rgba(255, 255, 255, 0.5),\n    0 55px 30px -40px rgba(62, 121, 255, 0.5),\n    0 55px 40px -40px rgba(38, 128, 255, 0.5),\n    0 55px 55px -40px rgba(29, 106, 255, 0.5)\n  }\n}\n\n.cdk-drag-preview {\n}\n\n.cdk-drag-placeholder {\n  display: none;\n}\n\n.cdk-drag-animating {\n}\n\n.cdk-drop-list {\n}\n\n.cdk-drag {\n  cursor: pointer;\n}\n\n.cdk-drag-disabled {\n  cursor: default;\n}\n\n.cdk-drop-list-dragging.highlighted,\n.cdk-drop-list-dragging.highlighted.piece-container{\n  border: 5px dashed rgb(3, 66, 184);\n}\n\n.highlighted.piece-container {\n  border: 5px dashed red;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hlc3MvY2hlc3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCOztFQUVqQiwwQkFBMEI7RUFDMUIscUdBQXFHO0FBQ3ZHOztBQUVBO0VBQ0Usa0JBQWtCOztFQUVsQixhQUFhO0VBQ2Isb0NBQW9DO0VBQ3BDLHVDQUF1Qzs7RUFFdkMsWUFBWTtFQUNaLFlBQVk7RUFDWixhQUFhO0FBQ2Y7O0FBRUE7O0VBRUUsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVjs7OzswRUFJd0U7RUFDeEUseUJBQXlCO0VBQ3pCLHlCQUF5Qjs7RUFFekI7QUFDRjs7QUFFQTtFQUNFLFVBQVU7RUFDVjs7Ozs7O2tIQU1nSDtFQUNoSCx5QkFBeUI7RUFDekIsMEJBQTBCOztFQUUxQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7SUFDSSx3Q0FBd0M7O0VBRTFDLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsYUFBYTtFQUNiLGFBQWE7RUFDYixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsMEJBQTBCO0VBQzFCLHFGQUFxRjtBQUN2Rjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFNBQVM7QUFDWDs7QUFFQTtFQUNFLFNBQVM7QUFDWDs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixXQUFXO0VBQ1gsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsUUFBUTs7RUFFUixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLHdCQUF3QjtFQUN4QixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLHdCQUF3QjtFQUN4QixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFdBQVc7RUFDWCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFdBQVc7RUFDWCxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2Y7QUFDRjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGFBQWE7RUFDYixhQUFhO0VBQ2IsWUFBWTtBQUNkOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsYUFBYTtFQUNiLGFBQWE7RUFDYixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLDBCQUEwQjtFQUMxQixxRkFBcUY7RUFDckYsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UsNkRBQXFEO1VBQXJELHFEQUFxRDtBQUN2RDs7QUFDQTtFQUNFLDhEQUFzRDtVQUF0RCxzREFBc0Q7QUFDeEQ7O0FBQ0E7RUFDRSwrREFBdUQ7VUFBdkQsdURBQXVEO0FBQ3pEOztBQUVBO0VBQ0U7SUFDRTs7Ozs7O2dCQU1ZO0VBQ2Q7RUFDQTtJQUNFOzs7Ozs7b0JBTWdCO0VBQ2xCO0FBQ0Y7O0FBbkJBO0VBQ0U7SUFDRTs7Ozs7O2dCQU1ZO0VBQ2Q7RUFDQTtJQUNFOzs7Ozs7b0JBTWdCO0VBQ2xCO0FBQ0Y7O0FBQ0E7RUFDRTtJQUNFOzs7Ozs7OEJBTTBCO0VBQzVCO0VBQ0E7SUFDRTs7Ozs7OzhCQU0wQjtFQUM1QjtBQUNGOztBQW5CQTtFQUNFO0lBQ0U7Ozs7Ozs4QkFNMEI7RUFDNUI7RUFDQTtJQUNFOzs7Ozs7OEJBTTBCO0VBQzVCO0FBQ0Y7O0FBQ0E7RUFDRTtJQUNFOzs7Ozs7aUJBTWE7RUFDZjtFQUNBO0lBQ0U7Ozs7OztvQkFNZ0I7RUFDbEI7QUFDRjs7QUFuQkE7RUFDRTtJQUNFOzs7Ozs7aUJBTWE7RUFDZjtFQUNBO0lBQ0U7Ozs7OztvQkFNZ0I7RUFDbEI7QUFDRjs7QUFFQSxTQUFTOztBQUNUO0VBQ0UscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0Qix5Q0FBeUM7RUFDekMsb0NBQW9DO0FBQ3RDOztBQUNBOzs7OztFQUtFLCtDQUF1QztVQUF2Qyx1Q0FBdUM7RUFDdkMscUNBQTZCO1VBQTdCLDZCQUE2QjtFQUM3QixnQ0FBd0I7VUFBeEIsd0JBQXdCO0VBQ3hCLHdEQUFnRDtVQUFoRCxnREFBZ0Q7RUFDaEQsOENBQXNDO1VBQXRDLHNDQUFzQztFQUN0QyxxQ0FBNkI7VUFBN0IsNkJBQTZCO0VBQzdCLDhDQUFzQztVQUF0QyxzQ0FBc0M7QUFDeEM7O0FBQ0E7RUFDRTtJQUNFLDRCQUE0QjtFQUM5QjtFQUNBO0lBQ0UsMkJBQTJCO0VBQzdCO0VBQ0E7SUFDRSw0QkFBNEI7RUFDOUI7QUFDRjs7QUFWQTtFQUNFO0lBQ0UsNEJBQTRCO0VBQzlCO0VBQ0E7SUFDRSwyQkFBMkI7RUFDN0I7RUFDQTtJQUNFLDRCQUE0QjtFQUM5QjtBQUNGOztBQUNBO0VBQ0U7SUFDRSw0QkFBNEI7RUFDOUI7QUFDRjs7QUFKQTtFQUNFO0lBQ0UsNEJBQTRCO0VBQzlCO0FBQ0Y7O0FBRUEsdUJBQXVCOztBQUN2QjtFQUNFLDhEQUFzRDtVQUF0RCxzREFBc0Q7RUFDdEQsbUNBQTJCO1VBQTNCLDJCQUEyQjtFQUMzQixnQ0FBd0I7VUFBeEIsd0JBQXdCO0VBQ3hCLHdGQUFnRjtVQUFoRixnRkFBZ0Y7RUFDaEYsOENBQXNDO1VBQXRDLHNDQUFzQztFQUN0Qyw4Q0FBc0M7VUFBdEMsc0NBQXNDO0VBQ3RDLHFDQUE2QjtVQUE3Qiw2QkFBNkI7QUFDL0I7O0FBQ0E7RUFDRTtJQUNFLG9DQUFvQztFQUN0QztFQUNBO0lBQ0U7Ozs7RUFJRjtBQUNGOztBQVZBO0VBQ0U7SUFDRSxvQ0FBb0M7RUFDdEM7RUFDQTtJQUNFOzs7O0VBSUY7QUFDRjs7QUFDQTtFQUNFO0lBQ0U7Ozs7RUFJRjtFQUNBO0lBQ0U7Ozs7O0VBS0Y7QUFDRjs7QUFkQTtFQUNFO0lBQ0U7Ozs7RUFJRjtFQUNBO0lBQ0U7Ozs7O0VBS0Y7QUFDRjs7QUFFQSx1QkFBdUI7O0FBQ3ZCO0VBQ0Usb0VBQTREO1VBQTVELDREQUE0RDtFQUM1RCxtQ0FBMkI7VUFBM0IsMkJBQTJCO0VBQzNCLGdDQUF3QjtVQUF4Qix3QkFBd0I7RUFDeEIsd0ZBQWdGO1VBQWhGLGdGQUFnRjtFQUNoRiw4Q0FBc0M7VUFBdEMsc0NBQXNDO0VBQ3RDLDhDQUFzQztVQUF0QyxzQ0FBc0M7RUFDdEMscUNBQTZCO1VBQTdCLDZCQUE2QjtBQUMvQjs7QUFDQTtFQUNFO0lBQ0Usb0NBQW9DO0VBQ3RDO0VBQ0E7SUFDRTs7OztFQUlGO0FBQ0Y7O0FBVkE7RUFDRTtJQUNFLG9DQUFvQztFQUN0QztFQUNBO0lBQ0U7Ozs7RUFJRjtBQUNGOztBQUNBO0VBQ0U7SUFDRTs7OztFQUlGO0VBQ0E7SUFDRTs7OztFQUlGO0FBQ0Y7O0FBYkE7RUFDRTtJQUNFOzs7O0VBSUY7RUFDQTtJQUNFOzs7O0VBSUY7QUFDRjs7QUFFQTtBQUNBOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBOztFQUVFLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4QiIsImZpbGUiOiJzcmMvYXBwL2NoZXNzL2NoZXNzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmctdG9wOiA2MHB4O1xuXG4gIGJhY2tncm91bmQ6IHJnYigyMSw1MiwxODQpO1xuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCByZ2JhKDIxLDUyLDE4NCwxKSAwJSwgcmdiYSg0NCw5LDEyMSwxKSAzOCUsIHJnYmEoMjMsMCw0MiwxKSAxMDAlKTtcbn1cblxuLmJvYXJkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDgsIDEyLjUlKTtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoOCwgMTIuNSUpO1xuXG4gIG1hcmdpbjogYXV0bztcbiAgd2lkdGg6IDYwMHB4O1xuICBoZWlnaHQ6IDYwMHB4O1xufVxuXG4uY2VsbCB7XG5cbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB6LWluZGV4OiAwO1xuICBiYWNrZ3JvdW5kOlxuICAgIHJhZGlhbC1ncmFkaWVudCh3aGl0ZSAxNSUsIHRyYW5zcGFyZW50IDE2JSkgMCAwLFxuICAgIHJhZGlhbC1ncmFkaWVudCh3aGl0ZSAxNSUsIHRyYW5zcGFyZW50IDE2JSkgOHB4IDhweCxcbiAgICByYWRpYWwtZ3JhZGllbnQocmdiYSgyMzQsIDIzNCwgMjM0LCAwLjkpIDE1JSwgdHJhbnNwYXJlbnQgMjAlKSAwIDFweCxcbiAgICByYWRpYWwtZ3JhZGllbnQocmdiYSgyMzQsIDIzNCwgMjM0LCAwLjkpIDE1JSwgdHJhbnNwYXJlbnQgMjAlKSA4cHggOXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBiYWNrZ3JvdW5kLXNpemU6MTZweCAxNnB4O1xuXG4gIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlXG59XG5cbi5kYXJrLWNlbGwge1xuICB6LWluZGV4OiAwO1xuICBiYWNrZ3JvdW5kOlxuICAgIGxpbmVhci1ncmFkaWVudCgyN2RlZywgIzE1MTUxNSA1cHgsIHRyYW5zcGFyZW50IDVweCkgMCA1cHgsXG4gICAgbGluZWFyLWdyYWRpZW50KDIwN2RlZywgIzE1MTUxNSA1cHgsIHRyYW5zcGFyZW50IDVweCkgMTBweCAwcHgsXG4gICAgbGluZWFyLWdyYWRpZW50KDI3ZGVnLCAjMjIyIDVweCwgdHJhbnNwYXJlbnQgNXB4KSAwcHggMTBweCxcbiAgICBsaW5lYXItZ3JhZGllbnQoMjA3ZGVnLCAjMjIyIDVweCwgdHJhbnNwYXJlbnQgNXB4KSAxMHB4IDVweCxcbiAgICBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICMxYjFiMWIgMTBweCwgdHJhbnNwYXJlbnQgMTBweCksXG4gICAgbGluZWFyLWdyYWRpZW50KCMxZDFkMWQgMjUlLCAjMWExYTFhIDI1JSwgIzFhMWExYSA1MCUsIHRyYW5zcGFyZW50IDUwJSwgdHJhbnNwYXJlbnQgNzUlLCAjMjQyNDI0IDc1JSwgIzI0MjQyNCk7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxMzEzMTM7XG4gIGJhY2tncm91bmQtc2l6ZTogMjBweCAyMHB4O1xuXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xufVxuXG4ubGlnaHQtcGllY2Uge1xuICBjb2xvcjogZ3JheTtcbn1cblxuLmRhcmstcGllY2Uge1xuICBjb2xvcjogcmdiKDMsIDY2LCAxODQpO1xufVxuXG4uY2hlY2sge1xuICBib3JkZXI6IDVweCBkYXNoZWQgcmVkO1xufVxuXG4uaGlnaGxpZ2h0ZWQge1xuICAgIC8qYmFja2dyb3VuZDogcmdiYSgxMjgsIDI1NSwgODMsIDAuNzIpOyovXG5cbiAgYm9yZGVyOiA1cHggZGFzaGVkIHJnYigxMjgsIDI1NSwgODMpO1xufVxuXG4uZGlhbG9nLXdyYXBwZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDIwMHB4O1xuICBib3R0b206IDQwMnB4O1xuICBoZWlnaHQ6IDIwMHB4O1xuICB3aWR0aDogMjAwcHg7XG59XG5cbi5kaWFsb2cge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlci1yYWRpdXM6IDEzcHg7XG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IGJsYWNrO1xuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCByZ2JhKDI0NSwyNDUsMjQ1LDEpIDAlLCByZ2JhKDI1NSwyNTUsMjU1LDEpIDEwMCUpO1xufVxuXG4uZGlhbG9nLXBpZWNlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4ubC0zMCB7XG4gIGxlZnQ6IDMwJTtcbn1cblxuLmwtMzUge1xuICBsZWZ0OiAzNSU7XG59XG5cbi5yaWJib24ge1xuICBiYWNrZ3JvdW5kOiByZ2IoMTI4LCAyNTUsIDgzKTtcbiAgaGVpZ2h0OiAyNiU7XG4gIHdpZHRoOiAxMTAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IC01JTtcbiAgdG9wOiA2MCU7XG5cbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ucmliYm9uLXNpZGUtbGVmdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogLTE1JTtcbiAgY29sb3I6IHJnYigxMDgsIDIxNSwgODApO1xuICB0b3A6IDUwJTtcbn1cblxuLnJpYmJvbi1zaWRlLXJpZ2h0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogLTE1JTtcbiAgY29sb3I6IHJnYigxMDgsIDIxNSwgODApO1xuICB0b3A6IDUwJTtcbn1cblxuLmRhcmstY2FwdHVyZWQtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC01NXB4O1xuICB3aWR0aDogMTAwJTtcbiAgY29sb3I6IGdyYXk7XG59XG5cbi5saWdodC1jYXB0dXJlZC1jb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogLTU1cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBjb2xvcjogcmdiKDMsIDY2LCAxODQpO1xufVxuXG4uY2FwdHVyZWQtcGllY2Uge1xuICBmb250LXNpemU6IDJyZW07XG4gIHBhZGRpbmctcmlnaHQ6IDhweFxufVxuXG4ucGllY2Utc2VsZWN0aW9uLXdyYXBwZXIge1xuICBib3JkZXI6IDJweCBzb2xpZCBncmVlbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAyMDBweDtcbiAgYm90dG9tOiA0MDJweDtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgd2lkdGg6IDIwMHB4O1xufVxuXG4ucGllY2Utc2VsZWN0aW9uIHtcbiAgYm9yZGVyOiAycHggc29saWQgZ3JlZW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogMTUwcHg7XG4gIGJvdHRvbTogMzc2cHg7XG4gIGhlaWdodDogMTUycHg7XG4gIHdpZHRoOiAzMDBweDtcbiAgYm9yZGVyLXJhZGl1czogMTNweDtcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggYmxhY2s7XG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUsIHJnYmEoMjQ1LDI0NSwyNDUsMSkgMCUsIHJnYmEoMjU1LDI1NSwyNTUsMSkgMTAwJSk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnNlbGVjdGlvbi1waWVjZSB7XG4gIHBhZGRpbmc6IDhweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uc2VsZWN0aW9uLXBpZWNlOmhvdmVyIHtcbiAgcGFkZGluZzogM3B4O1xuICBib3JkZXI6IDVweCBkYXNoZWQgcmdiKDMsIDY2LCAxODQpO1xufVxuXG4ucmVkLWdsb3cge1xuICBhbmltYXRpb246IHJlZC1nbG93IDFzIGVhc2UtaW4tb3V0IGluZmluaXRlIGFsdGVybmF0ZTtcbn1cbi5nb2xkLWdsb3cge1xuICBhbmltYXRpb246IGdvbGQtZ2xvdyAxcyBlYXNlLWluLW91dCBpbmZpbml0ZSBhbHRlcm5hdGU7XG59XG4uZ3JlZW4tZ2xvdyB7XG4gIGFuaW1hdGlvbjogZ3JlZW4tZ2xvdyAxcyBlYXNlLWluLW91dCBpbmZpbml0ZSBhbHRlcm5hdGU7XG59XG5cbkBrZXlmcmFtZXMgcmVkLWdsb3cge1xuICBmcm9tIHtcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCAxMHB4ICNmZmYsXG4gICAgMCAwIDIwcHggI2ZmZixcbiAgICAwIDAgMzBweCByZWQsXG4gICAgMCAwIDQwcHggcmVkLFxuICAgIDAgMCA1MHB4IHJlZCxcbiAgICAwIDAgNjBweCByZWQsXG4gICAgMCAwIDcwcHggcmVkO1xuICB9XG4gIHRvIHtcbiAgICBib3gtc2hhZG93OiAwIDAgMjBweCAjZmZmLFxuICAgIDAgMCAzMHB4ICNmZjM3MzcsXG4gICAgMCAwIDQwcHggI2ZmMzczNyxcbiAgICAwIDAgNTBweCAjZmYzNzM3LFxuICAgIDAgMCA2MHB4ICNmZjM3MzcsXG4gICAgMCAwIDcwcHggI2ZmMzczNyxcbiAgICAwIDAgODBweCAjZmYzNzM3O1xuICB9XG59XG5Aa2V5ZnJhbWVzIGdyZWVuLWdsb3cge1xuICBmcm9tIHtcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCAxMHB4ICNmZmYsXG4gICAgMCAwIDIwcHggI2ZmZixcbiAgICAwIDAgMzBweCByZ2IoMTA4LCAyMTUsIDgwKSxcbiAgICAwIDAgNDBweCByZ2IoMTA4LCAyMTUsIDgwKSxcbiAgICAwIDAgNTBweCByZ2IoMTA4LCAyMTUsIDgwKSxcbiAgICAwIDAgNjBweCByZ2IoMTA4LCAyMTUsIDgwKSxcbiAgICAwIDAgNzBweCByZ2IoMTA4LCAyMTUsIDgwKTtcbiAgfVxuICB0byB7XG4gICAgYm94LXNoYWRvdzogMCAwIDIwcHggI2ZmZixcbiAgICAwIDAgMzBweCByZ2IoMTI4LCAyNTUsIDgzKSxcbiAgICAwIDAgNDBweCByZ2IoMTI4LCAyNTUsIDgzKSxcbiAgICAwIDAgNTBweCByZ2IoMTI4LCAyNTUsIDgzKSxcbiAgICAwIDAgNjBweCByZ2IoMTI4LCAyNTUsIDgzKSxcbiAgICAwIDAgNzBweCByZ2IoMTI4LCAyNTUsIDgzKSxcbiAgICAwIDAgODBweCByZ2IoMTI4LCAyNTUsIDgzKTtcbiAgfVxufVxuQGtleWZyYW1lcyBnb2xkLWdsb3cge1xuICBmcm9tIHtcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCAxMHB4ICNmZmYsXG4gICAgMCAwIDIwcHggI2ZmZixcbiAgICAwIDAgMzBweCBnb2xkLFxuICAgIDAgMCA0MHB4IGdvbGQsXG4gICAgMCAwIDUwcHggZ29sZCxcbiAgICAwIDAgNjBweCBnb2xkLFxuICAgIDAgMCA3MHB4IGdvbGQ7XG4gIH1cbiAgdG8ge1xuICAgIGJveC1zaGFkb3c6IDAgMCAyMHB4ICNmZmYsXG4gICAgMCAwIDMwcHggI2ZmZTg0MyxcbiAgICAwIDAgNDBweCAjZmZlODQzLFxuICAgIDAgMCA1MHB4ICNmZmU4NDMsXG4gICAgMCAwIDYwcHggI2ZmZTg0MyxcbiAgICAwIDAgNzBweCAjZmZlODQzLFxuICAgIDAgMCA4MHB4ICNmZmU4NDM7XG4gIH1cbn1cblxuLyogaGFuZyAqL1xuLmh2ci1oYW5nIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDFweCkgdHJhbnNsYXRlWigwKTtcbiAgYm94LXNoYWRvdzogMCAwIDFweCByZ2JhKDAsIDAsIDAsIDApO1xufVxuLmh2ci1oYW5nOmhvdmVyLFxuLmh2ci1oYW5nOmZvY3VzLFxuLmNkay1kcm9wLWxpc3QtZHJhZ2dpbmcuaGlnaGxpZ2h0ZWQucGllY2UtY29udGFpbmVyLFxuLmNkay1kcm9wLWxpc3QtZHJhZ2dpbmcuaGlnaGxpZ2h0ZWQsXG4uaGlnaGxpZ2h0ZWR7XG4gIGFuaW1hdGlvbi1uYW1lOiBodnItaGFuZy1zaW5rLCBodnItaGFuZztcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAuM3MsIDEuNXM7XG4gIGFuaW1hdGlvbi1kZWxheTogMHMsIC4zcztcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQsIGVhc2UtaW4tb3V0O1xuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxLCBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG4gIGFuaW1hdGlvbi1kaXJlY3Rpb246IG5vcm1hbCwgYWx0ZXJuYXRlO1xufVxuQGtleWZyYW1lcyBodnItaGFuZyB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpO1xuICB9XG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgaHZyLWhhbmctc2luayB7XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCk7XG4gIH1cbn1cblxuLyogc2hhZG93IGRyb3AgYm90dG9tICovXG4uc2hhZG93LWRyb3AtdG9wIHtcbiAgYW5pbWF0aW9uLW5hbWU6IHNoYWRvdy1kcm9wLXRvcCwgc2hhZG93LWRyb3AtdG9wLXB1bHNlO1xuICBhbmltYXRpb24tZHVyYXRpb246IC41cywgMnM7XG4gIGFuaW1hdGlvbi1kZWxheTogMHMsIC41cztcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUwLCAwLjQ2MCwgMC40NTAsIDAuOTQwKSwgZWFzZS1pbi1vdXQ7XG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDEsIGluZmluaXRlO1xuICBhbmltYXRpb24tZGlyZWN0aW9uOiBub3JtYWwsIGFsdGVybmF0ZTtcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG59XG5Aa2V5ZnJhbWVzIHNoYWRvdy1kcm9wLXRvcCB7XG4gIGZyb20ge1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDAgcmdiYSgwLCAwLCAwLCAwKTtcbiAgfVxuICB0byB7XG4gICAgYm94LXNoYWRvdzogMCAtNTVweCAyMHB4IC00MHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSxcbiAgICAgICAgICAgICAgICAwIC01NXB4IDMwcHggLTQwcHggcmdiYSg2MiwgMTIxLCAyNTUsIDAuMiksXG4gICAgICAgICAgICAgICAgMCAtNTVweCA0MHB4IC00MHB4IHJnYmEoMzgsIDEyOCwgMjU1LCAwLjIpLFxuICAgICAgICAgICAgICAgIDAgLTU1cHggNTVweCAtNDBweCByZ2JhKDI5LCAxMDYsIDI1NSwgMC4yKVxuICB9XG59XG5Aa2V5ZnJhbWVzIHNoYWRvdy1kcm9wLXRvcC1wdWxzZSB7XG4gIGZyb20ge1xuICAgIGJveC1zaGFkb3c6IDAgLTU1cHggMjBweCAtNDBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMiksXG4gICAgICAgICAgICAgICAgMCAtNTVweCAzMHB4IC00MHB4IHJnYmEoNjIsIDEyMSwgMjU1LCAwLjIpLFxuICAgICAgICAgICAgICAgIDAgLTU1cHggNDBweCAtNDBweCByZ2JhKDM4LCAxMjgsIDI1NSwgMC4yKSxcbiAgICAgICAgICAgICAgICAwIC01NXB4IDU1cHggLTQwcHggcmdiYSgyOSwgMTA2LCAyNTUsIDAuMilcbiAgfVxuICB0byB7XG4gICAgYm94LXNoYWRvdzogMCAtNTVweCAyMHB4IC00MHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSxcbiAgICAgICAgICAgICAgICAwIC01NXB4IDMwcHggLTQwcHggcmdiYSg2MiwgMTIxLCAyNTUsIDAuNSksXG4gICAgICAgICAgICAgICAgMCAtNTVweCA0MHB4IC00MHB4IHJnYmEoMzgsIDEyOCwgMjU1LCAwLjUpLFxuICAgICAgICAgICAgICAgIDAgLTU1cHggNTVweCAtNDBweCByZ2JhKDI5LCAxMDYsIDI1NSwgMC41KVxuXG4gIH1cbn1cblxuLyogc2hhZG93IGRyb3AgYm90dG9tICovXG4uc2hhZG93LWRyb3AtYm90dG9tIHtcbiAgYW5pbWF0aW9uLW5hbWU6IHNoYWRvdy1kcm9wLWJvdHRvbSwgc2hhZG93LWRyb3AtYm90dG9tLXB1bHNlO1xuICBhbmltYXRpb24tZHVyYXRpb246IC41cywgMnM7XG4gIGFuaW1hdGlvbi1kZWxheTogMHMsIC41cztcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUwLCAwLjQ2MCwgMC40NTAsIDAuOTQwKSwgZWFzZS1pbi1vdXQ7XG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDEsIGluZmluaXRlO1xuICBhbmltYXRpb24tZGlyZWN0aW9uOiBub3JtYWwsIGFsdGVybmF0ZTtcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG59XG5Aa2V5ZnJhbWVzIHNoYWRvdy1kcm9wLWJvdHRvbSB7XG4gIGZyb20ge1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDAgcmdiYSgwLCAwLCAwLCAwKTtcbiAgfVxuICB0byB7XG4gICAgYm94LXNoYWRvdzogMCA1NXB4IDIwcHggLTQwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpLFxuICAgIDAgNTVweCAzMHB4IC00MHB4IHJnYmEoNjIsIDEyMSwgMjU1LCAwLjIpLFxuICAgIDAgNTVweCA0MHB4IC00MHB4IHJnYmEoMzgsIDEyOCwgMjU1LCAwLjIpLFxuICAgIDAgNTVweCA1NXB4IC00MHB4IHJnYmEoMjksIDEwNiwgMjU1LCAwLjIpXG4gIH1cbn1cbkBrZXlmcmFtZXMgc2hhZG93LWRyb3AtYm90dG9tLXB1bHNlIHtcbiAgZnJvbSB7XG4gICAgYm94LXNoYWRvdzogMCA1NXB4IDIwcHggLTQwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpLFxuICAgIDAgNTVweCAzMHB4IC00MHB4IHJnYmEoNjIsIDEyMSwgMjU1LCAwLjIpLFxuICAgIDAgNTVweCA0MHB4IC00MHB4IHJnYmEoMzgsIDEyOCwgMjU1LCAwLjIpLFxuICAgIDAgNTVweCA1NXB4IC00MHB4IHJnYmEoMjksIDEwNiwgMjU1LCAwLjIpXG4gIH1cbiAgdG8ge1xuICAgIGJveC1zaGFkb3c6IDAgNTVweCAyMHB4IC00MHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSxcbiAgICAwIDU1cHggMzBweCAtNDBweCByZ2JhKDYyLCAxMjEsIDI1NSwgMC41KSxcbiAgICAwIDU1cHggNDBweCAtNDBweCByZ2JhKDM4LCAxMjgsIDI1NSwgMC41KSxcbiAgICAwIDU1cHggNTVweCAtNDBweCByZ2JhKDI5LCAxMDYsIDI1NSwgMC41KVxuICB9XG59XG5cbi5jZGstZHJhZy1wcmV2aWV3IHtcbn1cblxuLmNkay1kcmFnLXBsYWNlaG9sZGVyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmNkay1kcmFnLWFuaW1hdGluZyB7XG59XG5cbi5jZGstZHJvcC1saXN0IHtcbn1cblxuLmNkay1kcmFnIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY2RrLWRyYWctZGlzYWJsZWQge1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59XG5cbi5jZGstZHJvcC1saXN0LWRyYWdnaW5nLmhpZ2hsaWdodGVkLFxuLmNkay1kcm9wLWxpc3QtZHJhZ2dpbmcuaGlnaGxpZ2h0ZWQucGllY2UtY29udGFpbmVye1xuICBib3JkZXI6IDVweCBkYXNoZWQgcmdiKDMsIDY2LCAxODQpO1xufVxuXG4uaGlnaGxpZ2h0ZWQucGllY2UtY29udGFpbmVyIHtcbiAgYm9yZGVyOiA1cHggZGFzaGVkIHJlZDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/chess/chess.component.ts":
/*!******************************************!*\
  !*** ./src/app/chess/chess.component.ts ***!
  \******************************************/
/*! exports provided: ChessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChessComponent", function() { return ChessComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_chess_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/chess.service */ "./src/app/chess/services/chess.service.ts");
/* harmony import */ var _model_enums_PlayerColorEnum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./model/enums/PlayerColorEnum */ "./src/app/chess/model/enums/PlayerColorEnum.ts");
/* harmony import */ var _model_enums_PieceTypeEnum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./model/enums/PieceTypeEnum */ "./src/app/chess/model/enums/PieceTypeEnum.ts");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faBookmark__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faBookmark */ "./node_modules/@fortawesome/free-solid-svg-icons/faBookmark.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faBookmark__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons_faBookmark__WEBPACK_IMPORTED_MODULE_5__);






var ChessComponent = /** @class */ (function () {
    function ChessComponent(chessService) {
        this.chessService = chessService;
        this.faBookmark = _fortawesome_free_solid_svg_icons_faBookmark__WEBPACK_IMPORTED_MODULE_5__["faBookmark"];
    }
    ChessComponent.prototype.ngOnInit = function () { };
    ChessComponent.prototype.dropPiece = function (cell) {
        this.chessService.dropPiece(cell);
    };
    ChessComponent.prototype.dragPiece = function (piece) {
        this.chessService.dragPiece(piece);
    };
    ChessComponent.prototype.pieceDisabled = function (piece) {
        return (piece.owner != this.chessService.activePlayer)
            || this.shouldUpdateLatestPiece()
            || this.gameEnded();
    };
    ChessComponent.prototype.getBoardClasses = function () {
        var classes = new Array();
        classes.push('board');
        if (this.gameEnded()) {
            classes.push('green-glow');
        }
        else if (this.chessService.piecesInCheck.length > 0) {
            classes.push('red-glow');
        }
        else {
            classes.push(this.chessService.activePlayer === this.chessService.lightPlayer ? 'shadow-drop-bottom' : 'shadow-drop-top');
        }
        return classes;
    };
    ChessComponent.prototype.shouldUpdateLatestPiece = function () {
        return this.chessService.shouldUpdateLatestPiece();
    };
    ChessComponent.prototype.gameEnded = function () {
        // return true;
        return !!this.chessService.victoriousPlayer;
    };
    ChessComponent.prototype.getBoard = function () {
        return this.chessService.board;
    };
    ChessComponent.prototype.getPieceClasses = function (piece) {
        var classes = new Array();
        classes.push('fa-3x');
        classes.push(piece.color === _model_enums_PlayerColorEnum__WEBPACK_IMPORTED_MODULE_3__["PlayerColorEnum"].DARK ? 'dark-piece' : 'light-piece');
        return classes;
    };
    ChessComponent.prototype.getDialogPieceClasses = function (piece) {
        var classes = new Array();
        classes.push('fa-5x');
        classes.push('dialog-piece');
        classes.push(piece.color === _model_enums_PlayerColorEnum__WEBPACK_IMPORTED_MODULE_3__["PlayerColorEnum"].DARK ? 'dark-piece' : 'light-piece');
        classes.push(piece.type === _model_enums_PieceTypeEnum__WEBPACK_IMPORTED_MODULE_4__["PieceTypeEnum"].KING || piece.type === _model_enums_PieceTypeEnum__WEBPACK_IMPORTED_MODULE_4__["PieceTypeEnum"].QUEEN ? 'l-30' : 'l-35');
        return classes;
    };
    ChessComponent.prototype.getSelectionPieceClasses = function (piece) {
        var classes = new Array();
        classes.push('fa-4x');
        classes.push(this.chessService.activePlayer.color === _model_enums_PlayerColorEnum__WEBPACK_IMPORTED_MODULE_3__["PlayerColorEnum"].DARK ? 'dark-piece' : 'light-piece');
        classes.push('selection-piece');
        return classes;
    };
    ChessComponent.prototype.getCellClasses = function (cell) {
        var classes = new Array();
        classes.push(cell.dark ? 'dark-cell' : '');
        classes.push(cell.highlighted ? 'highlighted' : '');
        classes.push(!!cell.piece ? 'piece-container' : '');
        classes.push(this.chessService.getPiecesInCheck().includes(cell.piece) ? 'check' : '');
        return classes;
    };
    ChessComponent.prototype.getlastMovedPiece = function () {
        return this.chessService.lightPlayer.king;
        return this.chessService.lastMovedPiece;
    };
    ChessComponent.prototype.getVictoryMessage = function () {
        return this.chessService.victoriousPlayer === this.chessService.lightPlayer ?
            "White wins!" : "Black wins!";
    };
    ChessComponent.prototype.getDarkCapturedPieces = function () {
        return this.chessService.darkPlayer.capturedPieces;
    };
    ChessComponent.prototype.getLightCapturedPieces = function () {
        return this.chessService.lightPlayer.capturedPieces;
    };
    ChessComponent.prototype.getPieceSelection = function () {
        return this.chessService.selectionPieces;
    };
    ChessComponent.prototype.selectPiece = function (piece) {
        this.chessService.upgradeLatestPiece(piece);
    };
    ChessComponent.ctorParameters = function () { return [
        { type: _services_chess_service__WEBPACK_IMPORTED_MODULE_2__["ChessService"] }
    ]; };
    ChessComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chess',
            template: __webpack_require__(/*! raw-loader!./chess.component.html */ "./node_modules/raw-loader/index.js!./src/app/chess/chess.component.html"),
            styles: [__webpack_require__(/*! ./chess.component.css */ "./src/app/chess/chess.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_chess_service__WEBPACK_IMPORTED_MODULE_2__["ChessService"]])
    ], ChessComponent);
    return ChessComponent;
}());



/***/ }),

/***/ "./src/app/chess/model/Cell.ts":
/*!*************************************!*\
  !*** ./src/app/chess/model/Cell.ts ***!
  \*************************************/
/*! exports provided: Cell */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cell", function() { return Cell; });
var Cell = /** @class */ (function () {
    function Cell(dark, row, col) {
        this.dark = dark;
        this.highlighted = false;
        this.row = row;
        this.col = col;
    }
    Cell.prototype.placePiece = function (piece) {
        if (!!piece.cell) {
            piece.cell.piece = null;
        }
        piece.cell = this;
        piece.hasMoved = true;
        this.piece = piece;
    };
    Cell.ctorParameters = function () { return [
        { type: Boolean },
        { type: Number },
        { type: Number }
    ]; };
    return Cell;
}());



/***/ }),

/***/ "./src/app/chess/model/Piece.ts":
/*!**************************************!*\
  !*** ./src/app/chess/model/Piece.ts ***!
  \**************************************/
/*! exports provided: Piece */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Piece", function() { return Piece; });
/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Player */ "./src/app/chess/model/Player.ts");
/* harmony import */ var _Cell__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Cell */ "./src/app/chess/model/Cell.ts");


var Piece = /** @class */ (function () {
    function Piece(type, icon, cell, owner) {
        if (cell === void 0) { cell = null; }
        if (owner === void 0) { owner = null; }
        this.type = type;
        this.icon = icon;
        this.hasMoved = false;
        this.cell = cell;
        this.owner = owner;
    }
    Object.defineProperty(Piece.prototype, "color", {
        get: function () {
            return this.owner.color;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Piece.prototype, "row", {
        get: function () {
            return this.cell.row;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Piece.prototype, "col", {
        get: function () {
            return this.cell.col;
        },
        enumerable: true,
        configurable: true
    });
    Piece.ctorParameters = function () { return [
        { type: undefined },
        { type: undefined },
        { type: _Cell__WEBPACK_IMPORTED_MODULE_1__["Cell"] },
        { type: _Player__WEBPACK_IMPORTED_MODULE_0__["Player"] }
    ]; };
    return Piece;
}());



/***/ }),

/***/ "./src/app/chess/model/Player.ts":
/*!***************************************!*\
  !*** ./src/app/chess/model/Player.ts ***!
  \***************************************/
/*! exports provided: Player */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Player", function() { return Player; });
/* harmony import */ var _enums_PlayerTypeEnum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enums/PlayerTypeEnum */ "./src/app/chess/model/enums/PlayerTypeEnum.ts");

var Player = /** @class */ (function () {
    function Player(color, type) {
        if (type === void 0) { type = _enums_PlayerTypeEnum__WEBPACK_IMPORTED_MODULE_0__["PlayerTypeEnum"].HUMAN; }
        this.color = color;
        this.capturedPieces = [];
        this.type = type;
    }
    Player.prototype.setPieces = function (pieces) {
        var _this = this;
        this.pieces = pieces;
        this.pieces.forEach(function (piece) {
            piece.owner = _this;
        });
    };
    Player.prototype.removePiece = function (piece) {
        this.pieces = this.pieces.filter(function (p) { return p !== piece; });
    };
    Player.prototype.capturePiece = function (piece) {
        this.capturedPieces.push(piece);
        piece.owner.removePiece(piece);
    };
    Player.ctorParameters = function () { return [
        { type: undefined },
        null
    ]; };
    return Player;
}());



/***/ }),

/***/ "./src/app/chess/model/enums/DirectionsEnum.ts":
/*!*****************************************************!*\
  !*** ./src/app/chess/model/enums/DirectionsEnum.ts ***!
  \*****************************************************/
/*! exports provided: DirectionsEnum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirectionsEnum", function() { return DirectionsEnum; });
var DirectionsEnum;
(function (DirectionsEnum) {
    DirectionsEnum[DirectionsEnum["NORTH"] = 0] = "NORTH";
    DirectionsEnum[DirectionsEnum["NORTH_EAST"] = 1] = "NORTH_EAST";
    DirectionsEnum[DirectionsEnum["EAST"] = 2] = "EAST";
    DirectionsEnum[DirectionsEnum["SOUTH_EAST"] = 3] = "SOUTH_EAST";
    DirectionsEnum[DirectionsEnum["SOUTH"] = 4] = "SOUTH";
    DirectionsEnum[DirectionsEnum["SOUTH_WEST"] = 5] = "SOUTH_WEST";
    DirectionsEnum[DirectionsEnum["WEST"] = 6] = "WEST";
    DirectionsEnum[DirectionsEnum["NORTH_WEST"] = 7] = "NORTH_WEST";
})(DirectionsEnum || (DirectionsEnum = {}));


/***/ }),

/***/ "./src/app/chess/model/enums/PieceTypeEnum.ts":
/*!****************************************************!*\
  !*** ./src/app/chess/model/enums/PieceTypeEnum.ts ***!
  \****************************************************/
/*! exports provided: PieceTypeEnum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PieceTypeEnum", function() { return PieceTypeEnum; });
var PieceTypeEnum;
(function (PieceTypeEnum) {
    PieceTypeEnum["PAWN"] = "P";
    PieceTypeEnum["KNIGHT"] = "K";
    PieceTypeEnum["BISHOP"] = "B";
    PieceTypeEnum["ROOK"] = "R";
    PieceTypeEnum["QUEEN"] = "Q";
    PieceTypeEnum["KING"] = "W";
})(PieceTypeEnum || (PieceTypeEnum = {}));


/***/ }),

/***/ "./src/app/chess/model/enums/PlayerColorEnum.ts":
/*!******************************************************!*\
  !*** ./src/app/chess/model/enums/PlayerColorEnum.ts ***!
  \******************************************************/
/*! exports provided: PlayerColorEnum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerColorEnum", function() { return PlayerColorEnum; });
var PlayerColorEnum;
(function (PlayerColorEnum) {
    PlayerColorEnum["LIGHT"] = "light";
    PlayerColorEnum["DARK"] = "dark";
})(PlayerColorEnum || (PlayerColorEnum = {}));


/***/ }),

/***/ "./src/app/chess/model/enums/PlayerTypeEnum.ts":
/*!*****************************************************!*\
  !*** ./src/app/chess/model/enums/PlayerTypeEnum.ts ***!
  \*****************************************************/
/*! exports provided: PlayerTypeEnum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerTypeEnum", function() { return PlayerTypeEnum; });
var PlayerTypeEnum;
(function (PlayerTypeEnum) {
    PlayerTypeEnum[PlayerTypeEnum["HUMAN"] = 0] = "HUMAN";
    PlayerTypeEnum[PlayerTypeEnum["COMPUTER"] = 1] = "COMPUTER";
})(PlayerTypeEnum || (PlayerTypeEnum = {}));


/***/ }),

/***/ "./src/app/chess/services/chess.service.ts":
/*!*************************************************!*\
  !*** ./src/app/chess/services/chess.service.ts ***!
  \*************************************************/
/*! exports provided: ChessService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChessService", function() { return ChessService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_Player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/Player */ "./src/app/chess/model/Player.ts");
/* harmony import */ var _model_Cell__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/Cell */ "./src/app/chess/model/Cell.ts");
/* harmony import */ var _model_Piece__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/Piece */ "./src/app/chess/model/Piece.ts");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faChessPawn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faChessPawn */ "./node_modules/@fortawesome/free-solid-svg-icons/faChessPawn.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faChessPawn__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons_faChessPawn__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _model_enums_DirectionsEnum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../model/enums/DirectionsEnum */ "./src/app/chess/model/enums/DirectionsEnum.ts");
/* harmony import */ var _model_enums_PlayerColorEnum__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../model/enums/PlayerColorEnum */ "./src/app/chess/model/enums/PlayerColorEnum.ts");
/* harmony import */ var _model_enums_PieceTypeEnum__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../model/enums/PieceTypeEnum */ "./src/app/chess/model/enums/PieceTypeEnum.ts");
/* harmony import */ var _model_enums_PlayerTypeEnum__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../model/enums/PlayerTypeEnum */ "./src/app/chess/model/enums/PlayerTypeEnum.ts");











var ChessService = /** @class */ (function () {
    function ChessService() {
        this.hightlightedCells = new Array();
        this.directions = new Map();
        this.rookDirections = new Array();
        this.bishopDirections = new Array();
        this.lightPlayer = new _model_Player__WEBPACK_IMPORTED_MODULE_2__["Player"](_model_enums_PlayerColorEnum__WEBPACK_IMPORTED_MODULE_8__["PlayerColorEnum"].LIGHT);
        this.darkPlayer = new _model_Player__WEBPACK_IMPORTED_MODULE_2__["Player"](_model_enums_PlayerColorEnum__WEBPACK_IMPORTED_MODULE_8__["PlayerColorEnum"].DARK, _model_enums_PlayerTypeEnum__WEBPACK_IMPORTED_MODULE_10__["PlayerTypeEnum"].COMPUTER);
        this.createBoard();
        this.placePieces();
        this.setDirections();
        this.setSelectionPieces();
        this.activePlayer = this.lightPlayer;
        this.piecesInCheck = [];
    }
    ChessService.prototype.selectCell = function (cell) {
        if (!!this.selectedCell) {
            this.selectedCell.highlighted = false;
        }
        this.selectedCell = cell;
        this.selectedCell.highlighted = true;
    };
    ChessService.prototype.dragPiece = function (piece) {
        this.draggedPiece = piece;
        this.highlightValidCells(piece);
    };
    ChessService.prototype.dropPiece = function (cell) {
        if (cell.highlighted && cell !== this.draggedPiece.cell) {
            this.movePiece(this.draggedPiece, cell, this.board);
            if (!this.shouldUpdateLatestPiece() && !!!this.victoriousPlayer) {
                this.endTurn();
            }
        }
        this.removeHighlightedCells();
    };
    ChessService.prototype.getPiecesInCheck = function () {
        return this.piecesInCheck;
    };
    ChessService.prototype.shouldUpdateLatestPiece = function () {
        if (!!this.lastMovedPiece && this.lastMovedPiece.type === _model_enums_PieceTypeEnum__WEBPACK_IMPORTED_MODULE_9__["PieceTypeEnum"].PAWN) {
            if (this.lastMovedPiece.row === 0 && this.lastMovedPiece.color == _model_enums_PlayerColorEnum__WEBPACK_IMPORTED_MODULE_8__["PlayerColorEnum"].LIGHT) {
                return true;
            }
            if (this.lastMovedPiece.row === 7 && this.lastMovedPiece.color == _model_enums_PlayerColorEnum__WEBPACK_IMPORTED_MODULE_8__["PlayerColorEnum"].DARK) {
                return true;
            }
        }
        return false;
    };
    ChessService.prototype.upgradeLatestPiece = function (piece) {
        this.lastMovedPiece.type = piece.type;
        this.lastMovedPiece.icon = piece.icon;
        this.detectCheck(this.board);
        this.detectMate(this.board);
        this.endTurn();
    };
    // PRIVATE
    ChessService.prototype.movePiece = function (piece, cell, board) {
        if (!!cell.piece) {
            this.activePlayer.capturePiece(cell.piece);
        }
        if (piece.type === _model_enums_PieceTypeEnum__WEBPACK_IMPORTED_MODULE_9__["PieceTypeEnum"].KING && !piece.hasMoved) {
            if (cell.row === piece.row) {
                if (cell.col === 2) {
                    board[piece.row][3].placePiece(board[piece.row][0].piece);
                }
                else if (cell.col === 6) {
                    board[piece.row][5].placePiece(board[piece.row][7].piece);
                }
            }
        }
        cell.placePiece(piece);
        this.lastMovedPiece = cell.piece;
        this.detectCheck(board);
        this.detectMate(board);
    };
    ChessService.prototype.highlightValidCells = function (piece) {
        this.removeHighlightedCells();
        for (var _i = 0, _a = this.getValidCells(piece, this.board); _i < _a.length; _i++) {
            var cell = _a[_i];
            cell.highlighted = true;
            this.hightlightedCells.push(cell);
        }
    };
    ChessService.prototype.createBoard = function () {
        this.board = new Array();
        for (var i = 0; i < 8; i++) {
            var row = new Array();
            for (var j = 0; j < 8; j++) {
                row.push(new _model_Cell__WEBPACK_IMPORTED_MODULE_3__["Cell"](i % 2 !== j % 2, i, j));
            }
            this.board.push(row);
        }
    };
    ChessService.prototype.placePieces = function () {
        this.placeLightPieces();
        this.placeDarkPieces();
    };
    ChessService.prototype.placeLightPieces = function () {
        var _this = this;
        var king = new _model_Piece__WEBPACK_IMPORTED_MODULE_4__["Piece"](_model_enums_PieceTypeEnum__WEBPACK_IMPORTED_MODULE_9__["PieceTypeEnum"].KING, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faChessKing"], this.board[7][4]);
        var lightPieces = [
            king,
            new _model_Piece__WEBPACK_IMPORTED_MODULE_4__["Piece"](_model_enums_PieceTypeEnum__WEBPACK_IMPORTED_MODULE_9__["PieceTypeEnum"].ROOK, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faChessRook"], this.board[7][0]),
            new _model_Piece__WEBPACK_IMPORTED_MODULE_4__["Piece"](_model_enums_PieceTypeEnum__WEBPACK_IMPORTED_MODULE_9__["PieceTypeEnum"].ROOK, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faChessRook"], this.board[7][7]),
            new _model_Piece__WEBPACK_IMPORTED_MODULE_4__["Piece"](_model_enums_PieceTypeEnum__WEBPACK_IMPORTED_MODULE_9__["PieceTypeEnum"].KNIGHT, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faChessKnight"], this.board[7][1]),
            new _model_Piece__WEBPACK_IMPORTED_MODULE_4__["Piece"](_model_enums_PieceTypeEnum__WEBPACK_IMPORTED_MODULE_9__["PieceTypeEnum"].KNIGHT, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faChessKnight"], this.board[7][6]),
            new _model_Piece__WEBPACK_IMPORTED_MODULE_4__["Piece"](_model_enums_PieceTypeEnum__WEBPACK_IMPORTED_MODULE_9__["PieceTypeEnum"].BISHOP, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faChessBishop"], this.board[7][2]),
            new _model_Piece__WEBPACK_IMPORTED_MODULE_4__["Piece"](_model_enums_PieceTypeEnum__WEBPACK_IMPORTED_MODULE_9__["PieceTypeEnum"].BISHOP, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faChessBishop"], this.board[7][5]),
            new _model_Piece__WEBPACK_IMPORTED_MODULE_4__["Piece"](_model_enums_PieceTypeEnum__WEBPACK_IMPORTED_MODULE_9__["PieceTypeEnum"].QUEEN, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faChessQueen"], this.board[7][3])
        ];
        for (var j = 0; j < 8; j++) {
            lightPieces.push(new _model_Piece__WEBPACK_IMPORTED_MODULE_4__["Piece"](_model_enums_PieceTypeEnum__WEBPACK_IMPORTED_MODULE_9__["PieceTypeEnum"].PAWN, _fortawesome_free_solid_svg_icons_faChessPawn__WEBPACK_IMPORTED_MODULE_6__["faChessPawn"], this.board[6][j]));
        }
        this.lightPlayer.setPieces(lightPieces);
        this.lightPlayer.king = king;
        lightPieces.forEach(function (piece) {
            _this.board[piece.row][piece.col].piece = piece;
        });
    };
    ChessService.prototype.placeDarkPieces = function () {
        var _this = this;
        var king = new _model_Piece__WEBPACK_IMPORTED_MODULE_4__["Piece"](_model_enums_PieceTypeEnum__WEBPACK_IMPORTED_MODULE_9__["PieceTypeEnum"].KING, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faChessKing"], this.board[0][4]);
        var darkPieces = [
            king,
            new _model_Piece__WEBPACK_IMPORTED_MODULE_4__["Piece"](_model_enums_PieceTypeEnum__WEBPACK_IMPORTED_MODULE_9__["PieceTypeEnum"].ROOK, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faChessRook"], this.board[0][0]),
            new _model_Piece__WEBPACK_IMPORTED_MODULE_4__["Piece"](_model_enums_PieceTypeEnum__WEBPACK_IMPORTED_MODULE_9__["PieceTypeEnum"].ROOK, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faChessRook"], this.board[0][7]),
            new _model_Piece__WEBPACK_IMPORTED_MODULE_4__["Piece"](_model_enums_PieceTypeEnum__WEBPACK_IMPORTED_MODULE_9__["PieceTypeEnum"].KNIGHT, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faChessKnight"], this.board[0][1]),
            new _model_Piece__WEBPACK_IMPORTED_MODULE_4__["Piece"](_model_enums_PieceTypeEnum__WEBPACK_IMPORTED_MODULE_9__["PieceTypeEnum"].KNIGHT, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faChessKnight"], this.board[0][6]),
            new _model_Piece__WEBPACK_IMPORTED_MODULE_4__["Piece"](_model_enums_PieceTypeEnum__WEBPACK_IMPORTED_MODULE_9__["PieceTypeEnum"].BISHOP, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faChessBishop"], this.board[0][2]),
            new _model_Piece__WEBPACK_IMPORTED_MODULE_4__["Piece"](_model_enums_PieceTypeEnum__WEBPACK_IMPORTED_MODULE_9__["PieceTypeEnum"].BISHOP, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faChessBishop"], this.board[0][5]),
            new _model_Piece__WEBPACK_IMPORTED_MODULE_4__["Piece"](_model_enums_PieceTypeEnum__WEBPACK_IMPORTED_MODULE_9__["PieceTypeEnum"].QUEEN, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faChessQueen"], this.board[0][3])
        ];
        for (var j = 0; j < 8; j++) {
            darkPieces.push(new _model_Piece__WEBPACK_IMPORTED_MODULE_4__["Piece"](_model_enums_PieceTypeEnum__WEBPACK_IMPORTED_MODULE_9__["PieceTypeEnum"].PAWN, _fortawesome_free_solid_svg_icons_faChessPawn__WEBPACK_IMPORTED_MODULE_6__["faChessPawn"], this.board[1][j]));
        }
        this.darkPlayer.setPieces(darkPieces);
        this.darkPlayer.king = king;
        darkPieces.forEach(function (piece) {
            _this.board[piece.row][piece.col].piece = piece;
        });
    };
    ChessService.prototype.setSelectionPieces = function () {
        this.selectionPieces = [];
        this.selectionPieces.push(new _model_Piece__WEBPACK_IMPORTED_MODULE_4__["Piece"](_model_enums_PieceTypeEnum__WEBPACK_IMPORTED_MODULE_9__["PieceTypeEnum"].KNIGHT, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faChessKnight"]));
        this.selectionPieces.push(new _model_Piece__WEBPACK_IMPORTED_MODULE_4__["Piece"](_model_enums_PieceTypeEnum__WEBPACK_IMPORTED_MODULE_9__["PieceTypeEnum"].BISHOP, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faChessBishop"]));
        this.selectionPieces.push(new _model_Piece__WEBPACK_IMPORTED_MODULE_4__["Piece"](_model_enums_PieceTypeEnum__WEBPACK_IMPORTED_MODULE_9__["PieceTypeEnum"].ROOK, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faChessRook"]));
        this.selectionPieces.push(new _model_Piece__WEBPACK_IMPORTED_MODULE_4__["Piece"](_model_enums_PieceTypeEnum__WEBPACK_IMPORTED_MODULE_9__["PieceTypeEnum"].QUEEN, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faChessQueen"]));
    };
    ChessService.prototype.removeHighlightedCells = function () {
        this.hightlightedCells.forEach(function (cell) { return cell.highlighted = false; });
        this.hightlightedCells = new Array();
    };
    ChessService.prototype.detectCheck = function (board) {
        var lightDangerousEnemies = this.getDangerousEnemies(this.lightPlayer.king, board);
        if (lightDangerousEnemies.length != 0) {
            this.piecesInCheck = lightDangerousEnemies;
            this.piecesInCheck.push(this.lightPlayer.king);
            return;
        }
        var darkDangerousEnemies = this.getDangerousEnemies(this.darkPlayer.king, board);
        if (darkDangerousEnemies.length != 0) {
            this.piecesInCheck = darkDangerousEnemies;
            this.piecesInCheck.push(this.darkPlayer.king);
            return;
        }
        this.piecesInCheck = [];
    };
    ChessService.prototype.getDangerousEnemies = function (ourPiece, board) {
        var dangerousPieces = new Array();
        for (var _i = 0, _a = this.bishopDirections; _i < _a.length; _i++) {
            var direction = _a[_i];
            var piece = this.getFirstPiece(direction, ourPiece, board);
            if (!!piece
                && this.areEnemies(ourPiece, piece)
                && (piece.type === _model_enums_PieceTypeEnum__WEBPACK_IMPORTED_MODULE_9__["PieceTypeEnum"].BISHOP || piece.type === _model_enums_PieceTypeEnum__WEBPACK_IMPORTED_MODULE_9__["PieceTypeEnum"].QUEEN)) {
                dangerousPieces.push(piece);
            }
        }
        for (var _b = 0, _c = this.rookDirections; _b < _c.length; _b++) {
            var direction = _c[_b];
            var piece = this.getFirstPiece(direction, ourPiece, board);
            if (!!piece
                && this.areEnemies(ourPiece, piece)
                && (piece.type === _model_enums_PieceTypeEnum__WEBPACK_IMPORTED_MODULE_9__["PieceTypeEnum"].ROOK || piece.type === _model_enums_PieceTypeEnum__WEBPACK_IMPORTED_MODULE_9__["PieceTypeEnum"].QUEEN)) {
                dangerousPieces.push(piece);
            }
        }
        for (var _d = 0, _e = this.knightMoves; _d < _e.length; _d++) {
            var move = _e[_d];
            var targetRow = ourPiece.row + move[0];
            var targetCol = ourPiece.col + move[1];
            if (this.onBoard(targetRow, targetCol)) {
                var cell = board[targetRow][targetCol];
                if (this.isEnemyPresent(ourPiece, cell, board) && (cell.piece.type === _model_enums_PieceTypeEnum__WEBPACK_IMPORTED_MODULE_9__["PieceTypeEnum"].KNIGHT)) {
                    dangerousPieces.push(cell.piece);
                }
            }
        }
        for (var _f = 0, _g = this.kingMoves; _f < _g.length; _f++) {
            var move = _g[_f];
            var targetRow = ourPiece.row + move[0];
            var targetCol = ourPiece.col + move[1];
            if (this.onBoard(targetRow, targetCol)) {
                var cell = board[targetRow][targetCol];
                if (this.isEnemyPresent(ourPiece, cell, board) && (cell.piece.type === _model_enums_PieceTypeEnum__WEBPACK_IMPORTED_MODULE_9__["PieceTypeEnum"].KING)) {
                    dangerousPieces.push(cell.piece);
                }
            }
        }
        var forward = ourPiece.color == _model_enums_PlayerColorEnum__WEBPACK_IMPORTED_MODULE_8__["PlayerColorEnum"].DARK ? 1 : -1;
        for (var _h = 0, _j = [[forward, -1], [forward, 1]]; _h < _j.length; _h++) {
            var move = _j[_h];
            var targetRow = ourPiece.row + move[0];
            var targetCol = ourPiece.col + move[1];
            if (this.onBoard(targetRow, targetCol)) {
                var cell = board[targetRow][targetCol];
                if (this.isEnemyPresent(ourPiece, cell, board) && cell.piece.type === _model_enums_PieceTypeEnum__WEBPACK_IMPORTED_MODULE_9__["PieceTypeEnum"].PAWN) {
                    dangerousPieces.push(cell.piece);
                }
            }
        }
        return dangerousPieces;
    };
    ChessService.prototype.printBoard = function (board) {
        board.forEach(function (row) {
            console.log(row.map(function (cell) { return !!cell.piece ? cell.piece.type : ' '; }));
        });
    };
    ChessService.prototype.detectMate = function (board) {
        var enemyPlayer = this.activePlayer === this.lightPlayer ? this.darkPlayer : this.lightPlayer;
        if (this.piecesInCheck.includes(enemyPlayer.king) && !this.playerHasAvailableMoves(enemyPlayer, board)) {
            this.victoriousPlayer = this.activePlayer;
        }
    };
    ChessService.prototype.playerHasAvailableMoves = function (player, board) {
        var _this = this;
        return player.pieces.some(function (piece) { return _this.canMove(piece, board); });
    };
    ChessService.prototype.canMove = function (piece, board) {
        return this.getValidCells(piece, board).length > 0;
    };
    ChessService.prototype.endTurn = function () {
        this.activePlayer = this.activePlayer === this.lightPlayer ? this.darkPlayer : this.lightPlayer;
        if (this.activePlayer.type === _model_enums_PlayerTypeEnum__WEBPACK_IMPORTED_MODULE_10__["PlayerTypeEnum"].COMPUTER) {
            this.computerTakeTurn();
        }
    };
    // VALIDATORS
    ChessService.prototype.isNotFriendly = function (piece, cell) {
        if (!!!cell.piece) {
            return true;
        }
        return cell.piece.color != piece.color;
    };
    ChessService.prototype.isEnemyPresent = function (piece, cell, board) {
        return !!cell.piece && this.areEnemies(cell.piece, piece);
    };
    ChessService.prototype.areEnemies = function (a, b) {
        return a.color !== b.color;
    };
    ChessService.prototype.onBoard = function (targetRow, targetCol) {
        return 0 <= targetRow && targetRow < 8 && 0 <= targetCol && targetCol < 8;
    };
    ChessService.prototype.isEmpty = function (cell) {
        return !!!cell.piece;
    };
    ChessService.prototype.kingWouldBeSafe = function (movedPiece, targetCell, board) {
        var king = movedPiece.owner.king === movedPiece ?
            new _model_Piece__WEBPACK_IMPORTED_MODULE_4__["Piece"](movedPiece.owner.king.type, null, targetCell, movedPiece.owner) : movedPiece.owner.king;
        for (var _i = 0, _a = this.bishopDirections; _i < _a.length; _i++) {
            var direction = _a[_i];
            var piece = this.getFirstPiece(direction, king, board, movedPiece, targetCell);
            if (!!piece
                && this.areEnemies(king, piece)
                && (piece.type === _model_enums_PieceTypeEnum__WEBPACK_IMPORTED_MODULE_9__["PieceTypeEnum"].BISHOP || piece.type === _model_enums_PieceTypeEnum__WEBPACK_IMPORTED_MODULE_9__["PieceTypeEnum"].QUEEN)) {
                return false;
            }
        }
        for (var _b = 0, _c = this.rookDirections; _b < _c.length; _b++) {
            var direction = _c[_b];
            var piece = this.getFirstPiece(direction, king, board, movedPiece, targetCell);
            if (!!piece
                && this.areEnemies(king, piece)
                && (piece.type === _model_enums_PieceTypeEnum__WEBPACK_IMPORTED_MODULE_9__["PieceTypeEnum"].ROOK || piece.type === _model_enums_PieceTypeEnum__WEBPACK_IMPORTED_MODULE_9__["PieceTypeEnum"].QUEEN)) {
                return false;
            }
        }
        for (var _d = 0, _e = this.knightMoves; _d < _e.length; _d++) {
            var move = _e[_d];
            var targetRow = king.row + move[0];
            var targetCol = king.col + move[1];
            if (this.onBoard(targetRow, targetCol)) {
                var cell = board[targetRow][targetCol];
                if (cell === targetCell)
                    continue;
                if (this.isEnemyPresent(king, cell, board) && (cell.piece.type === _model_enums_PieceTypeEnum__WEBPACK_IMPORTED_MODULE_9__["PieceTypeEnum"].KNIGHT)) {
                    return false;
                }
            }
        }
        for (var _f = 0, _g = this.kingMoves; _f < _g.length; _f++) {
            var move = _g[_f];
            var targetRow = king.row + move[0];
            var targetCol = king.col + move[1];
            if (this.onBoard(targetRow, targetCol)) {
                var cell = board[targetRow][targetCol];
                if (cell === targetCell)
                    continue;
                if (this.isEnemyPresent(king, cell, board) && (cell.piece.type === _model_enums_PieceTypeEnum__WEBPACK_IMPORTED_MODULE_9__["PieceTypeEnum"].KING)) {
                    return false;
                }
            }
        }
        var forward = king.color == _model_enums_PlayerColorEnum__WEBPACK_IMPORTED_MODULE_8__["PlayerColorEnum"].DARK ? 1 : -1;
        for (var _h = 0, _j = [[forward, -1], [forward, 1]]; _h < _j.length; _h++) {
            var move = _j[_h];
            var targetRow = king.row + move[0];
            var targetCol = king.col + move[1];
            if (this.onBoard(targetRow, targetCol)) {
                var cell = board[targetRow][targetCol];
                if (this.isEnemyPresent(king, cell, board) && cell.piece.type === _model_enums_PieceTypeEnum__WEBPACK_IMPORTED_MODULE_9__["PieceTypeEnum"].PAWN) {
                    return false;
                }
            }
        }
        return true;
    };
    // PIECE MOVEMENT
    ChessService.prototype.setDirections = function () {
        var _this = this;
        Object.values(_model_enums_DirectionsEnum__WEBPACK_IMPORTED_MODULE_7__["DirectionsEnum"]).forEach(function (direction) {
            _this.directions.set(direction, []);
        });
        for (var i = 1; i < 8; i++) {
            this.directions.get(_model_enums_DirectionsEnum__WEBPACK_IMPORTED_MODULE_7__["DirectionsEnum"].NORTH).push([-i, 0]);
            this.directions.get(_model_enums_DirectionsEnum__WEBPACK_IMPORTED_MODULE_7__["DirectionsEnum"].EAST).push([0, i]);
            this.directions.get(_model_enums_DirectionsEnum__WEBPACK_IMPORTED_MODULE_7__["DirectionsEnum"].SOUTH).push([i, 0]);
            this.directions.get(_model_enums_DirectionsEnum__WEBPACK_IMPORTED_MODULE_7__["DirectionsEnum"].WEST).push([0, -i]);
            this.directions.get(_model_enums_DirectionsEnum__WEBPACK_IMPORTED_MODULE_7__["DirectionsEnum"].SOUTH_EAST).push([i, i]);
            this.directions.get(_model_enums_DirectionsEnum__WEBPACK_IMPORTED_MODULE_7__["DirectionsEnum"].NORTH_EAST).push([-i, i]);
            this.directions.get(_model_enums_DirectionsEnum__WEBPACK_IMPORTED_MODULE_7__["DirectionsEnum"].SOUTH_WEST).push([i, -i]);
            this.directions.get(_model_enums_DirectionsEnum__WEBPACK_IMPORTED_MODULE_7__["DirectionsEnum"].NORTH_WEST).push([-i, -i]);
        }
        this.rookDirections = [
            this.directions.get(_model_enums_DirectionsEnum__WEBPACK_IMPORTED_MODULE_7__["DirectionsEnum"].NORTH),
            this.directions.get(_model_enums_DirectionsEnum__WEBPACK_IMPORTED_MODULE_7__["DirectionsEnum"].EAST),
            this.directions.get(_model_enums_DirectionsEnum__WEBPACK_IMPORTED_MODULE_7__["DirectionsEnum"].SOUTH),
            this.directions.get(_model_enums_DirectionsEnum__WEBPACK_IMPORTED_MODULE_7__["DirectionsEnum"].WEST),
        ];
        this.bishopDirections = [
            this.directions.get(_model_enums_DirectionsEnum__WEBPACK_IMPORTED_MODULE_7__["DirectionsEnum"].NORTH_WEST),
            this.directions.get(_model_enums_DirectionsEnum__WEBPACK_IMPORTED_MODULE_7__["DirectionsEnum"].NORTH_EAST),
            this.directions.get(_model_enums_DirectionsEnum__WEBPACK_IMPORTED_MODULE_7__["DirectionsEnum"].SOUTH_WEST),
            this.directions.get(_model_enums_DirectionsEnum__WEBPACK_IMPORTED_MODULE_7__["DirectionsEnum"].SOUTH_EAST),
        ];
        this.knightMoves = [[-2, -1], [-2, 1], [-1, 2], [1, 2], [2, 1], [2, -1], [1, -2], [-1, -2]];
        this.kingMoves = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];
    };
    ChessService.prototype.getValidCells = function (piece, board) {
        if (piece.type === _model_enums_PieceTypeEnum__WEBPACK_IMPORTED_MODULE_9__["PieceTypeEnum"].PAWN) {
            return this.getPawnValidCells(piece, board);
        }
        if (piece.type === _model_enums_PieceTypeEnum__WEBPACK_IMPORTED_MODULE_9__["PieceTypeEnum"].KNIGHT) {
            return this.getKnightValidCells(piece, board);
        }
        if (piece.type === _model_enums_PieceTypeEnum__WEBPACK_IMPORTED_MODULE_9__["PieceTypeEnum"].ROOK) {
            return this.getRookValidCells(piece, board);
        }
        if (piece.type === _model_enums_PieceTypeEnum__WEBPACK_IMPORTED_MODULE_9__["PieceTypeEnum"].BISHOP) {
            return this.getBishopValidCells(piece, board);
        }
        if (piece.type === _model_enums_PieceTypeEnum__WEBPACK_IMPORTED_MODULE_9__["PieceTypeEnum"].QUEEN) {
            return this.getQueenValidCells(piece, board);
        }
        if (piece.type === _model_enums_PieceTypeEnum__WEBPACK_IMPORTED_MODULE_9__["PieceTypeEnum"].KING) {
            return this.getKingValidCells(piece, board);
        }
    };
    ChessService.prototype.getKnightValidCells = function (knight, board) {
        var validCells = new Array();
        this.addPotentialValidCells(this.knightMoves, knight, validCells, board);
        return validCells;
    };
    ChessService.prototype.getPawnValidCells = function (pawn, board) {
        var validCells = new Array();
        var forward = pawn.color == _model_enums_PlayerColorEnum__WEBPACK_IMPORTED_MODULE_8__["PlayerColorEnum"].DARK ? 1 : -1;
        if (this.onBoard(pawn.row + forward, pawn.col)) {
            var cell = board[pawn.row + forward][pawn.col];
            if (this.isEmpty(cell) && this.kingWouldBeSafe(pawn, cell, board)) {
                validCells.push(cell);
                if (this.onBoard(pawn.row + forward * 2, pawn.col)) {
                    cell = board[pawn.row + forward * 2][pawn.col];
                    if (this.isEmpty(cell) && this.kingWouldBeSafe(pawn, cell, board)) {
                        if (!pawn.hasMoved) {
                            validCells.push(cell);
                        }
                    }
                }
            }
        }
        for (var _i = 0, _a = [[forward, -1], [forward, 1]]; _i < _a.length; _i++) {
            var move = _a[_i];
            var targetRow = pawn.row + move[0];
            var targetCol = pawn.col + move[1];
            if (this.onBoard(targetRow, targetCol)) {
                var cell = board[targetRow][targetCol];
                if (this.isEnemyPresent(pawn, cell, board) && this.kingWouldBeSafe(pawn, cell, board)) {
                    validCells.push(cell);
                }
            }
        }
        return validCells;
    };
    ChessService.prototype.getRookValidCells = function (rook, board) {
        var _this = this;
        var validCells = new Array();
        this.rookDirections.forEach(function (direction) {
            _this.addDirectionValidCells(direction, rook, validCells, board);
        });
        return validCells;
    };
    ChessService.prototype.getBishopValidCells = function (bishop, board) {
        var _this = this;
        var validCells = new Array();
        this.bishopDirections.forEach(function (direction) {
            _this.addDirectionValidCells(direction, bishop, validCells, board);
        });
        return validCells;
    };
    ChessService.prototype.getQueenValidCells = function (queen, board) {
        var _this = this;
        var validCells = new Array();
        this.directions.forEach(function (direction) {
            _this.addDirectionValidCells(direction, queen, validCells, board);
        });
        return validCells;
    };
    ChessService.prototype.getKingValidCells = function (king, board) {
        var validCells = new Array();
        var potentialMoves = this.kingMoves;
        this.addPotentialValidCells(potentialMoves, king, validCells, board);
        // castle
        if (!king.hasMoved && !this.piecesInCheck.includes(king)) {
            var canLongCastle = true;
            if (!!board[king.row][0].piece && !board[king.row][0].piece.hasMoved) {
                for (var j = 1; j <= 3; j++) {
                    var cell = board[king.row][king.col - j];
                    if (!!cell.piece || !this.kingWouldBeSafe(king, cell, board)) {
                        canLongCastle = false;
                        break;
                    }
                }
            }
            if (canLongCastle) {
                validCells.push(board[king.row][king.col - 2]);
            }
            var canShortCastle = true;
            if (!!board[king.row][7].piece && !board[king.row][7].piece.hasMoved) {
                for (var j = 1; j <= 2; j++) {
                    var cell = board[king.row][king.col + j];
                    if (!!cell.piece || !this.kingWouldBeSafe(king, cell, board)) {
                        canShortCastle = false;
                        break;
                    }
                }
            }
            if (canShortCastle) {
                validCells.push(board[king.row][king.col + 2]);
            }
        }
        return validCells;
    };
    ChessService.prototype.addPotentialValidCells = function (potentialMoves, piece, validCells, board) {
        var _this = this;
        potentialMoves.forEach(function (move) {
            var newRow = piece.row + move[0];
            var newCol = piece.col + move[1];
            if (_this.onBoard(newRow, newCol)) {
                var cell = board[newRow][newCol];
                if (_this.isNotFriendly(piece, cell) && _this.kingWouldBeSafe(piece, cell, board)) {
                    validCells.push(cell);
                }
            }
        });
    };
    ChessService.prototype.addDirectionValidCells = function (direction, piece, validCells, board) {
        for (var _i = 0, direction_1 = direction; _i < direction_1.length; _i++) {
            var move = direction_1[_i];
            var targetRow = piece.row + move[0];
            var targetCol = piece.col + move[1];
            if (!this.onBoard(targetRow, targetCol))
                return;
            var cell = board[targetRow][targetCol];
            if (!!cell.piece) {
                if (this.areEnemies(piece, cell.piece) && this.kingWouldBeSafe(piece, cell, board)) {
                    validCells.push(cell);
                }
                return;
            }
            if (this.kingWouldBeSafe(piece, cell, board)) {
                validCells.push(cell);
            }
        }
    };
    ChessService.prototype.getFirstPiece = function (direction, piece, board, movedPiece, targetCell) {
        if (movedPiece === void 0) { movedPiece = null; }
        if (targetCell === void 0) { targetCell = null; }
        for (var _i = 0, direction_2 = direction; _i < direction_2.length; _i++) {
            var move = direction_2[_i];
            var targetRow = piece.row + move[0];
            var targetCol = piece.col + move[1];
            if (!this.onBoard(targetRow, targetCol)) {
                return null;
            }
            var cell = board[targetRow][targetCol];
            if (cell === targetCell) {
                return movedPiece;
            }
            if (!!cell.piece && cell.piece !== movedPiece) {
                return cell.piece;
            }
        }
    };
    // ENEMY AI
    ChessService.prototype.computerTakeTurn = function () {
        var _this = this;
        var availableMoves = [];
        this.activePlayer.pieces.forEach(function (piece) {
            _this.getValidCells(piece, _this.board).forEach(function (cell) {
                availableMoves.push([piece, cell]);
            });
        });
        var attacks = availableMoves.filter(function (move) { return _this.isEnemyPresent(move[0], move[1], _this.board); });
        var move = attacks.length > 0 ? this.getRandom(attacks) : this.getRandom(availableMoves);
        this.movePiece(move[0], move[1], this.board);
        this.endTurn();
    };
    ChessService.prototype.getRandom = function (a) {
        return a[Math.floor((Math.random() * a.length))];
    };
    ChessService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ChessService);
    return ChessService;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProfileComponent = /** @class */ (function () {
    function ProfileComponent() {
        this.month = 1000 * 60 * 60 * 24 * 30;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var yardi_time = 13 * this.month;
        // @ts-ignore
        var cloudflight_time = 3 * this.month + (Date.now() - new Date(2019, 8, 1));
        this.yearsOfExperience = (yardi_time + cloudflight_time) / (12 * this.month);
    };
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/index.js!./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")]
        })
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/project-list/project-list.component.css":
/*!*********************************************************!*\
  !*** ./src/app/project-list/project-list.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3QtbGlzdC9wcm9qZWN0LWxpc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/project-list/project-list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/project-list/project-list.component.ts ***!
  \********************************************************/
/*! exports provided: ProjectListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectListComponent", function() { return ProjectListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProjectListComponent = /** @class */ (function () {
    function ProjectListComponent() {
        this.projects = [
            {
                thumbnail: '../assets/img/project-loc-de-munca.png',
                name: 'Job Hunting',
                category: 'Educational Desktop App',
                year: 2015,
                gitLink: 'https://github.com/Hidorikun/In-cautarea-unui-loc-de-munca'
            },
            {
                thumbnail: '../assets/img/project-students-db.png',
                name: 'Student Management System',
                category: 'Management System',
                year: 2016,
                gitLink: 'https://github.com/Hidorikun/Faculty-Database'
            },
            {
                thumbnail: '../assets/img/project-graf.png',
                name: 'Graph Exploration',
                category: 'Educational Site',
                year: 2015,
                gitLink: 'https://github.com/Hidorikun/Explorarea-Grafurilor'
            },
            {
                thumbnail: '../assets/img/project-motion-tracker.png',
                name: 'VR Arm Motion Tracking',
                category: 'Bachelor\'s Thesis',
                year: 2019,
                gitLink: 'https://github.com/Hidorikun/VR-Arm-Motion-Tracker'
            },
            {
                thumbnail: '../assets/img/chess.png',
                name: 'Chess',
                category: 'Web Game',
                year: 2020,
                gitLink: './chess'
            }
        ];
    }
    ProjectListComponent.prototype.ngOnInit = function () {
    };
    ProjectListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-project-list',
            template: __webpack_require__(/*! raw-loader!./project-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/project-list/project-list.component.html"),
            styles: [__webpack_require__(/*! ./project-list.component.css */ "./src/app/project-list/project-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProjectListComponent);
    return ProjectListComponent;
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

module.exports = __webpack_require__(/*! /home/runner/work/personal-site/personal-site/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map