import { Link } from "react-router-dom";

import CartWidget from "./CartWidget";

function Header() {

  return (
    <div class="navbar bg-base-100">
    <div class="flex-1">
        <Link class="btn btn-ghost normal-case text-xl" to="/">Ecommerce A.S</Link>
    </div>
    <div class="flex-none">
    <ul class="menu menu-horizontal p-0">
      <li><Link to="/new-releases">New Releases</Link></li>
      <li><Link to="/hot-offers">Hot Deals</Link></li>
    </ul>
    </div>
    <div class="flex-none">
        <CartWidget />
        <div class="dropdown dropdown-end">
        <label tabindex="0" class="btn btn-ghost btn-circle avatar">
            <div class="w-10 rounded-full">
            <img alt="Cart" src="https://api.lorem.space/image/face?hash=33791" />
            </div>
        </label>
        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li>
            <a class="justify-between">
                Profile
                <span class="badge">New</span>
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