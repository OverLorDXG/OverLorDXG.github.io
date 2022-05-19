   function lp(){
      let htmlCode = document.querySelector(".container #html").value;
      let cssCode = "<style>"+document.querySelector(".container #css").value+"</style>";
      let jsCode = document.querySelector(".container #js").value;
      let output = document.querySelector("#output");
      output.contentDocument.body.innerHTML = htmlCode+cssCode;
      output.contentWindow.eval(jsCode)
    }
    document.querySelector(".container #html").addEventListener("keyup", lp);
    document.querySelector(".container #css").addEventListener("keyup", lp);
    document.querySelector(".container #js").addEventListener("keyup", lp);
    
    document.querySelector(".container #html").addEventListener("keyup", getStarted);
    
    function getStarted(){
      var g1 = document.getElementById("getStarted1");
      var g2 = document.getElementById("getStarted2");
      g1.style.opacity = 0;
      g1.style.transition = "opacity 1s";
      g2.style.opacity = 0;
      g2.style.transition = "opacity 1s";
      setTimeout(() => {
        g1.style.zIndex = -1;
        g2.style.zIndex = -1;
      }, 1000)
    }
    
    function otuner(){
      var g1 = document.getElementById("getStarted1");
      var g2 = document.getElementById("getStarted2");
      
      g1.style.opacity = 1;
      g1.style.transition = "opacity 1s"
      g2.style.opacity = 1;
      g2.style.transition = "opacity 1s"
      
    }