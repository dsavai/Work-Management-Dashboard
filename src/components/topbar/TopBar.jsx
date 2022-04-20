import { BiBookmark, BiBell, BiPlusCircle, BiSearch } from "react-icons/bi";
export default function TopBar() {
    return (
        <div className="topbar">
            <div className="topbar__container">
                <div className="topbar__content">
                    <div className="topbar__title">
                        <h1 className="h1">Dashboard</h1>
                    </div>
                    <div className="topbar__right">
                        <div className="topbar__item">
                            <BiBookmark className="icon" />
                        </div>
                        <div className="topbar__item">
                            <BiBell className="icon" />
                        </div>
                        <div className="topbar__item">
                            <BiPlusCircle className="icon" />
                        </div>
                        <div className="topbar__item">
                            <BiSearch className="icon" />
                        </div>
                        <div className="topbar__profile">
                            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
