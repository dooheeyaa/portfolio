import "../style/Page.css";
import "../style/Info.css";

const Info = ({ text, id }) => {
  return (
    <div className="content-wrapper" id={id}>
      <h1 className="content-title">{text}</h1>
      <div className="content-container">
        <div className="info-container">
          <div className="info-item-box">
            <div className="info-item">
              <h1 className="info-top">👩‍💻name</h1>
              <h2 className="info-bottom">강두희</h2>
            </div>
            <div className="info-item">
              <h1 className="info-top">🎂birth</h1>
              <h2 className="info-bottom">98.09.20</h2>
            </div>
            <div className="info-item">
              <h1 className="info-top">📂notion</h1>
              <h2 className="info-bottom">
                <a
                  href="https://kangdh.notion.site/KANG-DOO-HEE-c343dda65fed489490505168be15acf4?pvs=74"
                  className="info-link"
                >
                  notion 바로가기
                </a>
              </h2>
            </div>
          </div>
          <div className="info-item-box">
            <div className="info-item">
              <h1 className="info-top">📞tel</h1>
              <h2 className="info-bottom">010-7768-1534</h2>
            </div>
            <div className="info-item">
              <h1 className="info-top">📧e-mail</h1>
              <h2 className="info-bottom">rkdengml0920@naver.com</h2>
            </div>
            <div className="info-item">
              <h1 className="info-top">🏫uni</h1>
              <h2 className="info-bottom">제주대학교</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
