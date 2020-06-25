function setMB(opt0, opt1, opt2, opt3)
{
  var vis = document.querySelector(".vis");

  
  /*var opt0 = document.getElementById(mb_0);
  var opt1 = document.getElementById(mb_1);
  var opt2 = document.getElementById(mb_2);
  var opt3 = document.getElementById(mb_3);*/
  
  opt0.className = "inv";
  opt1.className = "inv";
  opt2.className = "inv";
  opt3.className = "inv";
  
  var option = document.getElementById(op);
  option.className = "vis";

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