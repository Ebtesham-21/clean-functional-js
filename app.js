function getInputValue(fieldId) {
    const inputField = document.getElementById(fieldId);
    const valueInText = inputField.value;
    const value = parseFloat(valueInText);
    inputField.value = '';
    return value;
}


function getInnerTextValue(fieldId) {
    const fieldTag = document.getElementById(fieldId);
    const fieldValueIntext = fieldTag.innerText;
    const value = parseFloat(fieldValueIntext);
    return value;

}

function updateTotal(fieldId, amount) {
    // const totalTag = document.getElementById(fieldId);
    // const previousTotalInText = totalTag.innerText;
    // const previousTotal = parseFloat(previousTotalInText);

    //  refactoring 
    const previousTotal = getInnerTextValue(fieldId);
    const newTotal = previousTotal + amount;

    document.getElementById(fieldId).innerText = newTotal;
    return newTotal;

}
function updateBalance(amount, isadding) {
    // const balanceTag = document.getElementById('balance-total');
    // const balanceInText = balanceTag.innerText;
    // const previousBalance = parseFloat(balanceInText);
    const previousBalance = getInnerTextValue('balance-total');
    let newBalance;
    if (isAdding == true) {
        newBalance = previousBalance + amount;

    }
    else {
        newBalance = previousBalance - amount;

    }
    document.getElementById('balance-total').innerText = newBalance;
}


document.getElementById('deposit-button').addEventListener('click', function () {
    const amount = getInputValue('deposit-input');
    if (amount > 0) {
        updateTotal('deposit-total', amount);
        updateBalance(amount, true);
    }


});

// hadle withdraw 
document.getElementById('withdraw-button').addEventListener('click', function () {
    const amount = getInputValue('withdraw-input');
    const balance = getInnerTextValue('balance-total');
    if (amount > 0 && amount <= balance) {
        updateTotal('withdraw-total', amount);
        updateBalance(amount, false)

    }


})




