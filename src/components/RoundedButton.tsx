type RoundedButtonProps = {
  label: string;
};

const RoundedButton = (props: RoundedButtonProps) => (
  <button
    type="submit"
    className="bg-blue-50 rounded-full py-1.5 font-bold text-blue-600 overflow-hidden"
  >
    {props.label}
  </button>
);

export default RoundedButton;
