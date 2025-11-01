import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthProvider";
import { setItem } from "../utils/LocalStorage";

const AddTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [assign, setAssign] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const handleForm = (e) => {
    e.preventDefault();

    const newTask = {
      title,
      date,
      category,
      description,
      active: false,
      newTask: true,
      failed: false,
      completed: false,
    };

    // ✅ make a new copy so React updates properly
    const updatedData = userData.employees.map((emp) => {
      if (emp.name === assign) {
        return {
          ...emp,
          tasks: [...emp.tasks, newTask],
          taskCounts: {
            ...emp.taskCounts,
            newTask: emp.taskCounts.newTask + 1,
          },
        };
      }
      return emp;
    });

    // ✅ update state + localStorage
    setUserData({ ...userData, employees: updatedData });
    setItem({ ...userData, employees: updatedData });

    // clear inputs
    setTitle("");
    setAssign("");
    setCategory("");
    setDate("");
    setDescription("");
  };

  return (
   <form
      onSubmit={handleForm}
      className="h-[58%] bg-[#1C1C1C] w-full px-10 p-3 flex justify-between"
    >
      <div>
        <h3 className="font-bold text-white mb-1">Task Title</h3>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="outline-none w-[30vw] rounded-lg p-2 mb-5 border-2 text-white border-white bg-black placeholder-white"
          type="text"
          placeholder="Enter a Task..."
        />
        <h3 className="font-bold text-white mb-1">Date</h3>
        <input
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="outline-none w-[30vw] rounded-lg p-2 mb-5 border-2 border-white bg-black text-white [color-scheme:dark]"
          type="date"
        />
        <h3 className="font-bold text-white mb-1">Assign to</h3>
        <input
          value={assign}
          onChange={(e) => setAssign(e.target.value)}
          className="outline-none w-[30vw] rounded-lg p-2 mb-5 border-2 text-white border-white bg-black placeholder-white"
          type="text"
          placeholder="Employee name..."
        />
        <h3 className="font-bold text-white mb-1">Category</h3>
        <input
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="outline-none w-[30vw] rounded-lg p-2 mb-5 border-2 text-white border-white bg-black placeholder-white"
          type="text"
          placeholder="design, dev, etc"
        />
      </div>

      <div>
        <h3 className="text-xl font-bold text-white mb-1">Description</h3>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="outline-none w-[30vw] rounded-lg p-2 mb-5 border-2 text-white border-white bg-black placeholder-white"
          rows={9}
          cols={30}
        ></textarea>
        <br />
        <button className="bg-amber-400 font-bold text-xl text-white w-full rounded-lg p-2 active:scale-90 border-3 border-white cursor-pointer">
          Submit
        </button>
      </div>
    </form>
  );
};

export default AddTask;
