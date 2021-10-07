
const substitutionModule = (function () {
  
  function substitution(input, alphabet, encode = true) {

    // Create a standard alphabet string for reference.
    const stdAlpha = "abcdefghijklmnopqrstuvwxyz";

    // Return false if alphabet is not present or not 26 characters.
    if (!alphabet || alphabet.length !== 26) return false;
    
    // Check for any duplicate values in the substitution alphabet.
    const dupes = alphabet.split("").some((letter) => {
      return alphabet.indexOf(letter) !== alphabet.lastIndexOf(letter);
    });
    // Return false if there are duplicate characters.
    if (dupes) return false;

    // Put input to lowercase to ignore caps.
    input = input.toLowerCase();
    
    // Create an empty string to contain return message.
    let returnString = "";

    // Encodes or decodes the message based on the "encode" argument.
    if (encode) {

      returnString = input.split("").map((char) => {
        return (char === " ") ? " " : alphabet.charAt(stdAlpha.indexOf(char));
      }).join("");

    } else { // Decode
      
      returnString = input.split("").map((char) => {
        return (char === " ") ?  " " : stdAlpha.charAt(alphabet.indexOf(char));
      }).join("");
    
    }; // End if/else (encode/decode)
    return returnString; 
  };

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
