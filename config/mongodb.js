const {MongoClient} = require('mongodb');


const url = 'mongodb://wahyudin:asdasdasd@localhost:27017?authSource=admin';
const client = new MongoClient(url);

(async () => {
  try{
    await client.connect();
    console.log('koneksi ke mongodb berhasil');
  }catch(e) {
    console.log(e);
  }

})();

const db =  client.db('eduworkstore1');

module.exports = db;