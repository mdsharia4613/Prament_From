
document.getElementById('btn-add-money').addEventListener('click', function (event) {
    event.preventDefault();

    const addMoney = getInputFieldValueById('input-amount');
    const pinNumber = getInputFieldValueById('input-pin');

    if (pinNumber === 123) {
        const balance = getTextFieldValueById('account-balance');
        console.log(balance, addMoney);
        const newBalance = balance + addMoney;
        document.getElementById('account-balance').innerText = newBalance;
    }
    else {

        alert('Pin number is incorrect');
    }
    // console.log(addMoney, pinNumber); 
})

