import classes from "./Header.module.css";
import {NavLink} from "react-router-dom";

import {logOut} from "../../Redux/auth.reducer";

const Header = ({isAuth, login}) => {

    return <header className={classes.header}>
        <img
            src='https://play-lh.googleusercontent.com/ahJtMe0vfOlAu1XJVQ6rcaGrQBgtrEZQefHy7SXB7jpijKhu1Kkox90XDuH8RmcBOXNn'
            alt=''
        />
        <div className={classes.loginBlock}>
            {isAuth ? <div>
                    {login} -
                    <form>
                        <button onClick={logOut}>
                            Log out
                        </button>
                </form>
            </div>
                : <NavLink to={'/login'}>Login</NavLink>}
        </div>
    </header>
}

export default Header