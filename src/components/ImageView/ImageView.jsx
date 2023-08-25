import { Link } from 'react-router-dom'

function ImageView({url, id}){
    return(
        <div className="m-3 cursor-pointer ">
            <Link to={`photos/${id}`}>
                
                <img src={url} alt="photos" 
                className="rounded-2xl max-w-full hover:scale-95"
            />
            </Link>
            
            
        </div>
    )
}
export default ImageView;