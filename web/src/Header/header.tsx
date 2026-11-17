import styles from "./Header.module.css"

const Header = () => {
    return (
        <>
            <div className={styles["root-container"]}>
                <header className={styles.header}>
                    <a href="">
                        <h1 className={styles["header__title-header"]}>MTG Proxy Print</h1>
                    </a>
                    <nav className={styles["header__navigation-bar"]}>
                        <ol className={styles["navigation-bar__list"]}>
                            <li className={styles["list__item"]}>
                                <a href="">How to Use</a>
                            </li>
                            <li className={styles["list__item"]}>
                                <a href="">Decks</a>
                            </li>
                            <li className={styles["list__item"]}>
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