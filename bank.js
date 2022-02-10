let withdraw = document.getElementById("withdraw");
let balance = document.getElementById("balance");
let deposit = document.getElementById("deposit");

let depositField = document.getElementById("depositField");
let withdrawField = document.getElementById("withdrawField");

let withdrawBtn = document.getElementById("withdrawBtn");
let depositBtn = document.getElementById("depositBtn");

console.log(deposit);
console.log(withdraw);
let mainBalance = 1000.00;
balance.innerHTML = mainBalance;

depositBtn.addEventListener('click' ,function(event){
    event.preventDefault();
    let previousDepositBalance = deposit.innerText;
    let depositBalance = depositField.value;
    console.log(depositBalance);
    let totalDeposit = parseFloat(depositBalance) + parseFloat(previousDepositBalance);
    console.log(totalDeposit);

    deposit.innerHTML = totalDeposit;
    
    let tempTotalBalance = parseFloat(depositField.value) +  mainBalance;
    console.log(tempTotalBalance);
    console.log(parseFloat(depositField.value));
    console.log(totalDeposit);
    balance.innerHTML = tempTotalBalance;
    depositField.value = "";
    
})
let allwithdrawnAmount = 0;
withdrawBtn.addEventListener('click',function(event){
    event.preventDefault();
    allwithdrawnAmount = allwithdrawnAmount + parseFloat(withdrawField.value);
    balanceAfterWithdrawn = parseFloat(balance.innerHTML) - parseFloat(withdrawField.value);
    withdraw.innerHTML = allwithdrawnAmount;
    balance.innerHTML = balanceAfterWithdrawn;
    withdrawField.value = "";

})




