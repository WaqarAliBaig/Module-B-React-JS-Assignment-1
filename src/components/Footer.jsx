import facebook from "../images/social-media-1.png";
import twitter from "../images/social-media-2.png";
import instagram from "../images/social-media-3.png";

const Footer = () => {
  return (
    <>
      {/* Footer Section Start */}
      <div className="footer">
        <div className="box">
          <ul>
            <li>About</li>
            <li>Contact</li>
            <li>Terms of Use</li>
            <li>Privicy Policy</li>
          </ul>
          <div className="content">
            <p>&copy; Your Website 2023. All Rights Reserved.</p>
          </div>
        </div>

        <div className="icons">
          <img src={facebook} width={30} />
          <img src={twitter} width={30} />
          <img src={instagram} width={30} />
        </div>
      </div>
      {/* Footer Section End */}
    </>
  );
};

export default Footer;
