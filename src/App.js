import './App.css';
import Form from './Form/Form';
import Field from './Field/Field';
import Input from './Input/Input';
import Card from './Card/Card';

import { useImmer } from 'use-immer';

const App = () => {
  const [formState, updateFormState] = useImmer({
    name: {
      value: '',
      validity: 'processing',
      validityMessage: null
    },
    number: {
      value: '',
      validity: 'processing',
      validityMessage: null
    },
    month: {
      value: '',
      validity: 'processing',
      validityMessage: null
    },
    year: {
      value: '',
      validity: 'processing',
      validityMessage: null
    },
    cvc: {
      value: '',
      validity: 'processing',
      validityMessage: null
    },
    status: 'editable'
  });

  const update = {
    field: {
      name: (name) => updateFormState((draft) => {
        draft.name.value = name;
        draft.name.validity = 'processing';
      }),
      number: (number) => updateFormState((draft) => {
        draft.number.value = number;
        draft.number.validity = 'processing';
      }),
      month: (month) => updateFormState((draft) => {
        draft.month.value = month;
        draft.month.validity = 'processing';
      }),
      year: (year) => updateFormState((draft) => {
        draft.year.value = year;
        draft.year.validity = 'processing';
      }),
      cvc: (cvc) => updateFormState((draft) => {
        draft.cvc.value = cvc;
        draft.cvc.validity = 'processing';
      }),
    },
    validity: {
      name: (validity, message) => updateFormState((draft) => {
        draft.name.validity = validity;
        draft.name.validityMessage = message;
      }),
      number: (validity, message) => updateFormState((draft) => {
        draft.number.validity = validity;
        draft.number.validityMessage = message;
      }),
      month: (validity, message) => updateFormState((draft) => {
        draft.month.validity = validity;
        draft.month.validityMessage = message;
      }),
      year: (validity, message) => updateFormState((draft) => {
        draft.year.validity = validity;
        draft.year.validityMessage = message;
      }),
      cvc: (validity, message) => updateFormState((draft) => {
        draft.cvc.validity = validity;
        draft.cvc.validityMessage = message;
      }),
    }
  };

  const submit = (e) => {
    e.preventDefault();

    checkValidity('name');
    checkValidity('number');
    checkValidity('month');
    checkValidity('year');
    checkValidity('cvc');

    updateFormState((draft) => {
      draft.status = 'submited';
    });
  };

  const checkValidity = (key) => {
    if (formState[key].value.length === 0) return update.validity[key]('invalid', 'Can\'t be blank');
    return update.validity[key]('valid', 'valid');
  }

  return (
    <div className='container'>
        <Card/>
        <Form onSubmit={ (e) => submit(e) }>
        <Field name='cardholder name' validityMessage={ [formState.name.validityMessage] }>
          <Input
            id='name'
            type='text'
            placeholder='e.g. Jane Appleseed'
            value={ formState.name.value }
            validity={ formState.name.validity }
            onChange={ (e) => update.field.name(e.target.value) }
          />
        </Field>
        <Field name="card number" validityMessage= { [formState.number.validityMessage] }>
          <Input
            id='number'
            type='tel'
            placeholder='e.g. 1234 5678 9123 0000'
            value={ formState.number.value }
            validity={ formState.number.validity }
            onChange={ (e) => update.field.number(e.target.value) }
          />
        </Field>
        <Field name="exp. date (mm/yy)" validityMessage= { [formState.month.validityMessage, formState.year.validityMessage] }>
          <Input
            id='month'
            type='number'
            placeholder='MM'
            value={ formState.month.value }
            validity={ formState.month.validity }
            onChange={ (e) => update.field.month(e.target.value) }
          />
          <Input
            id='year'
            type='number'
            placeholder='YY'
            value={ formState.year.value }
            validity={ formState.year.validity }
            onChange={ (e) => update.field.year(e.target.value) }
          />
        </Field>
        <Field name="cvc" validityMessage= { [formState.cvc.validityMessage] }>
          <Input
            id='cvc'
            type='number'
            placeholder='e.g. 123'
            value={ formState.cvc.value }
            validity={ formState.cvc.validity }
            onChange={ (e) => update.field.cvc(e.target.value) }
          />
        </Field>
        <input className='submit' type='submit' value='Confirm'/>
        </Form>
    </div>
  );
}

export default App;
