import { Link } from "react-router";
function PropertyList(){
    return (
        <div>
            <Link to={"/property/123"}>
            <div>
                <h1>property 1</h1>
            </div>
            </Link>
            <Link to={"/property/123"}>
                <div>
                    <h1>property 2</h1>
                </div>
            </Link>
            
            <Link to={"/property/123"}>
                <div>
                    <h1>property 3</h1>
                </div>
            </Link>
            
        </div>
    )
}
export default PropertyList;