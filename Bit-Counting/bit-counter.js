
// Read the README.md file first to understand the Question or problem


// Answer 👍 

// Shorter 🙌
var countBits = function(n) {
  let counter = 0 
  if( n >= 0){
    for ( s of Number(n).toString(2) ) {
       s ==1 && counter++ 
    }
  }   
  return counter 
};


// Longer 😎
/* var countBits = function(n) {
  
  let counter = 0 
  
  if( n >= 0){
    
    let nn = Number(n).toString(2)
    for ( s of nn ) {
       if (s ==1 )  counter++ 
    }
    
  } else {
    counter = 0 
  }
  
  return counter 
};
*/

// Explanation 
