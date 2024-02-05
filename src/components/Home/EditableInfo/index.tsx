import {FC, ChangeEvent} from "react";

type Value = string | number;
type InputType = 'text' | 'date';

interface EditableInfoProps {
  editMode: boolean;
  name: string;
  placeholder?: string;
  value: Value;
  type: InputType;
  onChange(event: ChangeEvent<HTMLInputElement>): void;
}

const EditableInfo: FC<EditableInfoProps> = ({editMode, value, name, placeholder = '', onChange, type}) => {
  const prepareValue = (value: Value) => {
    if (type === 'date') {
      return (new Date(value)).toDateString();
    } else {
      return value as string;
    }
  }

  return editMode ? <input name={name} type={type} value={value} placeholder={placeholder} onChange={onChange}/> : <span>{prepareValue(value)}</span>;
}

export default EditableInfo;
