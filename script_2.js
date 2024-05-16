function mainScript2() {
    let nombre = parseInt(prompt("De quel nombre veux-tu calculer la factorielle ?"));

    console.log("Le résultat est : " + factorielle(nombre));
    
}


function factorielle(n) {
  if (n === 0 || n === 1)
    return 1;
  else
    return n * factorielle(n - 1);
}



