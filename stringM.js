console.log("1. Strign Methods");
//toUpperCase() 
console.log("toUpperCase() method:");
const string1 = "dale booooooca";
console.log(string1);
console.log(string1.toUpperCase());

//toLowerCase()
console.log("toLowerCase() method:");
const string2 = "I SAID NO";
console.log(string2);
console.log(string2.toLowerCase());

//trim(): removes whitespace from both sides of a string
console.log("trim() method:");
const string3 = "               Catalina                   ";
console.log(string3);
console.log(string3.trim());

//charAt(): returns the character at a specified index (position) in a string
console.log("charAt() method:");
const string4 = "'Hello, my name is Catalina'"
console.log(string4);
console.log("Char en la posicion 8: " + string4.charAt(8));

//slice(): extracts a part of a string and returns the extracted part in a new string, 
//takes 2 parameters: start position, and end position (end not included).
console.log("slice() method:");
const string5 = "Believe in love";
console.log(string5);
console.log(string5.slice(11,15));
//if you omit the second parameter, the method will slice out the rest of the string.
console.log(string5.slice(8));
//if a parameter is negative, the position is counted from the end of the string.
console.log(string5.slice(-4));

//substring(): is similar to slice(),
console.log("substring() method:");
console.log(string5);
console.log(string5.substring(0,7));
//the difference is that start and end values less than 0 are treated as 0 in substring().
console.log(string5.substring(-4));

//replace(): replaces a specified value with another value in a string
console.log("replace() method:");
const string6 = "Aguante River Plate";
console.log(string6);
//by default, it replaces only the first match:
console.log(string6.replace("River Plate","Boca Juniors"));
//method is case sensitive, to replace case insensitive, use a regular expression with an /i flag (insensitive):
console.log(string6.replace(/RIVER PLATE/i,"Boca Juniors"));

//indexOf(): method returns the position of the first occurrence of a value in a string,
console.log("indexOf() method:");
const string7 = "Hello world, welcome to the universe";
console.log(string7);
console.log(string7.indexOf("welcome"));
//it returns -1 if the value is not found and is case sensitive
console.log(string7.indexOf("Welcome"));
//also it can find the first occurrence of a value, starting at specific position:
console.log(string7.indexOf("e", 6));

//split(): a string can be converted to an array
console.log("split() method:");
console.log(string7);
console.log(string7.split(","));    // Split on commas
console.log(string7.split(" "));    // Split on spaces
//if the separator is omitted, the returned array will contain the whole string in index [0]
console.log(string7.split());
//if the separator is "", the returned array will be an array of single characters
console.log(string7.split(""));

//startsWith(): returns true if a string starts with a specified string at a specific position
console.log("startsWith() method:");
const string8 = "Smelly cat, what are they feeding you?"
console.log(string8);
//if position is not specified, by default is position 0
console.log(string8.startsWith("Smelly"));
console.log(string8.startsWith("what", 12));
//otherwise it returns false, 
console.log(string8.startsWith("cat", 3));
//it's case sensitive
console.log(string8.startsWith("smelly"));
