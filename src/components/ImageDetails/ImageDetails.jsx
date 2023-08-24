import { useParams } from "react-router-dom";
import axios from 'axios'
import { useEffect, useState } from "react";
function ImageDetails(){
    const [imageDetails, setImageDetails] = useState({})
    const {id} = useParams()

    async function downloadPhotos(){
        const response = await axios.get(`https://api.slingacademy.com/v1/sample-data/photos/${id}`);
        console.log(response.data.photo)
        const responseData = response.data.photo;

        setImageDetails({
            title: response.data.photo.title,
            description: response.data.photo.description,
            url: response.data.photo.url
        })
            
        console.log(responseData)
    }
    useEffect(()=>{
        downloadPhotos()
    },[])

    return(
        <div className="text-center flex items-center justify-center h-screen">
            <div className="bg-gray-100 w-auto border-y-zinc-600 rounded-2xl p-6">

            <img src={imageDetails.url} alt="photoPreview" 
                    className=" ml-auto mr-auto rounded-2xl shadow-md"/>

            <h1 className="font-bold text-2xl m-3 mb-4">
                {imageDetails.title}
            </h1>
                <p className="">
                   <span className="font-bold text-xl">
                        Description:
                    </span>
                    <span className="font-serif"> {imageDetails.description}</span> 
                    
                </p>
            </div>
            
        </div>
    )
}
export default ImageDetails;