updateStats();

var player_name = localStorage.getItem("player_name");
var game_count = localStorage.getItem("game_count");

var tie_count = localStorage.getItem("tie_count");
var loss_count = localStorage.getItem("loss_count");
var win_count = localStorage.getItem("win_count");

var win_loss_ratio = localStorage.getItem("win_loss_ratio");

var rock_count = localStorage.getItem("rock_count");
var paper_count = localStorage.getItem("paper_count");
var scissors_count = localStorage.getItem("scissors_count");

var o_paper_count = localStorage.getItem("o_paper_count");
var o_rock_count = localStorage.getItem("o_rock_count");
var o_scissors_count = localStorage.getItem("o_scissors_count");

var roundingPlace = 1;

document.getElementById("gameCount").innerHTML = 0;
document.getElementById("gameCount").innerHTML = 0;
document.getElementById("tieCount").innerHTML = 0;
document.getElementById("winCount").innerHTML = 0;
document.getElementById("lossCount").innerHTML = 0;
document.getElementById("WLRatio").innerHTML = "-";
document.getElementById("paperCount").innerHTML = 0;
document.getElementById("rockCount").innerHTML = 0;
document.getElementById("scissorsCount").innerHTML = 0;
document.getElementById("rockStat").innerHTML = 0+"%";
document.getElementById("paperStat").innerHTML = 0+"%";
document.getElementById("scissorsStat").innerHTML = 0+"%";

document.getElementById("oPaperCount").innerHTML = 0;
document.getElementById("oRockCount").innerHTML = 0;
document.getElementById("oScissorsCount").innerHTML = 0;
document.getElementById("oRockStat").innerHTML = 0+"%";
document.getElementById("oPaperStat").innerHTML = 0+"%";
document.getElementById("oScissorsStat").innerHTML = 0+"%";
localStorage.setItem("gameCount",0);
localStorage.setItem("tie_count",0);
localStorage.setItem("win_count",0);
localStorage.setItem("loss_count",0);
localStorage.setItem("win_loss_ratio",0);
localStorage.setItem("paper_count",0);
localStorage.setItem("rock_count",0);
localStorage.setItem("scissors_count",0);
localStorage.setItem("rock_stat",0);
localStorage.setItem("paper_stat",0);
localStorage.setItem("scissors_stat",0);
localStorage.setItem("o_paper_count",0);
localStorage.setItem("o_rock_count",0);
localStorage.setItem("o_scissors_count",0);
localStorage.setItem("o_rock_stat",0);
localStorage.setItem("o_paper_stat",0);
localStorage.setItem("o_scissors_stat",0);

if(!player_name){
  showOrNot(document.getElementById("enter_name"), true);
}else {
  updateNames(player_name);
  showOrNot(document.getElementById("throw_choice"),true);
}

/////////////////////Helper Function//////////////////////////

makeToggable(document.getElementById("show_rules_button"),  document.getElementById("rules"));
makeToggable(document.getElementById("show_stats_button"),  document.getElementById("stats"));

document.getElementById("name_button").addEventListener("click", function(){
  document.getElementById("good_feedback").innerHTML = "";
  document.getElementById("bad_feedback").innerHTML = "";
  if(document.getElementById("name_textfield").value != "") { // checkes to see if the input is a blank
    var p_name = document.getElementById("name_textfield").value;
    localStorage.setItem("player_name", p_name);
    showOrNot(document.getElementById("enter_name"), false);
    showOrNot(document.getElementById("throw_choice"), true);
    updateNames(p_name);
    document.getElementById("good_feedback").innerHTML = "Your name has been succesfully saved! Get ready to play Paper, Rock, Scissors!!";
    document.getElementById("bad_feedback").innerHTML = "";
  }
  else {
    document.getElementById("bad_feedback").innerHTML = "Opps! Your name has not been saved. Please enter in a valid username!";
    document.getElementById("good_feedback").innerHTML = "";
  }

});

document.getElementById("play_again_button").addEventListener("click",function(){
  playAgainButtonClicked();
});

document.getElementById("full_restart_button").addEventListener("click",function(){
  playAgainButtonClicked();
  localStorage.clear();
})

