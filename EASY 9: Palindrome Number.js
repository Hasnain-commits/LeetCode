 O(N) time O(1) space
const isPalindrome = x => {
  let res = 0;
  let temp = x;
  
   while (temp > 0) { 
     //While temp is greater than 0. multiply res by 10 and add the last
    //digit from temp, then remove the last values from temp
    res = res * 10 + temp % 10;
    temp = Math.floor(temp/10);
   }
  
  return res == x;
}

