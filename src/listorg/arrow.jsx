import React, { useRef, useEffect, useState } from "react";
import Slider from "react-slick";
import styles from './FlexLayout.module.css';
import axios from "axios";

const AutoPlayMethods = () => {
  const [items, setItems] = useState([]);
  const [organizations, setOrganizations] = useState([]);

  const fetchDataFromURL = async () => {
    const token = 'JWT ' + localStorage.getItem("token");
    
    try {
      const response = await axios.get('https://ghablameh.fiust.ir/api/v1/buffets/', {
        headers: {
          Authorization: token
        }
      });
      
      setItems(response.data);
    } catch (error) {
      console.error('Error retrieving data:', error);
    }
  };

  const fetchOrganizations = async () => {
    try {
      const response = await axios.get('https://ghablameh.fiust.ir/api/v1/organizations/');
      setOrganizations(response.data);
    } catch (error) {
      console.error('Error retrieving organizations:', error);
    }
  };

  useEffect(() => {
    fetchDataFromURL();
    fetchOrganizations();
  }, []);

  const sliderRef = useRef(null);

  useEffect(() => {
    const play = () => {
      sliderRef.current?.slickPlay();
    };

    const pause = () => {
      sliderRef.current?.slickPause();
    };

    play();

    return () => {
      pause();
    };
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    prevArrow: (
      <button
        type="button"
        className="slick-prev slick-arrow text-blue-500 hover:text-blue-800 text-4xl px-4 py-2 rounded-full shadow-md"
      >
        ←
      </button>
    ),
    nextArrow: (
      <button
        type="button"
        className="slick-next slick-arrow text-blue-500 hover:text-blue-800 text-4xl px-4 py-2 rounded-full shadow-md"
      >
        →
      </button>
    )
  };

  return (
    <div className={styles.sliderContainer}>
      
    <link
      rel="stylesheet"
      type="text/css"
      charSet="UTF-8"
      href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
    />
    <link
      rel="stylesheet"
      type="text/css"
      href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
    />

    <Slider className={styles.slide} ref={sliderRef} {...settings}>
      
      {items.map((item, index) => (
    
        <div key={index} className={styles.slide}>
          <div className="bg-white bg-opacity-50 shadow-md rounded-lg overflow-hidden custom-width" style={{ border: '1px solid rgb(38, 87, 124)',marginRight: '20px' }}>
            {organizations.length > 0 && (
              <React.Fragment>
                {item.organization && item.organization in organizations ? (
                  <img
                    src={organizations[item.organization].image_url}
                    alt={organizations[item.organization].name}
                  />
                ) : (
                  <div
                    style={{
                      height: "160px",
                      backgroundImage: "repeating-conic-gradient(#26577c  0% 25%, #ffffff 0% 50%)",
                      backgroundPosition: "0 0, 32px 32px",
                      backgroundSize: "50px 50px",
                      opacity: '0.5',
                    }}
                  />
                )}
              </React.Fragment>
            )}
            
            <h3>{item.name}</h3>
            <p>{item.organization_name}</p>
          </div>
        </div>
      ))}
    </Slider>
  </div>
  );
};

export default AutoPlayMethods;