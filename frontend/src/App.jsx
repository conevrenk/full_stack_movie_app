import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Create from "./pages/Create";
import Header from "./components/Header";
import Details from "./pages/Details";

const App = () => {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/create" element={<Create />} />
          <Route path="movie/:id" element={<Details />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
