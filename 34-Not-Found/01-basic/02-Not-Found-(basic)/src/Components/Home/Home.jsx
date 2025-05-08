import { Outlet, useLocation, useNavigation,  } from "react-router-dom";
import Header from "../Header/Header"
import Footer from "../Footer/Footer";

const Home = () => {

    const navigation = useNavigation()

    const location = useLocation();
    console.log(location);
    //{pathname: '/', search: '', hash: '', state: null, key: 'ex7e4g1g'}
    //{pathname: '/about', search: '', hash: '', state: null, key: 'e4t3hy8k'}
    //{pathname: '/contact', search: '', hash: '', state: null, key: 'yzg3k8ll'}
    // {pathname: '/users', search: '', hash: '', state: null, key: 'ojufdq77'}
    //{pathname: '/posts', search: '', hash: '', state: null, key: 'jrdvtndf'}
    // {pathname: '/post/2', search: '', hash: '', state: null, key: '20qh04jg'}
    // {pathname: '/post/14', search: '', hash: '', state: null, key: '74x2ig1s'}
    

    return (
        <div>
            <Header></Header>
            {/* <Outlet></Outlet> */}
            {
                navigation.state === "loading" ? <p>Loading....</p> : <Outlet></Outlet> 
            }
            <Footer></Footer>
        </div>
    );
};

export default Home;