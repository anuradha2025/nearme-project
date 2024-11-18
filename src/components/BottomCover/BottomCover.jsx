import styles from "./bottomcover.module.css";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { CiLinkedin } from "react-icons/ci";

const BottomCover = () => {
  return (
    <div className={styles.bottomCover}>
      <WelcomeCover />
      <ContactUsCover />
    </div>
  );
};

const WelcomeCover = () => {
  return (
    <div className={styles.welcomeCover}>
      <h1>Welcome to Nearme.lk!</h1>
      <p>
        Find the best services and products near you with just a few clicks. Log
        in to get access to personalized recommendations, exclusive deals, and
        the quickest route to your desired services. Whether you're looking for
        a trusted service provider or the latest product in your area, we’ve got
        you covered!
      </p>
    </div>
  );
};

const ContactUsCover = () => {
  return (
    <div className={styles.contactCover}>
      <h1>Contact Us</h1>
      <p>For inquiries or support, reach out to us at:</p>
      <p>Email: support@nearme.lk</p>
      <p>Phone: +94 123 456 789</p>
      <p>Follow Us</p>
      <p>
        <FaFacebook /> <BsTwitterX /> <FaInstagram /> <CiLinkedin />
      </p>
    </div>
  );
};

export default BottomCover;
