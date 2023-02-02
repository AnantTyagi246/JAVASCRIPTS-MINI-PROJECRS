//
//------------------------------ JAVASCRIPT-----------------------------------------------
//
//------------------------------ 1/JAN/2023-----------------------------------------------
//
//
//-----------------------------------------------------------------------------------------
//document.getElementById("hell").innerText = 34

// VARIABLES:-----------------------------------------------------------------

// let count = 23
// console.log(count)

// // create a variable to Myage and give your age
// // console log the value of Myage 

// let MyAge = 23
// console.log(MyAge)
 
// also we can add the variables using arthematic operations

// let Firstbatch = 23
// let Secondbatch = 45
// let Totalbatch = Firstbatch + Secondbatch 

// console.log(Totalbatch)

//----------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------
// REASSIGNING AND INCREMENT OF NUMBERS USING JAVASCRIPT
//-----------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------

//REASSIGNING -------------------------------

// let count = 5
// count =4
// console.log(count)
// in the console log it assign the updated value -----------------------------------

//INCREMENT -----------------------------------------------------------------------

// let count = 0
// count = count + 1
// console.log(count)

//create a variable bonuspoint and initialise it value to 50 and increase it to 100
//and then decrease it to 75

// let bonuspoint = 23
// console.log(bonuspoint)
//  let bonuspoint1 = bonuspoint +77
// console.log(bonuspoint1)
// let bonuspoint2 = bonuspoint - 20
// console.log(bonuspoint2)

//we can also do like this using only one variable
// let BonusPoint = 123
// console.log(BonusPoint)
//  BonusPoint =BonusPoint + BonusPoint +234
// console.log(BonusPoint)
// BonusPoint = BonusPoint - 100
// console.log(BonusPoint)

// increment when button is clicked
// for the first of all assign the count as 0

//FUNCTION -----------------------------------------
// initialise a function ---------------------------------
// function increment() {
//   console.log("the button is clicked")
// }

// function is used to write a code in less code of line 
//and also we can call a function withoutt writing it again and again

//  for example 
// console.log(increment())
// console.log(increment())
// console.log(increment())
// console.log(increment())
// console.log(increment())

//----------------------------------------------------------------------------------
//writing a function for countdown 
// function countdown(){
//   console.log(5)
//   console.log(4)
//   console.log(3)
//   console.log(2)
//   console.log(1)
//   console.log(0)
// }
// console.log(countdown())
//----------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------

//VARIABLES WITH FUNCTION----------------------------------------------------------

// function laps() {
//let lap1= 23
// let lap2 = 45
// let lap3 = 78
// let totallaps = lap1 + lap2 + lap3 }
//we can write it as
//console.log(lap1 + lap2 + lap3)-------------------------------------------

//console.log(laps())

//-----------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------
//Display the count on the web page ------------------------------------------------------
//----------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------


//for displaying that we first let a variable and assign it value 
// then write a function and use the count variable
// then onclick the increment button the increment() function will run
//as shown below
let saveEl = document.getElementById("entry")
let countEl = document.getElementById("hell")
let helloEl = document.getElementById("hell")
let count = 0
function increment() {
   count = count + 1
  // we can use += instead of writing it again and again
  // count += 1
  countEl.innerText = count
}

// --------------------------------------------------------------------
//DECREMENT FUCTION ----------------------------------------------------------


function decrement(){
  count = count - 1
 helloEl.innerText = count
}
 //for save the number of passengers enter in the subway 
 // we can use the save function with the help of string
 
//STRING --------------------------------------------------------------------------------
//string variables-----------------------------------------------------------------------

// let firstname = "Anant"
// let lastname = "Tyagi"
// let Fullname = firstname + " " + lastname 
// console.log(Fullname)

// we can also write it as 
// console.log(firstname + " " + lastname)

//again 
// let myname = "Anant"
// let greet = "Hi , My name is"
// let message = greet + " " + myname 
// console.log(message)

// string and numbers 
// if we concatenate a number and a string 
// we can find that the number is automatically converted into string  

// let var1 = "my age is"
// let var2 = 19
// let var3 = var1 + " " + var2
// console.log(var3)

//aslo----------------------------------------------------------------------------

// console.log(12 + "12") // 1212
// console.log("12" + "12") // 1212
// console.log(12 +12) // 24
// console.log("100" + 100) // 100100
//---------------------------------------------------------------------------------

// RENDER A WELCOME MESSAGE-----------------------------------------------------------

// let me2 = document.getElementById("me")

// // then create a variable 

// let myname = "Anant Tyagi"
// let greet = "Welcome Back !,"
// me2.innerText = greet  + " " + myname

// if you want to add anything in this code you can simply use this technique

//me2.innerText = me2.innerText + "" +"@"
//we can use this 
// me2.innerText += "@"


// for passenger counter app
// put the id of prevoius entries in the saveEl variable
//SAVE FUNCTION-----------------------------------------------------------------------
function save() {
  // then in the save function create a variable that contain 
  // both variable that are number of passenger count and "-" variable
  //render the variable in the saveEl innerText

  let var1 = count
  let var2 = "-"
  let var3 = var1  + var2 
  // saveEl.innerText += var3
    saveEl.textContent += var3
    //saveEl.innerText ="something went wrong"
     countEl.innerText = 0
     count =0 
   // for space between "-" we can use contentText instead of innerText
   // because ".textContent" is also read which cannot be human readable object


  // we can write it as "previous entries" + var3
  // the + = is use for saving the prious entries also
  // if we use onluy "=" sign it can uppdated the newly value 
  //and remove the previous entries 
}

// RESET THE VALUE TO ZERO SO WE CAN RESTART IT AGAIN--------------------------------------

// RESET THE VALUE COUNTER TO "0"
//by adding a anathor variable and get element by Id  then 
// by adding "variable.innerText = 0" to the save function 
 // so when we click the save button the function reset the value to 0
