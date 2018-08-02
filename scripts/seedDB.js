const mongoose = require("mongoose");
const db = require("../models");
const items = require("./itemData.json");
const champions = require("./championData.json");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/LoLprep"
);

const userSeed = [
  {
    username: "Admin",
    password: "123easystreet",
    admin: true, 
    date: new Date(Date.now())
  },
  {
    username: "testUser",
    password: "123easystreet",
    admin: false, 
    date: new Date(Date.now())
  }
];

db.user
  .remove({})
  .then(() => db.user.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.insertedCount + " users inserted!");
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

const championDataSeed = [];

const championDataFunction = function() {
  for (let element in champions) {
    let currentChampion = {
      name: champions[element].name,
      tags: champions[element].tags,
      image: champions[element].image.full,
      stats: champions[element].stats
    };
    championDataSeed.push(currentChampion);
  };
}

championDataFunction();

db.championData
.remove({})
.then(() => db.championData.collection.insertMany(championDataSeed))
.then(data => {
  console.log(data.insertedCount + " champions inserted!");
})
.catch(err => {
  console.error(err);
  process.exit(1);
});

const itemDataSeed = [];

const itemDataFunction = function() {
  for (let element in items) {
    let currentItem = {
      image: items[element].image.full,
      colloq: items[element].colloq,
      into: items[element].into,
      name: items[element].name
    };
    itemDataSeed.push(currentItem);
  };
};

itemDataFunction();

db.itemData
.remove({})
.then(() => db.itemData.collection.insertMany(itemDataSeed))
.then(data => {
  console.log(data.insertedCount + " items inserted!");
  process.exit(0);
})
.catch(err => {
  console.error(err);
  process.exit(1);
});
