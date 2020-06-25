function setMB(option)
{
  var vis = document.querySelector(".vis");
  //var option = document.getElementById(this.value);
  
  /*opt0.className = "inv";
  opt1.className = "inv";
  opt2.className = "inv";
  opt3.className = "inv";*/
  
  vis.className = "inv";
  option.className = "vis";
  
  
  //document.getElementById(this.value).className = "vis";
  //document.getElementById("mb_3").className = "vis";
  //alert("Working");

}

function setCPU()
{
    "use strict";
    var vis = document.querySelector(".vis"),
    target = document.getElementById(this.value);
    if (vis !== null) 
    {
      vis.className = "inv";
    }
    if (target !== null) 
    {
      target.className = "vis";
    }
}