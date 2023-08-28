import axios from 'axios';
import { useEffect, useState } from 'react';
import ImageView from '../ImageView/ImageView';
// https://api.slingacademy.com/v1/sample-data/photos?offset=5&limit=20

function ImageGallary(){

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
        // setIsLoading(false);
        
    }
    useEffect(() => {
        fetchdata();
    },[photosLink])
    
    return( 
        <div className='  p-5 bg-green-400'>
            <div>
                    {(isLoading) && 'Loading' }
                </div>
            <div className=' w-auto flex justify-center'>
                <div className='rounded-md w-1/2 text-center p-4 bg-gray-100'>
                    <h1 className='text-2xl font-bold text-orange-300'>Images</h1>
                </div>
                
            </div>
            <div className='  '>
                
                <div className='grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 desktop:grid-cols-4 mt-6'>

                    {imageList.map((i) => <ImageView url={i.url} key={i.id} title={i.title} id={i.id} />
                    )}
                    
                </div>
                
            </div>
            <div className='items-center flex justify-center'>
                {   (offset < 132) 
                        && 
                    <button className='bg-white px-7 py-2 rounded-md disabled:opacity-50'
                        // disabled={offset > 24}
                        onClick={()=> { 
                        setPhotosLink(`https://api.slingacademy.com/v1/sample-data/photos?offset=${offset}&limit=12`);
                        console.log("inside click",offset)
                        }}> 
                        Next
                    </button>
                }
                </div>
                
        </div>
    )
}
export default ImageGallary;