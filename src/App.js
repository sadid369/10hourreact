import "./App.css";
import Video from "./components/Video";

function App() {
  const channelName = "Coder Dost";
  let obj = {
    title: "React Js Tutorial",
    views: "10000K",
    time: "One Year ago",
    channel: channelName,
  };

  return (
    <div className={`App`}>
      <div>Videos</div>
      <Video {...obj}></Video>
      <Video
        title={`Node Js Tutorial`}
        views={`100k`}
        time={`1 month ago`}
        channel={channelName}
      ></Video>
      <Video
        title={`Node Js Tutorial`}
        views={`100k`}
        time={`1 month ago`}
        channel={channelName}
      ></Video>
      <Video
        title={`Node Js Tutorial`}
        views={`100k`}
        time={`1 month ago`}
        channel={channelName}
      ></Video>
      <Video
        title={`Node Js Tutorial`}
        views={`100k`}
        time={`1 month ago`}
        channel={channelName}
      ></Video>
      <Video
        title={`Node Js Tutorial`}
        views={`100k`}
        time={`1 month ago`}
        channel={channelName}
      ></Video>
    </div>
  );
}

export default App;
