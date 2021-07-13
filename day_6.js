

//1st question answer 
function is_array(){
    console.log(is_array([1,2,4,0]));
//--------------------------------------------------------------------------------------------------------------



 //2nd question answer:
var array_Clone = function(arra1) {
    return arra1.slice(0);
       };
   console.log(array_Clone([1, 2, 4, 0]));
   console.log(array_Clone([1, 2, [4, 0]]));

//--------------------------------------------------------------------------------------------------------------



//3rd answer
first =  function(array, n) {
    if (array == null) 
    return void 0;
  if (n == null) 
    return array[0];
  if (n < 0)
    return [];
  return array.slice(0, n);
};

console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));

//-----------------------------------------------------------------------------------------------------------------


//4th Answer
myColor = ["Red", "Green", "White", "Black"];
console.log(myColor.toString());
console.log(myColor.join());
console.log(myColor.join('+'));

//-------------------------------------------------------------------------------------------------------------------


//5th Answer
var arr=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var maxFreq = 1;
var count = 0;
var item;
for (var i=0; i<arr.length; i++)  //use of nested loop
{
        for (var j=i; j<arr.length; j++)
        {
                if (arr[i] == arr1[j]) //iterative checking for same element.
                 count++;
                if (maxFreq<count)//checking for maximum freq among the count and storing it everyTime as maxFreq
                {
                  maxFreq=count; 
                  item = arr1[i];  //the key value or the element which is found to be of max freq
                }
        }
        count=0;// of not assign count as 0
}
console.log(item+" ( " +maxFreq +" times ) ") ;  //print statement in the console


//-------------------------------------------------------------------------------------------------------------------



