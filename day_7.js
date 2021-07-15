//1st questions:answer
//-------------------------------------------------------------------------------------------
var student = { name : "David Rayy", sclass : "VI", rollno : 12 };
//Sample Output: name,sclass,rollno

var studentKey = Object.keys(student);

console.log(studentKey);

//2nd questions:answer
//-------------------------------------------------------------------------------------------

var student = { name : "David Rayy", sclass : "VI", rollno : 12 }
//Sample output: [name: "David Rayy",sclass : "VI"]

console.log(student)

delete student.rollno; //delete operator deletes the object stored in student variable and its element of choice

console.log(student)

//---------------------------------------------------------------------------------------------

//3rd question:answer
var student = { name : "David Rayy", sclass : "VI", rollno : 12 };
//Sample output :3

var count=0;

var studentKey= Object.keys(student);

for(k in studentKey)
{
    count++;
}

console.log(count);

//alternative:
//var size = Object.keys(student).length;
//console.log(size);

//--------------------------------------------------------------------------------------------------
const library = [
    { author: "Bill Gates", title: "The Road Ahead", readingStatus: true },
    { author: "Steve Jobs", title: "Walter Isaacson", readingStatus: true },
    {
      author: "Suzanne Collins",
      title: "Mockingjay: The Final Book of The Hunger Games",
      readingStatus: false,
    },
  ];
  for (book of library) {
    console.log("book -", book.title, "\n reading status -", book.readingStatus);
  }

 //------------------------------------------------------------------------------------ 
//5th question:answer

const cylinder = {
    rad: 0,
    height: 0,
    volume() {
      return ((22 / 7) * this.rad * this.rad * this.height).toFixed(4);
    },
  };
  
  cylinder.rad = 20;
  cylinder.height = 100;
  
  console.log(cylinder.volume());

  //-------------------------------------------------------------------------------------

  //6th question:answer

  const library2 = [
    { title: "The Road Ahead", author: "Bill Gates", libraryID: 1254 },
    { title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4264 },
    {
      title: "Mockingjay: The Final Book of The Hunger Games",
      author: "Suzanne Collins",
      libraryID: 3245,
    },
    {
      title: "Mockingjay: The Final Book of The Hunger Games",
      author: "Suzanne Collins",
      libraryID: 9999,
    },
  ];
  
  console.log(library.sort((a, b) => (a.libraryID < b.libraryID) ? 1 : -1))

