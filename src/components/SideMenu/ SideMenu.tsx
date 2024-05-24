import Player from "../Pomodoro/Player/player";
import NavList from "./NavList/NavList"
import { FaGripfire } from "react-icons/fa";


const SideMenu = () => {
  return (
    <>
      <div className="w-96 pt-8 bg-sky-700 text-white">
        <div>
          <div className="flex justify-center">
            <FaGripfire size={28}/>
            <h1 className="px-1 text-xl font-semibold text-center">Neo Todo App</h1>
            <FaGripfire size={28}/>
          </div>
          <p className="text-center">作業時間を効率的に</p>
          <NavList />
        </div>
      </div>
      <Player />
    </>
  )
}

export default SideMenu
