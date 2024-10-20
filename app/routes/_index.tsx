import type { MetaFunction } from "@remix-run/node";
import SiteHeader from "~/components/SiteHeader";

export const meta: MetaFunction = () => {
  return [
    { title: "Endless Bliss" },
    {
      name: "description",
      content:
        "A sweet little surprise to celebrate our endless love and joy. Every moment together feels like pure bliss, and this project is a small reminder of the love that grows stronger each day.",
    },
  ];
};

export default function Index() {
  return (
    <div className="flex h-screen justify-center bg-gradient-to-br from-pink-200 via-pink-300 to-pink-400">
      <div className="flex flex-col items-center max-w-[350px] py-12 gap-16 relative">
        <SiteHeader
          title="Happy Anniversary!"
          subtitle={
            <a
              href="https://www.instagram.com/cchorfah"
              target="_blank"
              rel="noreferrer"
            >
              @cchorfah
            </a>
          }
        />
        {/* <SiteHeader title="Happy Anniversary!" subtitle="@cchorfah🌻" /> */}
      </div>
    </div>
  );
}
