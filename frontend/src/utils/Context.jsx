import { useEffect } from "react";
import { createContext, useState, useContext } from "react";
import { useLocation } from "react-router-dom";

export const Context = createContext();

export const useAppContext = () => useContext(Context);

export const AppContext = ({ children }) => {

    const [isMobile, setIsMobile] = useState(false);
    const [isTablet, setIsTablet] = useState(false);
    const [isDesktop, setIsDesktop] = useState(false);
    const [isLaptop, setIsLaptop] = useState(false);
    const [isPortrait, setIsPortrait] = useState(false);
    const [isLandscape, setIsLandscape] = useState(false);
    const [isRetina, setIsRetina] = useState(false);
    const [isTouch, setIsTouch] = useState(false);
    const [isHover, setIsHover] = useState(false);
    const [user, setUser] = useState(null);
    const [userType, setUserType] = useState(null)
    const [userInfo, setUserInfo] = useState(null)  

    const handleUser = (user, userType) => {
        setUser(user);
        setUserType(userType);
    };
    
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 480);
            setIsTablet(window.innerWidth >= 480 && window.innerWidth < 768);
            setIsDesktop(window.innerWidth >= 768 && window.innerWidth < 1024);
            setIsLaptop(window.innerWidth >= 1024 && window.innerWidth < 1200);
            setIsPortrait(window.innerHeight > window.innerWidth);
            setIsLandscape(window.innerWidth > window.innerHeight);
            setIsRetina(window.devicePixelRatio > 1);
        }
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }
    , []);

    useEffect(() => {
        const handleTouch = () => {
            setIsTouch(true); //setIsTouch will be true if the user is on a touch device
        }
        window.addEventListener("touchstart", handleTouch);
        handleTouch();
        return () => window.removeEventListener("touchstart", handleTouch);
    }
    , []);

    useEffect(() => {
        const handleHover = () => {
            setIsHover(true); //setIsHover will be true if the user is using a mouse
        }
        window.addEventListener("mouseover", handleHover);
        handleHover();
        return () => window.removeEventListener("mouseover", handleHover);
    }
    , []);


    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return (
        <Context.Provider value={{
            isMobile,
            isTablet,
            isDesktop,
            isLaptop,
            isPortrait,
            isLandscape,
            isRetina,
            isTouch,
            isHover,
            user,
            setUser,
            userType,
            userInfo,
            setUserInfo,
            setUserType,
            location,
        }}>
            {children}
        </Context.Provider>
    )
}

export default AppContext;