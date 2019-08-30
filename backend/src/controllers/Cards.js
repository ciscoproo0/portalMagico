const axios = require('axios');
const mtg = require('mtgsdk')

module.exports = {
    async index(req, res){
            // partial name match
        let card = req.body.card;
           await mtg.card.where({name: `${card}`})
            .then(results => {
            return res.json(results);
        });
    }
}