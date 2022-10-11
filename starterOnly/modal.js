function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalClose = document.querySelectorAll(".close");
const firstForm = document.querySelector("#form")
const modalregister = document.querySelector(".register");



// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
modalClose.forEach((btn) => btn.addEventListener("click", closeModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
// close modal event
function closeModal() {
  modalbg.style.display = "none";
}
//Modale de remerciement
function launchOtherModal(){
  firstForm.style.display = "none";
  modalregister.style.display = "block";
}

 // DOM Elements formulaire
 const prenom = document.querySelector('#prenom');
 const nom = document.querySelector('#nom');
 const email = document.querySelector('#email');
 const birthdate = document.querySelector('#birthdate');
 const quantity = document.querySelector('#quantity');
 const condition = document.querySelector('#condition');
 const locations = document.querySelector("#locations");

 // Messages d'erreurs
 const erreurPrenom = "Le champ Prénom a un minimum de 2 caractères";
 const erreurNom = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
 const erreurEmail = "L'adresse électronique n'est pas valide.";
 const erreurBirthdate = "Vous devez entrer votre date de naissance.";
 const erreurQuantity ="Vous devez entrer votre nombre de participation.";
 const erreurLocations ="Vous devez choisir une ville.";
 const erreurCondition = "Vous devez vérifier que vous acceptez les termes et conditions.";

 //Regex
 const regexNomPrenom = /^[a-zA-ZàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœ]{2,}$/;
 const regexEmail =/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
 const regexQuantity = /^[1-9]?[0-9]{1,1}$/;

 
// Fonction Messages d'erreurs 
  const setErreurFor = (input, message) => {
  const inputControl = input.parentElement;
  const erreurDisplay = inputControl.querySelector('.erreur');

// Fonction messages d'erreurs 
  erreurDisplay.innerText = message;
  inputControl.classList.add('erreur');
  inputControl.classList.remove('success');
}
// Fonction comportement valide 
  const setSuccessFor = input => {
  const inputControl = input.parentElement;
  const erreurDisplay = inputControl.querySelector('.erreur');
  erreurDisplay.innerText = '';
  inputControl.classList.add('success');
  inputControl.classList.remove('erreur');
};


// combinaison des constantInput et des regex 

const isValidPrenom = prenom=>{
 

 

   return regexNomPrenom.test(String(prenom.value).toLowerCase());
  
}

const isValidNom = nom =>{
 
  
  return regexNomPrenom.test(String(nom.value).toLowerCase());
}
const isValidEmail = email => {
  

  
  return regexEmail.test(String(email.value).toLowerCase());
}

const isValidQuantity = quantity => {
  
 

  
  return regexQuantity.test(String(quantity.value));
}

//
//  vérification des Inputs 
const checkAllInputs =()=> {
  let valid=true; 
  const birthdateValue = birthdate.value;
   const conditionValue = condition.checked;

 
  if (!isValidPrenom(prenom)) {
    setErreurFor(prenom, erreurPrenom);
     valid=false;
  } else {
    setSuccessFor(prenom);
    
  }
  if (!isValidNom(nom)) {
    setErreurFor(nom, erreurNom);
    valid=false;
  } else {
    setSuccessFor(nom);
  }
  if (!isValidEmail(email)) {
    setErreurFor(email, erreurEmail);
    valid=false;
  } else {
    setSuccessFor(email);
  }
  
  if (!birthdateValue) {
    setErreurFor(birthdate, erreurBirthdate);
    valid=false;
  } else {
    setSuccessFor(birthdate);
  }
  if (!isValidQuantity(quantity)) {
    setErreurFor(quantity, erreurQuantity);
    valid=false;
  } else {
    setSuccessFor(quantity);
  }
  if (conditionValue === false) {
    setErreurFor(condition, erreurCondition);
    valid=false;
  } else {
    setSuccessFor(condition);
  }
  // vérifie si au moins 1 boutton radio est séléctioné.
  if (document.querySelectorAll('[name="location"]:checked').length === 0) {
    setErreurFor(locations, erreurLocations);
    valid=false;
  } else {
    setSuccessFor(locations);
  }
  return valid;
 
  

}




form.addEventListener('submit', event => {
 

 
  event.preventDefault();

 if (checkAllInputs(nom,prenom,email,quantity,locations,condition,birthdate))

 { launchOtherModal();
  const btnCleaner = document.querySelector('.fermer');

  btnCleaner.addEventListener("click",  ()=>{ 
    
    const form = document.querySelector('#form');

     form.submit();
    });
  } 

 
 
});







//verifier mes inputs
//document.querySelector('#prenom').addEventListener('input',  () => console.log('hello'));
//document.getElementById("prenom").addEventListener("input", () => console.log(document.getElementById("prenom").value));
