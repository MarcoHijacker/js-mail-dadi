// Esercizio Dadi JS

// Dichiarazione funzione somma elementi array
if(typeof Array.prototype.sum !== 'function') {
	Array.prototype.sum = function() {
		var total = 0;
		for(var i = 0; i < this.length; i += 1) {
			total += this[i];
		}
		return total;
	};
}

// Dichiarazione variabili
var avvio = document.getElementById('start');

// Listener sul tasto Inizia Partita
avvio.addEventListener("click", function () {
  var dadoPlayer = [0, 0, 0];
  var dadoCpu = [0, 0, 0];
  var player = 0;
  var cpu = 0;
  // Reset delle classi vittoria/pareggio/sconfitta
  document.getElementById('matchOne').classList.remove("wonstyle", "drawstyle", "loststyle");
  document.getElementById('matchTwo').classList.remove("wonstyle", "drawstyle", "loststyle");
  document.getElementById('matchThree').classList.remove("wonstyle", "drawstyle", "loststyle");
  document.getElementById('overallWin').classList.remove("wonstyle", "drawstyle", "loststyle");

  // Ciclo for per inserire i valori estratti dai dadi, per i 3 lanci
  for (var i = 0; i < 3; i++) {
    dadoPlayer[i] = Math.floor(Math.random()*6 +1);
    dadoCpu[i] = Math.floor(Math.random()*6 +1);
  }

  // Confronto uno a uno delle partite
  if (dadoPlayer[0] > dadoCpu[0]) {
    document.getElementById('matchOne').innerHTML = "Hai vinto la prima manche facendo " + dadoPlayer[0] + " contro il " + dadoCpu[0] + " della CPU.";
    document.getElementById('matchOne').classList.add("wonstyle");
    player++;
  } else if (dadoCpu[0] > dadoPlayer[0]) {
    document.getElementById('matchOne').innerHTML = "Hai perso la prima manche facendo " + dadoPlayer[0] + " contro il " + dadoCpu[0] + " della CPU.";
    document.getElementById('matchOne').classList.add("loststyle");
    cpu++;
  } else {
    document.getElementById('matchOne').innerHTML = "Hai pareggiato la prima manche facendo " + dadoPlayer[0] + ".";
    document.getElementById('matchOne').classList.add("drawstyle");
  }

  if (dadoPlayer[1] > dadoCpu[1]) {
    document.getElementById('matchTwo').innerHTML = "Hai vinto la seconda manche facendo " + dadoPlayer[1] + " contro il " + dadoCpu[1] + " della CPU.";
    document.getElementById('matchTwo').classList.add("wonstyle");
    player++;
  } else if (dadoCpu[1] > dadoPlayer[1]) {
    document.getElementById('matchTwo').innerHTML = "Hai perso la seconda manche facendo " + dadoPlayer[1] + " contro il " + dadoCpu[1] + " della CPU.";
    document.getElementById('matchTwo').classList.add("loststyle");
    cpu++;
  } else {
    document.getElementById('matchTwo').innerHTML = "Hai pareggiato la seconda manche facendo " + dadoPlayer[1] + ".";
    document.getElementById('matchTwo').classList.add("drawstyle");
  }

  if (dadoPlayer[2] > dadoCpu[2]) {
    document.getElementById('matchThree').innerHTML = "Hai vinto la terza manche facendo " + dadoPlayer[2] + " contro il " + dadoCpu[2] + " della CPU.";
    document.getElementById('matchThree').classList.add("wonstyle");
    player++;
  } else if (dadoCpu[2] > dadoPlayer[2]) {
    document.getElementById('matchThree').innerHTML = "Hai perso la terza manche facendo " + dadoPlayer[2] + " contro il " + dadoCpu[2] + " della CPU.";
    document.getElementById('matchThree').classList.add("loststyle");
    cpu++;
  } else {
    document.getElementById('matchThree').innerHTML = "Hai pareggiato la terza manche facendo " + dadoPlayer[2] + ".";
    document.getElementById('matchThree').classList.add("drawstyle");
  }

  // Confronto l'indicatore partite vinte
  if (player > cpu) {
    document.getElementById('overallWin').innerHTML = "Hai vinto la partita totalizzando un totale di " + dadoPlayer.sum() + " contro il " + dadoCpu.sum() + " della CPU.";
    document.getElementById('overallWin').classList.add("wonstyle");
  } else if (cpu > player) {
    document.getElementById('overallWin').innerHTML = "Hai perso la partita totalizzando un totale di " + dadoPlayer.sum() + " contro il " + dadoCpu.sum() + " della CPU.";
    document.getElementById('overallWin').classList.add("loststyle");
  } else {
    document.getElementById('overallWin').innerHTML = "Hai pareggiato la partita totalizzando un totale di " + dadoPlayer.sum() + " contro il " + dadoCpu.sum() + " della CPU.";
    document.getElementById('overallWin').classList.add("drawstyle");
  }
});
