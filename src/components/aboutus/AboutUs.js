import './AboutUs.css';
import Background from './school-building-2.jpg';
import { Link, withRouter, Route, Switch, Redirect } from 'react-router-dom';
import { ourSchool } from '../../textContents/ourSchool';
import Management from './Management';
import OurSchool from './OurSchool';
import Facilities from './Facilities';
import SchoolPolicies from './SchoolPolicies';
import Transport from './Transport';
import Alumni from './Alumni';

const isActive = (history, path) => {
    if (history.location.pathname === path) {
        return { color: "#ff9900" }
    } else {
        return { color: 'white' }
    }
}

const SideNav = ({ history }) => {
    return (
        <div class="col-md-3 sidebar">
            <div>
                <Link className="sidebar-link" to="/aboutus/our-school" style={isActive(history, '/aboutus/our-school')}>Our School</Link>
                <Link className="sidebar-link" to="/aboutus/facilities" style={isActive(history, '/aboutus/facilities')}>Facilities</Link>
                <Link className="sidebar-link" to="/aboutus/school-policies" style={isActive(history, '/aboutus/school-policies')}>School Policies</Link>
                <Link className="sidebar-link" to="/aboutus/management" style={isActive(history, '/aboutus/management')}>Management Committee</Link>
                <Link className="sidebar-link" to="/aboutus/transport" style={isActive(history, '/aboutus/transport')}>Transport</Link>
                <Link className="sidebar-link" to="/aboutus/alumni" style={isActive(history, '/aboutus/alumni')}>Alumni Association</Link>
            </div>
        </div>
    )
}

const AboutUs = ({ history }) => {
    const bgImage = {
        backgroundImage: `url(${Background})`,
        width: '100%',
        height: 500,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
    }
    return (
        <div>
            <div>
                <div style={bgImage}>
                    {/* <img src="/images/school-building-2.jpg" alt="School Building" width="100%" height="400px" /> */}
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <SideNav history={history} />
                        <Switch>
                            <Route exact path="/aboutus/our-school" component={OurSchool} />
                            <Route exact path="/aboutus/facilities" component={Facilities} />
                            <Route exact path="/aboutus/school-policies" component={SchoolPolicies} />
                            <Route exact path="/aboutus/management" component={Management} />
                            <Route exact path="/aboutus/transport" component={Transport} />
                            <Route exact path="/aboutus/alumni" component={Alumni} />
                            <Redirect to="/home" />
                        </Switch>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(AboutUs);