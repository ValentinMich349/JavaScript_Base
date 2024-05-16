function mainScript3() {
    let etages = parseInt(prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?"));

    for (let i = 0; i < etages; i++) {
    let ligne = "";
    for (let j = 0; j < etages - i - 1; j++) {
        ligne += " ";
    }
    for (let k = 0; k <= i; k++) {
        ligne += "#";
    }
    console.log(ligne);
    }
} 