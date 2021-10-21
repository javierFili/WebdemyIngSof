//Data access Object generador de código query para interactuar  con la base de datos

const { userCollection } = require('../../services/NeDb');
const { getUser } = require('./model');

module.exports = {
    async getUser(id){
        return new Promise((resolve, reject) => userCollection.findOne({ _id: id }, (err, docs)  => {
            if (err) return reject(err);
            return resolve(docs);
        }));
    }
}