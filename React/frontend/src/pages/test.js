import React, {useEffect, useState} from 'react';
import axios from 'axios';

export function Cards(props){
    const name = props.name;
    const [cards, setCards] = useState([]);


    useEffect(()=>{
        async function getCard(){
            const response = await axios.get(`https://api.magicthegathering.io/v1/cards?name=${name}`);
            console.log(response.data.cards);
            return setCards(response.data.cards);
        }
        getCard();
    },[name]);
    
    return (
        
        <div>
           {
               cards.map((card)=>{
                card.imageUrl = card.imageUrl !== undefined ? card.imageUrl : "";

                    return <img src={card.imageUrl} alt="Card"/>
               })
            }
        </div>
    );
}
