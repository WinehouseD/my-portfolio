import weatherqr from "../assets/weather-qr.png";
import portfolioqr from "../assets/portfolio-qr.png";
import WeatherImage from "../assets/WeatherTrack.png";
import PortfolioImage from "../assets/Portfolio.png";
import ExchangeRateImage from "../assets/MagicExchange.png";
import bookingqr from "../assets/booking-qr.png";
import exchangeqr from "../assets/exchangerate-qr.png";
import Booking from "../assets/Booking.png";
import bluredbg from "../assets/blurred-bg.webp";

export const data = [
  {
    image: WeatherImage,
    title: "WeatherTrack",
    description:
      "Weather website that enables users to pull weather data from their location or any city by gathering real-time data via an API.",
    techStack: "// React, JS, SCSS, DayJs, Axios, Jest, Netlify",
    liveLink: "https://weathertrack-forecast.netlify.app/",
    codeLink: "https://github.com/WinehouseD/weather-website",
    qrCode: weatherqr,
  },
  {
    image: Booking,
    title: "Prestige Stay",
    description:
      "Prestige Stay is a modern booking web application designed to streamline the reservation process.",
    credentials: "Login: demo@gmail.com Password: demoPassword",
    techStack: "// React, JS, Tailwind CSS, RadixUI, Zod, Jose, Redux, RTK, Vercel",
    codeLink: "https://github.com/WinehouseD/airbnb-type-proj",
    liveLink: "https://prestige-stay.vercel.app/",
    qrCode: bookingqr,
  },
  {
    image: ExchangeRateImage,
    title: "Magic Exchange",
    description:
      "Exchange rate app converts currencies, displays chart with historical rates, and provides an updated list of the latest exchange rates.",
    techStack: "// React, TS, MUI, Axios, ChartJS, Toastify, Jest, Vercel",
    codeLink: "https://github.com/WinehouseD/exchange-rate-app",
    liveLink: "https://exchange-rate-apps.vercel.app/",
    qrCode: exchangeqr,
  },
  {
    image: PortfolioImage,
    title: "Portfolio",
    description:
      "Sleek and responsive portfolio website to showcase my skills, achievements, and projects.",
    techStack: "// React, JS, Tailwind CSS, Formik/Yup, Jest, EmailJS, GitHub Pages",
    codeLink: "https://github.com/WinehouseD/my-portfolio",
    liveLink: "http://WinehouseD.github.io/my-portfolio",
    qrCode: portfolioqr,
  },
  {
    image: bluredbg,
    title: "Banking App",
    description:
      "Coming soon...",
    techStack: "// NextJS, TS, Tailwind CSS, RadixUI, Zod, ChartJS",
  },
];
