// Declare Arrays of Subjects, Verbs and Nouns
let subjects = [
  "I go out",
  "I go in",
  "I went out",
  "I came back",
  "I ran",
  "I swam",
];

let verbs = [
  "with my cat",
  "with my dog",
  "with aunt",
  "with my horse",
  "with my frog",
  
];

let nouns = [
  "to see the rain",
  "to watch a movie",
  "to eat in a restaurant",
  "to play video games",
  "to play football",
  "with my frog",
  
];

//We declare here the function to take the quotes inside the arrays to generate them
function generateSentencePlease() {
  // Generate a random number, multiply by the number of the elements  in the array 
  //and convert it to a whole number
  let subjectNumber = Math.floor(Math.random() * subjects.length);
  let verbNumber = Math.floor(Math.random() * verbs.length);
  let nounNumber = Math.floor(Math.random() * nouns.length);

  //Declare variables subject, verb and noun to compose sentences with subjects, verbs and nouns
  let subject = subjects[subjectNumber];
  let verb = verbs[verbNumber];
  let noun = nouns[nounNumber];
  //Concat the selected subject, verb and noun (string)
  let rS =
      subject +
       ' ' + 
      verb + 
      ' ' +
      noun +
      '.';
  //Return the full quote
  return rS;

}

//We select and Get the element in the document with id="quoteBtn" and the id="quote":
const quoteBtn = document.querySelector("#quoteBtn");

const quoteTxt = document.querySelector("#quote");

//We display quotes by clicking on the button quote
quoteBtn.addEventListener("click", displayQuote);

//We add function displayQuote for showing the quote
function displayQuote() {
  //Replace the content of quote text div with the generated quote
  quoteTxt.innerHTML = generateSentencePlease();
  }
