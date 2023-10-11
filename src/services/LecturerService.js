import axios from "axios";

const LECTURE_BASE_REST_API_URL = "http://localhost:8080/api/v1/lecturers";

class LecturerService {
    getAllLecturers() {
        return axios.get(LECTURE_BASE_REST_API_URL);
    }

    createLecturer(lecturer) {
        return axios.post(LECTURE_BASE_REST_API_URL, lecturer);
    }

    getLecturerById(lecturerId) {
        return axios.get(LECTURE_BASE_REST_API_URL + "/" + lecturerId);
    }

    updateLecturer(lecturerId, lecturer) {
        return axios.put(
            LECTURE_BASE_REST_API_URL + "/" + lecturerId,
            lecturer
        );
    }

    deleteLecture(lecturerId) {
        return axios.delete(LECTURE_BASE_REST_API_URL + "/" + lecturerId);
    }
}

export default new LecturerService();
