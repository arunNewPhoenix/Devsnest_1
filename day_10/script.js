
/*


possible variables-->  var container,var first-card ,var second-card , var lockBoard, var hasFlipped


fetch the container
listen the container element by assigning them event listener
response from the function:
1-> check for the first or second card assign them there properties----> check for that they are same or not--->if same dissolve else unflip

document.querySelectorAll('.box'); creates an array of boxes and return.
*/
let firstCard,secondCard;
let lockBoard = false;
let hasBeenFlipped = false;

var count=0;

var arr = document.querySelectorAll('.box');  //fetching all the boxes and storing them in an array
 
arr.forEach(eachBox => eachBox.addEventListener('click',assignProp));  //iterating over boxes and assigning each of them eventListeners

 function assignProp(){
 
  count++;

  document.getElementById("num").innerHTML = count;

  if(lockBoard) return;   //last case when both cards are assigned
  if(this===firstCard) return;  //edge case if we click the same flipped again
  

this.classList.add('flip');  //classList.add() adds the given class to existing box

if(!hasBeenFlipped)
{
  hasBeenFlipped=true;
  firstCard = this;
  return;
}

secondCard = this;
lockBoard = true;

checkForSame(); //calling the other function for checking the first card and the second card

 }

 function checkForSame()
   {
 
  let check = firstCard.dataset.name === secondCard.dataset.name;
  check ? dissolve()  : unflip();  

   }


   function dissolve()
   {
   
         firstCard.removeEventListener('click' , assignProp);
         secondCard.removeEventListener('click' , assignProp);
         resetBoard();

   }



   function unflip()
   {

    setTimeout(function removeFlip(){
 
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');
    
    resetBoard();

    },1000);

   }


   function resetBoard()
   {

    hasBeenFlipped = false;
    lockBoard  = false;
    firstCard = null;
    secondCard  = null;

   }


   (function shuffle()
    {
    arr.forEach(card => {
      let ramdomPos = Math.ceil(Math.random() * 12);
      card.style.order = ramdomPos;
    });
  })();














