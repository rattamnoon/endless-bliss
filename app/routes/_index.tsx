import type { MetaFunction } from "@remix-run/node";
import { Footer } from "~/components/Footer";
import { Message } from "~/components/Message";
import { SiteHeader } from "~/components/SiteHeader";
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
    <div className="flex min-h-screen justify-center bg-gradient-to-br from-pink-200 via-pink-300 to-pink-400">
      <div className="flex flex-col items-center max-w-[350px] py-12 gap-16">
        {siteHeader.enable && (
          <SiteHeader title={siteHeader.title} subtitle={siteHeader.subtitle} />
        )}
        {swiperCard.enable && <SwiperCard datas={swiperCard.images} />}
        {message.enable && <Message text={message.text} />}
        {footer.enable && <Footer text={footer.text} />}
      </div>
    </div>
  );
}
