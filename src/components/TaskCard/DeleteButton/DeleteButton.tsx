"use client";

import { MdOutlineDeleteForever } from "react-icons/md";
import { deleteTask, FormState } from '../../../actions/task';
import { useFormState, useFormStatus } from "react-dom";
import { useEffect } from "react";

interface DeleteButtonProps {
    id: string;
}

const DeleteButton = ({ id }: DeleteButtonProps) => {
  const deleteTaskId = deleteTask.bind(null, id);
  const initialstate: FormState = {error: ''};
  const [ state, formAction ] = useFormState(deleteTaskId, initialstate);

  useEffect(() => {
    if(state && state.error !== ''){
      alert(state.error);
    }
  }, [state]);

  const handleConfirmDelete = (event: React.FormEvent) => {
    event.preventDefault();
    const confirmDelete = confirm('本当に削除しますか？');
    if(confirmDelete) {
      formAction();
    }
  }

  const SubmitButton = () => {
    const { pending } = useFormStatus();
    return (
      <button type="submit" disabled={pending}
      className="disabled:bg-gray-400 text-red-500 text-lg
      cursor-pointer hover:scale-110 transition-all duration-200">
        <MdOutlineDeleteForever className="size-5"/>
      </button>
    )
  }

  return (
    <form onSubmit={handleConfirmDelete}>
      <SubmitButton />
    </form>
  )
}

export default DeleteButton
