let count = 0;

function cc(card) {
   // Only change code below this line
   if (card === 2) {
      count++;
   } else if (card === 3) {
      count++;
   } else if (card === 4) {
      count++;
   } else if (card === 5) {
      count++;
   } else if (card === 6) {
      count++;
   } else if (card === 7) {
      count;
   } else if (card === 8) {
      count;
   } else if (card === 9) {
      count;
   } else if (card === 10) {
      count--;
   } else if (card === 'J') {
      count--;
   } else if (card === 'Q') {
      count--;
   } else if (card === 'K') {
      count--;
   } else if (card === 'A') {
      count--;
   }

   if (count > 0) {
      return count + ' Bet';
   } else if (count === 0) {
      return count + ' Hold';
   } else if (count < 0) {
      return count + ' Hold';
   }

   return "Change Me";
   // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');