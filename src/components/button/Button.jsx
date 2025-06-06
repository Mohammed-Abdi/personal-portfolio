import "../button/Button.css";

function Button() {
  return (
    <a href="https://t.me/its_mamme" target="_blank" className="sleek-btn">
      <span className="btn-txt">Let's Connect</span>
      <i className="bx bx-arrow-back hidden"></i>
      <i className="bx bx-arrow-back"></i>
    </a>
  );
}

export default Button;
