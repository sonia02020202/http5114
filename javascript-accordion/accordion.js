function toggle(target) {
   // console.log("open");
  //  console.log(target);

  var divsToHide = document.getElementsByClassName("accordion-section");
  for (var i = 0; i < divsToHide.length; i++) {
    divsToHide[i].style.display = "none";

  }

//create a reference to an element with the same name as the target variable
    var content = document.getElementById(target)
     if (content.style.display === "block") {
 //check if the content is currently displayed       
        content.style.display = "none";
 //hide the content       
     } else {
  //display the content      
    content.style.display = "block";
}
}
