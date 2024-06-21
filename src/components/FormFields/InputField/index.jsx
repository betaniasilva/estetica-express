import { useController } from 'react-hook-form'
import {useState} from 'react'

const InputField = ({name, label, className, ...props}) => {
  const [isEyeOpen, setIsEyeOpen] = useState(false)


 const {field, fieldState: {error} } = useController({
    name,
  })

  return (
    <div className="flex flex-col gap-2">
      {label && <label>{label}</label>}
      <input name={name} {...field} {...props} className={`${className} rounded-lg px-4 py-2`} />
      {isEyeOpen ? <></> : <></>} {/*//TODO PASSWORD*/}
    </div>
  )
}


export default InputField