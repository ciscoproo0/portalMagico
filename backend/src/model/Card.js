const {Schema, model} = require('mongoose');

const CardSchema = new Schema({
    name:[{
        type: Array,
        lowercase: true
    }],
    names:[{
        _id: false,
        type: String,
        lowercase: true
    }],
    manaCost: {
        type: String
    },
    cmc:{
        type: String
    },
    colors:[{
        _id: false,
        type: String,
        lowercase: true
    }],
    colorIdentity:[{
        _id: false,
        type: String
    }],
    type:{
        type: String,
        lowercase: true
    },
    supertypes:[{
        _id: false,
        type: String,
        lowercase: true
    }],
    types:[{
        _id: false,
        type: String,
        lowercase: true
    }],
    subtypes:[{
        _id: false,
        type: String,
        lowercase: true
    }],
    rarity:{        
        type: String,
        lowercase: true
    },
    setAcronym:{
        type: String
    },
    setName:{
        type: String,
        lowercase: true
    },
    text:{
        type: String,
        lowercase: true
    },
    flavor:{
        type: String,
        lowercase: true
    },
    artist:{
        type: String,
        lowercase: true
    },
    number:{
        type: String,
        lowercase: true
    },
    power:{
        type: String 
    },
    toughness:{
        type: String 
    },
    layout:{
        type: String
    },
    multiverseid:{
        type: String
    },
    imageUrl:{
        type: String 
    },
    rulings:[{
        _id: false,
        type: Array,
        lowercase: true
    }],
    foreignNames:[{
        _id: false,
        type: Array,
        lowercase: true
    }],
    printings:[{
        _id: false,
        type: String
    }],
    originalText:{
        type: String,
        lowercase: true
    },
    originalType:{
        type: String,
        lowercase: true
    },
    legalities:[{
        _id: false,
        type: Array,
    }],
    id:{
        type: String 
    }
}, {timestamps: true});

let Card = model("Card", CardSchema)
module.exports = Card;