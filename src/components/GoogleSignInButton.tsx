import styles from "../styles/components/GoogleSignInButton.module.css";

const GoogleSignInButton = () =>
    <div className={styles.GoogleSignInButton}>
        <div className="w-[18px] h-[18px] mr-[24px]">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" />
        </div>
        <p><b>Sign in with Google</b></p>
    </div>



export default GoogleSignInButton;