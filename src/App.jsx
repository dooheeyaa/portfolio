import "./App.css";
import Open from "./pages/Open";
import Info from "./pages/Info";
import Tech from "./pages/Tech";
import Page from "./pages/Page";
import PageJs from "./pages/PageJs";
import PageHtml from "./pages/PageHtml";

function App() {
  return (
    <>
      <Open />
      <Info text={"Introduce"} id={"introduce"} />
      <Tech text={"Tech"} id={"tech"} />
      <Page text={"Project-React"} />
      <PageJs text={"Project-JS"} />
      <PageHtml text={"Project-Clone Coding"} />
    </>
  );
}

export default App;
