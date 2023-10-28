import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  updateDoc,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "./firebase";
import "./Reservations.css";

function Reservations() {
  const [reservations, setReservations] = useState([]);
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [diners, setDiners] = useState("");
  const [phone, setPhone] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const modal = document.getElementById("myModal");
  const closeModal = document.getElementById("closeModal");
  const modalMessage = document.getElementById("modal-message");

  if (modal && closeModal) {
    modal.addEventListener("click", (event) => {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });

    closeModal.addEventListener("click", () => {
      modal.style.display = "none";
    });
  }

  function hideAlert() {
    const modal = document.getElementById("myModal");
    if (modal) {
      modal.style.display = "none";
    }
  }

  const getData = () => {
    onSnapshot(collection(db, "reservations"), (snapshot) => {
      setReservations(snapshot.docs.map((doc) => doc));
    });
  };

  const clearData = () => {
    setName("");
    setAge("");
    setDiners("");
    setPhone("");
  };

  const onSave = async (values) => {
    if (values.name && values.age && values.diners && values.phone) {
      await addDoc(collection(db, "reservations"), values);
      clearData();
    } else {
      showAlert("All fields must be filled");
    }
  };

  const handleUpdate = async (id, name, age, diners, phone) => {
    await updateDoc(doc(db, "reservations", id), {
      name,
      age,
      diners,
      phone,
    });
  };

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "reservations", id));
  };

  function showAlert(message) {
    if (modalMessage) {
      modalMessage.textContent = message;
      const modal = document.getElementById("myModal");
      if (modal) {
        modal.style.display = "block";

        const closeButton = document.getElementsByClassName("close")[0];
        if (closeButton) {
          closeButton.addEventListener("click", () => {
            hideAlert();
          });
        }
      }
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div id="myModal" className="modal">
        <div className="modal-content">
          <span className="close" id="closeModal">
            &times;
          </span>
          <p id="modal-message"></p>
        </div>
      </div>
      <div id="waitList-section">
        <h2>Create Clients for the Waiting List</h2>
        <div>
          <form id="form">
            <div className="formField">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                autoComplete="off"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </div>
            <div className="formField">
              <label htmlFor="age">Age</label>
              <input
                type="number"
                id="age"
                autoComplete="off"
                value={age}
                onChange={(event) => setAge(event.target.value)}
              />
            </div>
            <div className="formField">
              <label htmlFor="diners">No. Diners</label>
              <input
                type="number"
                id="diners"
                autoComplete="off"
                value={diners}
                onChange={(event) => setDiners(event.target.value)}
              />
            </div>
            <div className="formField">
              <label htmlFor="phone">Phone</label>
              <input
                type="text"
                id="phone"
                autoComplete="off"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
              />
            </div>
            <button
              type="button"
              onClick={() => {
                if (name && age && diners && phone) {
                  if (age < 18) {
                    showAlert("Client must have at least 18 years old");
                  } else if (age > 99) {
                    showAlert("Enter a valid age");
                  } else {
                    if (diners < 1 || diners > 50) {
                      showAlert("Invalid number of diners");
                    } else {
                      if (phone.length < 10) {
                        showAlert("Enter a valid phone");
                      } else {
                        if (isUpdating) {
                          handleUpdate(id, name, age, diners, phone);
                          setIsUpdating(false);
                          clearData();
                        } else {
                          onSave({ name, age, diners, phone });
                        }
                      }
                    }
                  }
                } else {
                  showAlert("All fields must be filled");
                }
              }}
            >
              Save Client
            </button>
          </form>
        </div>
        {reservations.length > 0 ? (
          <div className="table-wrapper">
            <table className="fl-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Diners</th>
                  <th>Phone</th>
                  <th>Options</th>
                </tr>
              </thead>
              <tbody>
                {reservations &&
                  reservations.map((client) => {
                    console.log("client :", client);
                    return (
                      <tr key={client.id}>
                        <td>{client.data().name}</td>
                        <td>{client.data().age}</td>
                        <td>{client.data().diners}</td>
                        <td>{client.data().phone}</td>
                        <td>
                          <button
                            type="button"
                            onClick={() => {
                              setId(client.id);
                              setName(client.data().name);
                              setAge(client.data().age);
                              setDiners(client.data().diners);
                              setPhone(client.data().phone);
                              setIsUpdating(true);
                            }}
                          >
                            Update
                          </button>
                          <span style={{ marginLeft: "10px" }}></span>
                          <button
                            type="button"
                            onClick={() => handleDelete(client.id)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        ) : (
          <h2>No Clients in the Waiting List</h2>
        )}
      </div>
    </>
  );
}

export default Reservations;
