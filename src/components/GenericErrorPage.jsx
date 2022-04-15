import { useNavigate } from "react-router";

export default function GenericErrorPage() {
  let navigate = useNavigate();
  function goHome() {
    navigate(`/`);
  }

  return (
    <div>
      <h3>404:</h3>
      <p>Page not found - invalid URL</p>
      <button onClick={goHome}>Go back to home</button>
    </div>
  );
}
