/*TODO
Upgrady
Autoclicker
PU
Achi
Skiny
Cheaty
Animace na kliknutí
*/

/*
constanta = proměná
proměná - vymezené místo v paměti počítače, dá se upravit, smazat a číst
*/
const cookie = document.getElementById("cookie");
const counter = document.getElementById("counter");
const upgrade = document.getElementById("clickWrapper");
const autoclick = document.getElementById("autoWrapper");
const clickzmena = document.getElementById("upgradeClickButton")
const autozmena = document.getElementById("autoClickButton")

let numberOfCookies = 0;
let clickIncrease = 1;
let clickUpgradePrice = 50;
let autoclickIncrease = 0;
let autoclicker = 1;
let autoclickerPrice = 100;

// {} - scope - definice funkce
cookie.onclick = () => {
  // => arrow funkce
  console.log("click"); // do konzole vypíše click
  //numberOfCookies = numberOfCookies + 1;
  //numberOfCookies += 1;
  // ++ inkrement
  numberOfCookies += clickIncrease;
  console.log(numberOfCookies);
  counter.innerText = "Cookies: " + numberOfCookies;
};
// () => scope
upgrade.onclick = () => {
  if (numberOfCookies >= clickUpgradePrice) {
    //odečtu sušenky
    numberOfCookies -= clickIncrease;
    //numberOfCookies = numberOfCookies - 50
    counter.innerText = "Cookies: " + numberOfCookies;
    clickUpgradePrice +=50;
    clickzmena.innerText = "Buy Click upgrade: " + clickUpgradePrice;
    clickIncrease++;
  }
};
autoclick.onclick = () => {
  if (numberOfCookies >= autoclickerPrice) {
    // odectu 100
    numberOfCookies -= autoclickerPrice;
    
    //aktualizuju odstavec;
    counter.innerText = "Cookies: " + numberOfCookies;
    autoclickerPrice  += 100;
    autozmena.innerText = "Buy auto click: " + autoclickerPrice;
    autoclickIncrease++;
    // interval - opakování po case pridani susenky
    clearInterval(autoclicker);
    autoclicker = setInterval(() => {
      numberOfCookies += autoclickIncrease;
      counter.innerText = "Cookies: " + numberOfCookies;
    }, 1000);
  }
};

const turnOnCheats = () => {
    numberOfCookies += 100000000;
    counter.innerText = "Cookies: " + numberOfCookies;
}
turnOnCheats ()