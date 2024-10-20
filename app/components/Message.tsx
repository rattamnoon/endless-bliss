interface MessageProps {
  text: string;
}

export const Message = ({ text }: MessageProps) => {
  return (
    <div className="w-full bg-pink-200 rounded-3xl p-4 shadow-2xl">
      <div className="text-xl text-stone-900 text-opacity-80">{text}</div>
    </div>
  );
};
