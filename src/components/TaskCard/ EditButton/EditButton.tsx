import Link from "next/link";
import { FaPencilAlt } from "react-icons/fa";


interface EditButtonProps {
  id: string;
}

const EditButton = ({ id }: EditButtonProps) => {
  return (
    <div>
      <Link href={`/edit/${id}`}>
        <FaPencilAlt className="hover:text-gray-700 hover:scale-110 transition-all duration-200
        text-lg cursor-pointer"/>
      </Link>
    </div>
  )
}

export default EditButton
