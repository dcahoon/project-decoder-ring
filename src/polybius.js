
const polybiusModule = (function () {

  function polybius(input, encode = true) {
    // assume input is letters and spaces only.
    // i and j should be output as `(i/j)`

    // Create a polybius square
    const pSquare = {
      "a": "11", "b": "21", "c": "31", "d": "41", "e": "51",
      "f": "12", "g": "22", "h": "32", "(i/j)": "42", "k": "52",
      "l": "13", "m": "23", "n": "33", "o": "43", "p": "53",
      "q": "14", "r": "24", "s": "34", "t": "44", "u": "54",
      "v": "15", "w": "25", "x": "35", "y": "45", "z": "55",
    };

    let returnString = "";

    if (encode) {
      
      // Ignore caps and change to an array.
      input = input.toLowerCase().split("");

      for (let i in input) {
        // Check for i/j/space, otherwise add the letter.
        if (input[i] === "i" || input[i] === "j") {
          returnString += "42";
        } else if (input[i] === " ") {
          returnString += " ";
        } else {
          returnString += pSquare[input[i]];
        };
      }; // end for/in loop

    } else { // Decode

      // Turn input string into an array.
      let inputArray = input.split(" ");

      // Check for an odd number of characters.
      let charTotal = 0;
      for (let word in inputArray) {
        charTotal += inputArray[word].length;
      };
      if (charTotal % 2 !== 0) return false;

      let decodedArray = [];

      // Transform each word into code.
      for (let word in inputArray) {  // reduce/map
        let newWord = "";
        for (let i = 0; i < inputArray[word].length; i += 2) { 
          let letterCode = inputArray[word].slice(i, i + 2); 
          let thisLetter = Object.keys(pSquare).find(key => pSquare[key] === letterCode);
          newWord += thisLetter;
        };
        decodedArray.push(newWord);
      };
      returnString = decodedArray.join(" ");

    }; // end if/else (encode/decode)
    return returnString;
  
  }; // end function polybius()
  return {
    polybius,
  };
})();

//polybiusModule.polybius("442531", false);

module.exports = { polybius: polybiusModule.polybius };
