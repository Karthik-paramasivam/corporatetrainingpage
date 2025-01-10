import React, { useState, useRef, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import BackgroundImage from "./Images/Corporatebanner.jpg";
import { Button, Form, Input, Select, message, Space, Collapse } from "antd";
import { motion } from "framer-motion"; // Import framer-motion for animations
import "./App.css";
import { useInView } from "react-intersection-observer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo2 from "./Images/Logo2.png";
import Upskillanddriveresults from "./Images/Upskillanddriveresults.png";
import Footerlogo from "./Images/Footerlogo.png";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import ADNOC from "./Images/ADNOC.png";
import AIRASTANA from "./Images/AIRASTANA.png";
import alfanar from "./Images/alfanar.png";
import ALMASAOOD from "./Images/ALMASAOOD.png";
import aramex from "./Images/aramex.png";
import dafz from "./Images/dafz.jpeg";
import DNATA from "./Images/DNATA.png";
import DPWorld from "./Images/DPWorld.png";
import DSV from "./Images/DSV.jpeg";
import Du from "./Images/Du.png";
import Dubal from "./Images/Dubal.jpg";
import EMIRATES from "./Images/EMIRATES.png";
import Fedex from "./Images/Fedex.png";
import INTERVEL from "./Images/INTERVEL.png";
import jafza from "./Images/jafza.png";
import Legoland from "./Images/Legoland.png";
import MOIBahrain from "./Images/MOI Bahrain.jpg";
import NGI from "./Images/NGI.png";
import Nirvana from "./Images/Nirvana.jpeg";
import noon from "./Images/noon.png";
import PGST from "./Images/PGST.png";
import SNOC from "./Images/SNOC.jpg";
import course1 from "./Images/Course1.png";
import course2 from "./Images/Course2.png";
import course3 from "./Images/Course3.png";


import {
  faCheck,
  faCircleCheck,
  faPlaneUp,
} from "@fortawesome/free-solid-svg-icons";
// import WingsBanner from "./Images/WingsWayBanner.jpg";

const text1 = `Our trainings are customisable to fit individual and organisational needs.`;
const text2 = `Our trainers have experience working with organisations of different sizes and in various industries.`;
const text3 = `Case studies, real-world examples, and role-play.`;
const text4 = `Access all your study material and notes on our student learning management system.`;
const text5 = `We use various tech-based solutions and games to conduct our classes for faster and improved learning.`;

const items = [
  {
    key: "1",
    label: (
      <h4 className="accordion-label">Personalised Training Just for You</h4>
    ),
    children: <p style={{ fontSize: "18px" }}>{text1}</p>,
  },
  {
    key: "2",
    label: <h4 className="accordion-label">Expert-Led Training</h4>,
    children: <p style={{ fontSize: "18px" }}>{text2}</p>,
  },
  {
    key: "3",
    label: <h4 className="accordion-label">Real-World Simulations</h4>,
    children: <p style={{ fontSize: "18px" }}>{text3}</p>,
  },
  {
    key: "4",
    label: (
      <h4 className="accordion-label">Access to Learning Management System</h4>
    ),
    children: <p style={{ fontSize: "18px" }}>{text4}</p>,
  },
  {
    key: "5",
    label: <h4 className="accordion-label">Tech-Driven Learning</h4>,
    children: <p style={{ fontSize: "18px" }}>{text5}</p>,
  },
];

export default function Home() {
  const [form] = Form.useForm(); // useForm hook for handling form operations
  const [formData, setFormData] = useState(null); // State to store submitted data
  const [phoneNumber, setPhoneNumber] = useState(""); // State for phone number input
  const [countryCode, setCountryCode] = useState("+971"); // Default country code

  const onChange = (key) => {
    console.log(key);
  };

  const [hasViewed, setHasViewed] = useState(false); // Track if the element is in view
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger only once when the element is in view
    onChange: (inView) => {
      if (inView) setHasViewed(true); // Set to true when the element enters the viewport
    },
  });

  const [hasViewedSlide, setHasViewedSlide] = useState({
    zeroElement: false,
    myElement: false,
    secondElement: false,
    thirdElement: false,
    fourthElement: false,
    fifthElement: false,
    sixthElement: false,
    seventhElement: false,
    eighthElement: false,
  });

  const { ref: myRef0, inView: zeroElementIsVisible } = useInView({
    triggerOnce: true,
    onChange: (inView) => {
      if (inView && !hasViewedSlide.zeroElement) {
        setHasViewedSlide((prev) => ({ ...prev, zeroElement: true }));
      }
    },
  });

  const { ref: myRef1, inView: myElementIsVisible } = useInView({
    triggerOnce: true,
    onChange: (inView) => {
      if (inView && !hasViewedSlide.myElement) {
        setHasViewedSlide((prev) => ({ ...prev, myElement: true }));
      }
    },
  });

  const { ref: myRef2, inView: secondElementIsVisible } = useInView({
    triggerOnce: true,
    onChange: (inView) => {
      if (inView && !hasViewedSlide.secondElement) {
        setHasViewedSlide((prev) => ({ ...prev, secondElement: true }));
      }
    },
  });

  const { ref: myRef3, inView: thirdElementIsVisible } = useInView({
    triggerOnce: true,
    onChange: (inView) => {
      if (inView && !hasViewedSlide.thirdElement) {
        setHasViewedSlide((prev) => ({ ...prev, thirdElement: true }));
      }
    },
  });

  const { ref: myRef4, inView: fourthElementIsVisible } = useInView({
    triggerOnce: true,
    onChange: (inView) => {
      if (inView && !hasViewedSlide.fourthElement) {
        setHasViewedSlide((prev) => ({ ...prev, fourthElement: true }));
      }
    },
  });

  const { ref: myRef5, inView: fifthElementIsVisible } = useInView({
    triggerOnce: true,
    onChange: (inView) => {
      if (inView && !hasViewedSlide.fifthElement) {
        setHasViewedSlide((prev) => ({ ...prev, fifthElement: true }));
      }
    },
  });
  const { ref: myRef6, inView: sixthElement } = useInView({
    triggerOnce: true,
    onChange: (inView) => {
      if (inView && !hasViewedSlide.sixthElement) {
        setHasViewedSlide((prev) => ({ ...prev, sixthElement: true }));
      }
    },
  });
  const { ref: myRef7, inView: seventhElement } = useInView({
    triggerOnce: true,
    onChange: (inView) => {
      if (inView && !hasViewedSlide.seventhElement) {
        setHasViewedSlide((prev) => ({ ...prev, seventhElement: true }));
      }
    },
  });
  const { ref: myRef8, inView: eighthElement } = useInView({
    triggerOnce: true,
    onChange: (inView) => {
      if (inView && !hasViewedSlide.eighthElement) {
        setHasViewedSlide((prev) => ({ ...prev, eighthElement: true }));
      }
    },
  });

  useEffect(() => {
    // Effect when the element enters the viewport
    if (inView) {
      setHasViewed(true); // Set animation to true
    }
  }, [inView]);

  // Handle form submission
  const handleSubmit = (values) => {
    // Log the values during the first submission, formData will be null initially
    // console.log(values);
    setFormData(values); // Set form data after submission
    message.success("Form submitted successfully!");
    setPhoneNumber(""); // Reset phone number field
    form.resetFields(); // Reset all fields
  };

  // Handle phone number change
  // const handlePhoneNumberChange = (e) => {
  //   setPhoneNumber(e.target.value); // Update the phone number state
  // };

  const handlePhoneNumberChange = (e) => {
    const value = e.target.value;

    // Remove any non-numeric characters
    const filteredValue = value.replace(/\D/g, ""); // Remove non-digit characters
    setPhoneNumber(filteredValue); // Update the phone number state with filtered value
  };

  const validatePhoneNumber = (_, value) => {
    const selectedCountry = countryCodes.find(
      (country) => country.code === countryCode
    );
    const expectedLength = selectedCountry ? selectedCountry.phoneLength : 10; // Default to 10 if no country selected
    const fullPhoneNumber = value;
    if (!value) {
      return Promise.reject(new Error(""));
    }
    // Validate phone number length based on the selected country
    if (fullPhoneNumber.length !== expectedLength) {
      return Promise.reject(
        new Error(
          `Please enter a valid phone number with ${expectedLength} digits!`
        )
      );
    }

    return Promise.resolve();
  };

  // Define country codes
  const countryCodes = [
    { code: "+971", label: "UAE (+971)", phoneLength: 7 },
    { code: "+1", label: "USA (+1)", phoneLength: 10 },
    { code: "+44", label: "UK (+44)", phoneLength: 10 },
    { code: "+91", label: "India (+91)", phoneLength: 10 },
    { code: "+61", label: "Australia (+61)", phoneLength: 9 },
    { code: "+81", label: "Japan (+81)", phoneLength: 10 },
    { code: "+33", label: "France (+33)", phoneLength: 10 },
  ];

  // Handle country code change
  const handleCountryChange = (value) => {
    setCountryCode(value); // Update the selected country code
  };
  const validateEmail = (_, value) => {
    if (!value) {
      return Promise.reject(new Error(""));
    }
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/; // Basic email regex
    if (!emailRegex.test(value)) {
      return Promise.reject(new Error("Please enter a valid email address!"));
    }
    return Promise.resolve();
  };
  const styl = `
  .ant-form-vertical .ant-form-item:not(.ant-form-item-horizontal) .ant-form-item-label >label, 
  .ant-form-vertical .ant-form-item:not(.ant-form-item-horizontal) .ant-col-24.ant-form-item-label >label, 
  .ant-form-vertical .ant-form-item:not(.ant-form-item-horizontal) .ant-col-xl-24.ant-form-item-label >label {
    margin: 0;
    color: white;
  }
    .slick-dots {
    position: absolute;
    bottom: -30px;
    display: block;
    width: 100%;
    padding: 0;
    margin: 0;
    list-style: none;
    text-align: center;
}
    .slick-prev, .slick-next {
    font-size: 0;
    line-height: 0;
    position: absolute;
    top: 40%;
    display: block;
    width: 20px;
    height: 20px;
    padding: 0;
    transform: translate(0, -50%);
    cursor: pointer;
    color: white;
    border: none;
    outline: none;
    background: white;
}
    .slick-prev:before, .slick-next:before {
    font-family: 'slick';
    font-size: 20px;
    line-height: 1;
    opacity: .75;
    color: #1677ff;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
    .slick-dots li button:before {
    font-family: 'slick';
    font-size: 15px;
    line-height: 20px;
    position: absolute;
    top: 0;
    left: 0;
    width: 20px;
    height: 20px;
    content: '•';
    text-align: center;
    opacity: .25;
    color: #0d278e;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
    .slick-dots li.slick-active button:before {
    opacity: .75;
    color: #1677ff;
}

.ant-collapse>.ant-collapse-item >.ant-collapse-header {
    position: relative;
    display: flex;
    flex-wrap: nowrap;
    align-items: flex-start;
    padding: 12px 16px;
    color: white;
    line-height: 1.5714285714285714;
    cursor: pointer;
    transition: all 0.3s, visibility 0s;
}

.ant-collapse {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: rgba(0, 0, 0, 0.88);
    font-size: 14px;
    line-height: 1.5714285714285714;
    list-style: none;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
    background-color: rgba(0, 0, 0, 0.02);
    border: none;
}
    


.ant-collapse .ant-collapse-content {
    color: #ffffff;
    background-color: rgb(4, 18, 113);
    border: none;
}

:where(.css-dev-only-do-not-override-7ny38l).ant-collapse>.ant-collapse-item >.ant-collapse-header .ant-collapse-arrow {
    display: inline-flex
;
    align-items: center;
    color: inherit;
    font-style: normal;
    line-height: 0;
    text-align: center;
    text-transform: none;
    vertical-align: -0.125em;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 20px;
    transition: transform 0.3s;
}

`;
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    cssEase: "linear",
    autoplaySpeed: 4000,
    // initialSlide: 0,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          speed: 300,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          speed: 300,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 300,
        },
      },
    ],
  };

  const settings2 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    cssEase: "linear",
    autoplaySpeed: 4000,
    // initialSlide: 0,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          speed: 300,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          speed: 300,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 300,
        },
      },
    ],
  };

  return (
    <>
      <style>{styl}</style>

      <div className="container-fluid">
        <div className="container-fluid m-0 p-0">
          <div className="row">
            <div
              className="col-12 dynamic-height d-flex align-items-center justify-content-center"
              style={{
                position: "relative",
                height: "800px",
                backgroundColor: "rgba(0, 0, 0, 0.4)",
              }}
            >
              {/* Pseudo-element for blurred background */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundImage: `url(${BackgroundImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                  zIndex: -1, // Keep the background behind the content
                }}
              ></div>
              <div className="row d-flex align-items-center justify-content-center rounded-5 p-1 terminalresponsive-container m-auto">
                {/* First Column with Animation */}
                <motion.div
                  className="col-12 col-lg-6 mt-lg-5 mt-xl-5 mt-xxl-5 m-auto"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.5 }}
                >
                  <img
                    src={Upskillanddriveresults}
                    alt="Upskill And Drive Results Image"
                    className="img-fluid "
                  />

                  <h1
                    className="text-white "
                    style={{
                      fontSize: "55px",
                      fontWeight: "700",
                      wordBreak: "break-word",
                    }}
                  >
                    CORPORATE
                  </h1>
                  <h1
                    style={{
                      fontSize: "55px",
                      fontWeight: "700",
                      wordBreak: "break-word",
                      color: "rgb(7, 33, 164)",
                    }}
                  >
                    TRAININGS
                  </h1>
                </motion.div>

                {/* Second Column with Animation */}
                <motion.div
                  className="col-12 col-lg-5 rounded-4 mt-3 m-auto mt-lg-1 mb-lg-1"
                  style={{ backgroundColor: "#0721a4", padding: "20px" }}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 2 }}
                >
                  <h1 className="text-white mt-2 text-center mt-md-3 mt-lg-2">
                    Enquire Now
                  </h1>
                  <Form form={form} layout="vertical" onFinish={handleSubmit}>
                    {/* First Name Field */}
                    <Form.Item
                      label="First Name"
                      name="firstName"
                      className="form-item text-white"
                      rules={[
                        {
                          required: true,
                          message: "Please input your first name!",
                        },
                      ]}
                    >
                      <Input placeholder="Enter your first name" />
                    </Form.Item>

                    {/* Last Name Field */}
                    <Form.Item
                      label="Last Name"
                      name="lastName"
                      className="form-item text-white"
                      rules={[
                        {
                          required: true,
                          message: "Please input your last name!",
                        },
                      ]}
                    >
                      <Input placeholder="Enter your last name" />
                    </Form.Item>

                    {/* Email Field */}
                    <Form.Item
                      label="Email"
                      name="email"
                      className="form-item "
                      rules={[
                        {
                          required: true,
                          message: "Please input your Email!",
                        },
                        { validator: validateEmail },
                      ]}
                    >
                      <Input placeholder="Enter your Email" />
                    </Form.Item>

                    {/* Phone Number Field with Country Code */}
                    <Form.Item
                      label="Phone Number"
                      name="phone"
                      className="form-item text-white"
                      rules={[
                        {
                          required: true,
                          message: "Please input your phone number!",
                        },
                        { validator: validatePhoneNumber },
                      ]}
                    >
                      <Space.Compact style={{ width: "100%" }}>
                        <Select
                          defaultValue={countryCodes[0].code}
                          // style={{ width: "150px" }}
                          onChange={handleCountryChange}
                          style={{ width: "30%" }} // Adjust the width as needed
                        >
                          {countryCodes.map((country, index) => (
                            <Select.Option key={index} value={country.code}>
                              {country.label}
                            </Select.Option>
                          ))}
                        </Select>
                        <Input
                          value={phoneNumber}
                          onChange={handlePhoneNumberChange}
                          // style={{
                          //   width: "calc(100% - 0px)",
                          // }}
                          style={{ width: "70%" }} // Adjust the width as needed
                          placeholder="Enter your phone number"
                          // maxLength={10}
                        />
                      </Space.Compact>
                    </Form.Item>

                    <Form.Item>
                      <div className="d-flex justify-content-end">
                        <Button
                          type="default"
                          htmlType="submit"
                          style={{
                            backgroundColor:
                              "#faad14" /* Ant Design warning color */,
                            color: "white",
                            borderColor: "#faad14",
                          }}
                          className="Submitbutton"
                        >
                          Submit
                        </Button>
                      </div>
                    </Form.Item>
                  </Form>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`container mt-5 border border-white rounded-4 slide-in-left ${
            hasViewedSlide.zeroElement ? "animate-slide-in" : ""
          }`}
          ref={myRef0}
          id="Testimonials"
        >
          <div className="row border-primary">
            <div className="col-12 text-center">
              <h1 className="fw-bold" style={{ color: "#022E88" }}>
                Empowered Employees From
              </h1>
            </div>
          </div>

          <Slider {...settings} className="col-12">
            {/* First Slide */}
            <div className="row p-3 ms-1 ">
              <div
                className="shadow-sm border border-2 border-light rounded-3 mt-2 d-flex justify-content-center align-items-center flex-column flex-lg-row col-12 BrandHeight"
                // style={{ minHeight: "150px" }} // Add minHeight for vertical centering
              >
                {/* Image Containers */}
                <div className="d-flex justify-content-center mb-2 col-2">
                  <img
                    src={DSV}
                    alt="DSV Global Transport and Logistics Image"
                    className="img-fluid mx-2"
                    style={{ maxWidth: "150px", height: "auto" }}
                  />
                </div>
                <div className="d-flex justify-content-center mb-2 col-2">
                  <img
                    src={alfanar}
                    alt="alfanar Image"
                    className="img-fluid mx-2"
                    style={{ maxWidth: "150px", height: "auto" }}
                  />
                </div>
                <div className="d-flex justify-content-center mb-2 col-2">
                  <img
                    src={SNOC}
                    alt="SNOC Image"
                    className="img-fluid mx-2"
                    style={{ maxWidth: "150px", height: "auto" }}
                  />
                </div>
                <div className="d-flex justify-content-center mb-2 col-2">
                  <img
                    src={MOIBahrain}
                    alt="MOIBahrain Image"
                    className="img-fluid mx-2"
                    style={{ maxWidth: "150px", height: "auto" }}
                  />
                </div>
                <div className="d-flex justify-content-center mb-2 col-2">
                  <img
                    src={Fedex}
                    alt="Fedex Image"
                    className="img-fluid mx-2"
                    style={{ maxWidth: "150px", height: "auto" }}
                  />
                </div>
                <div className="d-flex justify-content-center mb-2">
                  <img
                    src={EMIRATES}
                    alt="EMIRATES Image"
                    className="img-fluid mx-2"
                    style={{ maxWidth: "150px", height: "auto" }}
                  />
                </div>
              </div>
            </div>

            {/* Second Slide */}
            <div className="row p-3 ms-1">
              <div
                className="shadow-sm border border-2 border-light rounded-3 mt-2 d-flex justify-content-center align-items-center flex-column flex-lg-row col-12 BrandHeight"
                // style={{ minHeight: "150px" }} // Add minHeight for vertical centering
              >
                {/* Image Containers */}
                <div className="d-flex justify-content-center mb-2 col-2">
                  <img
                    src={Nirvana}
                    alt="Nirvana Holding Image"
                    className="img-fluid mx-2"
                    style={{ maxWidth: "150px", height: "auto" }}
                  />
                </div>
                <div className="d-flex justify-content-center mb-2 col-2">
                  <img
                    src={NGI}
                    alt="NGI Image"
                    className="img-fluid mx-2"
                    style={{ maxWidth: "150px", height: "auto" }}
                  />
                </div>
                <div className="d-flex justify-content-center mb-2 col-2">
                  <img
                    src={PGST}
                    alt="PGST Image"
                    className="img-fluid mx-2"
                    style={{ maxWidth: "150px", height: "auto" }}
                  />
                </div>
                <div className="d-flex justify-content-center mb-2 col-2">
                  <img
                    src={Legoland}
                    alt="Legoland Image"
                    className="img-fluid mx-2"
                    style={{ maxWidth: "150px", height: "auto" }}
                  />
                </div>
                <div className="d-flex justify-content-center mb-2 col-2">
                  <img
                    src={jafza}
                    alt="jafza Image"
                    className="img-fluid mx-2"
                    style={{ maxWidth: "150px", height: "auto" }}
                  />
                </div>
                <div className="d-flex justify-content-center mb-2">
                  <img
                    src={noon}
                    alt="noon Image"
                    className="img-fluid mx-2"
                    style={{ maxWidth: "150px", height: "auto" }}
                  />
                </div>
              </div>
            </div>
            {/* Third Slide */}
            <div className="row p-3 ms-1">
              <div
                className="shadow-sm border border-2 border-light rounded-3 mt-2 d-flex justify-content-center align-items-center flex-column flex-lg-row col-12 BrandHeight"
                // style={{ minHeight: "150px" }} // Add minHeight for vertical centering
              >
                {/* Image Containers */}
                <div className="d-flex justify-content-center mb-2 col-2">
                  <img
                    src={INTERVEL}
                    alt="INTERVEL Image"
                    className="img-fluid mx-2"
                    style={{ maxWidth: "150px", height: "auto" }}
                  />
                </div>
                <div className="d-flex justify-content-center mb-2 col-2">
                  <img
                    src={Dubal}
                    alt="Dubal Image"
                    className="img-fluid mx-2"
                    style={{ maxWidth: "150px", height: "auto" }}
                  />
                </div>
                <div className="d-flex justify-content-center mb-2 col-2">
                  <img
                    src={Du}
                    alt="Du Image"
                    className="img-fluid mx-2"
                    style={{ maxWidth: "150px", height: "auto" }}
                  />
                </div>
                <div className="d-flex justify-content-center mb-2 col-2 ms-lg-3">
                  <img
                    src={DPWorld}
                    alt="DP World Image"
                    className="img-fluid mx-2"
                    style={{ maxWidth: "150px", height: "auto" }}
                  />
                </div>
                <div className="d-flex justify-content-center mb-2 col-2">
                  <img
                    src={DNATA}
                    alt="dnata Image"
                    className="img-fluid mx-2"
                    style={{ maxWidth: "150px", height: "auto" }}
                  />
                </div>
                <div className="d-flex justify-content-center mb-2">
                  <img
                    src={dafz}
                    alt="dafz Image"
                    className="img-fluid mx-2"
                    style={{ maxWidth: "150px", height: "auto" }}
                  />
                </div>
              </div>
            </div>
            {/* Fourth Slide*/}
            <div className="row p-3 ms-1">
              <div
                className="shadow-sm border border-2 border-light rounded-3 mt-2 d-flex justify-content-center align-items-center flex-column flex-lg-row col-12 BrandHeight"
                // style={{ minHeight: "150px" }} // Add minHeight for vertical centering
              >
                {/* Image Containers */}
                <div className="d-flex justify-content-center mb-2 col-2">
                  <img
                    src={aramex}
                    alt="aramex Image"
                    className="img-fluid mx-2"
                    style={{ maxWidth: "150px", height: "auto" }}
                  />
                </div>
                <div className="d-flex justify-content-center mb-2 col-2">
                  <img
                    src={ALMASAOOD}
                    alt="ALMASAOOD Image"
                    className="img-fluid mx-2"
                    style={{ maxWidth: "150px", height: "auto" }}
                  />
                </div>
                <div className="d-flex justify-content-center mb-2 col-2">
                  <img
                    src={AIRASTANA}
                    alt="AIRASTANA Image"
                    className="img-fluid mx-2"
                    style={{ maxWidth: "150px", height: "auto" }}
                  />
                </div>
                <div className="d-flex justify-content-center mb-2 col-2 ms-lg-5">
                  <img
                    src={ADNOC}
                    alt="DADNOC Image"
                    className="img-fluid mx-2"
                    style={{ maxWidth: "150px", height: "auto" }}
                  />
                </div>
                <div className="d-flex justify-content-center mb-2 col-2">
                  <img
                    src={DSV}
                    alt="DSV Image"
                    className="img-fluid mx-2"
                    style={{ maxWidth: "150px", height: "auto" }}
                  />
                </div>
                {/* <div className="d-flex justify-content-center mb-2">
                  <img
                    src={dafz}
                    alt="dafz Image"
                    className="img-fluid mx-2"
                    style={{ maxWidth: "150px", height: "auto" }}
                  />
                </div> */}
              </div>
            </div>
          </Slider>
        </div>

        <div className="container mt-5 pt-5 m-0 p-0 m-auto text-white">
          <div
            className={`row  rounded-4  m-auto text-white p-3 slide-in-left  ${
              hasViewedSlide.myElement ? "animate-enquire" : ""
            }`}
            style={{ backgroundColor: "rgb(4, 18, 113)" }}
            ref={myRef1}
          >
            <div className="col-12  text-center text-white">
              <h1>What Sets us Apart </h1>
              <div className="col-12 mt-5 text-white">
                <Collapse accordion items={items} onChange={onChange} />
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-5" id="banner">
          <div
            className={`row slide-in-left  ${
              hasViewedSlide.secondElement ? "animate-slide-in" : ""
            }`}
            ref={myRef2}
          >
            <div className="col-12 mt-5 text-center">
              <h1 style={{ color: "rgb(4, 18, 113)" }} className="fw-bold">
                Our Corporate Training Programs
              </h1>
            </div>
          </div>
          <div >
          <Slider
            {...settings2}
            className="m-0 p-0 col-12 col-md-8 col-lg-8 m-auto"
          >
            <div>
              <div className="text-center">
                <img src={course1} alt="Human Resource Managment Image" />
                <p className=" mt-3 text-center">
                Equip your HR team with essential skills in labour laws, HR policies, digital transformation, workforce planning, ROI measurement, and more.
                </p>
              </div>
            </div>
            <div>
            <div className="text-center">
                <img src={course1} alt="Human Resource Managment Image" />
                <p className=" mt-3 text-center">
                Equip your HR team with essential skills in labour laws, HR policies, digital transformation, workforce planning, ROI measurement, and more.
                </p>
              </div>
            </div>
            <div>
            <div className="text-center">
                <img src={course1} alt="Human Resource Managment Image" />
                <p className=" mt-3 text-center">
                Equip your HR team with essential skills in labour laws, HR policies, digital transformation, workforce planning, ROI measurement, and more.
                </p>
              </div>
            </div>
            <div>
              <div className="p-3 shadow-sm border border-light rounded-3 ms-md-2 ms-lg-4 ms-2 mt-2 testimonialresponsive-div">
                <h3 className="text-center mt-5">Mohammed Anwar</h3>
                <p className="text-center">
                  I completed the Passenger Ground Service course at WingsWay
                  Training Institute in Dubai and had a great experience. The
                  instructors were knowledgeable, and the curriculum was
                  practical, covering everything I needed to know for the
                  industry. The staff were also helpful and supportive
                  throughout the process. I highly recommend this institute for
                  anyone looking to enter aviation or related fields.
                </p>
              </div>
            </div>
            <div>
              <div className="p-3 shadow-sm border border-light rounded-3 ms-lg-4 mb-1 ms-2 mt-2 testimonialresponsive-div">
                <h3 className="text-center mt-md-5 mt-5">Prashnaa Magar</h3>
                <p className="text-center">
                  {" "}
                  I had an amazing experience at WingsWay Training Institute.
                  The instructors were highly knowledgeable and passionate about
                  their subjects, making learning both engaging and rewarding.
                  Ms. Tina was so sweet and supportive. The curriculum at
                  WingsWay Training Institute is well-designed and
                  comprehensive, covering all the necessary topics and providing
                  practical skills. Overall, my time at WingsWay Training
                  Institute exceeded my expectations, and I would highly
                  recommend it to anyone looking for best Cabin Crew Courses,
                  PGSA courses, and a supportive learning environment.
                </p>
              </div>
            </div>

            <div>
              <div className="p-3 shadow-sm border border-light rounded-3 ms-lg-4 mb-1 ms-2 mt-2 testimonialresponsive-div">
                <h3 className="text-center mt-md-5  mt-5">Wanu</h3>

                <p className="text-center">
                  {" "}
                  Did my PGSA course from WingsWay and the amount of love and
                  support I got from miss Tina, miss Sheetal, and the entire
                  team of WingsWay was out of the world. They helped me with
                  each and everything. I also had the opportunity to visit
                  Fujairah aviation academy where we did our aircraft visit and
                  learnt how to become an ATC controller, a pilot as well as an
                  AME. We got a tour of the hangar as well.
                </p>
                <p className="text-center">
                  {" "}
                  Blessed to have such great trainers who are so dedicated towards building our future. ❤️
                </p>
              </div>
            </div>
          </Slider>
          </div>
        </div>

        <div className="container mt-5 border border-white">
          {/* <div className="row "> */}
          <div
            className={`row rounded-4 slide-in-left   ${
              hasViewedSlide.secondElement ? "animate-enquire" : ""
            }`}
            style={{ justifyContent: "center" }}
            ref={myRef2}
          >
            <div className="col-12 ">
              <h1 className="text-center mt-lg-3">
                <span className="fw-bold ">About the</span>
                <span className="fw-bold  text-primary"> Course</span>
              </h1>
            </div>
          

            <div className="col-12 col-lg-5 rounded-3 mt-2 mt-lg-4 rounded-3 shadow p-4 small-device-text-wrap">
              <p className="text-center mt-lg-3">
                <span className="fw-bold fs-3">Learning </span>
                <span className="fw-bold fs-3 text-primary">Outcomes</span>
              </p>
              <p className="text-start ms-3">
                You will learn the following after completing the Passenger
                Ground Services course at WingsWay Training Institute:
              </p>
              <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
                <li className="ms-lg-4 d-flex align-items-start mt-1">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-primary me-2 flex-shrink-0 mt-1"
                  />
                  <div>
                    <span style={{ fontWeight: "bold" }}>
                      How Airlines and Airports Work:
                    </span>{" "}
                    <span className="d-block d-sm-inline">
                      Learn how airlines and airports provide passenger services
                      like check-in and boarding.
                    </span>
                  </div>
                </li>
                <li className="ms-lg-4 d-flex align-items-start mt-1">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-primary me-2 flex-shrink-0 mt-1"
                  />
                  <div>
                    <span style={{ fontWeight: "bold" }}>
                      Passenger Check-In and Boarding:
                    </span>{" "}
                    <span className="d-block d-sm-inline">
                      Understand how passengers and their luggage are checked in
                      and how they board the airplane, especially those with
                      special needs.
                    </span>
                  </div>
                </li>
                <li className="ms-lg-4 d-flex align-items-start mt-1">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-primary me-2 flex-shrink-0 mt-1"
                  />
                  <div>
                    <span style={{ fontWeight: "bold" }}>
                      Transportation Rules:
                    </span>{" "}
                    <span className="d-block d-sm-inline">
                      Know the rules for transporting passengers and their
                      baggage safely.
                    </span>
                  </div>
                </li>
                <li className="ms-lg-4 d-flex align-items-start mt-1">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-primary me-2 flex-shrink-0 mt-1"
                  />
                  <div>
                    <span style={{ fontWeight: "bold" }}>
                      Computer Systems for Travel:
                    </span>{" "}
                    <span className="d-block d-sm-inline">
                      Understand how computer systems manage reservations,
                      flight departures, and other processes.
                    </span>
                  </div>
                </li>
                <li className="ms-lg-4 d-flex align-items-start mt-1">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-primary me-2 flex-shrink-0 mt-1"
                  />
                  <div>
                    <span style={{ fontWeight: "bold" }}>
                      Latest Passenger Service Technology:
                    </span>{" "}
                    <span className="d-block d-sm-inline">
                      Stay updated on the newest technology used to provide
                      services at the airports and on flights.
                    </span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="col-12 col-md-12 col-lg-5 rounded-3 mt-5 mt-lg-4 rounded-3 shadow ms-lg-4 p-4">
              <p className="text-center mt-lg-3">
                <span className="fw-bold fs-3 ">Course </span>
                <span className="fw-bold fs-3 text-primary">Content</span>
              </p>

              <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
                <li className="ms-lg-3 d-flex align-items-start mt-1">
                  {" "}
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-primary me-2 flex-shrink-0 mt-1"
                  />
                  Introduction to Airport and Airline Ground Operations
                </li>
                <li className="ms-lg-2 d-flex align-items-start mt-1">
                  {" "}
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-primary me-2 ms-lg-2 flex-shrink-0 mt-1"
                  />
                  Computer Reservations and Departure Control System Functions
                </li>
                <li className="ms-lg-2 d-flex align-items-start mt-1">
                  {" "}
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-primary me-2 ms-lg-2 flex-shrink-0 mt-1"
                  />
                  Check-In Procedures for Passengers and their Baggage (Airport
                  and Off-site)
                </li>
                <li className="ms-lg-2 d-flex align-items-start mt-1">
                  {" "}
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-primary me-2 ms-lg-2 flex-shrink-0 mt-1"
                  />
                  Conditions of Carriage, Boarding Procedures and Close-Out
                  Messaging{" "}
                </li>
                <li className="ms-lg-2 d-flex align-items-start mt-1">
                  {" "}
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-primary me-2 ms-lg-2 flex-shrink-0 mt-1"
                  />
                  Dangerous Goods Regulations{" "}
                </li>
                <li className="ms-lg-2 d-flex align-items-start mt-1">
                  {" "}
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-primary me-2 ms-lg-2 flex-shrink-0 mt-1"
                  />
                  Managing Passenger Interactions{" "}
                </li>
                <li className="ms-lg-2 d-flex align-items-start mt-1">
                  {" "}
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-primary me-2 ms-lg-2 flex-shrink-0 mt-1"
                  />
                  Aviation Security Requirements for Passenger and Baggage{" "}
                </li>
                <li className="ms-lg-2 d-flex align-items-start mt-1">
                  {" "}
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-primary me-2 ms-lg-2 flex-shrink-0 mt-1"
                  />
                  Enhanced passenger facilitation{" "}
                </li>
                <li className="ms-lg-2 d-flex align-items-start mt-1">
                  {" "}
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-primary me-2 ms-lg-2 flex-shrink-0 mt-1"
                  />
                  Future of the Aviation Industry{" "}
                </li>
              </ul>
            </div>
          </div>
          <div
            className={`row mt-3 rounded-4 slide-in-left  ${
              hasViewedSlide.thirdElement ? "animate-enquire" : ""
            }`}
            ref={myRef3}
            style={{ justifyContent: "center" }}
          >
            {" "}
            <div className="col-12 col-md-12 col-lg-5 rounded-3 mt-3  rounded-3 shadow  p-4">
              <p className="text-center mt-lg-3">
                <span className="fw-bold fs-3 ">Career </span>
                <span className="fw-bold fs-3 text-primary">Opportunities</span>
              </p>

              <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
                <li className="ms-lg-3 d-flex align-items-start mt-1">
                  {" "}
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-primary me-2 flex-shrink-0 mt-1"
                  />
                  Airport Manager
                </li>
                <li className="ms-lg-2 d-flex align-items-start mt-1">
                  {" "}
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-primary me-2 ms-lg-2 flex-shrink-0 mt-1"
                  />
                  Aviation Trainer
                </li>
                <li className="ms-lg-2 d-flex align-items-start mt-1">
                  {" "}
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-primary me-2 ms-lg-2 flex-shrink-0 mt-1"
                  />
                  Customs and Immigration Officer
                </li>
                <li className="ms-lg-2 d-flex align-items-start mt-1">
                  {" "}
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-primary me-2 ms-lg-2 flex-shrink-0 mt-1"
                  />
                  Ground Handling Coordinator{" "}
                </li>
                <li className="ms-lg-2 d-flex align-items-start mt-1">
                  {" "}
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-primary me-2 ms-lg-2 flex-shrink-0 mt-1"
                  />
                  Passenger Service Agent{" "}
                </li>
                <li className="ms-lg-2 d-flex align-items-start mt-1">
                  {" "}
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-primary me-2 ms-lg-2 flex-shrink-0 mt-1"
                  />
                  Baggage Handler{" "}
                </li>

                <li className="ms-lg-2 d-flex align-items-start mt-1">
                  {" "}
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-primary me-2 ms-lg-2 flex-shrink-0 mt-1"
                  />
                  Aircraft Dispatcher{" "}
                </li>
                <li className="ms-lg-2 d-flex align-items-start mt-1">
                  {" "}
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-primary me-2 ms-lg-2 flex-shrink-0 mt-1"
                  />
                  Airport Safety Officer{" "}
                </li>
                <li className="ms-lg-2 d-flex align-items-start mt-1">
                  {" "}
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-primary me-2 ms-lg-2 flex-shrink-0 mt-1"
                  />
                  Check-In Agent{" "}
                </li>
                <li className="ms-lg-2 d-flex align-items-start mt-1">
                  {" "}
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-primary me-2 ms-lg-2 flex-shrink-0 mt-1"
                  />
                  Gate Agent{" "}
                </li>
                <li className="ms-lg-2 d-flex align-items-start mt-1">
                  {" "}
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-primary me-2 ms-lg-2 flex-shrink-0 mt-1"
                  />
                  Customer Service Representative{" "}
                </li>
              </ul>
            </div>
            <div className="col-12 col-md-12 col-lg-5 rounded-3 mt-3 rounded-3 shadow ms-lg-4 p-4">
              <p className="text-center mt-lg-3">
                <span className="fw-bold fs-3 ">Entry </span>
                <span className="fw-bold fs-3 text-primary">Qualification</span>
              </p>
              <p className="ms-3">
                This course is suitable for individuals with the following
                qualifications:
              </p>
              <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
                <li className="ms-lg-3 d-flex align-items-start mt-1">
                  {" "}
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-primary me-2 flex-shrink-0 mt-1"
                  />
                  Grade 10 / O-Level / Class 10
                </li>
                <li className="ms-lg-2 d-flex align-items-start mt-1">
                  {" "}
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-primary me-2 ms-lg-2 flex-shrink-0 mt-1"
                  />
                  High school graduates
                </li>
                <li className="ms-lg-2 d-flex align-items-start mt-1">
                  {" "}
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-primary me-2 ms-lg-2 flex-shrink-0 mt-1"
                  />
                  Undergraduates
                </li>
                <li className="ms-lg-2 d-flex align-items-start mt-1">
                  {" "}
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-primary me-2 ms-lg-2 flex-shrink-0 mt-1"
                  />
                  Postgraduates{" "}
                </li>
                <li className="ms-lg-2 d-flex align-items-start mt-1">
                  {" "}
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-primary me-2 ms-lg-2 flex-shrink-0 mt-1"
                  />
                  Working professionals{" "}
                </li>
              </ul>
            </div>
          </div>
          <div
            className={`row mt-3 rounded-4 slide-in-left  ${
              hasViewedSlide.fourthElement ? "animate-enquire" : ""
            }`}
            ref={myRef4}
            style={{ justifyContent: "center" }}
          >
            {" "}
            <div className="col-12 col-md-12 col-lg-5 rounded-3 mt-3  rounded-3 shadow p-4">
              <p className="text-center mt-lg-3">
                <span className="fw-bold fs-3 ">Key </span>
                <span className="fw-bold fs-3 text-primary">Topics</span>
              </p>
              <p className="ms-3">
                Some key topics covered in the Passenger Ground Services course
                at WingsWay Training Institute:
              </p>
              <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
                <li className="ms-lg-3 d-flex align-items-start mt-1">
                  {" "}
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-primary me-2 flex-shrink-0 mt-1"
                  />
                  How airports function
                </li>
                <li className="ms-lg-2 d-flex align-items-start mt-1">
                  {" "}
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-primary me-2 ms-lg-2 flex-shrink-0 mt-1"
                  />
                  Guidelines for boarding passengers and baggage
                </li>
                <li className="ms-lg-2 d-flex align-items-start mt-1">
                  {" "}
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-primary me-2 ms-lg-2 flex-shrink-0 mt-1"
                  />
                  Dangerous Goods Regulations
                </li>
                <li className="ms-lg-2 d-flex align-items-start mt-1">
                  {" "}
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-primary me-2 ms-lg-2 flex-shrink-0 mt-1"
                  />
                  Interacting with passengers{" "}
                </li>
                <li className="ms-lg-2 d-flex align-items-start mt-1">
                  {" "}
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-primary me-2 ms-lg-2 flex-shrink-0 mt-1"
                  />
                  The future of the aviation industry{" "}
                </li>
              </ul>
            </div>
            <div className="col-12 col-md-12 col-lg-5 rounded-3 mt-3 rounded-3 shadow ms-lg-4 p-4">
              <p className="text-center mt-lg-3">
                <span className="fw-bold fs-3 ">Learner’s </span>
                <span className="fw-bold fs-3 text-primary">Profile</span>
              </p>

              <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
                <li className="ms-lg-3 d-flex align-items-start mt-1">
                  {" "}
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-primary me-2 flex-shrink-0 mt-1"
                  />
                  Airline passenger service employees
                </li>
                <li className="ms-lg-2 d-flex align-items-start mt-1">
                  {" "}
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-primary me-2 ms-lg-2 flex-shrink-0 mt-1"
                  />
                  Ground handling agents
                </li>
                <li className="ms-lg-2 d-flex align-items-start mt-1">
                  {" "}
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-primary me-2 ms-lg-2 flex-shrink-0 mt-1"
                  />
                  Airport operator’s employees
                </li>
                <li className="ms-lg-2 d-flex align-items-start mt-1">
                  {" "}
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-primary me-2 ms-lg-2 flex-shrink-0 mt-1"
                  />
                  Anyone wanting to kickstart a career in Passenger Ground
                  Services and gain global exposure.{" "}
                </li>
                <li className="ms-lg-2 d-flex align-items-start mt-1">
                  {" "}
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-primary me-2 ms-lg-2 flex-shrink-0 mt-1"
                  />
                  Customer service professionals{" "}
                </li>
              </ul>
            </div>
          </div>
          <div className="text-center mt-5 col-12 m-auto">
            {/* <Button
              className="mt-2 text-center text-white Contactbutton mb-2 mb-lg-0"
              style={{ background: "#0d278e" }}
              onClick={() => {
                window.location.href = "#"; // Simulate href="#" behavior
              }}
            >
              Enquire Now
            </Button> */}

            <button
              type="button"
              className="btn btn-lg text-center text-white Contactbutton mb-2 mb-lg-0"
              onClick={() => {
                window.location.href = "#"; // Simulate href="#" behavior
              }}
            >
              Enquire Now
            </button>
          </div>
        </div>

        <div className="container mt-5">
          <div
            className={`row mt-4 rounded-4 slide-in-left  ${
              hasViewedSlide.fifthElement ? "animate-slide-in" : ""
            }`}
            ref={myRef5}
            style={{ justifyContent: "center" }}
          >
            <div className="col-12 ">
              <h1 className="text-center ">
                <span className="fw-bold ">Why Choose WingsWay for </span>

                <span className="fw-bold text-primary">
                  {" "}
                  Airport Operation Fundamentals ?
                </span>
              </h1>
            </div>{" "}
            <div className="col-12 col-md-12 col-lg-5 rounded-3 mt-4  rounded-3 shadow p-3">
              <p className="text-center mt-lg-3">
                <span className="fw-bold fs-3 ms-0">Recognitions and</span>
                <span className="fw-bold fs-3 text-primary ">
                  {" "}
                  Qualifications:
                </span>
              </p>
              <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
                <li className="ms-lg-3 d-flex align-items-start mt-1">
                  {" "}
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-primary me-2 flex-shrink-0 mt-1"
                  />
                  <div>
                    <span style={{ fontWeight: "bold" }}>IATA Certified:</span>{" "}
                    <span className="d-block d-sm-inline">
                      Our courses are recognised by the International Air
                      Transport Association, ensuring industry relevance and
                      international recognition.
                    </span>
                  </div>
                </li>
                <li className="ms-lg-2 d-flex align-items-start mt-1">
                  {" "}
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-primary me-2 ms-lg-2 flex-shrink-0 mt-1"
                  />
                  <div>
                    <span style={{ fontWeight: "bold" }}>KHDA Approved:</span>{" "}
                    <span className="d-block d-sm-inline">
                      Our courses meet the high standards set by the Knowledge
                      and Human Development Authority for private education.
                    </span>
                  </div>
                </li>
                <li className="ms-lg-2 d-flex align-items-start mt-1">
                  {" "}
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-primary me-2 ms-lg-2 flex-shrink-0 mt-1"
                  />
                  <div>
                    <span style={{ fontWeight: "bold" }}>
                      ISO 9001:2015 Certified:
                    </span>{" "}
                    <span className="d-block d-sm-inline">
                      We are committed to quality management and continuous
                      improvement.
                    </span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-12 col-md-12 col-lg-5 rounded-3 mt-5 mt-lg-4 rounded-3 shadow ms-lg-4 p-3">
              <p className="text-center mt-lg-3">
                <span className="fw-bold fs-3 ms-0">Trusted by </span>
                <span className="fw-bold fs-3 text-primary ">
                  Students Worldwide:
                </span>
              </p>
              <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
                <li className="ms-lg-3 d-flex align-items-start mt-1">
                  {" "}
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-primary me-2 flex-shrink-0 mt-1"
                  />
                  <div>
                    <span style={{ fontWeight: "bold" }}>
                      Diverse Student Base:
                    </span>{" "}
                    <span className="d-block d-sm-inline">
                      Join our community of students from over 80 nationalities.
                    </span>
                  </div>
                </li>
                <li className="ms-lg-2 d-flex align-items-start mt-1">
                  {" "}
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-primary me-2 ms-lg-2 flex-shrink-0 mt-1"
                  />
                  <div>
                    <span style={{ fontWeight: "bold" }}>
                      Extensive Course Offerings:
                    </span>{" "}
                    <span className="d-block d-sm-inline">
                      Explore over 250 courses designed to enhance your skills
                      and career prospects.
                    </span>
                  </div>
                </li>

                <li className="ms-lg-2 d-flex align-items-start mt-1">
                  {" "}
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-primary me-2 ms-lg-2 flex-shrink-0 mt-1"
                  />
                  Choose WingsWay for a trusted and globally recognised
                  educational experience in airport operation fundamentals.{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div
          className={` container mt-5 border border-white  rounded-4 slide-in-left   ${
            hasViewedSlide.sixthElement ? "animate-enquire" : ""
          }`}
          ref={myRef6}
          id="Testimonials"
        >
          <div className="row border-primary ">
            <div className="col-12 text-center mb-4">
              <h1 className="fw-bold">
                <span className="fw-bold  ">Hear From Our Happy </span>
                <span className="fw-bold " style={{ color: "#022E88" }}>
                  {" "}
                  Students
                </span>
              </h1>
            </div>
          </div>

          <Slider
            {...settings}
            className="m-0 p-0 col-12 col-md-8 col-lg-8 m-auto"
          >
            <div>
              <div className=" p-3 shadow-sm border border-2 border-light rounded-3 ms-lg-4 mt-2 ms-2 testimonialresponsive-div">
                <h3 className="text-center mt-5">Harriet Nakazibwe </h3>
                <p className=" mt-3 text-center">
                  I greatly recommend WingsWay as the best institute for ones’
                  career buildup. It has been a great experience studying at
                  WingsWay Institute during the pursuing of my IATA PGSA course.
                  All thankful and grateful of my trainers, Ma’am Sheetal and
                  Ma’am Tina in this journey of building my career.
                </p>
              </div>
            </div>
            <div>
              <div className=" p-3 shadow-sm border border-light rounded-3 ms-md-2 ms-lg-4 ms-2 mt-2 testimonialresponsive-div">
                <h3 className="text-center mt-5">Prateek Pandey</h3>
                <p className="text-center">
                  I had completed my PGSA course with them last year. It was a
                  very comprehensive and useful course and total value for
                  money! Special thanks to Sheetal ma’am, Tina ma’am, Queena
                  ma’am, and Cyril sir. I also got a job offer from dnata within
                  3 months of completing the IATA exam. Interview preparation
                  was also assisted by my trainers and no extra money was
                  charged for on the phone advises and free complimentary
                  sessions from time to time. The best place for aviation
                  training! WingsWay !
                </p>
              </div>
            </div>
            <div>
              <div className="p-3 shadow-sm border border-light rounded-3 ms-lg-4 ms-2 mt-2 tesreview ">
                <h3 className="text-center mt-5">Salman Ahmad</h3>
                <p className="text-center">
                  The Wingsway Institute was an incredible experience for me. I
                  had the opportunity to visit their facility and see aircraft
                  up close.
                </p>
                <p className="text-center">
                  Miss Tina Dey was an exceptional trainer who had a passion for
                  aviation that was truly infectious. Her patience and
                  dedication to her students were evident in every lesson she
                  taught. I learned so much from her and felt confident in my
                  abilities after training with her. Overall, my experience at
                  the Wingsway Institute was top-notch. The combination of
                  excellent facilities, experienced instructors, and
                  top-of-the-line aircraft made for a truly unforgettable
                  experience. I would highly recommend this institute to anyone
                  looking to pursue a career in aviation.
                </p>
              </div>
            </div>
            <div>
              <div className="p-3 shadow-sm border border-light rounded-3 ms-md-2 ms-lg-4 ms-2 mt-2 testimonialresponsive-div">
                <h3 className="text-center mt-5">Mohammed Anwar</h3>
                <p className="text-center">
                  I completed the Passenger Ground Service course at WingsWay
                  Training Institute in Dubai and had a great experience. The
                  instructors were knowledgeable, and the curriculum was
                  practical, covering everything I needed to know for the
                  industry. The staff were also helpful and supportive
                  throughout the process. I highly recommend this institute for
                  anyone looking to enter aviation or related fields.
                </p>
              </div>
            </div>
            <div>
              <div className="p-3 shadow-sm border border-light rounded-3 ms-lg-4 mb-1 ms-2 mt-2 testimonialresponsive-div">
                <h3 className="text-center mt-md-5 mt-5">Prashnaa Magar</h3>
                <p className="text-center">
                  {" "}
                  I had an amazing experience at WingsWay Training Institute.
                  The instructors were highly knowledgeable and passionate about
                  their subjects, making learning both engaging and rewarding.
                  Ms. Tina was so sweet and supportive. The curriculum at
                  WingsWay Training Institute is well-designed and
                  comprehensive, covering all the necessary topics and providing
                  practical skills. Overall, my time at WingsWay Training
                  Institute exceeded my expectations, and I would highly
                  recommend it to anyone looking for best Cabin Crew Courses,
                  PGSA courses, and a supportive learning environment.
                </p>
              </div>
            </div>

            <div>
              <div className="p-3 shadow-sm border border-light rounded-3 ms-lg-4 mb-1 ms-2 mt-2 testimonialresponsive-div">
                <h3 className="text-center mt-md-5  mt-5">Wanu</h3>

                <p className="text-center">
                  {" "}
                  Did my PGSA course from WingsWay and the amount of love and
                  support I got from miss Tina, miss Sheetal, and the entire
                  team of WingsWay was out of the world. They helped me with
                  each and everything. I also had the opportunity to visit
                  Fujairah aviation academy where we did our aircraft visit and
                  learnt how to become an ATC controller, a pilot as well as an
                  AME. We got a tour of the hangar as well.
                </p>
                <p className="text-center">
                  {" "}
                  Blessed to have such great trainers who are so dedicated
                  towards building our future. ❤️
                </p>
              </div>
            </div>
          </Slider>
        </div>

        <div className="container-fluid ">
          <div className="row">
            <div className="col-12">
              <p className="text-end">
                <a
                  href="https://wa.me/+971509062236"
                  className="fixed-icon"
                  target="_blank" // Opens in a new tab
                  rel="noopener noreferrer" // Security best practice when using target="_blank"
                >
                  <FontAwesomeIcon icon={faWhatsapp} bounce size="2x" />
                </a>
              </p>
            </div>
          </div>
        </div>

        <div
          className="container-fluid text-center m-0 p-0"
          style={{ backgroundColor: "#0a142f", color: "white" }}
        >
          <div
            className="row d-flex justify-content-center align-items-center mt-5 "
            style={{ backgroundColor: "#0a142f", color: "white" }}
          >
            <div className="col-12 col-md-12 col-lg-2 d-flex flex-column align-items-center text-center ms-lg-5">
              <img
                src={Footerlogo}
                alt="logo"
                className="img-fluid mt-3 responsive-logofooter text-center"
              />
            </div>

            <div className="col-12 col-md-12 col-lg-2 text-center mt-lg-2 text-lg-center ">
              <a href="#coursediscription" className="footer-link">
                <span>Course Description</span>
              </a>
            </div>

            <div className="col-12 col-md-12 col-lg-2 mt-3 mt-md-3 text-center mt-lg-2 text-lg-center ">
              <a href="#banner" className="footer-link">
                <span>About the course</span>
              </a>
            </div>

            <div className="col-12 col-md-12 col-lg-2 mt-3 mt-md-3 text-center mt-lg-2 text-lg-center">
              <a href="#Testimonials" className="footer-link">
                <span>Testimonial</span>
              </a>
            </div>
            <div
              className="row "
              style={{ backgroundColor: "#0a142f", color: "white" }}
            >
              <div className="col-12 text-center mt-3 mt-lg-0 mb-3">
                <p>© 2023 WingsWay All rights reserved</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
