
const mongoose = require("mongoose");  
const bcrypt = require("bcrypt");  
const salt = bcrypt.genSaltSync(10); 
const Schema = mongoose.Schema;

const adminSchema = new Schema ({
  name: String,
  
  username: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
},
    password: {
      type: String,
      required: true
    },
    admin: {
      type: Boolean,
      default: false
    }
});

adminSchema.pre("save", function(next) {  
  this.password = bcrypt.hashSync(this.password, salt)
  next();
});

adminSchema.methods.auth = function(passwordAttempt, cb){
  bcrypt.compare(passwordAttempt, this.password, (err, isMatch) => {
    if(err) {
      console.log(err);
      cb(false);
    } else {
      cb(isMatch);
    }
  });
}

adminSchema.methods.withoutPassword = function(){
  const admin = this.toObject();
  delete admin.password;
  return admin;
}

module.exports = mongoose.model("Admin", adminSchema);