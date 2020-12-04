export class Tools {
    public inimigo: string = "";
    public nivel: number = 0;

    dificuldade(nivel: number) {
        this.nivel = nivel;
    }

    nome(nome: string) {
        this.inimigo = nome;
    }
}