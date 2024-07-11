import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";


// import Home from "./components/Home";
import RestaurantCreate from "./components/RestaurantCreate";
import RestaurantDetail from "./components/RestaurantDetail";
import RestaurantList from "./components/RestaurantList";
import RestaurantSearch from "./components/RestaurantSearch";
import RestaurantUpdate from "./components/RestaurantUpdate";
// import Login from "./components/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" exact element={<RestaurantList />} />
          <Route path="/create" element={<RestaurantCreate />} />
          <Route path="/detail" element={<RestaurantDetail />} />
          <Route path="/search" element={<RestaurantSearch />} />
          <Route path="/update/:id" element={<RestaurantUpdate />}  />
          {/* <Route path="/login" element={<Login />}  /> */}
          {/* <Route path="/login" element={<Login history={history} />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
