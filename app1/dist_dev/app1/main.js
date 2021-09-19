(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Usuario\Desktop\APIpythonangular\app1\src\main.ts */"zUnb");


/***/ }),

/***/ "96+/":
/*!***************************************!*\
  !*** ./src/app/painel/frases-mock.ts ***!
  \***************************************/
/*! exports provided: FRASES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FRASES", function() { return FRASES; });
const FRASES = [
    { fraseEng: 'I like to learn', frasePtBr: 'Eu gosto de aprender' },
    { fraseEng: 'How are you?', frasePtBr: 'Como vai você?' },
    { fraseEng: 'What`s your name?', frasePtBr: 'Qual o seu nome?' },
    { fraseEng: 'I like', frasePtBr: 'Eu gosto' },
];


/***/ }),

/***/ "AytR":
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
const environment = {
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

/***/ "CjaI":
/*!**************************************************!*\
  !*** ./src/app/progresso/progresso.component.ts ***!
  \**************************************************/
/*! exports provided: ProgressoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressoComponent", function() { return ProgressoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ProgressoComponent {
    constructor() {
        this.progresso = 0;
    }
    ngOnInit() {
    }
}
ProgressoComponent.ɵfac = function ProgressoComponent_Factory(t) { return new (t || ProgressoComponent)(); };
ProgressoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProgressoComponent, selectors: [["app-progresso"]], inputs: { progresso: "progresso" }, decls: 2, vars: 3, consts: [[1, "progress"]], template: function ProgressoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("progress-bar w-", ctx.progresso, "");
    } }, styles: [".progress[_ngcontent-%COMP%] {\n  background: #d8f7c4;\n  border: solid 1px #76bb56;\n}\n\n.progress-bar[_ngcontent-%COMP%] {\n  background: #76bb56;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHByb2dyZXNzby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0VBQ0EseUJBQUE7QUFDSjs7QUFDQTtFQUNJLG1CQUFBO0FBRUoiLCJmaWxlIjoicHJvZ3Jlc3NvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2dyZXNze1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDIxNiwgMjQ3LCAxOTYpO1xyXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggIzc2YmI1NjtcclxufVxyXG4ucHJvZ3Jlc3MtYmFye1xyXG4gICAgYmFja2dyb3VuZDojNzZiYjU2O1xyXG59Il19 */"] });


/***/ }),

/***/ "IH1k":
/*!********************************************!*\
  !*** ./src/app/painel/painel.component.ts ***!
  \********************************************/
/*! exports provided: PainelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PainelComponent", function() { return PainelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _frases_mock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./frases-mock */ "96+/");
/* harmony import */ var _progresso_progresso_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../progresso/progresso.component */ "CjaI");
/* harmony import */ var _tentativas_tentativas_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tentativas/tentativas.component */ "jYux");





