import styles from "./bottomcover.module.css";

import WelcomeSection from "./WelcomeSection";
import ContactUsSection from "./ContactUsSection";

const BottomCover = () => {
  return (
    <div className={styles.bottomCover}>
      <WelcomeSection />
      <ContactUsSection />
    </div>
  );
};

export default BottomCover;
