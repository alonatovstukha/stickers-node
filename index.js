//npm run dev

const express = require('express');
const mongoose = require ('mongoose');
const handlebars = require('express-handlebars');
const router = require('./routes/routes.js')
const path = require('path')
const bodyParser = require('body-parser');

const URL = 'mongodb+srv://Stickers:Stickers@cluster0.msxfn.mongodb.net/stickers?retryWrites=true&w=majority';
const PORT = process.env.PORT || 3000;

const app = express();

const hbs = handlebars.create({
  defaultLayout: 'board',
  extname: 'hbs'
})

// регистрируем движок
app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs');
app.set('views', 'views');

//чтобы видеть title созданного sticker
// app.use(express.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 

app.use(router);
app.use(express.static(path.join(__dirname, 'public')));



async function start() {
  try {
    await mongoose.connect(URL, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    });
    app.listen(PORT, () => {
      console.log(`The server has been started on port ${PORT}...`)
     
    });
  } catch (error) {
    console.log(error);
  }
}

start();