import { RES_IMAGE } from "../utils/constants"

const RestaurantCardContainer = (props) => {
        const { listOfRestaurants } = props
        const { info } = listOfRestaurants?.card?.card ?? {}

        if(!info){ 
            return null;
        }
        const {name, cloudinaryImageId, cuisines, costForTwo, avgRating, sla} = info ?? {}
            return(
                <div className="border-2 border-black hover:bg-gray-400 rounded-lg h-[410px] w-[250px] m-4 p-4">
                    <img className='rounded-lg bg-slate-300 h-40 w-52' alt='res-food' src={ RES_IMAGE + cloudinaryImageId} />
                    <h3 className="font-bold py-4 text-lg">{name}</h3>
                    <h4 className="truncate-hidden">{cuisines.join(', ')}</h4>
                    <h4>{avgRating}</h4>
                    <h4>{costForTwo}</h4>
                    <h4>{sla.deliveryTime} mins</h4>
        
                </div>
            )
    
}

export default RestaurantCardContainer;