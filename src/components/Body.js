import RestaurantCardContainer from "./RestaurantCardContainer";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {

    const [resList, setResList] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async() => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.007707545177679&lng=77.73299854248762&collection=83649&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null")

        const json = await data.json();

        setResList(json?.data?.cards)

    }

    if(resList.length === 0){
       return <Shimmer />
    }

    return(
        <div className='body'>
            <div className='filter'>
                <button className='filter-btn' onClick={
                    () => {
                        if(resList)
                        topRatedResList = resList.filter(res => res.card.card?.info?.avgRating > 4)
                        setResList(topRatedResList)
                    }
                    }>Top rated restaurant</button>
            </div>
            <div className='res-container'>
                {
                   resList.map(restaurant => <RestaurantCardContainer listOfRestaurants = {restaurant} />) 
                }
                
            </div>
        </div>
    )
}

export default Body;