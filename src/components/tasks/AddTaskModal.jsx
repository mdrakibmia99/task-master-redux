import { useForm } from "react-hook-form";
import Modal from "../ui/Modal";

const AddTaskModal = ({ isOpen, setIsOpen }) => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} title={"Programming"}>
            <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col mb-5">
          <label htmlFor="title" className="mb-2">
            Title
          </label>
          <input
            className="w-full rounded-md"
            type="text"
            id="title"
            {...register('title')}
          />
        </div>
        <div className="flex flex-col mb-5">
          <label htmlFor="title" className="mb-2">
            Description
          </label>
          <textarea
            className="w-full rounded-md"
            type="text"
            id="description"
            {...register('description')}
          />
        </div>
        <div className="flex flex-col mb-5">
          <label htmlFor="title" className="mb-2">
            Deadline
          </label>
          <input
            className="w-full rounded-md"
            type="date"
            id="date"
            {...register('date')}
          />
        </div>
        <div className="flex flex-col mb-5">
          <label htmlFor="title" className="mb-2">
            Assign to
          </label>
          <select
            className="w-full rounded-md"
            id="assignedTo"
            {...register('assignedTo')}
          >
            <option value="MD Rakib mia">MD Rakib mia</option>
            <option value="Hasna Hena">Hasna Hena</option>
            <option value="Tori">Tori</option>
            <option value="Laddu">Laddu</option>
            <option value="Joya">Joya</option>
            <option value="Laish">Laish</option>
            <option value="Sadia">Sadia</option>
            <option value="Hasib">Hasib</option>
            <option value="Ryahan">Ryahan</option>
          </select>
        </div>
        <div className="flex flex-col mb-5">
          <label htmlFor="title" className="mb-2">
            Priority
          </label>
          <select
            className="w-full rounded-md"
            id="priority"
            {...register('priority')}
          >
            <option defaultValue value="high">
              High
            </option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        </div>
        <div className="flex gap-3 justify-end">
          <button
           
            type="button"
            className="btn btn-danger "
          >
            Cancel
          </button>
          <button type="submit" className="btn btn-primary ">
            submit
          </button>
        </div>
      </form>
        </Modal>
    );
};

export default AddTaskModal;