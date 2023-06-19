require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('6482e5302e206a0aa52e5c76').then((task)=>{
//     console.log(task)
//     return Task.countDocuments({completed:false})
// }).then((c)=>{
//     console.log(c)
// }).catch((e)=>{
//     console.log(e)
// })

const deleteTaskAndCount = async(id)=>{
    const deleteTask = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({completed:false})
    return count;
}

deleteTaskAndCount('648774344b55f1990dd0cfa2').then((count)=>{
   console.log(count)
}).catch((e)=>{
    console.log(e)
})