document.getElementById("throw_choice_button").addEventListener("click", function(){

  document.getElementById("good_feedback").innerHTML = "";
  document.getElementById("bad_feedback").innerHTML = "";
  var throw_choice = document.getElementById("throw_choice_select").value;
  if(throw_choice == "Paper" ||throw_choice == "Rock"|| throw_choice == "Scissors"){

    var opponent_throw_choice = "";
    var oChoice = Math.random();

     console.log(oChoice);


    if (oChoice < 0.33) {
      opponent_throw_choice = "Paper"
      console.log(opponent_throw_choice);
    }
    else if (oChoice < 0.66){
      opponent_throw_choice = "Rock"
      console.log(opponent_throw_choice);
    }
    else{
      opponent_throw_choice = "Scissors"
      console.log(opponent_throw_choice);
    }

    var result = "";

    if(throw_choice == opponent_throw_choice){
      addingOneToLocalStorage("tie_count");
        if(throw_choice == "Rock"){
          addingOneToLocalStorage("rock_count");
          addingOneToLocalStorage("o_rock_count")
          changeImage("Rock","Rock");
          document.getElementById("Presult").innerHTML = throw_choice.toLowerCase();
          document.getElementById("Bresult").innerHTML = opponent_throw_choice.toLowerCase();
          document.getElementById("Tresult").innerHTML = "tied";

        }
        if(throw_choice == "Paper"){
          addingOneToLocalStorage("paper_count");
          addingOneToLocalStorage("o_paper_count");
          changeImage("Paper","Paper");
          document.getElementById("Presult").innerHTML = throw_choice.toLowerCase();
          document.getElementById("Bresult").innerHTML = opponent_throw_choice.toLowerCase();
          document.getElementById("Tresult").innerHTML = "tied";
        }
        if(throw_choice == "Scissors"){
          addingOneToLocalStorage("scissors_count");
          addingOneToLocalStorage("o_scissors_count");
          changeImage("Scissors","Scissors");
          document.getElementById("Presult").innerHTML = throw_choice.toLowerCase();
          document.getElementById("Bresult").innerHTML = opponent_throw_choice.toLowerCase()
          document.getElementById("Tresult").innerHTML = "tied";
        }
    }

    if (throw_choice == "Rock" && opponent_throw_choice == "Paper") {
      addingOneToLocalStorage("rock_count");
      addingOneToLocalStorage("o_paper_count");
      addingOneToLocalStorage("loss_count");
      changeImage("Rock","Paper");

      document.getElementById("Presult").innerHTML = throw_choice.toLowerCase();
      document.getElementById("Bresult").innerHTML = opponent_throw_choice.toLowerCase();
      document.getElementById("Tresult").innerHTML = "lost";
    }
    if (throw_choice == "Rock" && opponent_throw_choice == "Scissors") {
      addingOneToLocalStorage("rock_count");
      addingOneToLocalStorage("o_scissors_count");
      addingOneToLocalStorage("win_count");
      changeImage("Rock","Scissors");

      document.getElementById("Presult").innerHTML = throw_choice.toLowerCase();
      document.getElementById("Bresult").innerHTML = opponent_throw_choice.toLowerCase();
      document.getElementById("Tresult").innerHTML = "won";

    }

    if (throw_choice == "Paper" && opponent_throw_choice == "Scissors") {
      addingOneToLocalStorage("paper_count");
      addingOneToLocalStorage("o_scissors_count");
      addingOneToLocalStorage("loss_count");
      changeImage("Paper","Scissors");

      document.getElementById("Presult").innerHTML = throw_choice.toLowerCase();
      document.getElementById("Bresult").innerHTML = opponent_throw_choice.toLowerCase();
      document.getElementById("Tresult").innerHTML = "lost";
    }

    if (throw_choice == "Paper" && opponent_throw_choice == "Rock") {
      addingOneToLocalStorage("paper_count");
      addingOneToLocalStorage("o_rock_count");
      addingOneToLocalStorage("win_count");
      changeImage("Paper","Rock");

      document.getElementById("Presult").innerHTML = throw_choice.toLowerCase();
      document.getElementById("Bresult").innerHTML = opponent_throw_choice.toLowerCase();
      document.getElementById("Tresult").innerHTML = "won";

    }

    if (throw_choice == "Scissors" && opponent_throw_choice == "Rock") {
      addingOneToLocalStorage("scissors_count");
      addingOneToLocalStorage("o_rock_count");
      addingOneToLocalStorage("loss_count");

      changeImage("Scissors","Rock");

      document.getElementById("Presult").innerHTML = throw_choice.toLowerCase();
      document.getElementById("Bresult").innerHTML = opponent_throw_choice.toLowerCase();
      document.getElementById("Tresult").innerHTML = "lost";

    }

    if (throw_choice == "Scissors" && opponent_throw_choice == "Paper") {
      addingOneToLocalStorage("scissors_count")
      addingOneToLocalStorage("o_paper_count");
      addingOneToLocalStorage("win_count");
      changeImage("Scissors","Paper");
      document.getElementById("Presult").innerHTML = throw_choice.toLowerCase();
      document.getElementById("Bresult").innerHTML = opponent_throw_choice.toLowerCase();
      document.getElementById("Tresult").innerHTML = "won";
    }

    // total number of games
    addingOneToLocalStorage("game_count");


    //win to loss Ratio

    // var WC = localStorage.getItem("win_count");
    // var LC = localStorage.getItem("loss_count");
    // var wl = (WC/LC);
    // localStorage.setItem(("win_loss_ratio"),wl);





    ///localStorage.getItem("win_count")/localStorage.getItem("loss_count");
    console.log("Win-Loss Ratio: "+win_loss_ratio);
    //  localStorage.setItem('attempts',parseInt(localStorage.getItem('attempts'))+1);
      // var num = Number(document.getElementById('win count').innerHTML) / Number(document.getElementById('loss count').innerHTML) ;
      // var n = num.toFixed(3)
      // document.getElementById('wl ratio').innerHTML = n;

    rounding("rock_count","game_count","rock_stat",100, roundingPlace);
    rounding("o_rock_count","game_count","o_rock_stat",100,roundingPlace);

    rounding("paper_count","game_count","paper_stat",100,roundingPlace);
    rounding("o_paper_count","game_count","o_paper_stat",100,roundingPlace);

    rounding("scissors_count","game_count","scissors_stat",100,roundingPlace);
    rounding("o_scissors_count","game_count","o_scissors_stat",100,roundingPlace);

    rounding("win_count","loss_count","win_loss_ratio",1,roundingPlace+2);






    updateStats()
    showOrNot(document.getElementById("end"),true);
  }

  else{
    alert("Plase select a viable option to play the game!");
  }
});

