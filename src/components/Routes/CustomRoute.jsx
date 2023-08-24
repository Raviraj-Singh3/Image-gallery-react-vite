import { Route, Routes } from "react-router-dom";
import ImageGallary from "../ImageGallary/ImageGallary";
import ImageDetails from "../ImageDetails/ImageDetails";



function CustomRoute(){
    return (
        <Routes>

            <Route path="/images-vite" element={<ImageGallary />} />
            <Route path="/images-vite/photos/:id" element={<ImageDetails />} />

        </Routes>
    )
}

export default CustomRoute;