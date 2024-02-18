import "./Home.scss";
import { useState, useEffect } from "react";

const Home = () => {
    const [nav_drop, setNav_Drop] = useState({
        display:"none",
        backgroundColor:"black",
        width:"200px",
        height:"300px",
    })

    const [nav_hide, setNav_hide] = useState({

    })
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
            }
            else {
            }
        };
        const handleResize = () => {
            if (window.innerWidth < 400) {
                setNav_Drop({...nav_drop, display:"block"})
            }
            else {
                setNav_Drop({...nav_drop, display: "none" })
            }
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

  return (
    <div className="home">
      <nav className="navbar">
        <h1>NAVEEN</h1>
        <div className="topic">
          <p>ABOUT</p>
          <p>LEARNING</p>
          <p>CONTACT</p>
        </div>
        <div className="dropdown" style={{...nav_drop}}>
          {/* <img src={navlogo} style={img} alt="" /> */}
          {/* <div className="dropdown-content" style={drop}>
            <p
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              Home
            </p>
            <p onClick={handleScroll}>About</p>
            <p onClick={handleScroll2}>Learning</p>
            <p href="#">Projets</p>
            <p href="#">Contact</p>
          </div> */}
        </div>
      </nav>
    </div>
  );
};

export default Home;
