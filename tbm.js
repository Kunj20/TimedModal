var m = document.getElementById("modal");
var c= document.getElementById("closeButton");
setTimeout(function(){m.style.display= "block";}, 3000);
c.addEventListener("click", function() {
  m.style.display= "none";
})
