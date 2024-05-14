import { RES_IMAGE } from "../utils/constants"

const RestaurantCardContainer = (props) => {
        const { listOfRestaurants } = props
        const { info } = listOfRestaurants?.card?.card ?? {}

        if(!info){ 
            return null;
        }
        const {name, cloudinaryImageId, cuisines, costForTwo, avgRating, sla} = info ?? {}
            return(
                <div className='resCard'>
                    <img className='food-image' alt='res-food' src={ RES_IMAGE + cloudinaryImageId} />
                    <h3>{name}</h3>
                    <h4>{cuisines.join(', ')}</h4>
                    <h4>{avgRating}</h4>
                    <h4>{costForTwo}</h4>
                    <h4>{sla.deliveryTime} mins</h4>
        
                </div>
            )
    
}

export default RestaurantCardContainer;