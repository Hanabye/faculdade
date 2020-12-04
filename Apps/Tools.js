"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tools = void 0;
var Tools = /** @class */ (function () {
    function Tools() {
        this.inimigo = "";
        this.nivel = 0;
    }
    Tools.prototype.dificuldade = function (nivel) {
        this.nivel = nivel;
    };
    Tools.prototype.nome = function (nome) {
        this.inimigo = nome;
    };
    return Tools;
}());
exports.Tools = Tools;
