import axios from 'axios';
import { useEffect, useState } from 'react';
import ImageView from '../ImageView/ImageView';

function ImageGallary(){

    const [imageList, setImageList] = useState([])

    async function fetchdata(){
        const response = await axios.get('https://api.slingacademy.com/v1/sample-data/photos?limit=120');
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
        <div className='  p-5 bg-green-400'>
            <div className=' w-auto flex justify-center'>
                <div className='rounded-md w-1/2 text-center p-4 bg-gray-100'>
                    <h1 className='text-2xl font-bold text-orange-300'>Images</h1>
                </div>
                
            </div>
            <div className=' flex  '>
                
                <div
                    className=' m-2 flex flex-wrap justify-center 
         mt-6   '
                >
                    {imageList.map((i) => <ImageView url={i.url} key={i.id} title={i.title} id={i.id} />
                    )}
                </div>
            </div>
        </div>
    )
}
export default ImageGallary;