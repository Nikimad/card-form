import './Form.css';

const Form = (props) => {
    const { onSubmit, children } = props;

    return (
        <form className='form' onSubmit={ onSubmit }>
            { children }
        </form>
    );
};

export default Form;