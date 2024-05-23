import Player from "../Pomodoro/Player/player";
import NavList from "./NavList/NavList"
import { FaGripfire } from "react-icons/fa";


const SideMenu = () => {
  return (
    <div className="w-80 pt-8 bg-gray-500 text-white">
      <div>
        <div className="flex justify-center">
          <FaGripfire size={28}/>
          <h1 className="px-1 text-lg font-semibold text-center">Neo Todo App</h1>
          <FaGripfire size={28}/>
        </div>
        <NavList />
        <Player />
      </div>
    </div>
  )
}

export default SideMenu
