import Modal from "../ui/Modal";

const AddTaskModal = ({isOpen,setIsOpen}) => {
    return (
        <Modal  isOpen={isOpen} setIsOpen={setIsOpen} title={"Programming"}>
         
         <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis molestias neque facere, totam dolorem saepe laboriosam iusto nihil harum aperiam! Tenetur quos vitae quidem, optio quod blanditiis sit ab modi!</p>

        </Modal>
    );
};

export default AddTaskModal;