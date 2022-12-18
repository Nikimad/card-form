import './App.css';
import Form from './Form/Form';
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

  const getCard = () => {
    const fields = ['name', 'number', 'month', 'year', 'cvc'].reduce((acc, field) => {
      if (formState[field].value.length > 0) {
        acc[field] = formState[field].value;
      }

      return acc;
    }, {});

    return <Card { ...fields }/>;
  }

  return (
    <div className='container'>
        { getCard() }
        <Form onSubmit={ (e) => submit(e) } state={ formState } update={ update }/>
    </div>
  );
}

export default App;
