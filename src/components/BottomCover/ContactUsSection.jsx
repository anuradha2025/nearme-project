import styles from './ContactUsSection.module.css';
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { CiLinkedin } from "react-icons/ci";

const ContactUsSection = () => {
    return (
        <div className={styles.contactUsContainer}>
            <h1>Contact Us</h1>
            <div className={styles.contactUsDetails}>
                <p>For inquiries or support, reach out to us at:</p>
                <p>Email: support@nearme.lk</p>
                <p>Phone: +94 123 456 789</p>
                <p>Follow Us</p>
            </div>
            <p className={styles.socialIcons}>
                <FaFacebook /> <BsTwitterX /> <FaInstagram /> <CiLinkedin />
            </p>
        </div>
    );
};

export default ContactUsSection;