
import { BiHome, BiCategory, BiFolderOpen, BiUser, BiCalculator, BiCog, BiBook, BiReceipt } from "react-icons/bi";

export default function Menu() {
    return (
        <>
            <div className="aside__meta"></div>
            <nav className="aside__nav">
                <ul className="aside__nav__list">
                    <li className="aside__nav__item">
                        <span className="aside__nav__link">
                            <BiHome className="aside__nav__icon" />
                            <span>Home</span>
                        </span>
                    </li>
                    <li className="aside__nav__item">
                        <span className="aside__nav__link">
                            <BiCategory className="aside__nav__icon" />
                            <span>Tasks</span>
                        </span>
                    </li>
                    <li className="aside__nav__item">
                        <span className="aside__nav__link">
                            <BiFolderOpen className="aside__nav__icon" />
                            <span>Projects</span>
                        </span>
                    </li>
                    <li className="aside__nav__item">
                        <span className="aside__nav__link">
                            <BiUser className="aside__nav__icon" />
                            <span>Planner</span>
                        </span>
                    </li>
                    <li className="aside__nav__item">
                        <span className="aside__nav__link">
                            <BiCalculator className="aside__nav__icon" />
                            <span>Quotes</span>
                        </span>
                    </li>
                    <li className="aside__nav__item">
                        <span className="aside__nav__link">
                            <BiReceipt className="aside__nav__icon" />
                            <span>Invoices</span>
                        </span>
                    </li>
                    <li className="aside__nav__item">
                        <span className="aside__nav__link">
                            <BiBook className="aside__nav__icon" />
                            <span>Contacts</span>
                        </span>
                    </li>
                    <li className="aside__nav__item">
                        <span className="aside__nav__link">
                            <BiCog className="aside__nav__icon" />
                            <span>Settings</span>
                        </span>
                    </li>
                </ul>
            </nav>
        </>
    )
}
