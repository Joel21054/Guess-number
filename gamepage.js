  var y = Math.floor(Math.random() *10 + 1);
  playername=localStorage.getItem("player_name")
  var guess=1
  function submit(){
    var x=document.getElementById("guessField").value;
    if(x==y){
      alert("congratulations"+playername+"you guessed it right"+guess+"Guess")
      guess=1
    }
    else if(x>y){
      guess++
      alert("oops sorry try a smaller number")
    }
    else{
      guess++
      alert("oops sorry try a greater number")
    }
  }
  function playAgain(){
    y=Math.floor(Math.random()*10+1)
  }