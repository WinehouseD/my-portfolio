import weatherqr from "../assets/weather-qr.svg";
import boseqr from "../assets/bose-qr.svg";
import BoseImage from "../assets/Bose.png";
import WeatherImage from "../assets/WeatherTrack.png";
import PortfolioImage from "../assets/Portfolio.png";

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
    techStack: "// JS, Tailwind CSS, Formik",
    codeLink: "https://github.com/your-username/Portfolio",
    liveLink: "https://your-portfolio-live-url.netlify.app/",
    qrCode: null,
  },
];
