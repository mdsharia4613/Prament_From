
document.getElementById('btn-add-money').addEventListener('click', function(event){
    event.preventDefault();

    const addMoney = getInputFieldValueById('input-amount');
const pinNumber = getInputFieldValueById('input-pin');

if(pinNumber === 123){
    console.log('Pin number is correct');
}
else{
    
    alert('Pin number is incorrect');
}
console.log(addMoney, pinNumber);
})

