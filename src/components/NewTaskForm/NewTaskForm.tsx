"use client";
import { useFormState, useFormStatus } from 'react-dom';
import { FormState, createTask } from '../../actions/task';

const NewTaskForm = () => {
  const initialStatte: FormState = { error: '' };
const [ state, formAction ] = useFormState( createTask, initialStatte);

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending}
    className="mt-8 py-2 w-full rounded-md text-white bg-indigo-500
    hover:bg-indigo-700 text-sm font-semibold shadow-sm disabled:bg-gray-400">
      登録する
    </button>
  );
}

  return (
    <div className="mt-10 mx-auto w-full max-w-sm">
      <form action={formAction}>
        <div>
            <label htmlFor="title" className="block text-sm font-medium">タイトル</label>
            <input type="text" id="title" name="title" required
            className="block mt2 py-1.5 px-2 w-full rounded-md border-0 shadow-sm
            ring-1 ring-inset ring-gray-300"/>
        </div>
        <div className="mt-6">
            <label htmlFor="description" className="block text-sm font-medium">詳細</label>
            <input type="text" id="descriptionle" name="description" required
            className="block mt2 py-1.5 px-2 w-full rounded-md border-0 shadow-sm
            ring-1 ring-inset ring-gray-300"/>
        </div>
        <div className="mt-6">
            <label htmlFor="dueDate" className="block text-sm font-medium">期限</label>
            <input type="date" id="dueDatele" name="dueDate" required min="2024-05-20" max="2050-12-31"
            className="block mt2 py-1.5 px-2 w-full rounded-md border-0 shadow-sm
            ring-1 ring-inset ring-gray-300"/>
        </div>
        <SubmitButton />
        { state.error && (
        <p className='mt-2 text-sm border border-red-300 bg-red-400 w-full'>{state.error}</p>
        )}
      </form>
    </div>
  )
}

export default NewTaskForm
