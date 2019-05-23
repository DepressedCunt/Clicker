/* välj element */
let gameButton = document.getElementById("game");
let bankElement = document.getElementById("bank");
let powerUpsDiv = document.getElementById("powerups");
/* variabel för att spara bank */
let bank = 0;
let pupCost = 10;
let pupCost2 = 100;
let powerupvalue = 0;
let pupCost3 = 10000
/* lyssna på knappen efter click event */
gameButton.addEventListener('click', function() {
    bank += 1;
    gameButton.textContent = Math.floor(bank);
});
/* skapa ett powerup-element */
let powerUp = document.createElement("button");
powerUp.textContent = "Farmland " + pupCost;
powerUp.addEventListener('click', function() {
    if (bank >= pupCost) {
        bank = bank - pupCost;
        pupCost = pupCost * 2;
        bank = bank * 1;
        powerupvalue += 0.09;
        gameButton.textContent = bank;
        powerUp.textContent = "Farmland " + pupCost;
        bankElement.textContent = "You hoed more Farmland";
    } else
        bankElement.textContent = "You BROKE MY FARMLAND";

    });
        let powerUp2 = document.createElement("button");
powerUp2.textContent = "Hoe " + pupCost2;
powerUp2.addEventListener('click', function() {
    if (bank >= pupCost2) {
        bank = bank - pupCost2;
        pupCost2 = pupCost2 * 2;
        bank = bank * 1;
        powerupvalue += 0.254321;
        gameButton.textContent = bank;
        powerUp2.textContent = "Hoe " + pupCost2;
        bankElement.textContent = "You farmland more hoe";
    } else
        bankElement.textContent = "You BROKE MY HOE";
        
});

let powerUp3 = document.createElement("button");
powerUp3.textContent = "Farmer " + pupCost3;
powerUp3.addEventListener('click', function() {
    if (bank >= pupCost3) {
        bank = bank - pupCost3;
        pupCost3 = pupCost3 * 2;
        bank = bank * 1;
        powerupvalue += 10;
        gameButton.textContent = bank;
        powerUp3.textContent = "Farmer " + pupCost3;
        bankElement.textContent = "You paid the farmer";
    } else
        bankElement.textContent = "You cannot pay the farmer";
        
});
function step() {
    bank += powerupvalue;
    gameButton.textContent = Math.floor(bank);
    window.requestAnimationFrame(step);
}
window.requestAnimationFrame(step);
powerUpsDiv.appendChild(powerUp);
powerUpsDiv.appendChild(powerUp2);
powerUpsDiv.appendChild(powerUp3);