/* Using callback to get the user Object */

console.log('Before')

getUser(1,(user)=>{
    console.log(user);
});




console.log('After');

/* Before , undefined , After*/


/* A callback is a function which we call when result is ready  */

function getUser(id,callback) {
    
    // this replicates a database which takes 2 seconds for fetching results
    setTimeout((id)=>{
        console.log('Reading user from DB');
        callback ({id:id,username:'Hyder'})
    },2000)
}
