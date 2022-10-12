// function moneyBox(coins) {
//     let saveCoins = 0;
//     saveCoins += coins;
//     console.log(`MoneyBox: $${saveCoins}`);
// }

// moneyBox(5);
// moneyBox(5);

function moneyBox() {
    let saveCoins = 0;
    function save(coins) {
        saveCoins += coins;
        console.log(`MoneyBox: $${saveCoins}`)
    }
    return save;
}

const myMoneyBox = moneyBox();
const anaMoneyBox = moneyBox();

myMoneyBox(5);
myMoneyBox(5);

anaMoneyBox(15);
anaMoneyBox(15);