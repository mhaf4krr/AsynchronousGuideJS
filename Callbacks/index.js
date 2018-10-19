console.log('Before')
/* Set timeout is an example of non blocking function , it just schedules a task */
setTimeout(()=>{
    console.log('Loading user from DB')
},2000)

console.log('After');

/* Before , After , (2 sec) Loading user from DB */