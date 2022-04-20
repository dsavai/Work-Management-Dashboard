import MainContentCenter from "./components/MainContentCenter";
import AsideBar from "./components/asideBar/AsideBar";


function App() {
  return (
    <div className="dashboard">
      <AsideBar />
      <MainContentCenter />
    </div>
  );
}

export default App;
