import { departments } from "../../textContents/departments";

const OurSchool = ({ history }) => {
    return (
        <div className="col-md-9 offset-md-3" id="about-us">
            <div className="card about-us" style={{ width: "100%" }}>
                <div className="card-header">
                    <h3>Departments</h3>
                </div>
                <div className="card-body" style={{ width: "100%", textAlign: "justify" }}>
                    {departments}
                </div>
            </div>
        </div>
    )
}

export default OurSchool; 