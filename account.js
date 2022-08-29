let obj = JSON.parse(localStorage.getItem('user'));
document.getElementById('name').innerText = obj.name;

let signout = document.getElementById('signOut');
signout.addEventListener('click',function(){
    localStorage.removeItem('user');
    localStorage.removeItem('isLoggedIn');
    window.location.href = 'index.html';
});

let orderedItems = JSON.parse(localStorage.getItem('orderedItems')) || [];
let x = document.querySelector('.dropdown-content');
if(orderedItems.length>0){
    for(let i=orderedItems.length-1; i>=orderedItems.length-3; i--){
        if(orderedItems[i]!==undefined){
            let h3 = document.createElement('h3');
            h3.innerText = orderedItems[i].title;
            x.append(h3);
        }
    }
}