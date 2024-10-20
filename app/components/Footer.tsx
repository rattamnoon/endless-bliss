type FooterProps = {
  text: string;
};

export const Footer = ({ text }: FooterProps) => {
  return <div className="text-sm text-stone-900 text-opacity-80">{text}</div>;
};
