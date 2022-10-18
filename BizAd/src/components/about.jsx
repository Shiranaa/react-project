import PageHeader from "./common/pageHeader";

const About = () => {
  return (
    <PageHeader
      title={
        <>
          About BizAd<i className="bi bi-people-fill"></i>App
        </>
      }
      description="Advertising app for businesses"
    />
  );
};

export default About;
