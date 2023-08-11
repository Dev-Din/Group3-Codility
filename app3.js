const S = "<<>>"

function solution(S) {
 // Check if the string is empty.
 if (S.length === 0) {
   return 0;
 }

 // Initialize the maximum symmetric substring length.
 let maxSymmetricSubstringLength = 0;

 // Get the number of question marks in the string.
 let questionMarkCount = S.split("?").length - 1;

 // Iterate over all possible ways to replace question marks.
 for (let leftCount = 0; leftCount <= questionMarkCount; leftCount++) {
   let rightCount = questionMarkCount - leftCount;

   // Calculate the number of "<" and ">" characters needed.
   let leftCountNeeded = Math.ceil(leftCount / 2);
   let rightCountNeeded = Math.ceil(rightCount / 2);
 
   // Check if the string is symmetric after replacing question marks.
   let isSymmetric = true;
   for (let i = 0; i < leftCountNeeded; i++) {
     if (S[i] !== "<") {
       isSymmetric = false;
       break;
     }
   }
   for (let i = 0; i < rightCountNeeded; i++) {
     if (S[S.length - 1 - i] !== ">") {
       isSymmetric = false;
       break;
     }
   }

   // If the string is symmetric, update the maximum symmetric substring length.
   if (isSymmetric) {
     maxSymmetricSubstringLength = Math.max(maxSymmetricSubstringLength, 2 * leftCountNeeded);
   }
 }

 return maxSymmetricSubstringLength;
}
console.log(solution("<<>>"))
