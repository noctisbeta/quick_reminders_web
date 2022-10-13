import Link from "next/link";

type RoundedLinkButtonProps = {
  label: string;
  href: string;
};

const RoundedLinkButton = (props: RoundedLinkButtonProps) => (
  <Link href={props.href}>
    <a className="bg-blue-50 rounded-full py-1.5 font-bold text-blue-600 overflow-hidden text-center">
      {props.label}
    </a>
  </Link>
);

export default RoundedLinkButton;
