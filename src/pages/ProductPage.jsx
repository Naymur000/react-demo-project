import { useParams } from "react-router-dom";
import Menu from "../components/Menu";

const ProductPage = () => {

    let {id,name} = useParams();

    return (
        <div>
            <Menu></Menu>

            <p>ID: {id}</p>
            <p>Name: {name} </p>
            
            This is Product page
        </div>
    );
};

export default ProductPage;