const mongoose = require('mongoose');

const DB = process.env.DATABASE;

mongoose
  .connect('mongodb+srv://root1314:9492843078@cluster0.lajoo.mongodb.net/natours?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useCreateIndex: true,
    // useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('connection sucessful');
  })
  .catch((err)=>{
      console.log("err here",err)
  })

const tourSchema = new mongoose.Schema({
  name: { type: String, required: [true, 'name is mandatory'], unique: true },
  rating: { type: Number, default: 4.5 },
  price: { type: Number, required: [true, 'price is mandatory'] },
});

const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;
