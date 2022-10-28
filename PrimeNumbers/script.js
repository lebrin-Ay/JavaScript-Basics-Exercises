
function showPrimes(limit) {
    
    for (let i = 2; i <= limit; i++) { //check if it is a prime number
         
            if (i % limit == 0) {
                break;
            }
        }
}
showPrimes(20);

