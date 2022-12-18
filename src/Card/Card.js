import './Card.css';

const Card = (props) => {
    const { cvc, number, name, month, year } = props;

    const date = `${month}/${year}`;

    return (
        <div className='card'>
            <div className='card__front'>
                <div className='card__header'></div>
                <p className='card__body number__view'>{ number }</p>
                <p className='card__footer'>
                    <span className='name__view'>{ name }</span>
                    <span className='date__view'>{ date }</span>
                </p>
            </div>
            <div className='card__back'>
                <span className='cvc__view'>{ cvc }</span>
            </div>
        </div>
    );
};

Card.defaultProps = {
    cvc: '000',
    number: '0000 0000 0000 0000',
    name: 'Jane Appleseed',
    month: '00',
    year: '00'
};


export default Card;