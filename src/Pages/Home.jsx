import { useContext, useEffect, useState } from "react";
import Slider from "../components/Slider";
import { ThemeContext } from "../ContextProvider/ThemeContext";
import TSports from "../components/TSports";
import Countries from "../components/Countries";
import Testimonial from "../components/Testimonial";
import Map from "../components/Map";
import { Typewriter } from "react-simple-typewriter";
const Home = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const [touristSports, setTouristSports] = useState([]);
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingC, setLoadingC] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "https://assinment-10-server-ten.vercel.app/tourist-sports/limitedSports",
        );
        const result = await res.json();
        if (result) {
          setTouristSports(result);
        } else {
          setTouristSports([]);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    const fetchDataFromCountries = async () => {
      try {
        const res = await fetch(
          "https://assinment-10-server-ten.vercel.app/countries",
        );
        const result = await res.json();
        if (result) {
          setCountries(result);
        } else {
          setCountries([]);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoadingC(false);
      }
    };

    fetchData();
    fetchDataFromCountries();
  }, []);
  return (
    <div>
      <Slider />

      <div className="container mx-auto px-4 my-32">
        <div
          className={`title text-4xl font-popins ${
            isDarkMode ? "text-white" : "text-dim-black"
          } text-center font-bold mb-16`}
        >
          <Typewriter
            cursor={true}
            cursorBlinking={true}
            delaySpeed={1000}
            deleteSpeed={25}
            loop={0}
            typeSpeed={75}
            words={["Welcome!", "Samir's Travel Agency", "Tourist Sports"]}
          />
        </div>
        {loading && (
          <div className="text-center">
            <span className="loading loading-bars loading-lg"></span>
          </div>
        )}
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-8">
          {touristSports.map((touristSport, index) => (
            <TSports key={index} touristSport={touristSport} />
          ))}
        </div>
      </div>
      <div className="container mx-auto px-4 my-32">
        <div
          className={`title text-4xl font-popins ${
            isDarkMode ? "text-white" : "text-dim-black"
          } text-center font-bold mb-16`}
        >
          <Typewriter
            cursor={true}
            cursorBlinking={true}
            delaySpeed={1000}
            deleteSpeed={25}
            loop={0}
            typeSpeed={75}
            words={["Welcome!", "Samir's Travel Agency", "Countries"]}
          />
        </div>
        {loadingC && (
          <div className="text-center">
            <span className="loading loading-bars loading-lg"></span>
          </div>
        )}
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-8">
          {countries.map((country, index) => (
            <Countries key={index} country={country} />
          ))}
        </div>
      </div>

      <div className="my-32">
        <div
          className={`title text-4xl font-popins ${
            isDarkMode ? "text-white" : "text-dim-black"
          } text-center font-bold mb-16`}
        >
          <Typewriter
            cursor={true}
            cursorBlinking={true}
            delaySpeed={1000}
            deleteSpeed={25}
            loop={0}
            typeSpeed={75}
            words={["Welcome!", "Samir's Travel Agency", "Our Image Gallery"]}
          />
        </div>
        <div className="text-center">
          <Testimonial />
        </div>
      </div>
      <div className="container mx-auto px-4 my-32">
        <div
          className={`title text-4xl font-popins ${
            isDarkMode ? "text-white" : "text-dim-black"
          } text-center font-bold mb-16`}
        >
          <Typewriter
            cursor={true}
            cursorBlinking={true}
            delaySpeed={1000}
            deleteSpeed={25}
            loop={0}
            typeSpeed={75}
            words={["Welcome!", "Samir's Travel Agency", "Contact Us"]}
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Map />
          <>
            <div className={`hero ${isDarkMode ? "bg-black" : "bg-white"}`}>
              <div className="hero-content">
                <div className="max-w-md">
                  <h1 className="text-5xl font-bold">Samri&apos;s Travel</h1>
                  <p className="py-6">
                    We provide the best travel experience and with us your
                    travelling becomes your life. Feel free to contact us
                    anytime
                  </p>
                  <a href="tel:01863966821">
                    <button
                      className={`btn btn-outline ${
                        isDarkMode ? "text-white" : "text-light-black"
                      }`}
                    >
                      Contact Us
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </>
        </div>
      </div>
    </div>
  );
};

export default Home;
