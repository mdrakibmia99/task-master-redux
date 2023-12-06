import { useSelector } from 'react-redux';
import TaskCard from '../components/tasks/TaskCard';
import { useGetTasksQuery } from '../redux/features/tasks/taskAPI';
const Archive = () => {
  const {data:tasks}=useGetTasksQuery();
  // const { tasks } = useSelector((state) => state.taskSlice);
  const archiveTasks = tasks?.filter((item) => item.status == 'archive');

  // const archiveTasks = tasks.filter((item) => item.status == 'archive');

  return (
    <div className="p-10">
      <div>
        <h1 className="text-xl font-semibold mb-10">Archive board</h1>
      </div>
      <div className="grid grid-cols-4 gap-5">
        {archiveTasks?.map((item) => (
          <TaskCard key={item._id} task={item} />
        ))}
      </div>
    </div>
  );
};

export default Archive;
