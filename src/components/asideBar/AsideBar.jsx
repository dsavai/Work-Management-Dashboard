import Menu from "./Menu"

function MainMenuBar() {
    return (
        <div className="aside">
            <div className="aside__top">
                <div className="brand">
                    <span>Score Tracker</span>
                </div>
            </div>
            <div className="aside__center">
                <Menu />
            </div>
            <div className="aside__bottom"></div>
        </div>
    )
}

export default MainMenuBar