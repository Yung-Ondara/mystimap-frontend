import React, {useState, useEffect} from "react"
import "./NavBar.css";


function NavBar(){
    const [click, setClick] =useState(false);
    const [button, setButton] = useState(true);

    const handleClick= () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <=960) {
            setButton(false);
         } else {
            setButton(true);

            }
        };
        useEffect(() => {
            showButton();
        }, []);

        window.addEventListener('resize', showButton);
    }
    
    return (
        <>
        <nav className="navbar">
            <div className="nav-container">
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            MyMistiMap
                <i class='fab fa-typo3' />
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            </ul>
            </div>
        </nav>
        </>
    )
}