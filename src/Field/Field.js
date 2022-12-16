import './Field.css';
import cn from 'classnames';

const Field = (props) => {
    const { name, children, validityMessage } = props;

    const message = validityMessage.find((item) => item !== 'valid') ?? 'valid';

    return (
        <div className='field form__field'>
            <p className='field__name'>{ name }</p>
            { children}
            <p className='message field__message'>{ message }</p>
        </div>
    );
}

export default Field;