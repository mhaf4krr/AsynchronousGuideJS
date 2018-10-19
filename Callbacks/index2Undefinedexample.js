console.log('Before')

const user = getUser(1);

console.log(user);


console.log('After');

/* Before , undefined , After*/

function getUser(id) {
    
    // this replicates a database which takes 2 seconds for fetching results
    setTimeout((id)=>{
        console.log('Reading user from DB');
        return {id:id,username:'Hyder'}
    },2000)
}

/* in getUser function when id is passed the set time out is scheduled
for 2 seconds from the time and when the control reaches to the end of function set timeout hs
not executed , as a resullt user is undefined.

It means function returns control earlier to the call without waiting for set Timeout to execute first


*/