// blackjack game 
// create two variables firstcard and secondcard 
// set the value randomly between 2 - 11
// create a variable that sum the values of two numbers
let firstcard = 3
let secondcard = 4
//arrays---------------------------------------------------------------------------
let cards = [firstcard,secondcard] // arrays

let sum = firstcard + secondcard
let hasBlackJack = false
let message= ""
let isAlive = true
let message1 = document.getElementById("message")
//let sum1 = document.getElementById("sum")
// we can more accurate by modifying the above statement

// we can use this-----------------------------------------
//let sum1 = document.querySelector("#sum")

let sum1 = document.querySelector("#sum")
let cards1 = document.getElementById("cards")

//by using objects datatype create a innertext value to paragraph
// create an object datatype-
let value1 = {
  user : "Anant" ,
  chips : 200 ,
  // we ca also include function inside the datatype instead of string or int
  SayHello : function(){
   console.log("hello Anant")
  }
}

let blackjackvalue = document.getElementById("value")



// CASH OUT! 

//---------------------------------------------------------------------------------------
// blackjack game  if 
 //the value is less than 21 then it is good 
 //if its value equals to zero that means you win the Game
 //but if it is greater than 21 then it means you lose
 
 //------------------------------------------------------------------------------------------
// IF - ELSE condition------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------
//  if (sum <= 20) {
//  console.log("do you want to draw the card?")
 
// }
//else if (sum === 21) {
     console.log("wohoo ! you win the BlackJack!")
     hasBlackJack = true
// }
// else  {
      console.log("you are out of Game!")
 // }

//  // on assigning the value true if Age is less than 20
//  //  the updated value if statement is true
//  console.log(hasBlackJack)


 // console.log()

 //------------------------------------------------------------------------------------
// create a if else statement 
// let variable age
// if age is less than 21 then - "you cannot enter the club"
//  else  - "Welcome"

// let Age1 = 22
// if (Age1 <= 20)
//  // if we use "<="" operator that means that 20 is also include in the age
//  {
//     console.log("you cannot enter the club")
// }
// else {
//     console.log("Welcome!")
// }

// // check that the person is egligible for a birthday card from king
// // if less than 100 - "Not-elegible"
// // else if exactly equal to 100 - "Here is your Birthday card from King!"
// // else - Not-eligible you have Already got the card!

// let Age = 100
// //numbers and strings are diffrent 
// // age < "100" is wrong
// // because in this we compare string not number
// if ( Age < 100 ){
//     console.log("Not-Eligible")
// }
// else if (Age === 100){
//     console.log("Here is your Birthday card from King!")
// }
// else {
//     console.log("Not-Eligible you have already got the card from the King!")
// }

// create a ariable isAlive and assign it value to true 
// flip the value to false according to code block

// let Age2 = 12
// let age = true


// if (Age2< 18){
//     console.log("you are not an adult")
//     age = false
// }

// else if (Age2 === 18)
    
//  { 
// console.log("you are adult")
//  }

//  console.log(age)

 // declare a variable called message and assign its value to an empty string 
 // reassign the message variable to "we are logging out"
//  let Myname = "Anant"
//  let message = " "
//  if (Myname === "Anant"){
//     console.log("Oops!" + '')
//     message = "We are logging out!"
//  }
//  else {
//     console.log("")
//  }
// console.log(message)

// BOOLEAN TYPE

// console.log(23<=23) //true
// console.log(22===22) //true
// console.log(1!=1) //false
// console.log(23<22) // false 
// console.log(1<22) //true
// console.log(34>23) // true

//---------------------------------------------------------------------------------
//start button function
function start(){
    if (sum <= 20) {
      message = "do you want to draw the card?"
      let sum12 = "Sum:" + sum
   //   let cards12= "Cards:"+ "" +firstcard +" " +secondcard
   //   by using indexing method in array
      let cards12= "Cards:"+ "" + cards[0] +" " + cards[1] 
       message1.innerText = message
       sum1.innerText = sum12
       cards1.innerText = cards12
       blackjackvalue.textContent = value1.user + "-" + value1.chips + "$"

    }
       else if (sum === 21) {

           message ="wohoo ! you win the BlackJack!"
           let sum12 = "Sum:" + sum
           message1.innerText = message
           hasBlackJack = true
           sum1.innerText = sum12
           cards1.innerText = cards12
           blackjackvalue.textContent = "Anant - 600$"
           
       }
       else  {
    
         let message= "you are out of Game!"
          let sum12 = "Sum:" + sum
          message1.innerText = message
          hasBlackJack = true
          sum1.innerText = sum12
          cards1.innerText = cards12
          blackjackvalue.textContent = "Total collection - 600$"

        }
       
        // on assigning the value true if Age is less than 20
        //  the updated value if statement is true
        console.log(message)
}

