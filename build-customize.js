function setMB()
{
    "use strict";
    var vis = document.querySelector(".vis");
    var option = document.getElementById(this.value);
    if (option == 0) 
    {
      vis.className = "inv";
    }
    if (target !== null) 
    {
      option.className = "vis";
    }
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