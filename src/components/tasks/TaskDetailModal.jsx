import { useSelector } from "react-redux";
import Modal from "../ui/Modal";

const TaskDetailModal = ({isOpen,setIsOpen,modalId}) => {
    const {userTasks}=useSelector((state)=>state.taskSlice)
    // console.log(userTasks)
    const task= userTasks.find(item=>item.id === modalId)
    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} title={task?.title}>
            {task?.description}
        </Modal>
    );
};

export default TaskDetailModal;