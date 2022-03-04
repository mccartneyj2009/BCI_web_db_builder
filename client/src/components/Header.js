import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="flex flex-col justify-center items-center h-20 bg-red-500">
      <div className="">BCI Database Creator</div>
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
    </header>
  );
}

export default Header;
