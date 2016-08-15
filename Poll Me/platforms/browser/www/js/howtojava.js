
// function for instate button
function inState(){
    var state = document.getElementById("inState");
    var stateDisplay = state.style.display;
    var stateButton = document.getElementById("inStateButton");
    if (stateDisplay == "block") {
        state.style.display = "none";
        stateButton.innerHTML = "Show Information on In-State Voting ";
    }
    else {
        state.style.display = "block";
        stateButton.innerHTML = "Hide Information on In-State Voting";
    }
  }


// function for absentee button
function absentee(){
    var absentee = document.getElementById("absentee");
    var absenteeDisplay = absentee.style.display;
    var absenteeButton = document.getElementById("absenteeButton");
    if (absenteeDisplay == "block") {
        absentee.style.display = "none";
        absenteeButton.innerHTML = "Show Information on Absentee Ballots ";
    }
    else {
        absentee.style.display = "block";
        absenteeButton.innerHTML = "Hide Information on Absentee Ballots";
    }
  }
