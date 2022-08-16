const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");
const resetButton = document.querySelector("#reset-button");


const availableNotes = [2000, 500, 100, 20, 10, 5, 1];

checkButton.addEventListener("click", function validateBillAndCashAmount() {
  
  
  if (billAmount.value > 0) {
    
    if (cashGiven.value > billAmount.value) {

      const amountToBeReturned = cashGiven.value - billAmount.value; 
      calculateChange(amountToBeReturned);
    }else  if(cashGiven.value === billAmount.value){
            showMessage("Paid"); 
     } else {
      showMessage("Do you wanna wash plates?");
    }
  } else {
    showMessage("Invalid Bill Amount");
  }
});

resetButton.addEventListener("click", function ResetButton() {
    console.log("click");
        message.style.display = "none";
        message.innerText = " " ;
        cashGiven.value =  "";
        billAmount.value ="";
        for (let i = 0; i <= availableNotes.length; i++) {
        noOfNotes[i].innerText = "";
        }
});

function calculateChange(amountToBeReturned) {
  
  for (let i = 0; i < availableNotes.length; i++) {
    
    const numberOfNotes = Math.trunc(amountToBeReturned / availableNotes[i]);


    
    amountToBeReturned = amountToBeReturned % availableNotes[i];
    
    noOfNotes[i].innerText = numberOfNotes;
  }
}

function showMessage(msg) {
  message.style.display = "block";
  message.innerText = msg;
}



