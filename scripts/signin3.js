let username = document.getElementById("name");
let email = document.getElementById("email");

document.querySelector("button").addEventListener("click", function () {
  if (
    username.value != "" &&
    !username.value.includes("abc") &&
    !username.value.includes("qwe") &&
    !username.value.includes("zxc") &&
    !username.value.includes("xyz") &&
    !username.value.includes("jkl") &&
    !username.value.includes("123") &&
    !username.value.includes("zxc") &&
    !username.value.includes("aaa") &&
    !username.value.includes("sss") &&
    !username.value.includes("bbb") &&
    !username.value.includes("ccc") &&
    !username.value.includes("zzz") &&
    !username.value.includes("xxx") &&
    !username.value.includes("qqq") &&
    !username.value.includes("www") &&
    !username.value.includes("eee") &&
    email.value.includes("@") &&
    email.value.includes(".com")
  ) {
    let obj = {};
    obj.name = username.value;
    obj.email = email.value;
    localStorage.setItem("user", JSON.stringify(obj));
    localStorage.setItem('isLoggedIn','true');
    alert("Successfully added all the details");
    window.location.href = 'index.html';
  } else {
    alert("Invalid username or email address!");
  }
});
