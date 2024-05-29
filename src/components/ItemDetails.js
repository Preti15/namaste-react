import { Link } from "react-router-dom"
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { ITEM_IMAGE } from "../utils/constants";
import { useParams } from "react-router-dom";
import { DETAIlED_ITEM_LIST } from "../utils/constants";

const ItemDetails = () => {

    const [resInfo, setResInfo] = useState(null)
    const {resID} = useParams()
    console.log(resID)


    useEffect( () => {fetchMenu()}, [])

    const fetchMenu = async () => {
        const menu = await fetch(DETAIlED_ITEM_LIST + resID)

        const menuJson = await menu.json()

        console.log(menuJson)

        setResInfo(menuJson)
    }

    if(resInfo === null){
        return <Shimmer />
    }

    const {name, avgRating, costForTwoMessage} = resInfo?.data?.cards[2]?.card?.card?.info

    const { itemCards } = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card

    console.log(itemCards)

    return(
        <div>
            <Link to="/restaurants/:resID" style={{textDecoration: 'none'}}>
                <h1>{name}</h1>
                <h2>{avgRating} - {costForTwoMessage}</h2>
                <div className='menuCard'>
                    {itemCards.map((item) => {
                        const {name, defaultPrice, description, price, imageId} = item.card.info
                        return(
                            <div className="itemCard">
                                <div>
                                <h3>{name}</h3>
                                <h3>Rs {defaultPrice/100 || price/100}</h3>
                                <h4 className="itemDescription">{description}</h4>
                                </div>
                                <div >
                                    <img className="itemImage" src={ITEM_IMAGE + imageId}/>
                                </div>
                            </div>
                            
                        )

                    })}
                </div>
            </Link>
        </div>
    )
}

export default ItemDetails;

/**data.cards[2].card.card.info.name 
 * data.cards[2].card.card.info.avgRating
 * data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards[1].card.info.name
 * data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards[0].card.info.name
 * data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards
*/