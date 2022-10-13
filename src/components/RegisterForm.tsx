import styles from "../styles/components/register/RegisterForm.module.css";
import GoogleSignInButton from "./GoogleSignInButton";
import MyTextField from "./MyTextField";

const RegisterForm = () => <div className={styles.RegisterForm}>
    {/* <h1 className="font-bold text-blue-50 text-center text-3xl">SIGN UP</h1> */}
    <MyTextField name="firstName" placeholder="First name" />
    <MyTextField name="lastName" placeholder="Last name" />
    <MyTextField name="email" placeholder="Email" />
    <MyTextField name="password" placeholder="Password" />
    <button type="submit" className="bg-blue-50 rounded-full py-1.5 font-bold text-blue-600 overflow-hidden">SIGN UP</button>

    <div className="flex flex-row items-center">
        <div className="w-full h-px bg-blue-50"></div>
        <h2 className="text-blue-50 mx-2">OR</h2>
        <div className="w-full h-px bg-blue-50"></div>
    </div>

    <GoogleSignInButton />
</div>

export default RegisterForm;