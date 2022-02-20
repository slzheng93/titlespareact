import SearchPage from "./components/SearchPage";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App"style={{
      backgroundImage: `url("https://cdn.pixabay.com/photo/2021/11/26/17/26/desert-6826299_1280.jpg")`,
      backgroundSize: `cover`,
      backgroundRepeat: `no-repeat`,
      height: `210vh`,
      weight: `150vh`
      }}>
      <SearchPage/>
    </div>
  );
}

export default App;
