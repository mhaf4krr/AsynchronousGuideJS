/* Eliminating CallBack Hell Using Named Function as in getUsers there exists displayUsers named Function */

getUsers(1,displayUsers);



function getUsers(id,callback) {
    setTimeout((id)=>{
        callback([{name:'Hyder',age:21},{name:'Boss',age:22}]);
    })
}

function displayUsers(users) {
    users.forEach((user)=>{
        console.log(user);
    })
}