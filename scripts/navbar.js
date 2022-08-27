function openNav() {
    document.getElementById("mySidebar").style.width = "100%";
    document.getElementById("burger").style.marginLeft = "250px";
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("sidebar").style.zIndex="-23"
    
  }
  
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("burger").style.marginLeft= "0";
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("sidebar").style.zIndex="56"

  }

