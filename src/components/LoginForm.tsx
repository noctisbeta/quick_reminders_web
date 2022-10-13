import styles from "../styles/components/login/LoginForm.module.css";
import GoogleSignInButton from "./GoogleSignInButton";
import MyTextField from "./MyTextField";

const LoginForm = () => (
  <div className={styles.LoginForm}>
    <MyTextField name="email" placeholder="Email" />
    <MyTextField name="password" placeholder="Password" />
    <button
      type="submit"
      className="bg-blue-50 rounded-full py-1.5 font-bold text-blue-600 overflow-hidden"
    >
      LOGIN
    </button>

    <div className="flex flex-row items-center">
      <div className="w-full h-px bg-blue-50"></div>
      <h2 className="text-blue-50 mx-2">OR</h2>
      <div className="w-full h-px bg-blue-50"></div>
    </div>

    <GoogleSignInButton />
  </div>
);

export default LoginForm;
