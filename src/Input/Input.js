import cn from 'classnames';
import './Input.css';

const Input = (props) => {
    const { id, type, placeholder, value, validity, onChange, maxLength } = props;

    const labelClasses = cn({'field__label_invalid': validity === 'invalid'});

    return (
        <label className={ labelClasses } htmlFor={ id }>
            <input 
                className='input field__input'
                id={ id }
                type={ type }
                placeholder={ placeholder }
                value={ value }
                onChange={ onChange }
                maxLength={ maxLength }
            />
        </label>
    );
};

export default Input;