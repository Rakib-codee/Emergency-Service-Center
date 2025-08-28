window.addEventListener('DOMContentLoaded', function() {

    
    const heartCountElem = document.getElementById('heart-count');
    const coinCountElem = document.getElementById('coin-count');
    const copyCountBtn = document.getElementById('copy-count');

    let heartCount = parseInt(heartCountElem.textContent);
    let coinCount = parseInt(coinCountElem.textContent);
    let copyCount = parseInt(copyCountBtn.textContent) || 0;

   
    const callHistoryContainer = document.getElementById('call-history');
    const clearHistoryBtn = document.getElementById('clear-history');

    
    function setupCard(cardNumber) {
        const heartBtn = document.getElementById(`heart-${cardNumber}`);
        const copyBtn = document.getElementById(`copy-${cardNumber}`);
        const callBtn = document.getElementById(`call-${cardNumber}`);
        const title = document.getElementById(`title-${cardNumber}`);
        const number = document.getElementById(`number-${cardNumber}`);

        
        heartBtn.addEventListener('click', function() {
            heartCount++;
            heartCountElem.textContent = heartCount;
        });

        
        copyBtn.addEventListener('click', function() {
            navigator.clipboard.writeText(number.textContent).then(() => {
                alert(`Number ${number.textContent} copied!`);
                copyCount++;
                copyCountBtn.textContent = copyCount + " Copy";
            });
        });

        // Call click
        callBtn.addEventListener('click', function() {
            if (coinCount < 20) {
                alert("Not enough coins to make a call!");
                return;
            }

            coinCount -= 20;
            coinCountElem.textContent = coinCount;

            alert(`Calling ${title.textContent}: ${number.textContent}`);

            const now = new Date();
            const time = now.toLocaleTimeString();

            const historyItem = document.createElement('div');
            historyItem.className = 'flex justify-between text-sm';
            historyItem.innerHTML = `
                <div>
                    <p class="font-semibold text-gray-700">${title.textContent}</p>
                    <p class="text-gray-500 text-xs">${number.textContent}</p>
                </div>
                <span class="text-gray-400 text-xs">${time}</span>
            `;
            callHistoryContainer.appendChild(historyItem);
        });
    }

    // Setup all 9 cards
    for (let i = 1; i <= 9; i++) {
        setupCard(i);
    }

    // Clear Call History
    clearHistoryBtn.addEventListener('click', function() {
        callHistoryContainer.innerHTML = '';
    });

});
