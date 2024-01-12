const resultBtn = document.getElementById('resultBtn');
resultBtn.addEventListener('click', async (e) => {
    e.preventDefault();
    console.log('Clicked....');
    document.getElementById('resultBox').innerHTML = `<img src="images/loading.svg" alt="" width="60px"></img>`;
    
    const key = 'ema_live_1OU4xC5TnT6IehP3XcuYRU5eqXwqT7X1wLyeSszE';
    let email = document.getElementById('emailInput').value;
    const url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`;
    
    let res = await fetch(url);
    let result = await res.json();
    
    document.getElementById('resultBox').innerHTML = "";

    // Check if the result is not empty
    if (Object.keys(result).length === 0) {
        document.getElementById('resultBox').innerHTML = "No data found for this email.";
    } else {
        let tableHTML = '<table>';
        for (let key in result) {
            tableHTML += `<tr><td class="upper">${key}</td><td>${result[key]}</td></tr>`;
        }
        tableHTML += '</table>';
        document.getElementById('resultBox').innerHTML = tableHTML;
    }
});