import "./Footer.css";

function Footer(props) {
  const year = new Date().getFullYear();
  return (
    <footer>
      <span>
        &copy;{year} | {props.name}
      </span>
    </footer>
  );
}

export default Footer;
