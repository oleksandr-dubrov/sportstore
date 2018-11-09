import {
  withHandlers, setDisplayName, compose, mapProps,
} from 'recompose';
import Input from './Input';

const InputNumber = compose(
  setDisplayName('InputNumber'),
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
