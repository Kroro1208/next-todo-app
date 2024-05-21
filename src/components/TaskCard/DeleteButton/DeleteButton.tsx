import { MdOutlineDeleteForever } from "react-icons/md";

interface DeleteButtonProps {
    id: string;
}

const DeleteButton = ({ id }: DeleteButtonProps) => {
  return (
    <form action="">
      <button type="submit" className="text-red-500 text-lg cursor-pointer hover:scale-110 transition-all duration-200">
        <MdOutlineDeleteForever className="size-5"/>
      </button>
    </form>
  )
}

export default DeleteButton
