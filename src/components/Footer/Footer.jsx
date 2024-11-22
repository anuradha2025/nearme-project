import LogoText from '../MainGroup/LogoText';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <div className={`${styles.footer} text-center pt-6 pb-14 px-4`}>
            <LogoText text="NearMe" fontSize="2.6em" />
            <h4 className='leading-6 text-lg font-normal'>Welcome to Nearme.lk!</h4>
            <p className='leading-5 text-md font-light'>Find the best services and products near you with just a few clicks. Log in to get access to personalized recommendations,<br /> exclusive deals, and the quickest route to your desired services. Whether you're looking for a trusted service provider or the<br /> latest product in your area, we’ve got you covered!</p>
            <p className='mt-6 font-light'>© 2024 Nearme.lk™. All rights reserved. | Nearme.lk™ is a trademark of Nearme.lk. Unauthorized use or duplication of this material without express permission is strictly prohibited</p>
        </div>
    )
}

export default Footer;