const array = [1, 2, 3, 4, 5];

const sumArray = (sum, arr, length) => {
  if (!arr.length) return sum / length;
  sum += arr.pop();
  return sumArray(sum, arr, length);
};

console.log(sumArray(0, array, array.length));

// const scores = [1, 2, 3, 4, 5];

// const avgScores = (scores) => {
//   if (scores.length == 1) return scores[0];
//   return scores.pop() + avgScores(scores);
// };

// console.log(avgScores(scores));
