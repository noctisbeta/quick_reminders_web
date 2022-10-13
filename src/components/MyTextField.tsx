import styles from "../styles/components/MyTextField.module.css";

type TextFieldProps = {
    placeholder: string;
    name: string;
}

const MyTextField = (props: TextFieldProps) =>
    <div>
        <input required type="text" name={props.name} placeholder={props.placeholder} className={styles.MyTextField} />
    </div>


export default MyTextField;