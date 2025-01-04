
import { Link, NavLink, Navigate, useNavigate, useLocation } from "react-router-dom";


const Home = () => {

    // const user = false;
    const user = true;

    // const navigate = useNavigate();
    const nahian = useNavigate();
    const handleClick = () => {
        console.log('clicked');

        if (user) {
            // navigate('/about');
            nahian('/about');
        }

    }



    const location = useLocation();
    console.log(location); //{pathname: '/', search: '', hash: '', state: null, key: 'default'}
    console.log(location.state); // null



    return (
        <div>
            {/* 111111111111111111111111 */}
            <h1>This is Home page</h1>
            {/* Link */}
            {/* <Link to="/about">About</Link> */}

            {/* 222222222222222222222222222 */}
            {/* NavLink */}
            {/* <NavLink to="/about">About</NavLink> */}


            {/* 33333333333333333333333333 */}
            {/* Navigate */}
            {/*

             {
                user && <Navigate to="/about"></Navigate>
            } 
            
            */}


            {/* 444444444444444444444444444 */}
            {/* useNavigate */}
            <button onClick={handleClick}>About</button>
            {/* React Hook "useNavigate" cannot be called inside a callback. React Hooks must be called in a React function component or a custom React Hook function. */}


        </div>
    );
};

export default Home;


// navigate korar 4 ta way ache
//Link
//NavLink
//Navigat
//useNavigate

//for click, onClick..... Link and NavLink same. -> but NavLink extra kichu benifit dey . like active route and css
// not for click or onClick....  Navigate-> conditionally sorto manle/ user jodi thake / true false/ if else, like programming jinis er khetre condition base Navigate usekora hoy, auto redirect kore dibe... eta hook na. so eta function er moddhe theke call kora jai na...
// useNavigate-> eta akta hook. eta functin er moddhe theke call kora hoy. function er moddhe theke Navicate call kora jaina but useNavigate call kora jai.. karon useNavigate akta hook,,, abar Link NavLink Navigate er jaigai eta use kora jaina.. mane jekha Link use kora jai like div er moddhe sekhane useNavigate use kora jaina