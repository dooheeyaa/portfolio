import "../style/Page.css";
import Content from "../component/Content";

const Page = (props) => {
  return (
    <>
      <div className="content-wrapper" id="project">
        <h1 className="content-title">{props.text}</h1>
        <div className="content-container">
          <Content
            text={"감정 일기장"}
            url={"react-emotion"}
            site={"https://emotion-diary-ten-plum.vercel.app/"}
          />
          <Content text={"포트폴리오"} url={"react-portfolio"} site={"#open"} />
        </div>
      </div>
    </>
  );
};

export default Page;
