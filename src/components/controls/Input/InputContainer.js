import {
  withHandlers, setDisplayName, compose, withState,
} from 'recompose';
import Input from './Input';

const InputNumber = compose(
  setDisplayName('InputNumber'),
  withState('value', 'setValue', ''),
  withHandlers({
    onChangeHandler: ({ setValue }) => (event) => {
      if (/^\d{0,2}$/.test(event.currentTarget.value)) {
        setValue(event.currentTarget.value);
      }
    },
  }),
)(Input);

const InputText = compose(
  setDisplayName('InputText'),
  withState('value', 'setValue', ''),
  withHandlers({
    onChangeHandler: ({ setValue }) => (event) => {
      setValue(event.currentTarget.value);
    },
  }),
)(Input);

export { InputText, InputNumber };
