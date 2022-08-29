document.querySelector("button").addEventListener("click", function () {
  let num = document.querySelector("input").value;
  if (
    !num.includes("123") &&
    !num.includes("9876") &&
    !num.includes("23456") &&
    !num.includes("e") &&
    !num.includes("09876") &&
    !num.includes("34567") &&
    !num.includes("11111") &&
    !num.includes("22222") &&
    !num.includes("33333") &&
    !num.includes("44444") &&
    !num.includes("55555") &&
    !num.includes("66666") &&
    !num.includes("77777") &&
    !num.includes("88888") &&
    !num.includes("99999") &&
    !num.includes("00000") &&
    num[0] != 0 &&
    num.length == 10
  ) {
    const val = Math.floor(1000 + Math.random() * 9000);
    alert(`Your OTP is ${val}`);
    localStorage.setItem('otp',JSON.stringify(val));
    localStorage.setItem('num',JSON.stringify(num));
    window.open('signin2.html')
  }else{
    alert ('Enter Valid mobile number!');
  }
});
