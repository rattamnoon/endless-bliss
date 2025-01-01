import type { MetaFunction } from "@remix-run/node";
import { Footer } from "~/components/Footer";
import { ActivitiesAndGifts } from "~/components/sections/ActivitiesAndGifts";
import { Closing } from "~/components/sections/Closing";
import { Gallery } from "~/components/sections/Gallery";
import { Message } from "~/components/sections/Message";
import { OurStory } from "~/components/sections/OurStory";
import { Welcome } from "~/components/sections/Welcome";
import { SwiperCard } from "~/components/SwiperCard";
import { content } from "~/confings/content";

export const meta: MetaFunction = () => {
  return [
    { title: content.head.title },
    {
      name: "description",
      content: content.head.description,
    },
  ];
};

export default function Index() {
  const { siteHeader, swiperCard, message, footer } = content;

  return (
    <div>
      {siteHeader.enable && <Welcome {...siteHeader} />}
      <OurStory />
      <Gallery />
      <ActivitiesAndGifts />
      <Closing />
      <div className="flex min-h-screen justify-center bg-gradient-to-br from-pink-200 via-pink-300 to-pink-400">
        <div className="flex flex-col items-center max-w-[350px] py-12 gap-16">
          {swiperCard.enable && <SwiperCard datas={swiperCard.images} />}
          {message.enable && <Message text={message.text} />}
          {footer.enable && <Footer text={footer.text} />}
        </div>
      </div>
    </div>
  );
}
