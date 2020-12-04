export class Personagem {
    public raca: string = "";
    public classe: string = "";
    public nickname: string = "";
    public stamina: number = 0;
    public mana: number = 0;
    public powerAttack: number = 0;
    public inteligencia: number = 0;
    public sobrevivencia: number = 0;
    public armor: number = 0
    constructor(private _pontos: number = 30) { }

    public get pontos(): number {
        return this._pontos;
    }

    public set pontos(pontos: number) {
        this._pontos = pontos;
    }

    public criarPerson(
        raca: string,
        classe: string,
        nick: string,
    ) {
        this.raca = raca;
        this.classe = classe;
        this.nickname = nick;
    }

    public showPerson() {
        console.log(`\nRaça: ${this.raca}`);
        console.log(`Classe: ${this.classe}`);
        console.log(`Nickname: ${this.nickname}`);
        console.log(`Stamina: ${this.stamina}`);
        console.log(`Mana: ${this.mana}`);
        console.log(`Power Attack: ${this.powerAttack}`);
        console.log(`Inteligência: ${this.inteligencia}`);
        console.log(`Armor: ${this.armor}\n`);
    }
}
