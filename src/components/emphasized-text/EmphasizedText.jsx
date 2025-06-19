import "./EmphasizedText.css";

function EmphasizedText({ text }) {
  return (
    <div className="emphasized">
      <span className="emphasized-text">{text}</span>
    </div>
  );
}

export default EmphasizedText;
