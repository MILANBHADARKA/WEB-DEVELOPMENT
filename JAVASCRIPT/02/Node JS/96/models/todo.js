import mongoose from 'mongoose';

const kittySchema = new mongoose.Schema({
    name: String,
    desc: String,
    isdone: Boolean
  });

export  const Kitten = mongoose.model('Kitten', kittySchema);
