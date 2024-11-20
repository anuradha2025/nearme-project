import styles from "./bottomcover.module.css";

import WelcomeSection from "./WelcomeSection";
import ContactUsSection from "./ContactUsSection";

const BottomCover = () => {
  return (
    <div className={`${styles.bottomCover} flex flex-col md:flex-row flex-wrap justify-between p-12 mt-4 md:mt-14`}>
      <WelcomeSection />
      <ContactUsSection />
    </div>
  );
};

export default BottomCover;
