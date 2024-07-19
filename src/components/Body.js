import RestaurantCardContainer from "./RestaurantCardContainer";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {

    const [resList, setResList] = useState([])
    const [searchText, setSearchText] = useState('')
    const [filteredResList, setFilteredResList] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async() => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.007707545177679&lng=77.73299854248762&collection=83649&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null")

        const json = await data.json();
        console.log(json)

        setResList(json?.data?.cards)

        setFilteredResList(json?.data?.cards)

    }

    const onlineStatus = useOnlineStatus();

    if(onlineStatus === false){
        return <h1>There is a problem with your internet connection. Please Check and come back soon.</h1>
    }

    return resList.length === 0 ? <Shimmer /> : (
        <div className='body'>
            <div className='filter'>
                <input className='border-2 border-blue-200 m-4 p-1' type="search" name="Search" value={searchText} onChange={(e) => setSearchText(e.target.value)}/>
                <button  onClick={() => {
                   filteredRes = resList.filter(res => (res.card.card?.info?.name).toLowerCase().includes(searchText.toLowerCase()))
                    setFilteredResList(filteredRes)
                    
                }} className="bg-green-200 p-1 m-4 rounded-md">Search</button>
                <button className='bg-neutral-400 p-1 m-4 rounded-md' onClick={
                    () => {
                        if(resList)
                        topRatedResList = resList.filter(res => res.card.card?.info?.avgRating > 4)
                        setResList(topRatedResList)
                    }
                    }>Top rated restaurant</button>
            </div>
            <div className='flex flex-wrap m-4 p-4'>
                {
                   filteredResList.map(restaurant => <Link to={"/restaurants/"+ restaurant?.card?.card?.info?.id } style={{textDecoration: 'none'}}>
                    <RestaurantCardContainer listOfRestaurants = {restaurant} />
                   </Link>) 
                }
                
            </div>
        </div>
    )
}

export default Body;