import Topbar from "./components/Topbar/Topbar.jsx";
import Header from "./components/Header/Header.jsx";
import SinglePage from "./pages/SinglePage/SinglePage.jsx";
import WritePage from "./pages/WritePage/WritePage.jsx";
function App() {
  return (
    <div className="App">
      <Topbar />
      <Header />
      <WritePage />
    </div>
  );
}

export default App;