// display the Sum:
 
function newcard(){
  // create a card variable and adc it to the  existing sum
 let card = randomnumber()
 cards.push(card)
  sum += card 
  start()
  // push a new card to an array
  
   //console.log(cards)
  // in this new card button 
  // in function we add a card variable and add the card value to existing
  // or given sum variable add rerun tthe start function to update the value
   
  // create a card loop that render outs all the cards instead of only two
  cards1.textContent = "Cards:  "
  for ( let i=0; i<cards.length; i+=1) {
    cards1.textContent += cards[i] + " "
  }
}

// if we hit the card it will only sum up tthe card in total sum but don't 
// reder out or not showing the new card in card variable
// so we have to solve tthis problem byy arrays

// ARRAYS-------------------------------------------------------------------------------------------------------
let featuredpost = ["checkout my Netflix clone",
                    "Here is the code for my My Project",
                    "I have just relaunced my portfolio"]

let featurelist = ["my work experience",
                   "education- H.P.S", 
                   "skills- HTML , CSS , JAVASCRIPT", 
                   ]
//  INDEXING IN ARRAYS []
 // cards[0] + cards[1] + cards[2]
 console.log(featuredpost[0])
 console.log(featuredpost[1])
 console.log(featuredpost[2])

 // counting the length of an array
 // console.log(featured.length)
 console.log(featuredpost.length) // length = 3

 // making an array by using three datatypes
 // using string , numbers , Boolean type
// make an array that contain ac datatype that is your name and your age 
// and make a Boolean that weather you like pizza or not

 let me = ["age", 34 ,true]
 console.log(me[0])

// // adding and removing a element to an array

// //adding an element - push

// me.push("hello")
// console.log(me)

// adding an anathor variable to array
// make anathor variable
// let me2="tanijouro"

// me.push(me2)
// console.log(me)


//REMOVING AN VARIABLE FROM ARRAY

me = ["holy cow",45,true]

me.pop(45)

console.log(me)


// by using pop method we can remove the array element from the array 

// how to remove last item from an array ?
let fruit = ['apple', 'orange', 'banana', 'tomato']; 

// remove the blank parenthesis to remove last item from an array
let popped = fruit.pop();

// we can use indexing or sclicing to remove an element from an array

// console.log(popped); // "tomato"
// console.log(fruit); // ["apple", "orange", "banana"]

// COUNTING IN ARRAY

//counting in javascript 
// we need to specify
// where we can start the counting ?
// where is the finish line ?
// what is the size of the counting ?

// START     FINISH      STEP SIZE

//----------------------------------------------------------------------------------
// FOR LOOPS ---------------------------------------------------------------------
//---------------------------------------------------------------------------------
for ( count=1 ; count<11 ; count+=1) {
  console.log(count)
}
// instead of that we can use count+=2
// so it can add on +2 in counting
// so try it 
// count =+2

// write your first loop in javascript
// console log the count from 10 to 100 at a step of 10

for (count1=10; count1<101; count1+=10)
{console.log(count1)}

// console log tthe count from 0 to 5

for ( i=0 ; i<6; i+=1){

}

// FOR loops and ARRAYS -
// combining loops and arrys

// create a loop that log out all the item from an arrays
// use cards.length to specify how long the loop should run

//let cards = [5,6,7]
// we can use "i" iteration for console log a loop
//for (i=0; i<cards.length; i+=1){
 // console.log(cards[i])
//}
// for incrementing a count to +1 we can also use i++ 
// i++ = i+=1
//-----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------


// - HOW TO AVOID HARD-CODE VALUES 
// IT IS BORING TO SEE THE SAME VALUES SO FOR THAT-----------------------------------------
// create a function() that always return the value of 5--------------------------------


// -----------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------
// RETURNING THE VALUE IN A FUNCTION--------------------------------------------------
//-----------------------------------------------------------------------------------

// firstplayer = 123
// secondplayer = 102

