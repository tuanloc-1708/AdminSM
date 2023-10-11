import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LecturerService from "../services/LecturerService";

const ListLecturersComponent = () => {
    const [lecturers, setLecturers] = useState([]);

    useEffect(() => {
        getAllLecturers();
    }, []);

    const getAllLecturers = () => {
        LecturerService.getAllLecturers()
            .then((response) => {
                setLecturers(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };
    const deleteLecturer = (lecturerId) => {
        LecturerService.deleteLecture(lecturerId)
            .then((response) => {
                getAllLecturers();
            })
            .catch((error) => {
                console.log(error);
            });
    };
    return (
        <div className="container">
            <h2 className="text-center">List Lecturers</h2>
            <Link to="/add-lecturer" className="btn btn-primary mb-2">
                {" "}
                Add Lecturer{" "}
            </Link>
            <table className="table table-border table-striped">
                <thead>
                    <th>Lecturer Id</th>
                    <th>Lecturer Name</th>
                    <th>Lecturer Email</th>
                    <th>Lecturer Status</th>
                    <th>Actions</th>
                </thead>

                <tbody>
                    {lecturers.map((lecturer) => (
                        <tr key={lecturer.id}>
                            <td>{lecturer.id}</td>
                            <td>{lecturer.name}</td>
                            <td>{lecturer.email}</td>
                            <td>{lecturer.status}</td>
                            <td>
                                <Link
                                    className="btn btn-info"
                                    to={`/edit-lecturer/${lecturer.id}`}
                                >
                                    Update
                                </Link>
                                <button
                                    className="btn btn-danger btn-margin-left"
                                    onClick={() => deleteLecturer(lecturer.id)}
                                >
                                    {" "}
                                    Delete{" "}
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ListLecturersComponent;
