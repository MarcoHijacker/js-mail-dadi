// Esercizio E-mail JS

// Dichiarazione variabili
var database = ["pippo@gmail.com", "pluto@gmail.com", "topolino@gmail.com", "minnie@gmail.com", "paperino@gmail.com"];
var checkEmail = document.getElementById('checkEmail');

// Listener sul tasto Verifica
checkEmail.addEventListener("click", function () {
  var userEmail = document.getElementById('userEmail').value.toLowerCase();
  var emailPresent = false;

  // Ciclo for per verificare 1 a 1 se l'e-mail inserita nell'input è in uno dei posti dell'array database
  for (var i = 0; i < database.length; i++) {
    if (userEmail == database[i]) {
      emailPresent = true;
    }
  }
  // Se la var di appoggio emailPresent è diventata true, significa che siamo entrati nell'IF e che quindi l'e-mail inserita è nell'array DB
  if (emailPresent == true) {
    document.getElementById('console').innerHTML = "E-mail presente nel DB!";
    // Altrimenti stampiamo il contrario
  } else {
    document.getElementById('console').innerHTML = "E-mail assente nel DB!";
  }
});
