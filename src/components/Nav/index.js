import React, {useEffect} from "react";

function Nav(props) {
    const {
        navLinks = [],
        setcurrentNavLink,
        currentNavLink,
    } = props;

    useEffect(() => {
        document.title = currentNavLink
    }, [currentNavLink])
    
    return (
        <header>
            <div className='logo-wrap'>
                <a href="/">
                    <div className='logo'>
                        <h2>CM</h2>
                    </div>
                    <div className='header-wrapper'>
                        <h1>Chris McCormack</h1>
                        <h2>Full Stack Developer</h2>
                    </div>
                </a>
            </div>
            <nav>
            <ul>
                    {navLinks.map(link => (
                        <li
                            className={`${currentNavLink === link && 'navActive'}`}
                            key={link}
                        >
                            <span onClick={() => setcurrentNavLink(link)}>
                                {link}
                            </span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Nav;