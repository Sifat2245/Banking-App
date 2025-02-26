document.getElementById('login-btn').addEventListener('click', function (event) {
    event.preventDefault();
    const accountNumber = document.getElementById('account-number').value;
    const pinNumber = document.getElementById('pin').value;
    console.log(accountNumber, pinNumber)

    if (accountNumber.length === 11) {
        if (pinNumber==='1234') {
            window.location.href="./main.html"
        }
        else{
            alert('invalid pin')
        }
    }
    else {
        alert('not a valid input')
    }
})

