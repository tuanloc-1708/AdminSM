import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";
import ListLecturersComponent from "./components/ListLecturersComponent";
import AddLecturerComponent from "./components/AddLecturerComponent";

function App() {
    return (
        <div>
            <Router>
                <HeaderComponent />
                <div className="container">
                    <Routes>
                        <Route
                            path="/"
                            element={<ListLecturersComponent />}
                        ></Route>
                        <Route
                            path="/lecturers"
                            element={<ListLecturersComponent />}
                        ></Route>
                        <Route
                            path="/add-lecturer"
                            element={<AddLecturerComponent />}
                        ></Route>
                        <Route
                            path="/edit-lecturer/:id"
                            Component={AddLecturerComponent}
                        ></Route>
                    </Routes>
                </div>
                <FooterComponent />
            </Router>
        </div>
    );
}

export default App;
