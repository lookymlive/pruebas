let count = 0;

function cc(card) {
  // Cambia solo el código debajo de esta línea

  let decision;

  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      break;
  }
  if (count > 0) {
    decision = "Bet";
  } else {
    decision = "Hold";
  }

  return count + " " + decision;

  // Cambia solo el código encima de esta línea
}

console.log(cc(2));
