
getUser(1)
.then(user=> getRepo(user))
.then(repo => console.log(repo)).catch(err => console.log(err.message))




function getUser(id) {
    return new Promise ((resolve,reject)=>{

        setTimeout(() => {
            resolve({id:id,name:'Hyder',age:20})
            reject(new Error('Error has occured at getUser'));
        }, 2000);
    })
}


function getRepo(user){
    return new Promise((resolve,reject)=>{
        setTimeout((user)=>{
            resolve([{name:'Promise Basics',commits:5}],{name:'Promise Advanced',commits:5})
            reject(new Error('Error has occured at getRepo'));
        })
    })
}