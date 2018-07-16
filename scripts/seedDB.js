const mongoose = require("mongoose");
const db = require("../models");
const itemData = require("./itemData.json");
const championData = require("./championData.json");
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
  }
];

db.user
  .remove({})
  .then(() => db.user.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.insertedIds.length + " users inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

const championDataSeed = [];

const championDataFunction = function() {
  for (const element in championData) {
    let currentChampion = {
      name: element.name,
      tags: element.tags,
      image: element.image,
      stats: element.stats
    };
    championDataSeed.push(currentChampion);
  };
}

championDataFunction();

db.championData
.remove({})
.then(() => db.championData.collection.insertMany(championDataSeed))
.then(data => {
  console.log(data.insertedIds.length + " champions inserted!");
  process.exit(0);
})
.catch(err => {
  console.error(err);
  process.exit(1);
});

const itemDataSeed = [];

const itemDataFunction = function() {
  for (const element in itemData) {
    let currentItem = {
      image: element.image,
      colloq: element.colloq,
      into: element.into,
      name: element.name
    };
    itemDataSeed.push(currentItem);
  };
};

itemDataFunction();

db.itemData
.remove({})
.then(() => db.itemData.collection.insertMany(itemDataSeed))
.then(data => {
  console.log(data.insertedIds.length + " items inserted!");
  process.exit(0);
})
.catch(err => {
  console.error(err);
  process.exit(1);
});
