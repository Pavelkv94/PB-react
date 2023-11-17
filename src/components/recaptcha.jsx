import ReCAPTCHA from "react-google-recaptcha";

const Recaptcha = ({ setOpenCaptcha, handleCaptchaChange }) => {
  const styles = {
    width: "100%",
    height: "100vh",
    background: "rgb(0,0,0, 0.4)",
    position: "fixed",
    zIndex: "99",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  const handleClose = (e) => {
    e.stopPropagation();
    setOpenCaptcha(false);
  };
  return (
    <div style={styles} onClick={handleClose}>
      <ReCAPTCHA sitekey="6Le-uhEpAAAAAD5lmy8AHUi9oE25O1quBTKJV01d" onChange={handleCaptchaChange} />
    </div>
  );
};

export default Recaptcha;
