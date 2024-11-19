import styles from './WelcomeSection.module.css';

const WelcomeSection = () => {
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

export default WelcomeSection;