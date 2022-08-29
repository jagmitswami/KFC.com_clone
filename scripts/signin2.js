let otp = JSON.parse(localStorage.getItem("otp"));
var timeleft = 15;
let isExpired = false;
var downloadTimer = setInterval(function () {
  if (timeleft <= 0) {
    isExpired = true;
    clearInterval(downloadTimer);
    document.getElementById("showStatus").innerText = "OTP Expired ⓘ";
    document.getElementById("showStatus").style.color='red'
    localStorage.removeItem("otp");
    document.querySelector("input").disabled = true;
    document.querySelector("button").innerText = "Try Again";
  } else {
    document.getElementById("time").innerText = timeleft;
  }
  timeleft -= 1;
}, 1000);

let num = JSON.parse(localStorage.getItem("num"));
document.getElementById("number").innerText = num;

document.querySelector("button").addEventListener("click", function () {
  if (!isExpired) {
    let val = document.querySelector("input").value;
    if (val == otp && val != "") {
      alert("Login Successfull");
      localStorage.removeItem("otp");
      window.location.href = 'signin3.html';
    } else {
      alert("Invalid OTP!");
      return;
    }
  }else{
    window.location.href = "signin.html";
  }
});

document.querySelector("#resend").addEventListener("click", function () {
    let num = document.querySelector("input").value;
      const val = Math.floor(1000 + Math.random() * 9000);
      alert(`Your OTP is ${val}`);
      localStorage.setItem('otp',JSON.stringify(val));
      window.open('signin2.html')
  });
  