import ServicesHome from "../components/ServicesHome"
import Description from "../components/services/Description";
import Support from "../components/services/Support";
import ScrollToTop from "../components/ScrollToTop";

const Services = () => {
  return (
    <main>
      <Description />
      <ServicesHome />
      <Support />
      <ScrollToTop />
    </main>
  );
};

export default Services;
