//BUTTON SCRIPTS
function myBudget() {
    document.getElementById("mb").selectedIndex = "1";
    var vis = document.querySelector(".visMB"),
      option = document.getElementById("mb_1");
    vis.className = "inv";
    option.className = "visMB";
  
    document.getElementById("cpu").selectedIndex = "1";
    var vis = document.querySelector(".visCPU"),
      option = document.getElementById("cpu_1");
    vis.className = "inv";
    option.className = "visCPU";
  
    document.getElementById("gpu").selectedIndex = "1";
    var vis = document.querySelector(".visGPU"),
      option = document.getElementById("gpu_1");
    vis.className = "inv";
    option.className = "visGPU";
  
    document.getElementById("ram").selectedIndex = "1";
    var vis = document.querySelector(".visRAM"),
      option = document.getElementById("ram_1");
    vis.className = "inv";
    option.className = "visRAM";
  
    document.getElementById("psu").selectedIndex = "1";
    var vis = document.querySelector(".visPSU"),
      option = document.getElementById("psu_1");
    vis.className = "inv";
    option.className = "visPSU";
  
    document.getElementById("cool").selectedIndex = "1";
    var vis = document.querySelector(".visCool"),
      option = document.getElementById("cool_1");
    vis.className = "inv";
    option.className = "visCool";
  
    document.getElementById("case").selectedIndex = "1";
    var vis = document.querySelector(".visCase"),
      option = document.getElementById("case_1");
    vis.className = "inv";
    option.className = "visCase";
  }
  
  function myMidRange() {
    document.getElementById("mb").selectedIndex = "2";
    var vis = document.querySelector(".visMB"),
      option = document.getElementById("mb_2");
    vis.className = "inv";
    option.className = "visMB";
  
    document.getElementById("cpu").selectedIndex = "2";
    var vis = document.querySelector(".visCPU"),
      option = document.getElementById("cpu_2");
    vis.className = "inv";
    option.className = "visCPU";
  
    document.getElementById("gpu").selectedIndex = "2";
    var vis = document.querySelector(".visGPU"),
      option = document.getElementById("gpu_2");
    vis.className = "inv";
    option.className = "visGPU";
  
    document.getElementById("ram").selectedIndex = "2";
    var vis = document.querySelector(".visRAM"),
      option = document.getElementById("ram_2");
    vis.className = "inv";
    option.className = "visRAM";
  
    document.getElementById("psu").selectedIndex = "2";
    var vis = document.querySelector(".visPSU"),
      option = document.getElementById("psu_2");
    vis.className = "inv";
    option.className = "visPSU";
  
    document.getElementById("cool").selectedIndex = "2";
    var vis = document.querySelector(".visCool"),
      option = document.getElementById("cool_2");
    vis.className = "inv";
    option.className = "visCool";
  
    document.getElementById("case").selectedIndex = "2";
    var vis = document.querySelector(".visCase"),
      option = document.getElementById("case_2");
    vis.className = "inv";
    option.className = "visCase";
  }
  
  function myHighPerformance() {
    document.getElementById("mb").selectedIndex = "3";
    var vis = document.querySelector(".visMB"),
      option = document.getElementById("mb_3");
    vis.className = "inv";
    option.className = "visMB";
  
    document.getElementById("cpu").selectedIndex = "3";
    var vis = document.querySelector(".visCPU"),
      option = document.getElementById("cpu_3");
    vis.className = "inv";
    option.className = "visCPU";
  
    document.getElementById("gpu").selectedIndex = "3";
    var vis = document.querySelector(".visGPU"),
      option = document.getElementById("gpu_3");
    vis.className = "inv";
    option.className = "visGPU";
  
    document.getElementById("ram").selectedIndex = "3";
    var vis = document.querySelector(".visRAM"),
      option = document.getElementById("ram_3");
    vis.className = "inv";
    option.className = "visRAM";
  
    document.getElementById("psu").selectedIndex = "3";
    var vis = document.querySelector(".visPSU"),
      option = document.getElementById("psu_3");
    vis.className = "inv";
    option.className = "visPSU";
  
    document.getElementById("cool").selectedIndex = "3";
    var vis = document.querySelector(".visCool"),
      option = document.getElementById("cool_3");
    vis.className = "inv";
    option.className = "visCool";
  
    document.getElementById("case").selectedIndex = "3";
    var vis = document.querySelector(".visCase"),
      option = document.getElementById("case_3");
    vis.className = "inv";
    option.className = "visCase";
  }
  
  //DROPDOWN SELECTION SCRIPT
  //MB
  document.getElementById("mb").addEventListener("change", function() {
    "use strict";
    var vis = document.querySelector(".visMB"),
      option = document.getElementById(this.value);
  
    vis.className = "inv";
    option.className = "visMB";
  });
  //CPU
  document.getElementById("cpu").addEventListener("change", function() {
    "use strict";
    var vis = document.querySelector(".visCPU"),
      option = document.getElementById(this.value);
  
    vis.className = "inv";
    option.className = "visCPU";
  });
  //GPU
  document.getElementById("gpu").addEventListener("change", function() {
    "use strict";
    var vis = document.querySelector(".visGPU"),
      option = document.getElementById(this.value);
  
    vis.className = "inv";
    option.className = "visGPU";
  });
  //RAM
  document.getElementById("ram").addEventListener("change", function() {
    "use strict";
    var vis = document.querySelector(".visRAM"),
      option = document.getElementById(this.value);
  
    vis.className = "inv";
    option.className = "visRAM";
  });
  //PSU
  document.getElementById("psu").addEventListener("change", function() {
    "use strict";
    var vis = document.querySelector(".visPSU"),
      option = document.getElementById(this.value);
  
    vis.className = "inv";
    option.className = "visPSU";
  });
  //Cooling
  document.getElementById("cool").addEventListener("change", function() {
    "use strict";
    var vis = document.querySelector(".visCool"),
      option = document.getElementById(this.value);
  
    vis.className = "inv";
    option.className = "visCool";
  });
  //Case
  document.getElementById("case").addEventListener("change", function() {
    "use strict";
    var vis = document.querySelector(".visCase"),
      option = document.getElementById(this.value);
  
    vis.className = "inv";
    option.className = "visCase";
  });
  