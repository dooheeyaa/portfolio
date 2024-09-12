import "../style/Page.css";
import "../style/Tech.css";
import html from "../assets/html-icon.png";
import css from "../assets/css-icon.png";
import js from "../assets/js-icon.png";
import react from "../assets/react-icon.png";
import git from "../assets/git-icon.png";
import github from "../assets/github-icon.png";

const Tech = ({ text, id }) => {
  return (
    <div className="content-wrapper" id={id}>
      <h1 className="content-title">{text}</h1>
      <div className="content-container">
        <div className="tech-container">
          <div className="skill-container">
            <h1 className="tech-title">🔨Skills</h1>
            <div className="skill-item-box">
              <img src={html} className="skill-item"></img>
              <img src={css} className="skill-item"></img>
              <img src={js} className="skill-item"></img>
              <img src={react} className="skill-item"></img>
              <img src={git} className="skill-item"></img>
              <img src={github} className="skill-item"></img>
            </div>
          </div>
          <div className="qualify-container">
            <h1 className="tech-title">🏆Qualifications</h1>
            <ul className="qualify-list">
              <li className="qualify-item">정보처리기사(2024)</li>
              <li className="qualify-item">ITQ 한글엑셀 A등급</li>
              <li className="qualify-item">ITQ 한글파워포인트 A등급</li>
              <li className="qualify-item">ITQ 아래한글 A등급</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tech;
