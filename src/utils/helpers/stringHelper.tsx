export const cardHide = (card: string) => {
  let hideNum = [];

  for (let i = 0; i < card.length; i++) {
    if (i < 2 || i >= card.length - 4) {
      hideNum.push(card[i]);
    } else if (hideNum.length < 6) {
      hideNum.push('●');
    } else {
      continue;
    }
  }
  return hideNum.join('');
};
