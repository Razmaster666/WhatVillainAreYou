let drDoom = 0;
let magneto = 0;

var currentTab = 0; 
showTab(currentTab);

// const yesBtn = document.getElementById('yes');
// yesBtn.checked = true;

// function addMagneto() {
//     magneto++
//     console.log("Magneto")
//     console.log(magneto)
// }

// function addDrDoom() {
//     drDoom++
//     console.log("Doom")
//     console.log(drDoom)
// }

function goToNextQ() {
    const answer = document.querySelectorAll("input:checked")[0].id

    console.log(answer)
    nextPrev()

}

function showTab(n) {
    // This function will display the specified tab of the form...
    var x = document.getElementsByClassName("tab");
    x[n].style.display = "block";
   
  }
  
  function nextPrev(n) {
    var x = document.getElementsByClassName("tab");
    x[currentTab].style.display = "none";
     currentTab +=1
    showTab(currentTab);
  }
  
