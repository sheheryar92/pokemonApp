const mongoose = require('mongoose');



const todoSchema = mongoose.Schema({


    todo: String

})



const todoModel =  mongoose.model( 'todoCollection' , todoSchema  );



module.exports  = todoModel