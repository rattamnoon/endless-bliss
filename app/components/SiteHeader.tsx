import { animated, useSpring } from "@react-spring/web";

interface SiteHeaderProps {
  title: string;
  subtitle: React.ReactNode;
}

export const SiteHeader = ({ title, subtitle }: SiteHeaderProps) => {
  const props = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 500,
    duration: 1000,
  });

  return (
    <animated.div style={props} className="flex flex-col gap-4">
      <h1 className="text-6xl font-bold text-wrap font-sans bg-gradient-to-r from-indigo-500 via-indigo-400 to-indigo-300 inline-block text-transparent bg-clip-text">
        {title}
      </h1>

      <div className="flex items-end justify-end gap-2">
        <h1 className="text-4xl font-bold text-wrap text-right font-sans bg-gradient-to-r from-indigo-300 via-indigo-400 to-indigo-500 inline-block text-transparent bg-clip-text">
          {subtitle}
        </h1>
        <h1 className="text-4xl font-bold text-wrap">🌻</h1>
      </div>
    </animated.div>
  );
};
