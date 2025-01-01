export const content = {
  head: {
    title: "Endless Bliss",
    description:
      "A sweet little surprise to celebrate our endless love and joy. Every moment together feels like pure bliss, and this project is a small reminder of the love that grows stronger each day.",
  },
  siteHeader: {
    enable: true,
    title: "Happy Anniversary",
    subtitle: {
      enable: true,
      text: "My love! Thank you for the wonderful moments we've shared together.",
      icon: "🌈",
      href: "https://www.instagram.com/cchorfah",
    },
    button: {
      enable: true,
      text: "Begin Our Journey",
      color:
        "bg-indigo-500 bg-gradient-to-r from-indigo-500 via-indigo-400 to-indigo-300",
    },
  },
  swiperCard: {
    enable: false,
    images: [
      "images/1.jpg",
      "images/2.jpg",
      "images/3.jpg",
      "images/4.jpg",
      "images/5.jpg",
      "images/6.jpg",
      "images/7.jpg",
    ],
  },
  message: {
    enable: true,
    text: "I love you more than words can say. Thank you for being my partner in crime, my best friend, and my soulmate. Here's to many more years of love, laughter, and endless adventures together!",
  },
  footer: {
    enable: true,
    text: "Made with ❤️ by @cchorfah",
  },
};

export type Content = typeof content;
