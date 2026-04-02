// access tags , built small functions for each action , apply events
//1)  class=choices=container    class=item=choice 
let userScore=0;
let compScore=0;
//2) access
const item=document.querySelectorAll(".item");
const msg=document.querySelector("#msg");//9
const userScrPara=document.querySelector("#user-score");//10
const compScrPara=document.querySelector("#comp-score");//10

// 5)make function for comp random num
const GenCompChoice=()=>{
    const option =["rock","paper","scissors"];//make array for get index
   const randomInd = Math.floor(Math.random()*3);//from 0 to 2 index random num will generate.(last num we donot count)
   return option[randomInd];//final, random num from 3options
}
// 7)
const DrawGame =()=>{
    console.log("Game was draw , play again");
    msg.innerText="Game was draw, Play again:)";
    msg.style.backgroundColor="#669BBC";//css
    msg.style.color="#fdf0d5";
}
  // 9)
  let ShowWinner =(userWin ,userChoice ,Compchoice)=>{//(access multiple)
    if(userWin){
        userScore++;//10
        userScrPara.innerText = userScore;//10
        console.log("you win;)");//all 9  ,backend print
        msg.innerText=`You Won:) Your ${userChoice} beats ${Compchoice}`;
        msg.style.backgroundColor="green";//css
        msg.style.color="white";
    }else{
        console.log("You lost");//9 ,backend print
        compScore++;//10
        compScrPara.innerText = compScore;//10
        msg.innerText=`You lost:(  ${Compchoice} beats your ${userChoice}`;//all 9
        msg.style.backgroundColor="#780000";//css
        msg.style.color="white";
    }
}
// 4)call playgame
const playGame = (userChoice)=>{
    console.log("YOUR choice", userChoice);
    const Compchoice = GenCompChoice();
    console.log("COMPUTER choice", Compchoice);


    // 6)condition
    if(userChoice === Compchoice){
      DrawGame();
    }
    else{//8)
      
      let userWin = true;//assume user won

    if(userChoice==="rock"){ //case1
      //means deffinetely computer didn't use to rock.if roak it had draw priviously.
      // comp will must be paper or scissors.
      userWin = Compchoice === "paper" ? false : true;//user will get fail if user has rock and
      //  comp has paper (;)means otherwise user will win if he has rock and comp has scissors
    }else if(userChoice==="paper"){ //case2
      //according to draw condition comp would not be same like paper.it would be rock or scissors
      userWin = Compchoice === "scissors" ? false : true;
    }else//(userChoice==="scissors")according to above 2 conditions now user has scissors.if it had r or p then game didnot procced
    {
      userWin = Compchoice === "rock" ? false : true;
    }
    // call fun
    ShowWinner(userWin ,userChoice ,Compchoice);//access (multiple) but call showWinner
  }
} 
  
       
//3) click on images
item.forEach((choice)=>{
choice.addEventListener("click",()=>{
   const userChoice = choice.getAttribute("id");
    // function call
    playGame(userChoice);
})
})

























