import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Delivery from "./pages/delivery";
import Table from "./pages/table";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Table />} />
          <Route path="/delivery" element={<Delivery />} />
        </Route>
    </Routes>
    </div>
  );
}

export default App;
