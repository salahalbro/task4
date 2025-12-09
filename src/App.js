import Slider3D from "./component/Slider";

function App() {
  const slides = [
    "/image/1.jpg",
    "/image/2.jpg",
    "/image/3.jpg",
    "/image/4.png",
    "/image/5.png",
    "/image/6.jpg",
  ];

  return (
    <div>
      <Slider3D slides={slides} />
    </div>
  );
}

export default App;