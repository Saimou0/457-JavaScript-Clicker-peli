let pisteet = 0;
let kertoja = 1;
let autoClikerit = 0;

let ostetutAutoClickerit = 0;
let klikkaamisia = 0;

let pisteNaytto = document.getElementById("pisteNaytto")

document.getElementById("Clickeri-nappi").addEventListener('click', () => {

    document.getElementById("varoitus").innerHTML = "";

    pisteet = pisteet + 1 * kertoja;
    klikkaamisia++;

    pisteNaytto.innerHTML = pisteet;
});

// Estää painamasta nappia näppäimistöllä
function estaNappi(event) {
    event.preventDefault();
}

// Päivitykset

document.getElementById("ostaPaivitys1").addEventListener('click', ostaPaivitys1);
document.getElementById("ostaPaivitys2").addEventListener('click', ostaPaivitys2);
document.getElementById("ostaPaivitys3").addEventListener('click', ostaPaivitys3);
document.getElementById("ostaPaivitys4").addEventListener('click', ostaPaivitys4);
document.getElementById("ostaPaivitys5").addEventListener('click', ostaPaivitys5);

function ostaPaivitys1() {
    if(pisteet >= 50) {
        pisteet -= 50
        pisteNaytto.innerHTML = pisteet;

        kertoja = 5
        document.getElementById("ostaPaivitys1").disabled = true;
        document.getElementById("ostaPaivitys2").disabled = false;
        document.getElementById("ostaPaivitys1").classList.toggle("locked");
    }
}

function ostaPaivitys2() {
    if(pisteet >= 500) {
        pisteet -= 500
        pisteNaytto.innerHTML = pisteet;

        kertoja += 25
        document.getElementById("ostaPaivitys2").disabled = true;
        document.getElementById("ostaPaivitys3").disabled = false;
        document.getElementById("ostaPaivitys2").classList.toggle("locked");
    }
}

function ostaPaivitys3() {
    if(pisteet >= 2500) {
        pisteet -= 2500
        pisteNaytto.innerHTML = pisteet;

        kertoja += 50
        document.getElementById("ostaPaivitys3").disabled = true;
        document.getElementById("ostaPaivitys4").disabled = false;
        document.getElementById("ostaPaivitys3").classList.toggle("locked");
    }
}

function ostaPaivitys4() {
    if(pisteet >= 25000) {
        pisteet -= 25000
        pisteNaytto.innerHTML = pisteet;

        kertoja += 75
        document.getElementById("ostaPaivitys4").disabled = true;
        document.getElementById("ostaPaivitys5").disabled = false;
        document.getElementById("ostaPaivitys4").classList.toggle("locked");
    }
}

function ostaPaivitys5() {
    if(pisteet >= 50000) {
        pisteet -= 50000
        pisteNaytto.innerHTML = pisteet;

        kertoja += 345
        document.getElementById("ostaPaivitys5").disabled = true;
        document.getElementById("ostaPaivitys5").classList.toggle("locked");
    }
}

// Autoclickerit

document.getElementById("ostaAutoClickerPronssi").addEventListener('click', ostaAutoClickeriPronssi);
document.getElementById("ostaAutoClickerHopea").addEventListener('click', ostaAutoClickeriHopea);
document.getElementById("ostaAutoClickerKulta").addEventListener('click', ostaAutoClickeriKulta);
document.getElementById("ostaAutoClickerPlatina").addEventListener('click', ostaAutoClickeriPlatina);

let pronssiHinta = 50;
let pronssiKerroin = 1.0;

let hopeaHinta = 100;
let hopeaKerroin = 1.0;

let kultaHinta = 200;
let kultaKerroin = 1.0;

let platinaHinta = 500;
let platinaKerroin = 1.0

function ostaAutoClickeriPronssi() {

    if(pisteet >= pronssiHinta) {
        pisteet = pisteet - pronssiHinta;
        autoClikerit += 1 * pronssiKerroin;

        pisteNaytto.innerHTML = pisteet;

        pronssiHinta = Math.ceil(pronssiHinta * 1.5);
        pronssiKerroin = Math.ceil(pronssiKerroin * 1.1);

        ostetutAutoClickerit++;

        document.getElementById("pronssiHinta").innerHTML = pronssiHinta.toFixed(0);
        document.getElementById("clickkejaSekunnissa").innerHTML = "Viljan jyviä sekunnissa: " + autoClikerit;

    }
}

function ostaAutoClickeriHopea() {

    if(pisteet >= hopeaHinta) {
        pisteet = pisteet - hopeaHinta;
        autoClikerit += 5 * hopeaKerroin;

        pisteNaytto.innerHTML = pisteet;

        hopeaHinta = Math.ceil(hopeaHinta * 1.5);
        hopeaKerroin = Math.ceil(hopeaKerroin * 1.1);

        document.getElementById("hopeaHinta").innerHTML = hopeaHinta.toFixed(0);
        document.getElementById("clickkejaSekunnissa").innerHTML = "Viljan jyviä sekunnissa: " + autoClikerit;

        ostetutAutoClickerit++;

        console.log(autoClikerit)
        console.log(hopeaKerroin)
    }
}

function ostaAutoClickeriKulta() {


    if(pisteet >= kultaHinta) {
        pisteet = pisteet - kultaHinta;
        autoClikerit += 10 * kultaKerroin;

        pisteNaytto.innerHTML = pisteet;

        kultaHinta = Math.ceil(kultaHinta * 1.5);
        kultaKerroin = Math.ceil(kultaKerroin * 1.08);

        document.getElementById("kultaHinta").innerHTML = kultaHinta.toFixed(0);
        document.getElementById("clickkejaSekunnissa").innerHTML = "Viljan jyviä sekunnissa: " + autoClikerit;
        
        ostetutAutoClickerit++;

    }
}

function ostaAutoClickeriPlatina() {


    if(pisteet >= platinaHinta) {
        pisteet = pisteet - platinaHinta;
        autoClikerit += 50 * platinaKerroin;

        pisteNaytto.innerHTML = pisteet;

        platinaHinta = Math.ceil(platinaHinta * 1.5);
        platinaKerroin = Math.ceil(platinaKerroin * 1.08);

        document.getElementById("platinaHinta").innerHTML = platinaHinta.toFixed(0);
        document.getElementById("clickkejaSekunnissa").innerHTML = "Viljan jyviä sekunnissa: " + autoClikerit;

        ostetutAutoClickerit++;

    }
}

function autoClicker() {
    pisteet = pisteet + autoClikerit;

    pisteNaytto.innerHTML = pisteet;
}

let autoInterval = setInterval(autoClicker, 1000);

// Pelin lopettaminen

document.getElementById("pelinLopettaminen").addEventListener('click', peliLoppui)

function peliLoppui() {
    if(pisteet >= 1000000) {
        clearInterval(autoInterval);

        document.getElementById("peli").style.display = "none";
        document.getElementById("autoClickerit").style.display = "none";
        document.getElementById("paivitykset").style.display = "none";

        document.getElementById("pelinLoppu").style.display = "block";

        document.getElementById("pelinLoppuKlikkaamisMaara").innerHTML = "Klikkasit: " + klikkaamisia + " kertaa.";
        document.getElementById("pelinLoppuAutoClickerMaara").innerHTML = "Ostit: " + ostetutAutoClickerit + " Auto clickeriä.";
    } else {
        document.getElementById("varoitus").innerHTML = "Ei tarpeeksi pisteitä"
    }
}
