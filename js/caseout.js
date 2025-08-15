
document.getElementById('btn-caus-out').addEventListener('click', function(event){
    event.preventDefault();

    const caseOut = getInputFieldValueById('input-case-out');
    const pinNumber = getInputFieldValueById('input-case-out-pin');

    if (pinNumber === 123) {
        const balance = getTextFieldValueById('account-balance');
        // console.log(balance, caseOut);
        const newBalance = balance - caseOut;
        document.getElementById('account-balance').innerText = newBalance;
    }
    else {

        alert('Pin number is incorrect');
    }
    console.log(caseOut, pinNumber);
})