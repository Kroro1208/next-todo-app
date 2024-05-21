"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItemProps {
    label: string;
    link: string;
    icon: React.ReactNode;
}

const NavaItem = ({ label, link, icon }: NavItemProps) => {
    const pathname = usePathname();
  return (
    <Link href={link}
    className={`flex gap-2 w-full p-4 hover:bg-gray-700 font-medium items-center
    ${pathname === link ? 'bg-gray-600 border-r-4 border-r-green-500' : ""}`}
    >
        <div>{icon}</div>
        <div>{label}</div>
    </Link>
  )
}

export default NavaItem
