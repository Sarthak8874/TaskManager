require("../src/db/mongoose");
const User = require("../src/models/user");

// User.findByIdAndUpdate("6482e3a3e7744f3ad4f0dfb2", { age: "1" })
//   .then((user) => {
//     console.log(user);
//     return User.countDocuments({ age: 1 });
//   })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

  const updateAgeAndCount = async (id,age)=>{
     const user = await User.findByIdAndUpdate(id,{age: age})
     const count = await User.countDocuments({age:age})
     return count
  }
  updateAgeAndCount('6487711c1c2e54cd1944f007',3).then((count)=>{
    console.log(count)
  }).catch((e)=>{
  console.log(e)
  })