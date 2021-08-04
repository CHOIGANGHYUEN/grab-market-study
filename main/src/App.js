import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div>
      <div id="header-space">
        <div id="logo_space">
          <div id="header-logo">
            <img src="images\길.png"></img>
          </div>
          <div id="header-text">GiiLL</div>
        </div>
      </div>
      <div id="body">
        <div id="body-map">
          <div id="map">
            <img src="images\지도캡쳐본.png"></img>
          </div>
          <div id="interaction">
            <div id="good_button">좋아요 999+</div>
            <div id="share_button">공유 999+</div>
          </div>
          <div id="social_space">
            <div id="post">게시물</div>
            <div id="comment"></div>
          </div>
        </div>
      </div>
      <div id="footer">footer</div>
    </div>
  );
}

export default App;
