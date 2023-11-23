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
      <ReCAPTCHA sitekey="6LeNwBEpAAAAAOlZ1yufi3m3Tzf80tZUsjprcO6r" onChange={handleCaptchaChange} />
    </div>
  );
};

export default Recaptcha;
//6LdNQBMpAAAAALE7mjnQV21b3xXBXaOQXper9ob3
//todo dev - 6LeNwBEpAAAAAOlZ1yufi3m3Tzf80tZUsjprcO6r