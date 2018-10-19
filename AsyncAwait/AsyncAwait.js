
function getUsers(id) {

    console.log('Getting Users');

    return new Promise((resolve,reject)=>
    {
        /* Some Async Work */
        setTimeout(() => {
            resolve({name:'Hyder',repo:5});
            reject(new Error('getUsers'))
        }, 3000);
    })
}

function showRepo(repo)
{
    console.log('Getting Repo')
    return new Promise((resolve,reject)=>{

        setTimeout(() => {
            resolve(repo)
            reject(new Error('showRepo')) 
        }, 2000);
        
    })
}


async function displayInfo(id) {
    try {
    const users = await getUsers(id);
    const repo = await showRepo(users);
    console.log(repo);

    } catch (error) {
        
        console.log(`error occured at : ${error.message}`)
    }
}

/* Run code call */

displayInfo(1);