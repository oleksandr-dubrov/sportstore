import {
  withHandlers, setDisplayName, compose, mapProps, defaultProps,
} from 'recompose';
import Input from './Input';
import InputNumberStyled from './InputNumberStyled';

const InputNumber = compose(
  setDisplayName('InputNumber'),
  defaultProps({ styles: InputNumberStyled }),
  withHandlers({
    onChangeHandler: ({ onChange }) => (event) => {
      if (/^\d{0,2}$/.test(event.currentTarget.value)) {
        onChange(event.currentTarget.value);
      }
    },
  }),
  mapProps(props => ({ ...props, value: props.value.toString() })),
)(Input);

export default InputNumber;
