import { Link } from "react-router-dom";
import headerImage from "../assets/images/BCI_header.jpg";

function Header() {
    return (
        <nav className="flex flex-col justify-start items-start h-20 p-1 bg-header-red">
            <img
                src={headerImage}
                alt="BCI-Heartbeat-Header"
                className="h-full"
            />
            {/* <div className="">BCI Database Creator</div> */}
            {/* <nav className="flex flex-row justify-between w-full p-2 text-white">
        <Link to="/">Analog Input</Link>
        <Link to="/">Analog Output</Link>
        <Link to="/">Analog Variable</Link>
        <Link to="/">Binary Input</Link>
        <Link to="/">Binary Output</Link>
        <Link to="/">Binary Variable</Link>
        <Link to="/">Bulk Data Exchange</Link>
        <Link to="/">Event Enrollment</Link>
        <Link to="/">Multi-Trend</Link>
        <Link to="/">Multi-Variable</Link>
        <Link to="/">Program</Link>
      </nav> */}
        </nav>
    );
}

export default Header;
