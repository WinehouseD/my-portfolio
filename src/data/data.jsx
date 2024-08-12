import weatherqr from "../assets/weather-qr.svg";
import boseqr from "../assets/bose-qr.svg";
import portfolioqr from "../assets/portfolio-qr.svg";
import BoseImage from "../assets/Bose.webp";
import WeatherImage from "../assets/WeatherTrack.webp";
import PortfolioImage from "../assets/Portfolio.webp";
import BlurredBg from "../assets/blurred-bg.webp";

export const data = [
  {
    image: WeatherImage,
    title: "WeatherTrack",
    description:
      "Weather website that enables users to pull weather data from their location or any city by gathering real-time data via an API.",
    techStack: "// React, JS, SCSS, API",
    codeLink: "https://github.com/WinehouseD/weather-website",
    liveLink: "https://weathertrack-forecast.netlify.app/",
    qrCode: weatherqr,
  },
  {
    image: BoseImage,
    title: "Bose",
    description:
      "Professional and visually appealing landing-page website for an American manufacturing company.",
    techStack: "// JS, Bootstrap, API",
    codeLink: "https://github.com/WinehouseD/bose-website",
    liveLink: "https://bose-comfort.netlify.com/",
    qrCode: boseqr,
  },
  {
    image: PortfolioImage,
    title: "Portfolio",
    description:
      "Crafted a sleek and responsive portfolio website to showcase my skills, achievements, and projects.",
    techStack: "// JS, React, Tailwind CSS, Formik",
    codeLink: "https://github.com/WinehouseD/portfolio",
    liveLink: "http://WinehouseD.github.io/portfolio",
    qrCode: portfolioqr,
  },
  {
    image: BlurredBg,
    title: "TranquilTravel",
    description: "Coming soon...",
    techStack: "// JS, React, Tailwind CSS, Redux, Radix UI, Zod",
  },
  {
    image: BlurredBg,
    title: "Restaurant",
    description: "Coming soon...",
    techStack: "// TS, React, Taiwind CSS, MongoDB, Google Maps API, Prisma",
  },
];
