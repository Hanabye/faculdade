"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personagem = void 0;
var Personagem = /** @class */ (function () {
    function Personagem(_pontos) {
        if (_pontos === void 0) { _pontos = 30; }
        this._pontos = _pontos;
        this.raca = "";
        this.classe = "";
        this.nickname = "";
        this.stamina = 0;
        this.mana = 0;
        this.powerAttack = 0;
        this.inteligencia = 0;
        this.sobrevivencia = 0;
        this.armor = 0;
    }
    Object.defineProperty(Personagem.prototype, "pontos", {
        get: function () {
            return this._pontos;
        },
        set: function (pontos) {
            this._pontos = pontos;
        },
        enumerable: false,
        configurable: true
    });
    Personagem.prototype.criarPerson = function (raca, classe, nick) {
        this.raca = raca;
        this.classe = classe;
        this.nickname = nick;
    };
    Personagem.prototype.showPerson = function () {
        console.log("\nRa\u00E7a: " + this.raca);
        console.log("Classe: " + this.classe);
        console.log("Nickname: " + this.nickname);
        console.log("Stamina: " + this.stamina);
        console.log("Mana: " + this.mana);
        console.log("Power Attack: " + this.powerAttack);
        console.log("Intelig\u00EAncia: " + this.inteligencia);
        console.log("Armor: " + this.armor + "\n");
    };
    return Personagem;
}());
exports.Personagem = Personagem;
