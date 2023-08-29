// import useImageHook from '../../hooks/useImageHook';
import ImageView from '../ImageView/ImageView';
// https://api.slingacademy.com/v1/sample-data/photos?offset=5&limit=20
// import useImageHook from '../../hooks/useImagehook';


function ImageGallary(){
    
    // using custom hook here for clean UI
    const [imageList, isLoading, offset,photosLink,setPhotosLink] = useImageHook();
    console.log("imageList",imageList);

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
                            console.log("inside click",offset)
                        setPhotosLink(`https://api.slingacademy.com/v1/sample-data/photos?offset=${offset}&limit=12`);
                        
                        }}> 
                        Next
                    </button>
                }
                </div>
                
        </div>
    )
}
export default ImageGallary;