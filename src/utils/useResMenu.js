import { useEffect, useState } from "react";
import { DETAIlED_ITEM_LIST } from "../utils/constants";

const useResMenu = (resID) => {
    const [resInfo, setResInfo] = useState(null)

    useEffect(() => {
        fetchResInfo()
    },[])

    const fetchResInfo = async() => {
        const data = await fetch(DETAIlED_ITEM_LIST + resID)
        const json = await data.json();
        setResInfo(json)
    }
      

    return resInfo
}

export default useResMenu;