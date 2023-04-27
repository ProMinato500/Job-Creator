import { useState } from "react";
import Jobs from "./components/Jobs";
import Navbar from "./components/Navbar";
import Form from "./components/Form";

function App() {
  const [job, setJob] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    company: "",
    industry: "",
    location: "",
    remote: "",
    expMin: "",
    expMax: "",
    salMin: "",
    salMax: "",
    totalEmp: "",
    apply: null,
  });

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
  const handleSubmit = (data) => {
    setFormData({ data });

    if (formData.hasOwnProperty("id")) {
      fetch(`https://644416f090738aa7c07ed4b0.mockapi.io/jobs/${formData.id}`, {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(formData),
      })
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
        })
        .then((task) => {
          handleCloseModal();
          fetchItems();
          console.log("Updated Successfully");
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      fetch("https://644416f090738aa7c07ed4b0.mockapi.io/jobs", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(formData),
      })
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
        })
        .then((task) => {
          handleCloseModal();
          fetchItems();
          console.log("Form data:", formData);
        })
        .catch((error) => {
          return error;
        });
    }
  };
  return (
    <div className="min-h-screen bg-[#D8D8D8] font-poppins overflow-x-hidden">
      <Navbar
        fetchItems={fetchItems}
        showModal={showModal}
        handleOpenModal={handleOpenModal}
        handleCloseModal={handleCloseModal}
      />
      {showModal && (
        <Form
          formData={formData}
          setFormData={setFormData}
          handleSubmit={handleSubmit}
        />
      )}
      <Jobs
        job={job}
        setJob={setJob}
        fetchItems={fetchItems}
        handleOpenModal={handleOpenModal}
        formData={formData}
        setFormData={setFormData}
      />
    </div>
  );
}

export default App;
