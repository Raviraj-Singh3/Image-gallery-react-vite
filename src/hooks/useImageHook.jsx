import axios from "axios";
import { useEffect, useState } from "react";

function useImageHook(){
    const [imageList, setImageList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [offset, setOffset] = useState(0)
    const [photosLink, setPhotosLink] = useState(`https://api.slingacademy.com/v1/sample-data/photos?offset=${offset}&limit=12`)
    
    async function fetchdata(){
        setIsLoading(false);
        const response = await axios.get(photosLink);
        const results = response.data.photos;
        console.log(results);
        const res = results.map((result) => {
            return {
                id: result.id,
                title: result.title,
                url: result.url
            }
        });
        console.log(res);
        setImageList(res);
        setOffset(offset+12);
        setIsLoading(false);
        
    }
    useEffect(() => {
        fetchdata();
    },[photosLink])

    return [imageList, isLoading, offset, photosLink,setPhotosLink];
}
export default useImageHook;