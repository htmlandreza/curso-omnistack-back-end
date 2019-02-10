const Tweet = require('../models/Tweet');

module.exports = {
    async index(req, res){
        // listagem
        // ordenar por data de criação com os mais novos me cima
        const tweets = await Tweet.find({}).sort('-createdAt'); 

        return res.json(tweets);
    },

    async store(req, res){
        // criação de novos registros
        const tweet = await Tweet.create(req.body);

        req.io.emit('tweet', tweet); // nome do evento e objeto

        return res.json(tweet);
    }
};