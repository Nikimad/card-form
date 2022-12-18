import './Banner.css';

const Banner = (props) => {
    const { onClick } = props;

    return (
        <div className='banner'>
            <div className='banner__logo'></div>
            <div className='banner__body'>
                <p className='banner__title'>Thank you!</p>
                <span className='banner__message'>We've added your card details</span>
            </div>
            <button className='submit' onClick={ onClick }>Continue</button>
        </div>
    );
};

export default Banner;