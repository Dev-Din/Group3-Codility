const S = "<<>>"

function solution(S) {
 // Check if the string is empty.
 if (S.length === 0) {
   return 0;
 }

 // Initialize the maximum symmetric substring length.
 let maxSymmetricSubstringLength = 0;

 // Iterate over all possible ways to replace question marks.
 for (let leftCount = 0; leftCount <= Math.floor(S.length / 2); leftCount++) {
   let rightCount = S.length - 2 * leftCount;

   // Check if the string is symmetric after replacing question marks.
   let isSymmetric = true;
   for (let i = 0; i < leftCount; i++) {
     if (S[i] !== "<") {
       isSymmetric = false;
       break;
     }
   }
   for (let i = 0; i < rightCount; i++) {
     if (S[S.length - 1 - i] !== ">") {
       isSymmetric = false;
       break;
     }
   }

   // If the string is symmetric, update the maximum symmetric substring length.
   if (isSymmetric) {
     maxSymmetricSubstringLength = Math.max(maxSymmetricSubstringLength, 2 * leftCount);
   }
 }

 return maxSymmetricSubstringLength;
}
console.log(solution("<<>>"))