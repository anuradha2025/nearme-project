import styles from './WelcomeSection.module.css';

const WelcomeSection = () => {
    return (
        <div className={`${styles.welcomeCover} max-w-1/2 px-4 flex flex-col justify-start gap-2 `}>
            <h1 className='font-normal text-4xl'>Welcome to Nearme.lk!</h1>
            <p className='quicksand text-base text-justify '>
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