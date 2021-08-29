import { facilities } from "../../textContents/facilities";

const Facilities = ({ history }) => {
    return (
        <div className="col-md-9 offset-md-3" id="about-us">
            <div className="card about-us" style={{ width: "100%" }}>
                <div className="card-header">
                    <h3>School Facilities</h3>
                </div>
                <div className="card-body" style={{ width: "100%", textAlign: "justify" }}>
                    {facilities}
                </div>
            </div>
        </div>
    )
}

export default Facilities; 