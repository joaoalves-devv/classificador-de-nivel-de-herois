class Heroi {
    nome;
    xp;

    constructor(nome, xp){
    this.nome = nome;
    this.xp = xp;
}
}


const joao = new Heroi('Joao', 10002);
definirPatente(joao);

const pedro = new Heroi('Pedro', 7600);
definirPatente(pedro);

const vitor = new Heroi('Vitor', 3045);
definirPatente(vitor);

const julio = new Heroi('Julio', 5600);
definirPatente(julio);

function definirPatente(Heroi) {
    const xp = Heroi.xp;
    const nome = Heroi.nome

    if(xp < 1000){
        console.log(`O heroi de nome ${nome} e xp: ${xp} esta no nivel: ` + "Ferro");
    }
    else if(xp > 1001 && xp < 2000){
        console.log(`O heroi de nome ${nome} e xp: ${xp} esta no nivel: ` + "Bronze");
    }
    else if(xp > 2001 && xp < 5000){
        console.log(`O heroi de nome ${nome} e xp: ${xp} esta no nivel: ` + "Prata");
    }
    else if(xp > 5001 && xp < 6000){
        console.log(`O heroi de nome ${nome} e xp: ${xp} esta no nivel: ` + "Ouro");
    }
    else if(xp > 6001 && xp < 8000){
        console.log(`O heroi de nome ${nome} e xp: ${xp} esta no nivel: ` + "Platina diamante");
    }
    else if(xp > 8001 && xp < 9000){
        console.log(`O heroi de nome ${nome} e xp: ${xp} esta no nivel: ` + "Ascendente");
    }
    else if(xp > 9001 && xp < 10000){
        console.log(`O heroi de nome ${nome} e xp: ${xp} esta no nivel: ` + "Imortal");
    }
    else if(xp >= 10001){
        console.log(`O heroi de nome ${nome} e xp: ${xp} esta no nivel: ` + "Radiante");
    }
}


