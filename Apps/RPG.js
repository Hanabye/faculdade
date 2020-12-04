"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var prompt_sync_1 = __importDefault(require("prompt-sync"));
var Personagem_1 = require("./Personagem");
var Tools_1 = require("./Tools");
var input = prompt_sync_1.default();
var character = new Personagem_1.Personagem(20);
var mestre = new Tools_1.Tools();
var personagem = false;
var option;
while (option != 5) {
    console.log('+====== Criação de Personagens ======+');
    console.log('|                                    |');
    console.log('| 1. Criar personagem                |');
    console.log('| 2. Mostra personagem               |');
    console.log('| 3. Start Game                      |');
    console.log('| 4. Ferramentas p/ Mestre           |');
    console.log('| 5. Sair                            |');
    console.log('|                                    |');
    console.log('+====================================+');
    option = +input('Opção: ');
    switch (option) {
        case 1:
            console.log('Define sua raça');
            console.log('1. Humano');
            console.log('2. Elfo');
            console.log('3. Orc');
            var raca = +input('Raça: ');
            switch (raca) {
                case 1:
                    character.raca = 'Humano';
                    break;
                case 2:
                    character.raca = 'Elfo';
                    break;
                case 3:
                    character.raca = 'Orc';
                    break;
                default:
                    input('Opção inválida');
            }
            console.log('Define sua classe');
            console.log('1. Guerreiro');
            console.log('2. Feiticeiro');
            console.log('3. Ranger');
            var classe = +input('Classe: ');
            switch (classe) {
                case 1:
                    character.classe = 'Guerreiro';
                    break;
                case 2:
                    character.classe = 'Feiticeiro';
                    break;
                case 3:
                    character.classe = 'Ranger';
                    break;
                default:
                    input('Opção inválida');
            }
            var nick = input('Nick: ');
            character.criarPerson(character.raca, character.classe, nick);
            status();
            input('Pressione enter p/ continuar.');
            personagem = true;
            console.clear();
            break;
        case 2:
            if (personagem == true) {
                character.showPerson();
            }
            else {
                console.log('Você ainda não criou seu personagem.');
            }
            input('Pressione enter p/ continuar.');
            console.clear();
            break;
        case 3:
            if (personagem == true) {
                startGame();
            }
            else {
                console.log('Crie o seu personagem antes de começar.');
            }
            input('Pressione enter p/ continuar.');
            console.clear();
            break;
        case 4:
            toolsMaster();
            break;
        case 5:
            var confirma = input('Confirmar saída [S/N]: ');
            if (confirma == 'S' || confirma == 's') {
                break;
            }
            else if (confirma == 'N' || confirma == 'n') {
                option = 0;
                console.clear();
            }
            else {
                option = 0;
                console.log('Opção inválida.');
                input('Pressione enter p/ continuar.');
                console.clear();
            }
            break;
        default:
            console.log('Opção inválida\n');
            input('Pressione enter p/ continuar.');
            console.clear();
    }
}
function status() {
    while (true) {
        if (character.pontos <= 0) {
            break;
        }
        else {
            console.log("\nVoc\u00EA tem " + character.pontos + " pontos para distribuir");
            var stamina = +input("Estamina (1/5): ");
            character.stamina = stamina;
            if (character.stamina <= 0) {
                break;
            }
            else if (character.stamina > character.pontos) {
                console.log("\nVoc\u00EA tem apenas " + character.pontos + " pontos.");
            }
            else {
                character.pontos = character.pontos - character.stamina;
                break;
            }
        }
    }
    while (true) {
        if (character.pontos <= 0) {
            break;
        }
        else {
            console.log("\nVoc\u00EA tem " + character.pontos + " pontos para distribuir");
            var mana = +input("Mana (2/5): ");
            character.mana = mana;
            if (character.mana <= 0) {
                break;
            }
            else if (character.mana > character.pontos) {
                console.log("\nVoc\u00EA tem apenas " + character.pontos + " pontos.");
            }
            else {
                character.pontos = character.pontos - character.mana;
                break;
            }
        }
    }
    while (true) {
        if (character.pontos <= 0) {
            break;
        }
        else {
            console.log("\nVoc\u00EA tem " + character.pontos + " pontos para distribuir");
            var powerAttack = +input("Ataque (3/5): ");
            character.powerAttack = powerAttack;
            if (character.powerAttack <= 0) {
                break;
            }
            else if (character.powerAttack > character.pontos) {
                console.log("\nVoc\u00EA tem apenas " + character.pontos + " pontos.");
            }
            else {
                character.pontos = character.pontos - character.powerAttack;
                break;
            }
        }
    }
    while (true) {
        if (character.pontos <= 0) {
            break;
        }
        else {
            console.log("\nVoc\u00EA tem " + character.pontos + " pontos para distribuir");
            var inteligencia = +input("Inteligência (4/5): ");
            character.inteligencia = inteligencia;
            if (character.inteligencia <= 0) {
                break;
            }
            else if (character.inteligencia > character.pontos) {
                console.log("\nVoc\u00EA tem apenas " + character.pontos + " pontos.");
            }
            else {
                character.pontos = character.pontos - character.inteligencia;
                break;
            }
        }
    }
    while (true) {
        if (character.pontos <= 0) {
            break;
        }
        else {
            console.log("\nVoc\u00EA tem " + character.pontos + " pontos para distribuir");
            var sobrevivencia = +input("Sobrevivência (5/5): ");
            character.sobrevivencia = sobrevivencia;
            if (character.sobrevivencia <= 0) {
                break;
            }
            else if (character.sobrevivencia > character.pontos) {
                console.log("\nVoc\u00EA tem apenas " + character.pontos + " pontos.");
            }
            else {
                character.pontos = character.pontos - character.sobrevivencia;
                break;
            }
        }
    }
    while (true) {
        if (character.pontos <= 0) {
            break;
        }
        else {
            console.log("\nVoc\u00EA tem " + character.pontos + " pontos para distribuir");
            var armor = +input("Armor (5/6): ");
            character.armor = armor;
            if (character.armor <= 0) {
                break;
            }
            else if (character.armor > character.pontos) {
                console.log("\nVoc\u00EA tem apenas " + character.pontos + " pontos.");
            }
            else {
                character.pontos = character.pontos - character.armor;
                break;
            }
        }
    }
}
function toolsMaster() {
    var option = 0;
    while (option != 3) {
        console.log('+====== Ferramentas p/ Mestrar ======+');
        console.log('|                                    |');
        console.log('| 1. Definir nome do inimigo         |');
        console.log('| 2. Definir nível do inimigo        |');
        console.log('| 3. Sair                            |');
        console.log('|                                    |');
        console.log('+====================================+');
        option = +input('Opção: ');
        switch (option) {
            case 1:
                var nome = input('Inseira o nome: ');
                mestre.nome(nome);
                break;
            case 2:
                var nivel = +input('Insira o nível: ');
                mestre.dificuldade(nivel);
                break;
            default:
                console.log('Opção inválida.');
        }
    }
}
function startGame() {
    var rolarD20;
    if (character.nickname.length === 0) {
        console.log("Voc\u00EA, viajante, est\u00E1 caminhando por uma estrada de areia vazia em meio \u00E0 floresta.");
        input('');
    }
    else {
        console.log("Voc\u00EA, " + character.nickname + ", est\u00E1 caminhando por uma estrada de areia vazia em meio \u00E0 floresta.");
        input('');
    }
    console.log('Olhando para cima, repara que está de noite,');
    input('');
    console.log('é possível ouvir os galhos de árvores balançarem intensamente.');
    input('');
    console.log('De repente, você escuta um barulho vindo de dentro da floresta,');
    input('');
    console.log('soou como um galho quebrando.\n');
    input('Faça um teste de percepção. Pressione Enter p/ rolar o dado.');
    rolarD20 = Math.round(Math.random() * 20);
    console.log("Tirou: " + rolarD20 + " + " + character.inteligencia + " (sobreviv\u00EAncia)");
    if ((rolarD20 + character.inteligencia) > mestre.nivel) {
        console.log("\nVoc\u00EA, " + character.nickname + ", nota que h\u00E1 uma ame\u00E7ada ao redor.");
        input('');
        console.log('Um vulto avança em sua direção mas você consegue reagir a tempo.');
        input('');
        console.log('Logo, a lua revela a criatura em meio à escuridão, você tenta identificá-la');
        input('Faça um teste de conhecimento. Pressione Enter p/ rolar o dado.');
        rolarD20 = Math.round(Math.random() * 20);
        console.log("Tirou: " + rolarD20 + " + " + character.inteligencia + " (conhecimento)");
        if (rolarD20 + character.inteligencia > mestre.nivel) {
            console.log("Ent\u00E3o olhando com aten\u00E7\u00E3o nota que \u00E9 um " + mestre.inimigo);
        }
        else {
            console.log('Mesmo olhando fixamente para a criatura, não consegue identificar.');
        }
    }
    else {
        console.log("\nVoc\u00EA, " + character.nickname + ", ouve o som mas acha que pode ser apenas algum animal passando.");
    }
}
