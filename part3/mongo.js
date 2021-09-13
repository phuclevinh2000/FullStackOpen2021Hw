const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('Please provide the password as an argument: node mongo.js <password>')
  process.exit(1)
}

const password = process.argv[2]  //run mongoose with cmd node mongo.js password (password is the password, not password)

const url =
  `mongodb+srv://fullstack:${password}@cluster0.bg6jr.mongodb.net/phonebook?retryWrites=true&w=majority`

mongoose.connect(url)

const phonebookSchema = new mongoose.Schema({
  name: String,
  number: String,
})

const Phonebook = mongoose.model('Phonebook', phonebookSchema)

if(process.argv[3]) {
  const name = process.argv[3]
  const number = process.argv[4]
  const phonebook = new Phonebook({
    name: name,
    number: number
  })

  phonebook.save().then(result => {
    console.log(`added ${name} number ${number} to phonebook`)
    mongoose.connection.close()
  })
} else {
  Phonebook.find({}).then(result => {
    result.forEach(phone => {
      console.log(phone)
    })
    mongoose.connection.close()
  })
}



