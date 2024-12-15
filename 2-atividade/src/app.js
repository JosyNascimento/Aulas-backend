const studentModel = require("./models/student.model");
const courseModel = require('./models/courses.model');
const mongoose = require("mongoose");

const environment = async () => {
  await mongoose.connect(
    'mongodb+srv://joseildatn:coder@clustercoder.f3sfq.mongodb.net/escola?retryWrites=true'
  );

  console.log('Conectado ao MongoDB Atlas');
  // await studentModel.create({
  //   first_name: "Maria",
  //   last_name: "Doe",
  //   email: "maria@mail.com",
  //   gender: "F",
  // });


   // Criando um curso diretamente no código
  //  const course = await courseModel.create({
  //   title: 'Curso de Backend com Node.js',
  //   description: 'Curso de Node.js para iniciantes',
  //   difficulty: 5,
  //   topics: ['Node.js', 'JavaScript', 'Template Engine', 'Express'],
  //   professor: 'Josy Nascimento',
  // });

  // Agora, 'course' está definido e você pode exibir o curso criado
  //console.log('Curso criado:', course);

  let students = await studentModel.find();
  students[1].courses.push({ course: '674f9aa3e091b8472627bdd2'})
  let result = await studentModel.updateOne({ _id: '674f99d63bb51c9c787c390e'}, students[1]);
  console.log('result1: ', result);

  students[2].courses.push({ course: '674f9aa3e091b8472627bdd2'})
  result = await studentModel.updateOne({ _id: '674f9aa2e091b8472627bdce'}, students[2]);
  console.log('result2: ', result);

   console.log(students[1].courses);

  // const courses = await courseModel.find();
  // console.log(courses);

  // let students = await studentModel.find().populate('courses.course');
  
  let student = await studentModel.find();
  console.log(students);
  console.log(JSON.stringify(students, null, 2, "\t"));
};

environment();
