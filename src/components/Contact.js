const Contact = () => {
    return (
        <div style={{
            height:"500px",
            color:"black",
            paddingTop:"40px",
            paddingBottom:"40px", 
        }}>
            <div className="row">
                <div className="col-7 col-sm-5">
                    <h5>Our Address</h5>
                    <address>
                    121, Clear Water Bay Road<br />
                    Clear Water Bay, Gulshan<br />
                    Dhaka, Bangladesh<br /><br />
                    <i className="fa fa-phone fa-lg"></i>: +852 1234 5678<br /><br />
                    <i className="fa fa-fax fa-lg"></i>: +852 8765 4321<br /><br />
                    <i className="fa fa-envelope fa-lg"></i>: admin@iis.web.app<br />
                    </address>
                </div>
                <div className="col-7 col-sm-5">
                    <h5>For Admission Info</h5>
                    <address>
                    121, Clear Water Bay Road<br />
                    Clear Water Bay, Gulshan<br />
                    Dhaka, Bangladesh<br /><br />
                    <i className="fa fa-phone fa-lg"></i>: +852 1234 5678<br /><br />
                    <i className="fa fa-fax fa-lg"></i>: +852 8765 4321<br /><br />
                    <i className="fa fa-envelope fa-lg"></i>: admin@iis.web.app<br />
                    </address>
                </div>
            </div>
        </div>
    )
}

export default Contact; 