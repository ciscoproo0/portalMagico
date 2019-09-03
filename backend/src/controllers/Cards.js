const axios = require('axios');
const mtg = require('mtgsdk');

module.exports = {
    async index(req, res){
            // partial name match
        let card = req.body.card;
           await mtg.card.where({name: `${card}`})
            .then(results => {
            console.log('chegou');
            return res.json(results);
        });
        // const result = await axios.get(`http://api.magicthegathering.io/v1/cards?name=${card}`)
        // .then((response)=>{
        //     console.log('chegou');
        //     return response.data;
        // })
        // .catch((error)=>{return error});
        // return res.json(result);
    }
}