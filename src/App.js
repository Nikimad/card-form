import './App.css';
import { useImmer } from 'use-immer';

const App = () => {
  const [formState, updateFormState] = useImmer({
    name: {
      value: '',
      validity: null
    },
    number: {
      value: '',
      validity: null
    },
    month: {
      value: '',
      validity: null
    },
    year: {
      value: '',
      validity: null
    },
    cvc: {
      value: '',
      validity: null
    },
    status: 'editable'
  });

  const update = {
    field: {
      name: (name) => updateFormState((draft) => {
        draft.name.value = name;
        draft.name.validity = null;
      }),
      number: (number) => updateFormState((draft) => {
        draft.number.value = number;
        draft.number.validity = null;
      }),
      month: (month) => updateFormState((draft) => {
        draft.month.value = month;
        draft.month.validity = null;
      }),
      year: (year) => updateFormState((draft) => {
        draft.year.value = year;
        draft.year.validity = null;
      }),
      cvc: (cvc) => updateFormState((draft) => {
        draft.cvc.value = cvc;
        draft.cvc.validity = null;
      }),
    },
    validity: {
      name: (validity) => updateFormState((draft) => {
        draft.name.validity = validity;
      }),
      number: (validity) => updateFormState((draft) => {
        draft.number.validity = validity;
      }),
      month: (validity) => updateFormState((draft) => {
        draft.month.validity = validity;
      }),
      year: (validity) => updateFormState((draft) => {
        draft.year.validity = validity;
      }),
      cvc: (validity) => updateFormState((draft) => {
        draft.cvc.validity = validity;
      }),
    }
  };

  const submit = (e) => {
    e.preventDefault();

    console.log('sunb')

    checkValidity('name');
    checkValidity('number');
    checkValidity('month');
    checkValidity('year');
    checkValidity('cvc');

    updateFormState((draft) => {
      draft.status = 'submited';
    });
  };

  const checkValidity = (key) => update.validity[key](formState[key].value.length === 0 ? "Can't be blank" : null);

  return (
    <div className='container'>
      <div className='card'>
        <div className='card__front'></div>
        <div className='card__back'></div>
      </div>
      <form className='form' onSubmit={ (e) => submit(e) }>
        <label className={`form__wrapper ${!formState.name.validity ? '': 'invalid'}`} htmlFor='name'>
          <span className="form__wrapper__title">cardholder name</span>
          <input
            className='form__input'
            id='name'
            type='text'
            onChange={ (e) => update.field.name(e.target.value) }
            value={ formState.name.value }
            placeholder='e.g. Jane Appleseed'
          />
          { <span className='message'>{formState.name.validity}</span> || null }
        </label>
        <label className={`form__wrapper ${!formState.number.validity ? '': 'invalid'}`} htmlFor='number'>
          <span className="form__wrapper__title">card number</span>
          <input
            className='form__input'
            id='number'
            type='tel'
            onChange={ (e) => update.field.number(e.target.value) }
            value={ formState.number.value }
            placeholder='e.g. 1234 5678 9123 0000'
          />
          { <span className='message'>{formState.number.validity}</span> || null }
        </label>
        <fieldset className='form__fieldset'>
          <span className="form__wrapper__title">exp. date (mm/yy)</span>
          <label className={`form__wrapper ${!formState.month.validity ? '': 'invalid'}`} htmlFor='month'>
            <input
            className='form__input'
              id='month'
              type='number'
              onChange={ (e) => update.field.month(e.target.value) }
              value={ formState.month.value }
              placeholder='MM'
            />
            { <span className='message'>{formState.month.validity}</span> || null }
          </label>
          <label className={`form__wrapper ${!formState.year.validity ? '': 'invalid'}`} htmlFor='year'>
            <input
              className='form__input'
              id='year'
              type='number'
              onChange={ (e) => update.field.year(e.target.value) }
              value={ formState.year.value }
              placeholder='YY'
            />
            { <span className='message'>{formState.year.validity}</span> || null }
          </label>
        </fieldset>
        <label className={`form__wrapper ${!formState.cvc.validity ? '': 'invalid'}`} htmlFor='cvc'>
          <span className="form__wrapper__title">cvc</span>
          <input
            className='form__input'
            id='cvc'
            type='number'
            onChange={ (e) => update.field.cvc(e.target.value) }
            value={ formState.cvc.value }
            placeholder='e.g. 123'
          />
          { <span className='message'>{formState.cvc.validity}</span> || null }
        </label>
        <label className='form__wrapper form__submit' htmlFor='submit'>
        <input className='form__input' id='submit' type='submit' value='Confirm'/>
        </label>
      </form>
    </div>
  );
}

export default App;