const { getCurso } = require('./controller');
const userDao = require('./dao');

module.exports = {
    
    async getCurso(id){
        return userDao.getCurso(id);
    },

    async getUser(id){
        return userDao.getUser(id);
    }
};