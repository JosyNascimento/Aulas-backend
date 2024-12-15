const mongoose = require('mongoose');
const usersModel = require('./models/users.model');

const environment = async () => {
  await mongoose.connect('mongodb+srv://joseildatn:coder@clustercoder.f3sfq.mongodb.net/usersdb?retryWrites=true');

  let users = await usersModel.paginate({gender: 'Female'}, { page: 2, limit: 10 });

  console.log(users);
};

environment();