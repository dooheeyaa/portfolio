import "../style/Content.css";

const Content = ({ text, url, site }) => {
  function desHandler() {
    const description = document.querySelector(".description-wrapper");
    description.style.display = "block";
  }

  function btnHandler() {
    const description = document.querySelector(".description-wrapper");
    description.style.display = "none";
  }

  return (
    <>
      <a
        href={site}
        className={`project-box box1 project-${url}`}
        onClick={desHandler}
      >
        <div className="project-link">{text}</div>
      </a>
    </>
  );
};

export default Content;
