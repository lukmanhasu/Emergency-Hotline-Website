// Heart Icons Functionality
let heart = 0;
let heartCount = document.getElementById('heartcount');
let heartBtns = document.querySelectorAll('.heart-Icon');

heartBtns.forEach((heartBtns, index) => {
    heartBtns.addEventListener('click', function () {
        heart++;
        heartCount.textContent = heart;
    });
});

// // alert function
// let Buttons = document.querySelectorAll('.call-btn');
// Buttons.forEach(call => {
//     call.addEventListener('click', function () {
//         let card = call.closest('.card');
//         let serviceName = card.querySelector(".card-title").textContent;
//         let ServiceNumber = card.querySelector('.call-number').textContent;
//         alert("Service:" + serviceName + "\nNumber:" + ServiceNumber);
//     })
// });

//Reduce Coin function
let defultCoins = 100;
let coinCounter = document.getElementById('coin');
coinCounter.textContent = defultCoins;

let callBtn = document.querySelectorAll('.call-btn');
callBtn.forEach(CoinBtn => {
    CoinBtn.addEventListener('click', function () {
        if (defultCoins < 20) {
            alert('Not enough coins for calling')
            return
        }
        defultCoins -= 20;
        coinCounter.textContent = defultCoins;

        let card = CoinBtn.closest('.card');
        let serviceName = card.querySelector(".card-title").textContent;
        let ServiceNumber = card.querySelector('.call-number').textContent;
        alert("Service:" + serviceName + "\nNumber:" + ServiceNumber);

    })
})


// if (defultCoins >= 20) {
//     defultCoins -= 20;
//     coinCounter.textContent = defultCoins;
// }
// else {
//     alert('Not enough coins for calling')
//     return
// }
// let card = coinBtn.closest('.card');
// let serviceName = card.querySelector(".card-title").textContent;
// let ServiceNumber = card.querySelector('.call-number').textContent;
// alert("Service:" + serviceName + "\nNumber:" + ServiceNumber);