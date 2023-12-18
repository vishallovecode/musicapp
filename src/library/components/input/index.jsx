import './input.css'
const Input = (props) => {
  const {placeholder , type , classes} = props;
  return (
    <input placeholder= {placeholder} type= {type} className={`input ${classes}`}/>
  );
};

export default Input;


// var b= 'vishal'
// const a = `Here ${b}`

// a => Here vishal