class PainelComponent {
    constructor() {
        // O output deixa este atributo exposto para o component pai pegar
        this.encerrarJogo = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.frases = _frases_mock__WEBPACK_IMPORTED_MODULE_1__["FRASES"];
        this.instrucao = 'Traduza a frase:';
        this.resposta = '';
        // Rodadas do jogo
        this.rodada = 0;
        // barra de progresso
        this.progresso = 0;
        this.tentativas = 3;
        this.atualizaRodada();
        //this.rodadaFrase = this.frases[this.rodada]  
        //console.log(this.frases)
    }
    ngOnInit() { }
    ngOnDestroy() {
        console.log("component panel going destructed");
    }
    // Eu quero atualizar a resposta do formulari
    // vou criar uma funlção pra fazer o tratamento
    // das entradas do usuário 
    atualizaResposta(resposta) {
        // O to-way-binding funciona assim
        this.resposta = resposta.target.value;
        console.log(resposta);
    }
    // Evento de clique do botão
    recuperaValorDigitado() {
        //console.log(this.tentativas)
        if (this.rodadaFrase.frasePtBr == this.resposta) {
            //alert("Tradução correta!")
            this.rodada++;
            // Controle da barra de progresso
            this.progresso = this.progresso + (100 / this.frases.length);
            //console.log(this.progresso)
            // Atualiza a rodada de frases
            //
            if (this.rodada === 4) {
                this.encerrarJogo.emit('Vitória!');
            }
            this.atualizaRodada();
            //this.rodadaFrase = this.frases[this.rodada]       
            // Limpando a rodada de frases
            //console.log(this.resposta)
            //this.resposta = ''
            //console.log(this.resposta)      
        }
        else {
            // diminuir a variável tentativas
            this.tentativas--;
            if (this.tentativas === -1) {
                this.encerrarJogo.emit("Derrota!");
            }
            console.log(this.tentativas);
        }
    }
    atualizaRodada() {
        //defini a rodada da frase com base em uma lógica
        this.rodadaFrase = this.frases[this.rodada];
        //Limpa a rodada
        this.resposta = '';
    }
}
PainelComponent.ɵfac = function PainelComponent_Factory(t) { return new (t || PainelComponent)(); };
PainelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PainelComponent, selectors: [["app-painel"]], outputs: { encerrarJogo: "encerrarJogo" }, decls: 20, vars: 5, consts: [[1, "container"], [1, "jumbotron"], [1, "row"], [1, "col-sm-6"], [3, "progresso"], [3, "tentativas"], [1, "col"], [1, "form-group"], ["rows", "3", 1, "form-control", 3, "value", "input"], [1, "d-flex", "justify-content-end"], ["type", "button", 1, "btn", "btn-primary", 3, "click"]], template: function PainelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-progresso", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-tentativas", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "textarea", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function PainelComponent_Template_textarea_input_14_listener($event) { return ctx.atualizaResposta($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PainelComponent_Template_button_click_18_listener() { return ctx.recuperaValorDigitado(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Verificar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("progresso", ctx.progresso);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tentativas", ctx.tentativas);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.instrucao, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.rodadaFrase.fraseEng);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.resposta);
    } }, directives: [_progresso_progresso_component__WEBPACK_IMPORTED_MODULE_2__["ProgressoComponent"], _tentativas_tentativas_component__WEBPACK_IMPORTED_MODULE_3__["TentativasComponent"]], styles: [".jumbotron[_ngcontent-%COMP%] {\n  \n  margin-top: 10px;\n  \n  padding-top: 10px;\n  \n  padding-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHBhaW5lbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtFQUNBLGlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxvQkFBQTtBQUNKIiwiZmlsZSI6InBhaW5lbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5qdW1ib3Ryb257XHJcbiAgICAvKm1hcmdlbSBleHRlcm5hIGRhIGNhaXhhKi9cclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAvKk1hcmdlbSBpbnRlcm5hIGRhIGNhaXhhKi9cclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgLypNYXJnZW0gaW50ZXJuYSBkYSBjYWl4YSovXHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxufSJdfQ== */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _topo_topo_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./topo/topo.component */ "shsj");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _painel_painel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./painel/painel.component */ "IH1k");




function AppComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-painel", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("encerrarJogo", function AppComponent_div_1_Template_app_painel_encerrarJogo_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.encerrarJogo($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_ng_template_2_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Finish Play, You Lose!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_ng_template_2_div_0_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r8.reiniciarJogo(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Jogar Novamente");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AppComponent_ng_template_2_div_0_Template, 7, 0, "div", 4);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.tipoEncerramento === "derrota")("ngIfElse", _r3);
} }
function AppComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Finish Play, You Win!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_ng_template_4_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.reiniciarJogo(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Jogar Novamente");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AppComponent {
    constructor() {
        this.jogoEmAndamento = true;
        this.tipoEncerramento = '';
    }
    encerrarJogo(tipo) {
        //console.log(tipo)
        this.jogoEmAndamento = false;
        this.tipoEncerramento = tipo;
    }
    reiniciarJogo() {
        this.jogoEmAndamento = true;
        this.tipoEncerramento = '';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 6, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["fimDeJogo", ""], ["fimDeJogoVitoria", ""], [3, "encerrarJogo"], ["class", "container", "style", "margin-top: 50px", 4, "ngIf", "ngIfElse"], [1, "container", 2, "margin-top", "50px"], [1, "row"], [1, "col-md-col"], [2, "color", "red"], [1, "btn", "btn-primary", 3, "click"], [2, "color", "green"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-topo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_div_1_Template, 2, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppComponent_ng_template_2_Template, 1, 2, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AppComponent_ng_template_4_Template, 7, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.jogoEmAndamento)("ngIfElse", _r1);
    } }, directives: [_topo_topo_component__WEBPACK_IMPORTED_MODULE_1__["TopoComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _painel_painel_component__WEBPACK_IMPORTED_MODULE_3__["PainelComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _topo_topo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./topo/topo.component */ "shsj");
/* harmony import */ var _painel_painel_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./painel/painel.component */ "IH1k");
/* harmony import */ var _tentativas_tentativas_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tentativas/tentativas.component */ "jYux");
/* harmony import */ var _progresso_progresso_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./progresso/progresso.component */ "CjaI");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");








