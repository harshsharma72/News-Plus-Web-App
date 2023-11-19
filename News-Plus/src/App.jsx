import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar";
import NewsBoard from "./Components/NewsBoard";
import { useState } from "react";
function App() {
  const [category, setCategory] = useState("general");
  return (
    <>
      <Navbar setCategory={setCategory} />
      <NewsBoard category={category} />
    </>
  );
}
export default App;
