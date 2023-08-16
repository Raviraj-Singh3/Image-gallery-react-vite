import axios from 'axios';
import { useEffect, useState } from 'react';
import ImageView from '../ImageView/ImageView';

function ImageGallary(){

    const [imageList, setImageList] = useState([])

    async function fetchdata(){
        const response = await axios.get('https://api.slingacademy.com/v1/sample-data/photos?limit=20');
        // console.log(response.data.photos);
        const results = response.data.photos;
        // const resultPromise = results.map((result) => axios.get(result.url));
        // const resultData = await axios.all(resultPromise);
        const res = results.map((result) => {
            return {
                id: result.id,
                title: result.title,
                url: result.url
            }
        });
        console.log(res);
        setImageList(res);
    }
    

    useEffect(() => {
        fetchdata();
    },[])
    

    return( 
        <div className='text-center font-serif text-2xl text-white p-5 bg-blue-500'>
            <h1>
                Images
            </h1>
        
    <div className=' flex  '>
        <div 
        className=' m-2 flex flex-wrap justify-center bg-green-400
         mt-6   '
        >
        {imageList.map((i)=> <ImageView  url={i.url} key={i.id} title={i.title} id={i.id} />
         )}
        </div>
        
    </div>
    </div>
    )
}
export default ImageGallary;