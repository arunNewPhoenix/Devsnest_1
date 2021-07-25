let bookedSeatsCounter = document.querySelector(".booked_seats")  //fetching the span 
let remainingSeatsCounter = document.querySelector(".remaining_seats")  //fetching the span
let totalSeats = 48
let bookedCounter = 0
let theatre = document.querySelector(".theatre")

function seatbooker(event) //envoked when clicked act as a response.
{
    event.target.classList.toggle("booked")//toogle between the classes when clicked
   
    event.target.classList.contains("booked") ? bookedCounter++ : bookedCounter--; //ternary operation checking the booked simultaneously
    bookedSeatsCounter.innerHTML = bookedCounter       //displaying the number of booked seat in the html page
    remainingSeatsCounter.innerHTML = totalSeats - bookedCounter  //  display the remaining seat 
}



for (let i = 0; i < totalSeats; i++)//creating 48 total div to make seats aka till totalseats 
{
    let seat = document.createElement("div")
    theatre.append(seat)
    seat.className = "seat"
    seat.addEventListener("click", seatbooker)
}

