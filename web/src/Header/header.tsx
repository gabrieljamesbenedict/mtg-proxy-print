import "./header.css"

const Header = () => {
    return (
        <>
            <div className="root-container">
                <header className="header">
                    <a href="">
                        <h1 className="header__title-header">MTG Proxy Print</h1>
                    </a>
                    <nav className="header__navigation-bar">
                        <ol className="navigation-bar__list">
                            <li className="list__item">
                                <a href="">How to Use</a>
                            </li>
                            <li className="list__item">
                                <a href="">Decks</a>
                            </li>
                            <li className="list__item">
                                <a href="">Contact Me</a>
                            </li>
                        </ol>
                    </nav>
                </header>
            </div>
        </>
    );
}
 
export default Header;