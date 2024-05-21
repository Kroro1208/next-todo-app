import { FaTasks } from "react-icons/fa";
import { FaRegCalendarCheck } from "react-icons/fa";
import { RiAlarmWarningFill } from "react-icons/ri";

interface NavItemType {
    id: number;
    label: string;
    link: string;
    icon: React.ReactNode;
}

const NavList = () => {
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

  return (
    <div className="mt-24">
      <ul>
        <li>main</li>
        <li>link1</li>
        <li>link2</li>
      </ul>
    </div>
  )
}

export default NavList
