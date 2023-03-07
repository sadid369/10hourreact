import "./App.css";
import Video from "./components/Video";
import videos from "./data/data";
function App() {
  return (
    <div className={`App`}>
      <div>Videos</div>
      {videos.map((video) => {
        return <Video key={video.id} {...video}></Video>;
      })}
    </div>
  );
}

export default App;
