
const caesarModule = (function () {

  function caesar(input, shift, encode = true) {
    // All non-alpha characters remain the same.
    // Not case sensitive.

    //if shift is not present, 0, <-25 or > 25 return false
    if (!shift || shift === 0 || shift < -25 || shift > 25) return false;

    // Make input message lowercase
    let lcInput = input.toLowerCase();
    
    let returnString = "";

    // Create a standard alphabet array.
    const alphaArray = ["a", "b", "c", "d", "e", 
                        "f", "g", "h", "i", "j",
                        "k", "l", "m", "n", "o", 
                        "p", "q", "r", "s", "t", 
                        "u", "v", "w", "x", "y", 
                        "z"];

    // Create array for input characters.
    let inputArray = lcInput.split("");
      
    // Loop through each character in the array.
    for (let i in inputArray) {
        
      // Check if character is letter or special.
      if ((/[a-z]/).test(inputArray[i])) {
        
        let shiftedIndex;
        if (encode) {
          // Add the shift to the index if encoding.
          shiftedIndex = alphaArray.indexOf(inputArray[i]) + shift;
        } else {
          // Subtract shift from index if decoding.
          shiftedIndex = alphaArray.indexOf(inputArray[i]) - shift;
        };
    
        // If new index is negative, wrap to back.
        if (shiftedIndex < 0) shiftedIndex += 26 ;
        // If new index is positive wrap to front.
        if (shiftedIndex > 25) shiftedIndex -= 26;

        // Add the character at the shifted index of alphaArray
        returnString += alphaArray[shiftedIndex];

      } else {
        // If not a lowercase letter, add character itself to string.
        returnString += inputArray[i];
      }; // End if/else
    
    }; // End for loop
    
    return returnString;
  
  }; // End of ceasar function function.

  return {
    caesar,
  }; // End caesar funtion return statement

})(); // End ceasarModule

module.exports = { caesar: caesarModule.caesar };
