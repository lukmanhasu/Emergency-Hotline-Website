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

// alert function
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

        let historyTitle = document.getElementById('history-titlle')
        let historyNumb = document.getElementById('history-number')

        historyTitle.textContent = serviceName;
        historyNumb.textContent = ServiceNumber;
        
        let time = new Date();
        let timeString = time.getHours().toString().padStart(2, '0') + ":" +
            time.getMinutes().toString().padStart(2, '0') + ":" +
            time.getSeconds().toString().padStart(2, '0');
        historyTime.textContent = timeString;

    })
})

//copy on click number
let copyNumber = document.querySelectorAll('.copy-btn');
let totalCopies = 2; // Total copies counter
let headCopyBtn = document.getElementById('head-copy-btn');

copyNumber.forEach(number => {
    number.addEventListener('click', function () {
        let card = number.closest('.card');
        if (!card) return;

        let ServiceNumber = card.querySelector('.call-number').textContent;

        navigator.clipboard.writeText(ServiceNumber)
            .then(() => {
                totalCopies++;
                headCopyBtn.textContent = totalCopies;
                alert('Copied to clipboard: ' + ServiceNumber);
            })
    });
});