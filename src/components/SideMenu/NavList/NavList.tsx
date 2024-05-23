import { FaTasks } from "react-icons/fa";
import { FaRegCalendarCheck } from "react-icons/fa";
import { RiAlarmWarningFill } from "react-icons/ri";
import NavaItem from "./NavItem/NavaItem";

interface NavItemType {
    id: number;
    label: string;
    link: string;
    icon: React.ReactNode;
}

const navList: NavItemType[] = [
    {
        id: 1,
        label: '全てのタスク',
        link: '/',
        icon: <FaTasks className="size-5" />
    },
    {
        id: 2,
        label: '完了したタスク',
        link: '/completed',
        icon: <FaRegCalendarCheck className="size-5" />
    },
    {
        id: 3,
        label: '期限切れのタスク',
        link: '/expired',
        icon: <RiAlarmWarningFill className="size-5" />
    },
];

const NavList = () => {
  return (
    <div className="mt-14">
      {navList.map((item) => (
        <NavaItem key={item.id} label={item.label} link={item.link} icon={item.icon}/>
      ))}
    </div>
  )
}

export default NavList
