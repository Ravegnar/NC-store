import {NavLink} from "react-router-dom";

export default function StoreNavigation(props) {
  const navLink = `px-1 md:px-3 py-2 flex items-center text-sm md:text-base lg:text-lg text-white uppercase font-bold leading-snug hover:opacity-75`

  return (
      <div className=" px-1 mx-auto flex-row flex-wrap items-center">
          <ul className="flex flex-row justify-center list-none sm:ml-auto">
            <li>
              <NavLink className={(navData) => navData.isActive ? `${navLink} active` : `${navLink}` } to="/NC-store/store/NSO" end>Operatives</NavLink>
            </li>
            <li>
              <NavLink className={(navData) => navData.isActive ? `${navLink} active` : `${navLink}` } to="/NC-store/store/NSW/weapons">Weapons</NavLink>
            </li>
            <li>
              <NavLink className={(navData) => navData.isActive ? `${navLink} active` : `${navLink}` } to="/NC-store/store/NSW/tools">Tools</NavLink>
            </li>
            <li>
              <NavLink className={(navData) => navData.isActive ? `${navLink} active` : `${navLink}` } to="/NC-store/store/NSW/equipment">Equipments</NavLink>
            </li>
          </ul>
      </div>
  );
}


//<div className="px-4 py-3">         
//<p className="text-sm leading-5">Signed in as</p>
//<p className="text-sm font-medium leading-5 text-gray-900 truncate">tom@example.com</p>
//</div>
//<div className="py-1">
//<a tabIndex="0" className="text-white flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"  role="menuitem" >Account settings</a>
//<a tabIndex="1" className="text-white flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"  role="menuitem" >Support</a>
//<span role="menuitem" tabIndex="-1" className="flex justify-between w-full px-4 py-2 text-sm leading-5 text-left text-white cursor-not-allowed opacity-50" aria-disabled="true">New feature (soon)</span>
//<a tabIndex="2" className="text-white flex justify-between w-full px-4 py-2 text-sm leading-5 text-left" role="menuitem" >License</a>
//</div>
//<div className="py-1">
//<a tabIndex="3" className="text-white flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"  role="menuitem" >Sign out</a>
//</div>