/////////////////// Functions Function //////////////////////

function rounding(numerator, denominator, final, mult, roundingPlace){
  var nonRound = localStorage.getItem(numerator)/localStorage.getItem(denominator)*mult;
  var round = nonRound.toFixed(roundingPlace);
  localStorage.setItem((final),round);
}


function updateNames(name){
  var name_spots = document.getElementsByClassName("player_name_span");
  console.log(name)
  for(var i = 0; i < name_spots.length; i++){
    name_spots[i].innerHTML = name;
  }
}

function showOrNot(div_element, show){
  if(show && div_element.classList.contains("hidden")){
    div_element.classList.remove("hidden");
    div_element.classList.add("visible");
  }
  else if(!show && div_element.classList.contains("visible")) {
    div_element.classList.remove("visible");
    div_element.classList.add("hidden");
  }
}

function makeToggable(button_element, div_element){
  button_element.addEventListener("click", function(){
    if(div_element.classList.contains("hidden")){
      div_element.classList.remove("hidden");
      div_element.classList.add("visible");
    }else{
      div_element.classList.remove("visible");
      div_element.classList.add("hidden");
      }
    console.log(div_element)
  });
}

function addingOneToLocalStorage(itemInLocalStorage){
  if(localStorage.getItem(itemInLocalStorage) == null){
    localStorage.setItem(itemInLocalStorage, "1");
  } else {
    localStorage.setItem(itemInLocalStorage, Number(localStorage.getItem(itemInLocalStorage))+1);
  }
}

  function updateStats(){

    document.getElementById("gameCount").innerHTML = localStorage.getItem("game_count");
    document.getElementById("tieCount").innerHTML = localStorage.getItem("tie_count");
    document.getElementById("winCount").innerHTML = localStorage.getItem("win_count");
    document.getElementById("lossCount").innerHTML = localStorage.getItem("loss_count");
    document.getElementById("WLRatio").innerHTML = localStorage.getItem("win_loss_ratio");
    document.getElementById("paperCount").innerHTML = localStorage.getItem("paper_count");
    document.getElementById("rockCount").innerHTML = localStorage.getItem("rock_count");
    document.getElementById("scissorsCount").innerHTML = localStorage.getItem("scissors_count");
    document.getElementById("rockStat").innerHTML = localStorage.getItem("rock_stat")+"%";
    document.getElementById("paperStat").innerHTML = localStorage.getItem("paper_stat")+"%";
    document.getElementById("scissorsStat").innerHTML = localStorage.getItem("scissors_stat")+"%";

    document.getElementById("oPaperCount").innerHTML = localStorage.getItem("o_paper_count");
    document.getElementById("oRockCount").innerHTML = localStorage.getItem("o_rock_count");
    document.getElementById("oScissorsCount").innerHTML = localStorage.getItem("o_scissors_count");
    document.getElementById("oRockStat").innerHTML = localStorage.getItem("o_rock_stat")+"%";
    document.getElementById("oPaperStat").innerHTML = localStorage.getItem("o_paper_stat")+"%";
    document.getElementById("oScissorsStat").innerHTML = localStorage.getItem("o_scissors_stat")+"%";

    if(localStorage.getItem("loss_count") == 0){
      document.getElementById("WLRatio").innerHTML = "-";
    }
  }

  function playAgainButtonClicked(){
    console.log("PAB clicked");
    document.getElementById("throw_choice").style.display = "block";
    document.getElementById("enter_name").style.display = "none";
    document.getElementById("game_results").style.display = "none";
    //localStorage.clear();
    location.reload();
  }

  function changeImage(pThrowed,bThrowed){
    var imageP = document.getElementById('pImage');
    imageP.src = "./images/P"+pThrowed+".jpg";
    var imageO = document.getElementById('oImage');
    imageO.src = "./images/B"+bThrowed+".jpg";
  }
