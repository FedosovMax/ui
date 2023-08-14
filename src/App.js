import {LotsTable} from "./pages/LotsTable";
import {Route, Routes} from "react-router-dom";

function App() {
  return (
     <Routes>
       <Route path="/" element={<LotsTable/>}/>
     </Routes>
  );
}

export default App;
