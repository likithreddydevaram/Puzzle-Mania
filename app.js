// local reviews data
const reviews = [
  {
    id: 0,
    title:"Observe & Guess" ,
    question: "Observe the image and say how much energy will the newest solar panel generate?",
    answer:"04.96 V. The number before the decimal point is the same as the number of columns per panel, and the number after the decimal point is the same as the number of cells."
  },
  {
    id: 1,
    title:"Observe & Guess" ,
    question: "Can you make this equation correct using three of these four symbols?  + – x  ÷",
    answer:"* -> + -> *"
  },
  {
    id: 2,
    title:"use your common sense" ,
    question: "A woman enters a room and presses a button. Within seconds she instantly loses 20 pounds. How did she lose the weight?",
    answer:"The room is actually an elevator. When she gets inside to go down, the elevator accelerates downward, making her weight temporarily lower."
  },
  {
    id: 3,
    title:"Strom your Brain" ,
    question: "Six drinking glasses stand in a row, with the first three full of juice and the next three empty. By moving only one glass can you arrange them so empty and full glasses alternate?",
    answer:""
  },
  {
    id: 4,
    title:"Figure out" ,
    question: "It's 3:35. If the clock is rotated 90 degrees counterclockwise, what time will it be? ",
    answer:"12:20"
  },
  {
    id: 5,
    title:"Rabbit Elephant Puzzle" ,
    question: "One Rabbit saw 6 Elephants while going towards a river. Every Elephant saw 2 Monkeys,going towards the river.Every Monkey holds one Turtle in their hands.How many animals are going towards the river?",
    answer:"5 is the correct answer."
  },
  {
    id: 6,
    title:"Blink & Answer" ,
    question: "Multiply all numbers on a phone pad what is the total?",
    answer:"0 is the correct answer."
  },
  {
    id: 7,
    title:"Figure out" ,
    question: "Two fathers and two sons went on fishing one day.They were the whole day and only caught 3 fish.One father said,that is enough for all of us,we will have one each.How can be this possible?",
    answer:"There was the father, his son, and his son's son. This equals 2 fathers and 2 sons for a total of 3!"
  },
  {
    id: 8,
    title:"calculate the age" ,
    question: "When Charlie was 10 years old,his brother was half of his age. Now Charlie is 18 ,then how old his brother is?",
    answer:"His brother is now 13 years old."
  },
  {
    id: 9,
    title:"Imagine & answer" ,
    question: "Move any two stick anywhere and make a correct equation",
    answer:"Move 2 sticks from 9 and make 1+1=2 ."
  },
  {
    id: 10,
    title:"2-jugs problem" ,
    question: "You have a 3-gallon jug and a 5-gallon jug. You need to measure out exactly 4 gallons of water. How can you do it , considering you have ample amount of water?",
    answer:"Fill the 3-gallon jug, pour it into the 5-gallon jug until the 3 gallon is empty, and again fill the 3 gallon jug and then pour it into the 5 gallon jug leaving 1 gallon in the 3-gallon jug. Now pour the 5-gallon jug out. Pour the remaining 1 gallon of water from the 3 gallon into the empty 5-gallon jug. Now fill the 3 gallon from the faucet. You now have exactly 4 gallons."
  },
  {
    id: 11,
    title:"3-jugs problem" ,
    question: "Suppose that you are given 3 jugs A,B,C with capacities 8,5 and 3 liters respectively but are not calibrated (i.e. no measuring mark will be there). Jug A is filled with 8 liters of water. By a series of pouring back and forth among the 3 jugs, divide the 8 liters into 2 equal parts i.e. 4 liters in jug A and 4 liters in jug B. How?",
    answer:"(8,0,0) -> (5,0,3) -> (5,3,0) -> (2,3,3) -> (2,5,1) -> (7,0,1) -> (7,1,0) -> (4,1,3)"
  },
  {
    id: 12,
    title:"Tower of Hanoi" ,
    question: "Move an entire stack of 3 disks from the source position to another position.Only one disk can be moved at a time. A disk can only be moved if it is the uppermost disk on a stack.No larger disk may be placed on top of a smaller disk.",
    answer:"A-C -> A-B -> C-B -> A-C -> B-A -> B-C -> A-C"
  },
];

const title2 = document.querySelector('.title2');
const img = document.getElementById('image');
const info = document.getElementById('info');
const surprize_btn=document.querySelector('.surprize-btn');
const answer_btn=document.querySelector('.answer-btn');
const answer_cont=document.querySelector('.answer-cont');
const answer=document.querySelector('#answer');
var id=0;
var n=id;

surprize_btn.onclick=()=>{  
  id=Math.floor(Math.random()*reviews.length);
  if(id==n)
 { id=n+1;
  n=id;}
  img.src="./images/img-"+id+".jpg";
  title2.innerText=reviews[id].title;
  info.innerText=reviews[id].question;
  answer_btn.classList.remove('answer-btn2');
  surprize_btn.classList.add('surprize-btn2');
  answer_cont.classList.add('hide-answer-cont');
}
answer_btn.onclick=()=>{  
  console.log(id);
  answer_cont.classList.remove('hide-answer-cont');
  answer.textContent=reviews[id].answer;
  answer_btn.classList.add('answer-btn2');
  surprize_btn.classList.remove('surprize-btn2');
}