import { Link } from "react-router-dom";
import trust from "../assets/people-img.svg";
import about from "../assets/about.png";
import professional from "../assets/professional.png";
import background from "../assets/section-img.jpg";
import infograph from "../assets/infographic.svg";
import servicesIcon1 from "../assets/service-icon-1.svg";

const Home = () => {
  return (
    <>
      <div className="container hero-section">
        <h4 className="fw-light">Connect with us and</h4>
        <h1 className="fw-bold">
          Let's build your <br />
          success story together
        </h1>
        <Link to="/contact" className="orange-btn d-inline-block mt-2">
          Connect With Us
        </Link>
        <div className="trust-tag">
          <img src={trust} alt="trust" />
          <div className="trust-tag-content">
            <h5 className="text-white fs-6">Trusted By</h5>
            <p className="text-white fs-6">1000+ Influencer</p>
          </div>
        </div>
      </div>

      <div className="container wrapper">
        <div className="services-section text-center">
          <img src={infograph} className="img-fluid m-auto" alt="infograph" />
          <img src={servicesIcon1} alt="services-icon-1" className="services-icon services-icon-1" />
          <img src={servicesIcon1} alt="services-icon-2" className="services-icon services-icon-2" />
          <img src={servicesIcon1} alt="services-icon-3" className="services-icon services-icon-3" />
          <img src={servicesIcon1} alt="services-icon-4" className="services-icon services-icon-4" />
          <img src={servicesIcon1} alt="services-icon-5" className="services-icon services-icon-5" />
          <img src={servicesIcon1} alt="services-icon-6" className="services-icon services-icon-6" />
          <img src={servicesIcon1} alt="services-icon-7" className="services-icon services-icon-7" />
          <img src={servicesIcon1} alt="services-icon-8" className="services-icon services-icon-8" />
          <img src={servicesIcon1} alt="services-icon-9" className="services-icon services-icon-9" />
          <img src={servicesIcon1} alt="services-icon-10" className="services-icon services-icon-10" />
          <img src={servicesIcon1} alt="services-icon-11" className="services-icon services-icon-11" />
          <img src={servicesIcon1} alt="services-icon-12" className="services-icon services-icon-12" />
        </div>
      </div>

      <div className="about-section wrapper pb-0">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="line mb-3"></div>
              <h5 className="mb-3 text-white">
                Build your influencer brand on our platform which will give you
                the tools and networking opportunities to grow and collaborate
                with other like minded influencers and merchant brands.
              </h5>
              <h5 className="text-white">
                Bring in revenue by tagging, adding, creating, reposting, on
                pictures and videos for/ by other influencer or simply report
                fake profiles and earn redeemable credits enough to pay your
                monthly.
              </h5>
              <Link
                to="/register"
                className="display-inline-block secondary-btn mt-3"
              >
                Register Now
              </Link>
            </div>
            <div className="col-md-6">
              <img src={about} alt="about" />
            </div>
          </div>
        </div>
      </div>

      <div className="professional-section wrapper">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-5 p-0">
              <img
                src={professional}
                className="img-fluid"
                alt="professional"
              />
            </div>
            <div className="col-md-7 professional-content">
              <h1 className="mb-3 fw-bold text-white">
                Professional Liability Insurance
              </h1>
              <p className="text-white">
                PLI acts as a kind of safety net protecting you and your
                business from the financial claim made by other players / stake
                holders . Our policy will cover all the leagal expenses to
                defend your interest in any negligence claim made against you /
                business.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid p-0 wrapper">
        <img src={background} className="img-fluid" alt="background" />
      </div>
      <div className="info-section wrapper">
        <div className="container">
          <div className="row">
            <div className="col-md-4"><h2 className="fw-bold">About Us </h2><div className="line mb-3"></div></div>
            <div className="col-md-8">
              <p>
                Influere is a latin verb that means “to flow in” or “to affect”.
                It is the root of the english word “influence” and is what best
                describes our platform which has the power or capacity to affect
                someones future. The potential and talent by bringing the tools
                of computer software, the skills of professionals and the
                networking gains of collaboration to every influencer joining
                our us.
              </p>
              <p>
                We are multicultural, multinational and a global group of
                professionals, all bundle into this platform to provide you
                every opportunity to monitorize your skills and takes to the
                global audience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