class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _topo_topo_component__WEBPACK_IMPORTED_MODULE_3__["TopoComponent"],
        _painel_painel_component__WEBPACK_IMPORTED_MODULE_4__["PainelComponent"],
        _tentativas_tentativas_component__WEBPACK_IMPORTED_MODULE_5__["TentativasComponent"],
        _progresso_progresso_component__WEBPACK_IMPORTED_MODULE_6__["ProgressoComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"]] }); })();


/***/ }),

/***/ "jYux":
/*!****************************************************!*\
  !*** ./src/app/tentativas/tentativas.component.ts ***!
  \****************************************************/
/*! exports provided: TentativasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TentativasComponent", function() { return TentativasComponent; });
/* harmony import */ var _shared_coracao_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/coracao.model */ "mPPp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function TentativasComponent_img_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 1);
} if (rf & 2) {
    const coracao_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", coracao_r1.exibeCoracao(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
class TentativasComponent {
    constructor() {
        // Property Binding - controlando a imagem dos corações
        // O property bindings controla os compamentes html
        // Aqui é o array de corações para usar no ngFor
        this.coracoes = [
            new _shared_coracao_model__WEBPACK_IMPORTED_MODULE_0__["Coracao"](true), new _shared_coracao_model__WEBPACK_IMPORTED_MODULE_0__["Coracao"](true), new _shared_coracao_model__WEBPACK_IMPORTED_MODULE_0__["Coracao"](true)
        ];
        console.log(this.coracoes);
        //console.log("tentativas recebidas do painel!", this.tentativas)
    }
    // executa este method quando os valores são passados de pai 
    // filho e vice versa, quando valores são inseridos e alterados
    // este method entra em ação
    ngOnChanges() {
        if (this.tentativas !== this.coracoes.length) {
            let indice = this.coracoes.length - this.tentativas;
            // 3 - 2 = 1
            this.coracoes[indice - 1].cheio = false;
        }
        console.log("tentativas recebidas do painel!", this.tentativas);
    }
    ngOnInit() {
        console.log("tentativas recebidas do painel!", this.tentativas);
    }
}
TentativasComponent.ɵfac = function TentativasComponent_Factory(t) { return new (t || TentativasComponent)(); };
TentativasComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TentativasComponent, selectors: [["app-tentativas"]], inputs: { tentativas: "tentativas" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 1, vars: 1, consts: [[3, "src", 4, "ngFor", "ngForOf"], [3, "src"]], template: function TentativasComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, TentativasComponent_img_0_Template, 1, 1, "img", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.coracoes);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZW50YXRpdmFzLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "mPPp":
/*!*****************************************!*\
  !*** ./src/app/shared/coracao.model.ts ***!
  \*****************************************/
/*! exports provided: Coracao */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Coracao", function() { return Coracao; });
class Coracao {
    constructor(cheio, urlCoracaoCheio = 'assets/coracao_cheio.png', urlCoracaoVazio = 'assets/coracao_vazio.png') {
        this.cheio = cheio;
        this.urlCoracaoCheio = urlCoracaoCheio;
        this.urlCoracaoVazio = urlCoracaoVazio;
    }
    exibeCoracao() {
        if (this.cheio) {
            return this.urlCoracaoCheio;
        }
        else {
            return this.urlCoracaoVazio;
        }
    }
}


/***/ }),

/***/ "shsj":
/*!****************************************!*\
  !*** ./src/app/topo/topo.component.ts ***!
  \****************************************/
/*! exports provided: TopoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopoComponent", function() { return TopoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

// definindo a classes
class TopoComponent {
    constructor() {
        // DataBindings
        this.titulo = 'String interpolation';
    }
}
TopoComponent.ɵfac = function TopoComponent_Factory(t) { return new (t || TopoComponent)(); };
TopoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TopoComponent, selectors: [["app-topo"]], decls: 3, vars: 1, consts: [[1, "navbar", "navbar-inverse", "bg-faded"], [1, "navbar-brand", "mb-0"]], template: function TopoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.titulo);
    } }, styles: [".navbar[_ngcontent-%COMP%]{\r\n    background:aqua;\r\n    \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvcG8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7O0FBRW5CIiwiZmlsZSI6InRvcG8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXJ7XHJcbiAgICBiYWNrZ3JvdW5kOmFxdWE7XHJcbiAgICBcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map