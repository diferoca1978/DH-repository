const data = [
  {
    name: 'juli',
    status: 'married', 
    hobbies: 'swim' 
  },
  {
    name: 'dario',
    status: 'single', 
    hobbies: 'sports' 
  },
  {
    name: 'nelson',
    status: 'married', 
    hobbies: 'read' 
  }
]

function getData () {
  return new Promise((resolve, reject) => {
    if (data.length == 0) reject(new Error('Data is empty'));
    setTimeout (() => {
      resolve(data);
    }, 3000);
  })
}
getData()
.then(result => console.log(result))
.then(user => console.log(user))
.catch(error => console.log(error.message)) 