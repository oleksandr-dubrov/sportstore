import {
  withHandlers, setDisplayName, compose, withState,
} from 'recompose';
import Input from './Input';

const InputText = compose(
  setDisplayName('InputText'),
  withState('value', 'setValue', ''),
  withHandlers({
    onChangeHandler: ({ setValue }) => (event) => {
      setValue(event.currentTarget.value);
    },
  }),
)(Input);

export default InputText;
