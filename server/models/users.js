const mongoose = require('mongoose');

const villagerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
  },
  house: {
    type: String,
    required: true
  },
  species: {
    type: String,
    reuired: true
  },
  gender: {
    type: String,
    reuired: true
  },
  personality: {
    type: String,
    reuired: true
  },
  hobby: {
    type: String,
    reuired: true
  },
  birthday: {
    type: String,
    reuired: true
  },
  catchphrase: {
    type: String,
    reuired: true
  },
  favoriteSong: {
    type: String,
    reuired: true
  },
  style1: {
    type: String,
    reuired: true
  },
  style2: {
    type: String,
    reuired: true
  },
  color1: {
    type: String,
    reuired: true
  },
  color2: {
    type: String,
    reuired: true
  },
  wallpaper: {
    type: String,
    reuired: true
  },
  flooring: {
    type: String,
    reuired: true
  },
  furnitureList: {
    type: String,
    reuired: true
  },
  filename: {
    type: String,
    reuired: true
  },
  uniqueEntryId: {
    type: String,
    reuired: true
  },
});

mongoose.model('Villager', villagerSchema);
