const codeGenetique = {
    'UCU': 'Sérine', 'UCC': 'Sérine', 'UCA': 'Sérine', 'UCG': 'Sérine',
    'AGU': 'Sérine', 'AGC': 'Sérine',
    'CCU': 'Proline', 'CCC': 'Proline', 'CCA': 'Proline', 'CCG': 'Proline',
    'UUA': 'Leucine', 'UUG': 'Leucine',
    'UUU': 'Phénylalanine', 'UUC': 'Phénylalanine',
    'CGU': 'Arginine', 'CGC': 'Arginine', 'CGA': 'Arginine', 'CGG': 'Arginine',
    'AGA': 'Arginine', 'AGG': 'Arginine',
    'UAU': 'Tyrosine', 'UAC': 'Tyrosine'
};
  
function traduireARN(arn) {
   let proteine = '';
    // parcours de la chaine en avancent 3 par 3
   for (let i = 0; i < arn.length; i += 3) {
    // substring permet de recuper uniquement la parti que l'on souhaite en prennant les 3 caracteres qu'on souhaite
     const codon = arn.substring(i, i + 3);
    //  On verifie si dans nos constante on a bien notre suite de caractere
     if (codeGenetique[codon]) {
        // Si oui, on donne le format ****-****-**** en rajoutant un tiret 
       proteine += codeGenetique[codon] + '-';
     } else {
       console.log('Codon inconnu : ' + codon);
     }
   }
   return proteine.slice(0, -1); // supprime le dernier tiret
 }
 
 const arn1 = 'UUACGCAGUAGA';
 const arn2 = 'CCGUCGUUGCGCUACAGC';
 const arn3 = 'CCUCGCCGGUACUUCUCG';
  
 function mainScript6() {
 
 console.log(traduireARN(arn1)); 
 console.log(traduireARN(arn2)); 
 console.log(traduireARN(arn3)); 

 let ARNuser = prompt("Entrez votre ARN pour qu'elle soit traduite : ");
 console.log(traduireARN(ARNuser));   
 }