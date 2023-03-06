import {useParams} from "react-router-dom";

const ProductDetailsPage = function() {
    const { id } = useParams();
    return (
        <div>
            Login page
        </div>
    )
}

export default ProductDetailsPage;