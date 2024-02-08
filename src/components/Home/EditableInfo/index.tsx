import {FC, ChangeEvent} from "react";
import { useStyles } from "./styles";

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
  const classes = useStyles();

  const prepareValue = (value: Value) => {
    if (type === 'date') {
      return (new Date(value)).toLocaleDateString();
    } else {
      return value as string;
    }
  }

  return <div className={classes.editableInfo}>
    {editMode ? <input name={name} type={type} value={value} placeholder={placeholder} onChange={onChange}/> : <span>{prepareValue(value)}</span>}
  </div>
}

export default EditableInfo;
