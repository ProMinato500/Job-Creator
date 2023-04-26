import { useState } from "react";
import Jobs from "./components/Jobs";
import Navbar from "./components/Navbar";

function App() {
  const [job, setJob] = useState({});
  const fetchItems = () => {
    fetch("https://644416f090738aa7c07ed4b0.mockapi.io/jobs", {
      method: "GET",
      headers: { "content-type": "application/json" },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jobs) => {
        setJob(jobs);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="min-h-screen bg-[#D8D8D8] font-poppins overflow-x-hidden">
      <Navbar fetchItems={fetchItems} />
      <Jobs job={job} setJob={setJob} fetchItems={fetchItems} />
    </div>
  );
}

export default App;
