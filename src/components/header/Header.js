import './Header.css';
import { Link, withRouter } from 'react-router-dom';

const isActive = (history, path) => {
    if (history.location.pathname === path) {
        return { color: "#ff9900" }
    } else {
        return { color: 'wheat' }
    }
}

const Header = ({ history }) => {
    console.log(history)
    return (
        <div>
            <nav className="navbar navbar-expand-md navbar-dark">
                <div className="navbar-brand"><h4>Intellect International School</h4></div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <i className="fas fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/home" style={isActive(history, '/home')}>Home</Link>
                        </li>
                        <li class="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                                Academics
                            </a>
                            <div class="dropdown-menu">
                                <Link className="nav-link" to="/academics/our-school" style={isActive(history, '/academics/our-school')}>Departments</Link>
                                <Link className="nav-link" to="/academics/facilities" style={isActive(history, '/academics/facilities')}>Faculty List</Link>
                                <Link className="nav-link" to="/academics/school-policies" style={isActive(history, '/academics/school-policies')}>Extra Curricular Activities</Link>
                                <Link className="nav-link" to="/academics/management" style={isActive(history, '/academics/management')}>Laboratories</Link>
                                <Link className="nav-link" to="/academics/transport" style={isActive(history, '/academics/transport')}>Library</Link>
                                <Link className="nav-link" to="/academics/alumni" style={isActive(history, '/academics/alumni')}>After-School Programs</Link>
                            </div>
                        </li>

                        <li class="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                                About Us
                            </a>
                            <div class="dropdown-menu">
                                <Link className="nav-link" to="/aboutus/our-school" style={isActive(history, '/aboutus/our-school')}>Our School</Link>
                                <Link className="nav-link" to="/aboutus/facilities" style={isActive(history, '/aboutus/facilities')}>Facilities</Link>
                                <Link className="nav-link" to="/aboutus/school-policies" style={isActive(history, '/aboutus/school-policies')}>School Policies</Link>
                                <Link className="nav-link" to="/aboutus/management" style={isActive(history, '/aboutus/management')}>Management Committee</Link>
                                <Link className="nav-link" to="/aboutus/transport" style={isActive(history, '/aboutus/transport')}>Transport</Link>
                                <Link className="nav-link" to="/aboutus/alumni" style={isActive(history, '/aboutus/alumni')}>Alumni Association</Link>
                            </div>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/admission" style={isActive(history, '/admission')}>Admission</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/students" style={isActive(history, '/students')}>Students</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/aboutus" style={isActive(history, '/aboutus')}>About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact" style={isActive(history, '/contact')}>Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login" style={isActive(history, '/login')} >Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/signup" style={isActive(history, '/signup')}>Sign Up</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default withRouter(Header);