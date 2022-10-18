const Footer = () => {
  return (
    <p className="border-top pt-3 text-center">
      <span>
        BizAd<i className="bi bi-people-fill"></i>App
      </span>
      <span className="mx-1">&copy;</span>
      <span>{new Date().getFullYear()}</span>
    </p>
  );
};

export default Footer;
