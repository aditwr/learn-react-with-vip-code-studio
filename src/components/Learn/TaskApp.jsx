import { useState, useEffect, useReducer } from "react";
import PropTypes from "prop-types";
import { Trash2, Pencil } from "lucide-react";

// TASK_APP COMPONENT
export default function TaskApp() {
  // const [tasks, setTasks] = useState(initialTasks);
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  function handleAddTask(taskText) {
    dispatch({
      type: "ADD_TASK",
      payload: {
        taskId: nextTaskId++,
        taskText,
      },
    });
  }

  function handleChangeTask(task) {
    dispatch({
      type: "CHANGE_TASK",
      payload: {
        ...task,
      },
    });
  }

  function handleDeleteTask(taskId) {
    dispatch({
      type: "DELETE_TASK",
      payload: {
        taskId,
      },
    });
  }

  return (
    <div className="w-[400px]">
      <h1 className="mb-4 text-3xl">Task App</h1>
      <AddTask onAddTask={handleAddTask} />
      <TaksList
        tasks={tasks}
        onDeleteTask={handleDeleteTask}
        onChangeTask={handleChangeTask}
      />
    </div>
  );
}

function tasksReducer(tasks, action) {
  switch (action.type) {
    case "ADD_TASK": {
      return [
        ...tasks,
        {
          id: action.payload.taskId,
          text: action.payload.taskText,
          completed: false,
        },
      ];
    }
    case "CHANGE_TASK": {
      return tasks.map((task) => {
        if (task.id === action.payload.id) {
          return action.payload;
        }
        return task;
      });
    }
    case "DELETE_TASK": {
      return tasks.filter((task) => task.id !== action.payload.taskId);
    }
    default:
  }
}

AddTask.propTypes = {
  onAddTask: PropTypes.func,
};

// ADD_TASK COMPONENT
export function AddTask({ onAddTask }) {
  const [taskText, setTaskText] = useState("");

  return (
    <div className="flex w-full gap-x-2">
      <input
        type="text"
        placeholder="Enter a task"
        className="flex-grow px-3 py-1 border border-gray-300"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
      />
      <button
        onClick={() => {
          onAddTask(taskText);
          setTaskText("");
        }}
        className="px-4 py-1 font-medium text-white bg-blue-500"
      >
        Add Task
      </button>
    </div>
  );
}

TaksList.propTypes = {
  tasks: PropTypes.array,
  onDeleteTask: PropTypes.func,
  onChangeTask: PropTypes.func,
};

// TASK_LIST COMPONENT
export function TaksList({ tasks = [], onDeleteTask, onChangeTask }) {
  const [editTaskId, setEditTaskId] = useState(null);
  const [editTaskText, setEditTaskText] = useState("");

  useEffect(() => {}, [editTaskId, editTaskText]);

  return (
    <ul className="mt-4">
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <li key={task.id} className="my-1">
            <div className="flex items-start justify-between">
              <div className="relative flex items-start gap-x-3">
                {/* checkbox */}
                <input
                  type="checkbox"
                  className="translate-y-[25%] w-4 h-4 rounded-full"
                  checked={task.completed}
                  onChange={() => {
                    onChangeTask({ ...task, completed: !task.completed });
                  }}
                />
                {/* end of checkbox */}
                <div className="">
                  <span
                    className={
                      (task.completed ? "line-through" : "") +
                      " font-medium " +
                      (editTaskId === task.id ? "hidden" : "")
                    }
                  >
                    {task.text}
                  </span>
                  <input
                    className={editTaskId !== task.id ? "hidden" : ""}
                    type="text"
                    value={editTaskText ? editTaskText : task.text}
                    onChange={(e) => {
                      setEditTaskText(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="flex gap-x-2">
                {editTaskId !== task.id ? (
                  <button
                    onClick={() => {
                      setEditTaskId(task.id);
                      setEditTaskText(task.text);
                    }}
                    className="p-2 bg-orange-100 rounded-full text-neutral-800"
                  >
                    <Pencil size={16} />
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      onChangeTask({ ...task, text: editTaskText });
                      setEditTaskId(null);
                      setEditTaskText("");
                    }}
                    className="px-3 py-1 bg-orange-100 rounded-full text-neutral-800"
                  >
                    Save
                  </button>
                )}
                <button
                  onClick={() => onDeleteTask(task.id)}
                  className="p-2 rounded-full bg-rose-100 text-neutral-800"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          </li>
        ))
      ) : (
        <p>No tasks</p>
      )}
    </ul>
  );
}

// DATA
let nextTaskId = 4;
const initialTasks = [
  {
    id: 1,
    text: "Learn Web Development",
    completed: false,
  },
  {
    id: 2,
    text: "Go the the gym",
    completed: true,
  },
  {
    id: 3,
    text: "Read the Quran",
    completed: false,
  },
];
