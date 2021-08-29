import './Academics.css';
import Background from './students-1.jpg';
import { Link, withRouter, Route, Switch, Redirect } from 'react-router-dom';
import Management from './Laboratories';
import OurSchool from './Departments';
import Facilities from './FacultyList';
import SchoolPolicies from './ECA';
import Transport from './Library';
import Alumni from './AfterSchool';

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
                <Link className="sidebar-link" to="/academics/our-school" style={isActive(history, '/academics/our-school')}>Departments</Link>
                <Link className="sidebar-link" to="/academics/facilities" style={isActive(history, '/academics/facilities')}>Faculty List</Link>
                <Link className="sidebar-link" to="/academics/school-policies" style={isActive(history, '/academics/school-policies')}>Extra Curricular Activities</Link>
                <Link className="sidebar-link" to="/academics/management" style={isActive(history, '/academics/management')}>Laboratories</Link>
                <Link className="sidebar-link" to="/academics/transport" style={isActive(history, '/academics/transport')}>Library</Link> 
                <Link className="sidebar-link" to="/academics/alumni" style={isActive(history, '/academics/alumni')}>After-School Programs</Link>
            </div>
        </div>
    )
}

const Academics = ({ history }) => {
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
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <SideNav history={history} />
                        <Switch>
                            <Route exact path="/academics/our-school" component={OurSchool} />
                            <Route exact path="/academics/facilities" component={Facilities} />
                            <Route exact path="/academics/school-policies" component={SchoolPolicies} />
                            <Route exact path="/academics/management" component={Management} />
                            <Route exact path="/academics/transport" component={Transport} />
                            <Route exact path="/academics/alumni" component={Alumni} />
                            <Redirect to="/home" />
                        </Switch>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Academics);