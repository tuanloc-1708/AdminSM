import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import LecturerService from "../services/LecturerService";

const AddLecturerComponent = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState("");
    const navigate = useNavigate();
    const { id } = useParams();

    const saveOrUpdateLecturer = (e) => {
        e.preventDefault();

        const lecturer = { name, email, status };

        if (id) {
            LecturerService.updateLecturer(id, lecturer)
                .then((response) => {
                    navigate("/");
                })
                .catch((error) => {
                    console.log(error);
                });
        } else {
            console.log(lecturer);

            LecturerService.createLecturer(lecturer)
                .then((response) => {
                    console.log(response.data);
                    navigate("/");
                })
                .catch((error) => {
                    console.log(console.error());
                });
        }
    };

    useEffect(() => {
        LecturerService.getLecturerById(id)
            .then((response) => {
                setName(response.data.name);
                setEmail(response.data.email);
                // setStatus(response.data.status)
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const title = () => {
        if (id) {
            return <h2 className="text-center">Update Employee</h2>;
        } else {
            return <h2 className="text-center">Add Employee</h2>;
        }
    };

    return (
        <div>
            <br /> <br />
            <div className="container">
                <div className="card col-md-G offset-md-3 offset-md-3">
                    {title()}
                    <div className="card-body">
                        <form>
                            <div className="form-group mb-2">
                                <label className="form-label">Name</label>
                                <input
                                    type="text"
                                    placeholder="Enter Name"
                                    name="name"
                                    className="form-control"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                ></input>
                            </div>

                            <div className="form-group mb-2">
                                <label className="form-label">Email</label>
                                <input
                                    type="text"
                                    placeholder="Enter Email"
                                    name="email"
                                    className="form-control"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                ></input>
                            </div>

                            <div className="form-group mb-2">
                                <label className="form-label">Status</label>
                                <br />
                                <input
                                    type="checkbox"
                                    name="status"
                                    className="form-check-input"
                                    checked={status}
                                    onChange={(e) =>
                                        setStatus(e.target.checked)
                                    }
                                ></input>
                            </div>

                            <button
                                className="btn btn-success"
                                onClick={(e) => saveOrUpdateLecturer(e)}
                            >
                                Submit
                            </button>
                            <Link
                                to="/Lecturer"
                                className="btn btn-danger btn-margin-left"
                            >
                                Cancel
                            </Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddLecturerComponent;
