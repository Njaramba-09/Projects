//declaring variables
let input;
let amount;

function estimateTransactionFee(amountToSend) {
  
  let fee = amountToSend * 0.015;

  // Enforcing min KES 10 and max KES 70
  if (fee < 10) {
    fee = 10;
  } else if (fee > 70) {
    fee = 70;
  }

  // Total amount to be calculated
  const total = amountToSend + fee;

  // output
  console.log(`Sending KES ${amountToSend}:`);
  console.log(`Calculated Transaction Fee: KES ${fee}`);
  console.log(`Total amount to be debited: KES ${total}`);
  console.log("     ");
  console.log("Send Money Securely!");
}

//  determine input
input = prompt("Unatuma Ngapi? (KES):");
amount = parseInt(input);

//function
estimateTransactionFee(amount);