// function getFastestTime () {
//   if (firstplayer < secondplayer) {
//     return firstplayer
//   }
//   else if (firstplayer > secondplayer) {
//     return secondplayer
//   }
//   else {
//     return firstplayer
//   }
// }

// let fastrace = getFastestTime()

//-----------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------
// CREATE A FUNCTION THAT RANDOMCARD() THAT ALWYS CALLS OUT THE NUMBER 5 
//-----------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------

// function randomcard() {
//    return 5
// }
 
//-----------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------
// RANDOM FUNCTION = MATH.RANDOM()
//-----------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------

// let randomnumber = Math.random()
// console.log(randomnumber)

// Math.random() is a type of inbuit function that gives us the value between 0 to 1
//  for example 0 - 0.9999999999
//  but it doesnot include 1 in that

// and after modifying it -----------------------------------------------------------------
// ----------------------------------------------------------------------------------------

// let number = Math.random()*6
// so it include the random number between 0 - 5.9999

//-----------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------
// RANDOM FUNCTION = Math.floor()
//-----------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------

// it removes the decimal value

// let number2 = Math.floor(3.5544)
// console.log(number2)

 // MAKE A FUNCTION THAT GIVES  THE RANDOM NUMBER BETWEEN 1 TO 13

 function randomnumber() {
  // if 1 -- return 11
  // if 11-13 then return 10
  // so use conditional statement
  let randomnumber = Math.floor(Math.random()*13) +1
  if(randomnumber>10)
  {
    return 11
  }
 else if (randomnumber === 1)
 {
  return 11
 }
 else {
 return randomnumber
 }
 }

//                                  PROJECT COMPLETED
//-------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------

// LOGICAL "AND" OPRATOR

// create an if statement that checks that both the variables are false
// if, s run the function showsolution()

// let var1 = false
// let var2 = false
// if (var1 === false && var2 === false)
// {
//   return showsolution()
// }
// function showsolution()  {
//   console.log("showing the soltion")
// }


//----------------------------------------------------------------------------------------------------

 // LOGICAL "OR" OPERATOR
 //-------------------------------------------------------------------
 // create two boolean variable likedocument and startups
 // use "or"    "||" statement to recommendmovie() 
 // if either from both one of the value is true then return the function

//  let likedocument = false
// let startups = true

//  if (likedocument === true || startups === true ){
//    return  recommendmovie()
//  }
 
 
//  function recommendmovie()
//  {
//     console.log("Hey! , checkout this new film i think you will like !")
//  }
//-----------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------

// OBJECTS --------------------------------------------------------------------------------

//-----------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------
// OBJECTS - store data in depth - composite / complex datatypes
// key value pairs
//  let course = {
//   title:"Learn CSS Grid Free!",
//   lesson:16,
//   creator: "Anant Tyagi", // string
//   length:45, 
//   Level:2,  
//   isFree:true,   // boolean
//   tags:["Html","CSS","Javascript"]  // array
//  } 
//  console.log(course.tags)

 // Create a object that repersent an arb castle listing
 //which contain at least one boolean,one array,one string 

//  castle={
//   castleAddress  : "Green Valley state",
//   address : true,
//   castleStaff : 200,
//   castlemenu : ["pasta","avacadosandwich","egg-omelate","juice"]
// }
// console.log(castle.castlemenu)
// console.log(castle.address)


//by using objects datatype create a innertext value to paragraph
// create an object datatype-
 let values = {
  user : "Anant" ,
  chips : 200 ,
  // we ca also include function inside the datatype instead of string or int.
  SayHello : function(){
   console.log("hello Anant")
  }
}

// create an object that contains three keys Age: and Country:
 // string in the following format :
 // "Anant is 18 years old and lives in Muzaffarnagar" 

//  let  Intro = {
//   name1 :"Anant",
//   age : 19,
//   city :"Muzaffarnagar",
//   }

// function intro(){
//   console.log(Intro.name1 + " " + "is" + " " + Intro.age + " " + "years old" + " " + "and" + " " + "lives in" + " " + Intro.city)
// }

// console.log(intro())


// LOPS WITH OBJECTS------------------------------------------------------
// let largestcointries = ["China","India","USA","Indonesia"]
// //use for loop to console the following countries:
// for (i=0 ;i <largestcointries.length; i++){
//     console.log("-"+largestcointries[i])
// }



