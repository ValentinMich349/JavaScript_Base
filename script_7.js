function traduirePhrase() {
    // Demander à l'utilisateur de saisir une phrase
    const phrase = prompt("Dis quelque chose au bot adolescent :");
  
    // Vérifier si la phrase est vide
    if (phrase.trim() === "") {
      console.log("t'es en PLS ?");
    }
    // Vérifier si la phrase est en majuscules
    else if (phrase === phrase.toUpperCase()) {
      console.log("Pwa, calme-toi...");
    }
    // Vérifier si la phrase contient un point d'interrogation
    else if (phrase.includes("?")) {
      console.log("Ouais Ouais...");
    }
    // Vérifier si la phrase contient le mot "Fortnite"
    else if (phrase.includes("Fortnite")) {
      console.log("on s' fait une partie soum-soum ?");
    }
    // Réponse par défaut
    else {
      console.log("balek.");
    }
  }
  
  function mainScript7() {
  traduirePhrase();
  }