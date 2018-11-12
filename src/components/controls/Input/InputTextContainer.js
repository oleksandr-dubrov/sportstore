import {
  withHandlers, setDisplayName, compose, withState, defaultProps,
} from 'recompose';
import Input from './Input';
import InputTextStyled from './InputTextStyled';

const InputText = compose(
  setDisplayName('InputText'),
  withState('value', 'setValue', ''),
  defaultProps({ styles: InputTextStyled }),
  withHandlers({
    onChangeHandler: ({ setValue }) => (event) => {
      setValue(event.currentTarget.value);
    },
  }),
)(Input);

export default InputText;
