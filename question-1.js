// Question 1

const S = ["zzzz", "ferz", "zdsr", "fgtd"]

function solution(S) {
 // Check if the array is empty
 if (S.length === 0) {
   return [];
 }
 // Get the length of each string
 const M = S[0].length;
 // >1 --> <30,000
  if (M>1 && M<30000){

 // Iterate over all of the strings
 for (let i = 0; i < S.length; i++) {
   for (let j = i + 1; j < S.length; j++) {
     // Check if the strings have the same letters at any positions
     for (let k = 0; k < M; k++) {
       if (S[i][k] === S[j][k]) {
         return [i, j, k];
       }
     }
   }
 }
 return [];
}
}

// console.log(solution(["zzzz", "ferz", "zdsr", "fgtd"]));
