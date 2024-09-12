import "../style/Page.css";
import Content from "../component/Content";

const PageJs = (props) => {
  return (
    <>
      <div className="content-wrapper" id="project">
        <h1 className="content-title">{props.text}</h1>
        <div className="content-container">
          <Content
            text={"웹 다이어리"}
            url={"js-diary"}
            site={"https://dooheeyaa.github.io/window98-diary.github.io/"}
          />
        </div>
      </div>
    </>
  );
};

export default PageJs;
