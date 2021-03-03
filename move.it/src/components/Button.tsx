import {useState} from 'react'

interface ButtonProps {
  color: string;
  children: string;
}

const Button = (props: ButtonProps) => {
  const [counter, setCounter] = useState(0)

  function increment() {
    setCounter(counter + 1)
  }
  
  return (
    <button
      type="button"
      style={{backgroundColor: props.color}}
      onClick={increment}
    >
      {props.children} <strong>{counter}</strong>
    </button>
  )
}

export default Button



