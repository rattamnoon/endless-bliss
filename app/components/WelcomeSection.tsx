import React from "react";
import { Content } from "~/confings/content";
import { SiteHeader } from "./SiteHeader";

const WelcomeSection: React.FC<Content["siteHeader"]> = ({
  title,
  subtitle,
  button,
}) => {
  return (
    <div className="flex flex-col min-h-screen justify-center items-center bg-gradient-to-br from-pink-200 via-pink-300 to-pink-400">
      <div className="flex flex-1 items-end max-w-[350px] py-12 gap-16">
        <SiteHeader title={title} subtitle={subtitle} />
      </div>
      <div className="flex flex-1 items-end max-w-[350px] py-12 gap-16">
        {button.enable && (
          <button className={`${button.color} text-white px-4 py-2 rounded-lg`}>
            {button.text}
          </button>
        )}
      </div>
    </div>
  );
};

export default WelcomeSection;
