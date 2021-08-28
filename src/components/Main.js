import Header from "./header/Header";
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './Home';
import Students from './students/Students';
import SignUp from "./auth/SignUp";
import Login from "./auth/Login";
import Academics from "./academics/Academics";
import Admission from "./Admission";
import Contact from './Contact';
import Footer from "./footer/Footer";
import AboutUs from "./aboutus/AboutUs";
import Management from "./aboutus/Management";
const Main = () => {
    const bgImage = {
        backgroundImage: `url(${process.env.PUBLIC_URL + '/images/school-building-1.jpeg'})`,
        width: '100%',
        height: 800,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        marginBottom: -150
    }
    return (
        <div>
            <Header />
            <Route exact path="/home">
                <div style={bgImage}>
                    {/* <img src="/images/school-building-1.jpeg" alt="School Building" width="100%" /> */}
                </div>
            </Route>
            <Switch>
                {/* <Route path="/home" component={Home} /> */}
                <Route path="/academics" component={Academics} />
                <Route path="/admission" component={Admission} />
                <Route path="/students" component={Students} />
                <Route path="/aboutus" component={AboutUs} />
                <Route path="/contact" component={Contact} />
                <Route path="/login" component={Login} />
                <Route path="/signup" component={SignUp} />

                <Redirect to="/home" />
            </Switch>
            <Footer />
        </div>
    );
}

export default Main;