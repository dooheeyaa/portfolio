import "../style/Page.css";
import Content from "../component/Content";

const PageHtml = (props) => {
  return (
    <>
      <div className="content-wrapper" id="project">
        <h1 className="content-title">{props.text}</h1>
        <div className="content-container">
          <Content
            text={"네이버 클론코딩"}
            url={"html-naver"}
            site={"https://dooheeyaa.github.io/Naver.github.io/"}
          />
          <Content
            text={"삼천리 기업 클론코딩"}
            url={"html-samchully"}
            site={"https://dooheeyaa.github.io/samchully.github.io/"}
          />
        </div>
      </div>
    </>
  );
};

export default PageHtml;
