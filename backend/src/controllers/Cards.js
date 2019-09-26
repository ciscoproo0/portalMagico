const axios = require('axios');
const Card = require('../model/Card');
const fs = require('fs');

module.exports = {
    
    //procura cards na base
    async index(req, res){
    //   const consult = req.body.card;
      const consult = 'Intet';

      const getCard = await Card.find({
        $or:[
            {name: {$regex: `.*${consult}.*`}},
            // {'foreignNames.name': {$regex: `.*${cardName}.*`}}

        ]
    }, (err, data)=>{
        if(data){
        return data;
        }else{
            return `erro no db ${err}`;
        }
      });

      return res.json(getCard);
    },
    async store(req, res){
        const cardName = req.body.card;

        //Busca se o card já está na base
        const cardExists = await Card.find({
            $or:[
                {name: {$regex: `.*${cardName}.*`}},
                // {'foreignNames.name': {$regex: `.*${cardName}.*`}}

            ]
        }, (err, data)=>{
            if(data){
            return data;
            }else{
                return `erro no db ${err}`;
            }
        });

        //Se o card não existe, cria
        if(cardExists == false){
            console.log("Card inexistente na base");

            const response = await axios.get(`http://api.magicthegathering.io/v1/cards?name=${cardName}`);
            
            const cards = response.data.cards; 
            const countPages = Math.ceil(response.headers['total-count'] /100);
                //se a buxca trouxer mais que 100 cards, é necessário paginar
                if(countPages > 1){
                    for (let i=2; i<=countPages; i++){
                        const res = await axios.get(`https://api.magicthegathering.io/v1/cards?name=${cardName}&page=${i}`)
                            cards.push(res.data.cards);
                    }
                }
            
                //Valida se o nome do card existe na base da Wizards e salva
                if(cards == false){
                return res.json("Card does not exists")
                }else{
                    for await (card of cards){
                        Card.create({
                        name: card.name,
                        cmc:card.cmc,
                        names: card.names,
                        manaCost: card.manaCost,
                        colors:card.colors,
                        colorIdentity:card.colorIdentity,
                        type:card.type,
                        supertypes:card.supertypes,
                        types:card.types,
                        subtypes:card.subtypes,
                        rarity:card.rarity,
                        setAcronym:card.set,
                        setName:card.setName,
                        text:card.text,
                        flavor:card.flavor,
                        artist:card.artist,
                        number:card.number,
                        power:card.power,
                        toughness:card.toughness,
                        layout:card.layout,
                        multiverseid:card.multiverseid,
                        imageUrl:card.imageUrl,
                        rulings:[card.rulings],
                        foreignNames:[card.foreignNames],
                        printings:card.printings,
                        originalText:card.originalText,
                        originalType:card.originalType,
                        legalities:[card.legalities],
                        id:card.id
                        });
                        console.log("criado");
                    }
                }
                return res.json(cards); 
        }else{
            return res.json(cardExists);
        }
    }
}