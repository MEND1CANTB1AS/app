function setMB(opt0, opt1, opt2, opt3)
{
  var vis = document.querySelector(".vis");
  var option = document.getElementById(this.value);
  
  /*opt0.className = "inv";
  opt1.className = "inv";
  opt2.className = "inv";
  opt3.className = "inv";*/
  
  vis.className = "inv";
  option.className = "vis";
  
  if (option == "mb_1")
    document.querySelector(".inv").className = "vis";

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