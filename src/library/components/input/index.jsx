import './input.css'
const Input = (props) => {
  const {placeholder} = props;
  return (
    <input placeholder= {placeholder}  className='input'/>
  );
};

export default Input;
