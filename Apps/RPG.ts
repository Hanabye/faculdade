import prompt from 'prompt-sync';
import { Personagem } from './Personagem';
import { Tools } from './Tools';

let input = prompt();

let character: Personagem = new Personagem(20);
let mestre: Tools = new Tools();
let personagem = false;
let option;

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
            let raca = +input('Raça: ');
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
            let classe = +input('Classe: ');
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
            let nick = input('Nick: ');
            character.criarPerson(character.raca, character.classe, nick,);
            status();
            input('Pressione enter p/ continuar.');
            personagem = true;
            console.clear();
            break;
        case 2:
            if (personagem == true) {
                character.showPerson();
            } else {
                console.log('Você ainda não criou seu personagem.');
            }
            input('Pressione enter p/ continuar.');
            console.clear();
            break;
        case 3:
            if (personagem == true) {
                startGame();
            } else {
                console.log('Crie o seu personagem antes de começar.');
            }
            input('Pressione enter p/ continuar.');
            console.clear();
            break;
        case 4:
            toolsMaster();
            break;
        case 5:
            let confirma = input('Confirmar saída [S/N]: ');
            if (confirma == 'S' || confirma == 's') {
                break;
            } else if (confirma == 'N' || confirma == 'n') {
                option = 0;
                console.clear();
            } else {
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
        } else {
            console.log(`\nVocê tem ${character.pontos} pontos para distribuir`);
            let stamina = +input("Estamina (1/5): ");
            character.stamina = stamina;
            if (character.stamina <= 0) {
                break;
            } else if (character.stamina > character.pontos) {
                console.log(`\nVocê tem apenas ${character.pontos} pontos.`);
            } else {
                character.pontos = character.pontos - character.stamina;
                break;
            }
        }
    }

    while (true) {
        if (character.pontos <= 0) {
            break;
        } else {
            console.log(`\nVocê tem ${character.pontos} pontos para distribuir`);
            let mana = +input("Mana (2/5): ");
            character.mana = mana;
            if (character.mana <= 0) {
                break;
            } else if (character.mana > character.pontos) {
                console.log(`\nVocê tem apenas ${character.pontos} pontos.`);
            } else {
                character.pontos = character.pontos - character.mana;
                break;
            }
        }
    }

    while (true) {
        if (character.pontos <= 0) {
            break;
        } else {
            console.log(`\nVocê tem ${character.pontos} pontos para distribuir`);
            let powerAttack = +input("Ataque (3/5): ");
            character.powerAttack = powerAttack;
            if (character.powerAttack <= 0) {
                break;
            } else if (character.powerAttack > character.pontos) {
                console.log(`\nVocê tem apenas ${character.pontos} pontos.`);
            } else {
                character.pontos = character.pontos - character.powerAttack;
                break;
            }
        }
    }

    while (true) {
        if (character.pontos <= 0) {
            break;
        } else {
            console.log(`\nVocê tem ${character.pontos} pontos para distribuir`);
            let inteligencia = +input("Inteligência (4/5): ");
            character.inteligencia = inteligencia;
            if (character.inteligencia <= 0) {
                break;
            } else if (character.inteligencia > character.pontos) {
                console.log(`\nVocê tem apenas ${character.pontos} pontos.`);
            } else {
                character.pontos = character.pontos - character.inteligencia;
                break;
            }
        }
    }

    while (true) {
        if (character.pontos <= 0) {
            break;
        } else {
            console.log(`\nVocê tem ${character.pontos} pontos para distribuir`);
            let sobrevivencia = +input("Sobrevivência (5/5): ");
            character.sobrevivencia = sobrevivencia;
            if (character.sobrevivencia <= 0) {
                break;
            } else if (character.sobrevivencia > character.pontos) {
                console.log(`\nVocê tem apenas ${character.pontos} pontos.`);
            } else {
                character.pontos = character.pontos - character.sobrevivencia;
                break;
            }
        }
    }

    while (true) {
        if (character.pontos <= 0) {
            break;
        } else {
            console.log(`\nVocê tem ${character.pontos} pontos para distribuir`);
            let armor = +input("Armor (5/6): ");
            character.armor = armor;
            if (character.armor <= 0) {
                break;
            } else if (character.armor > character.pontos) {
                console.log(`\nVocê tem apenas ${character.pontos} pontos.`);
            } else {
                character.pontos = character.pontos - character.armor;
                break;
            }
        }
    }
}

function toolsMaster() {
    let option = 0;
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
                let nome = input('Inseira o nome: ');
                mestre.nome(nome);
                break;
            case 2:
                let nivel = +input('Insira o nível: ');
                mestre.dificuldade(nivel);
                break;
            default:
                console.log('Opção inválida.');
        }
    }
}

function startGame() {
    let rolarD20;
    if (character.nickname.length === 0) {
        console.log(`Você, viajante, está caminhando por uma estrada de areia vazia em meio à floresta.`);
        input('');
    } else {
        console.log(`Você, ${character.nickname}, está caminhando por uma estrada de areia vazia em meio à floresta.`);
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

    console.log(`Tirou: ${rolarD20} + ${character.inteligencia} (sobrevivência)`);

    if ((rolarD20 + character.inteligencia) > mestre.nivel) {
        console.log(`\nVocê, ${character.nickname}, nota que há uma ameçada ao redor.`);
        input('');
        console.log('Um vulto avança em sua direção mas você consegue reagir a tempo.');
        input('');
        console.log('Logo, a lua revela a criatura em meio à escuridão, você tenta identificá-la');
        input('Faça um teste de conhecimento. Pressione Enter p/ rolar o dado.');
        rolarD20 = Math.round(Math.random() * 20);

        console.log(`Tirou: ${rolarD20} + ${character.inteligencia} (conhecimento)`);

        if (rolarD20 + character.inteligencia > mestre.nivel) {
            console.log(`Então olhando com atenção nota que é um ${mestre.inimigo}`);
        } else {
            console.log('Mesmo olhando fixamente para a criatura, não consegue identificar.');
        }

    } else {
        console.log(`\nVocê, ${character.nickname}, ouve o som mas acha que pode ser apenas algum animal passando.`);
    }
}
