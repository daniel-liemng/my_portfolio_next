import Link from 'next/link';

interface ButtonProps {
  text: string;
  linkBtn: string;
  to: string;
}

const Button: React.FC<ButtonProps> = ({ text, linkBtn, to }) => {
  return linkBtn ? (
    <Link href={to} className='btn'>
      {text}
    </Link>
  ) : (
    <button type='button' className='btn'>
      {text}
    </button>
  );
};

export default Button;
