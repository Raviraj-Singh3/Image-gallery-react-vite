import { Link } from 'react-router-dom'

function ImageView({url, id}){
    return(
        <div className="m-3 w-1/5 bg-yellow-400 cursor-pointer hover:bg-orange-100">
            <Link to={`photos/${id}`}>
                
                <img src={url} alt="photos" 
                className="rounded-2xl max-w-full"
            />
            </Link>
            
            
        </div>
    )
}
export default ImageView;