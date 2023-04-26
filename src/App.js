import { useState } from "react";
import Jobs from "./components/Jobs";
import Navbar from "./components/Navbar";
import Form from "./components/Form";

function App() {
  const [job, setJob] = useState({});
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };
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
      <Navbar
        fetchItems={fetchItems}
        showModal={showModal}
        handleOpenModal={handleOpenModal}
        handleCloseModal={handleCloseModal}
      />
      {showModal && <Form showModal={setShowModal} fetchItems={fetchItems} />}
      <Jobs job={job} setJob={setJob} fetchItems={fetchItems} />
    </div>
  );
}

export default App;
