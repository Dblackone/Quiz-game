
const saveScoreBtn = document.getElementById("saveScoreBtn");
const finalScore = document.getElementById("finalScore");
const mostRecentScore = localStorage.getItem("mostRecentScore");
finalScore.innerText = mostRecentScore;
const youFailed = document.getElementById("failed");
const youBarelyPassed = document.getElementById("barely-passed");
const youPassed = document.getElementById("passed");

 if (mostRecentScore < 6) {
    youFailed.classList.remove('hide');
 } else if (mostRecentScore == 6) {
     youBarelyPassed.classList.remove('hide');
 } else if (mostRecentScore > 6) {
     youPassed.classList.remove('hide');
 }