import { Link } from "react-router-dom";

import CartWidget from "./CartWidget";

function Header() {

  return (
    <div className="navbar bg-base-100">
    <div className="flex-1">
        <Link className="btn btn-ghost normal-case text-xl" to="/">Ecommerce A.S</Link>
    </div>
    <div className="flex-none">
    <ul className="menu menu-horizontal p-0">
      <li><Link to="/new-releases">New Releases</Link></li>
      <li><Link to="/hot-offers">Hot Deals</Link></li>
    </ul>
    </div>
    <div className="flex-none">
        <CartWidget />
        <div className="dropdown dropdown-end">
        <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
            <img alt="Cart" src="https://api.lorem.space/image/face?hash=33791" />
            </div>
        </label>
        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li>
            <a className="justify-between">
                Profile
                <span name="badge">New</span>
            </a>
            </li>
            <li><a>Settings</a></li>
            <li><a href="#">Logout</a></li>
        </ul>
        </div>
    </div>
    </div>
  )
}

export default Header