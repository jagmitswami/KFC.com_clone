let obj = JSON.parse(localStorage.getItem('user'));
document.getElementById('name').innerText = obj.name;
console.log('obj.name: ', obj.name);

let signout = document.getElementById('signOut');
signout.addEventListener('click',function(){
    localStorage.removeItem('user');
    localStorage.removeItem('isLoggedIn');
    window.location.href = 'index.html';
});