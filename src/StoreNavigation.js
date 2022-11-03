import {NavLink} from "react-router-dom";

export default function StoreNavigation(props) {
  const navLink = `px-1 md:px-3 py-2 flex items-center text-sm md:text-base lg:text-lg text-white uppercase font-bold leading-snug hover:opacity-75`

  return (
      <div className=" px-1 mx-auto flex-row flex-wrap items-center">
          <ul className="flex flex-row justify-center list-none sm:ml-auto">
            <li>
              <NavLink className={(navData) => navData.isActive ? `${navLink} active` : `${navLink}` } to="/store/NSO" end>Operatives</NavLink>
            </li>
            <li>
              <NavLink className={(navData) => navData.isActive ? `${navLink} active` : `${navLink}` } to="/store/NSW/weapons">Weapons</NavLink>
            </li>
            <li>
              <NavLink className={(navData) => navData.isActive ? `${navLink} active` : `${navLink}` } to="/store/NSW/tools">Tools</NavLink>
            </li>
            <li>
              <NavLink className={(navData) => navData.isActive ? `${navLink} active` : `${navLink}` } to="/store/NSW/equipment">Equipments</NavLink>
            </li>
          </ul>
      </div>
  );
}
