import "../social-media/SocialMedia.css";

function SocialMedia() {
  return (
    <div className="social-media-links">
      <a href="mailto:your.mohammedabdi.ta@gmail.com">
        <i className="bx bx-envelope"></i>
        <span className="social-media-username">Mohammedabdi.ta@gmail.com</span>
      </a>

      <a href="https://t.me/its_mamme">
        <i class="bx bxl-telegram"></i>
        <span className="social-media-username">its_mamme</span>
      </a>

      <a href="https://www.linkedin.com/in/mohammed-abdi-tahir">
        <i class="bx bxl-linkedin-square"></i>
        <span className="social-media-username">Mohammed-abdi-tahir</span>
      </a>
    </div>
  );
}

export default SocialMedia;
