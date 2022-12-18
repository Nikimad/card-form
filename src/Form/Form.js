import Field from '../Field/Field';
import Input from '../Input/Input';
import './Form.css';

const Form = (props) => {
    const { onSubmit, state, update } = props;

    return (
        <form className='form' onSubmit={ onSubmit }>
          <Field name='cardholder name' validityMessage={ [state.name.validityMessage] }>
          <Input
            id='name'
            type='text'
            placeholder='e.g. Jane Appleseed'
            value={ state.name.value }
            validity={ state.name.validity }
            onChange={ (e) => update.field.name(e.target.value) }
            maxLength={ 26 }
          />
          </Field>
          <Field name="card number" validityMessage= { [state.number.validityMessage] }>
          <Input
            id='number'
            type='tel'
            placeholder='e.g. 1234 5678 9123 0000'
            value={ state.number.value }
            validity={ state.number.validity }
            onChange={ (e) => update.field.number(e.target.value) }
            maxLength={ 19 }
          />
          </Field>
          <Field name="exp. date (mm/yy)" validityMessage= { [state.month.validityMessage, state.year.validityMessage] }>
          <Input
            id='month'
            type='number'
            placeholder='MM'
            value={ state.month.value }
            validity={ state.month.validity }
            onChange={ (e) => update.field.month(e.target.value) }
          />
          <Input
            id='year'
            type='number'
            placeholder='YY'
            value={ state.year.value }
            validity={ state.year.validity }
            onChange={ (e) => update.field.year(e.target.value) }
          />
          </Field>
          <Field name="cvc" validityMessage= { [state.cvc.validityMessage] }>
          <Input
            id='cvc'
            type='number'
            placeholder='e.g. 123'
            value={ state.cvc.value }
            validity={ state.cvc.validity }
            onChange={ (e) => update.field.cvc(e.target.value) }
          />
          </Field>
          <Input id='submit' type='submit'/>
        </form>
    );
};

export default Form;