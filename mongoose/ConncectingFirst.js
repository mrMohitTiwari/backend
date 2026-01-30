const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://mt0988145_db_user:chalbhag@cluster0.f8znkl1.mongodb.net/userappnew').then(() => console.log("mongoose connected Suceefully")).catch(() => console.log("Error while connecting to Server"))

const Cat = mongoose.model('Cat', { name: String });
const kitty = new Cat({ name: "Zildijan" });
kitty.save().then(() => console.log("meow"))
