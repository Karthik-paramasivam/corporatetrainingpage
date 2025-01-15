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
import Upskillanddriveresults from "./Images/Upskillanddriveresults2.png";
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
import course4 from "./Images/Course4.png";
import course5 from "./Images/Course5.png";
import course6 from "./Images/Course6.png";
import course7 from "./Images/Course7.png";
import course8 from "./Images/Course8.png";
import course9 from "./Images/Course9.png";
import course10 from "./Images/Course10.png";
import course11 from "./Images/Course11.png";
import award from "./Images/award.jpg";
import invest from "./Images/Invest.png";
import CorporateTraining1 from "./Images/CorporateTranining1.jpg";
import CorporateTraining2 from "./Images/CorporateTranining2.jpg";
import CorporateTraining3 from "./Images/CorporateTranining3.jpg";
import CorporateTraining4 from "./Images/CorporateTranining4.jpg";
import CorporateTraining5 from "./Images/CorporateTranining5.jpg";
import CorporateTraining6 from "./Images/CorporateTranining6.jpg";
import CorporateTraining7 from "./Images/CorporateTranining7.jpg";
import CorporateTraining8 from "./Images/CorporateTranining8.jpg";
import CorporateTraining9 from "./Images/CorporateTraining9.jpg";
import CorporateTraining10 from "./Images/CorporateTraining10.jpg";
import CorporateTraining11 from "./Images/CorporateTraining11.jpg";
import CorporateTraining12 from "./Images/CorporateTraining12.jpg";
import CorporateTraining13 from "./Images/CorporateTraining13.jpg";
import CorporateTraining14 from "./Images/CorporateTraining14.jpg";
import CorporateTraining15 from "./Images/CorporateTraining15.jpg";
import CorporateTraining16 from "./Images/CorporateTraining16.jpg";
import CorporateTraining17 from "./Images/CorporateTraining17.jpg";
import CorporateTraining18 from "./Images/CorporateTraining18.jpg";
import CorporateTraining19 from "./Images/CorporateTraining19.jpg";
import CorporateTraining20 from "./Images/CorporateTraining20.jpg";
import CorporateTraining21 from "./Images/CorporateTraining21.jpg";
import CorporateTraining22 from "./Images/CorporateTraining22.jpg";
import CorporateTraining23 from "./Images/CorporateTraining23.jpg";
import CorporateTraining24 from "./Images/CorporateTraining24.jpg";
import CorporateTraining25 from "./Images/CorporateTraining25.jpg";
import Testimonial1 from "./Images/Testimonial1.png";
import Testimonial2 from "./Images/Testimonial2.png";
import Testimonial3 from "./Images/Testimonial3.png";
import Testimonial4 from "./Images/Testimonial4.png";
import Testimonial5 from "./Images/Testimonial5.png";
import Enquire from "./Images/EnquireNow.jpg";
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
      <h4 className="accordion-label" style={{color:"#f46a2f"}}>Personalised Training Just for You</h4>
    ),
    children: <p style={{ fontSize: "18px" }}>{text1}</p>,
  },
  {
    key: "2",
    label: <h4 className="accordion-label" style={{color:"#f46a2f"}}>Expert-Led Training</h4>,
    children: <p style={{ fontSize: "18px" }}>{text2}</p>,
  },
  {
    key: "3",
    label: <h4 className="accordion-label" style={{color:"#f46a2f"}}>Real-World Simulations</h4>,
    children: <p style={{ fontSize: "18px" }}>{text3}</p>,
  },
  {
    key: "4",
    label: (
      <h4 className="accordion-label" style={{color:"#f46a2f"}}>Access to Learning Management System</h4>
    ),
    children: <p style={{ fontSize: "18px" }}>{text4}</p>,
  },
  {
    key: "5",
    label: <h4 className="accordion-label" style={{color:"#f46a2f"}}>Tech-Driven Learning</h4>,
    children: <p style={{ fontSize: "18px" }}>{text5}</p>,
  },
];

export default function Home() {
  const [form] = Form.useForm(); // useForm hook for handling form operations
  const [formData, setFormData] = useState(null); // State to store submitted data
  const [phoneNumber, setPhoneNumber] = useState(""); // State for phone number input
  const [countryCode, setCountryCode] = useState("+971"); // Default country code
  const { Option } = Select;

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
    bottom: -60px;
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
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: false,
    cssEase: "linear",
    autoplaySpeed: 4000,
    // initialSlide: 0,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          speed: 300,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
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

  const settings3 = {
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
          dots: false,
        },
      },
    ],
  };

  const settings4 = {
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
          dots: false,
        },
      },
    ],
  };

  return (
    <>
      <style>{styl}</style>

      <div className="container-fluid">
        <div className="container-fluid m-0 p-0">
          <div className="row ">
            <div
              className="col-12 dynamic-height d-flex align-items-center justify-content-center "
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
              <div className="row d-flex align-items-center justify-content-center rounded-5 p-1 terminalresponsive-container">
                {/* First Column with Animation */}
                <motion.div
                  className="col-12 col-lg-6 mt-lg-5 mt-xl-5 mt-xxl-5 "
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
                    className="text-white text-start mt-3 align-items-center justify-content-center"
                    style={{
                      fontSize: "46px",
                      fontWeight: "600",
                      wordBreak: "break-word",
                    }}
                  >
                    CORPORATE
                  </h1>
                  <h1
                    style={{
                      fontSize: "46px",
                      fontWeight: "600",
                      wordBreak: "break-word",
                      color: "rgb(7, 33, 164)",
                    }}
                    className="text-start"
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

                    <Form.Item
                      label="Organisation Name"
                      name="organisationName"
                      className="form-item text-white"
                      rules={[
                        {
                          required: true,
                          message: "Please input your organisation name!",
                        },
                      ]}
                    >
                      <Input placeholder="Enter your organisation name" />
                    </Form.Item>

                    <Form.Item
                      label="Corporate Trainings"
                      name="traning"
                      className="form-item text-white"
                      rules={[
                        {
                          required: true,
                          message: "Please select your option!",
                        },
                      ]}
                    >
                      <Select placeholder="Select your option">
                        {/* <Option value="cilt_level_1">CILT Level 1</Option> */}
                        <Option value="Human Resources Programs">
                          Human Resources Programs
                        </Option>
                        <Option value="Leadership & Management Programs">
                          Leadership & Management Programs
                        </Option>
                        {/* <Option value="cilt_level_4">CILT Level 4</Option> */}
                        <Option value="Skill Development Programs">
                          Skill Development Programs
                        </Option>
                        <Option value="Team Building Programs">
                          Team Building Programs
                        </Option>
                        <Option value="Banking, Finance & Treasury Programs">
                          Banking, Finance & Treasury Programs
                        </Option>
                      </Select>
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
          id="Employees"
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

        <div className="container-fluid m-0 p-0 mt-5 pt-5   text-white">
          <div
            className={`row text-white p-3 slide-in-left  ${
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

        <div className="container mt-5" id="Training">
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
            <div>
              <Slider
                {...settings2}
                className="m-0 p-0 col-12 col-md-12 col-lg-12 m-auto mt-4"
              >
                <div>
                  <div className="d-flex flex-column align-items-center text-center  border border-3 border-light rounded-3 p-2 ms-2 testimonialresponsive-div">
                    <img
                      src={course1}
                      alt="Human Resource Management Image"
                      className="img-fluid"
                      // style={{ maxWidth: "100%", height: "auto" }}
                    />
                    <p className="mt-3 text-center">
                      Equip your HR team with essential skills in labour laws,
                      HR policies, digital transformation, workforce planning,
                      ROI measurement, and more.
                    </p>
                  </div>
                </div>

                <div>
                  <div className="d-flex flex-column align-items-center text-center  border  border-3 border-light rounded-3 p-2 ms-2 testimonialresponsive-div">
                    <img
                      src={course2}
                      alt="Leadership & Management Image"
                      className="img-fluid"
                    />
                    <p className="mt-3 text-center">
                      Master high-performance leadership, build workplace trust,
                      embrace design thinking, agile leadership, and enhance
                      Emotional & Social Intelligence (ESI).
                    </p>
                  </div>
                </div>

                <div>
                  <div className="d-flex flex-column align-items-center text-center border border-3  border-light p-2 ms-2 rounded-3 testimonialresponsive-div">
                    <img
                      src={course3}
                      alt="Team Building Activities Image"
                      className="img-fluid"
                      // style={{ maxWidth: "100%", height: "auto" }}
                    />
                    <p className="mt-3 text-center">
                      Nurture collaboration and personal growth among your teams
                      through our comprehensive team-building trainings.
                    </p>
                  </div>
                </div>

                <div>
                  <div className="d-flex flex-column align-items-center text-center border border-3 border-light p-2 ms-2 rounded-3 testimonialresponsive-div">
                    <img
                      src={course4}
                      alt="Skills Developement Programs Image"
                      className="img-fluid"
                      // style={{ maxWidth: "100%", height: "auto" }}
                    />
                    <p className="mt-3 text-center">
                      Polish in-demand skills, such as, public speaking,
                      interpersonal communication, giving feedback, time and
                      task management, and more.
                    </p>
                  </div>
                </div>

                <div>
                  <div className="d-flex flex-column align-items-center text-center border border-3 border-light p-2 ms-2 rounded-3 testimonialresponsive-div">
                    <img
                      src={course5}
                      alt="Banking, Finance & Treasury Image"
                      className="img-fluid"
                      // style={{ maxWidth: "100%", height: "auto" }}
                    />
                    <p className="mt-3 text-center">
                      Know the essentials of Islamic banking, financial
                      statement analysis, credit management, financial modeling,
                      treasury operations, and more.
                    </p>
                  </div>
                </div>

                <div>
                  <div className="d-flex flex-column align-items-center text-center border border-3 border-light p-2 ms-2 rounded-3 testimonialresponsive-div">
                    <img
                      src={course6}
                      alt="Procrument & Supply Chain Image"
                      className="img-fluid"
                      // style={{ maxWidth: "100%", height: "auto" }}
                    />
                    <p className="mt-3 text-center">
                      Master best practices in procurement, inventory
                      management, contract management, procurement compliance,
                      and more.
                    </p>
                  </div>
                </div>

                <div>
                  <div className="d-flex flex-column align-items-center text-center border border-3 border-light p-2 ms-2 rounded-3 testimonialresponsive-div">
                    <img
                      src={course7}
                      alt="Quality Management Image"
                      className="img-fluid"
                      // style={{ maxWidth: "100%", height: "auto" }}
                    />
                    <p className="mt-3 text-center">
                      Lead quality assurance through six sigma black and green
                      belts, lean sigma, lean operations management, and
                      strategic quality management.
                    </p>
                  </div>
                </div>

                <div>
                  <div className="d-flex flex-column align-items-center text-center border border-3 border-light p-2 ms-2 rounded-3 testimonialresponsive-div">
                    <img
                      src={course8}
                      alt="IT & Excel Image"
                      className="img-fluid"
                      // style={{ maxWidth: "100%", height: "auto" }}
                    />
                    <p className="mt-3 text-center">
                      Practice and master advanced Excel with dashboard
                      creation, Power BI, big data, AI, and other digital
                      business analytics tools.
                    </p>
                  </div>
                </div>

                <div>
                  <div className="d-flex flex-column align-items-center text-center border border-3 border-light p-2 ms-2 rounded-3 testimonialresponsive-div">
                    <img
                      src={course9}
                      alt="Sales & Customer Service Image"
                      className="img-fluid"
                      // style={{ maxWidth: "100%", height: "auto" }}
                    />
                    <p className="mt-3 text-center">
                      Champion customer-centricity through our telesales and
                      sales leadership courses along with customer service
                      specialist course.
                    </p>
                  </div>
                </div>

                <div>
                  <div className="d-flex flex-column align-items-center text-center border border-3 border-light p-2 ms-2 rounded-3 testimonialresponsive-div">
                    <img
                      src={course10}
                      alt="Risk, Audit & Compliance Image"
                      className="img-fluid"
                      // style={{ maxWidth: "100%", height: "auto" }}
                    />
                    <p className="mt-3 text-center">
                      Learn the basics of anti-money laundering, risk
                      management, and more.
                    </p>
                  </div>
                </div>

                <div>
                  <div className="d-flex flex-column align-items-center text-center border border-3 border-light p-2 ms-2 rounded-3 testimonialresponsive-div">
                    <img
                      src={course11}
                      alt="Bite-Sized Trainings Image"
                      className="img-fluid"
                      // style={{ maxWidth: "100%", height: "auto" }}
                    />
                    <p className="mt-3 text-center">
                      Choose from a list of our ‘Espresso’ learning sessions
                      that are targeted, activity-based, result-oriented, and
                      tailored for today’s workforce!
                    </p>
                  </div>
                </div>

                <div>
                  <div className="d-flex flex-column align-items-center justify-content-center text-center border border-3 border-light p-2 ms-2 rounded-3 testimonialresponsive-div">
                    <h3
                      className="mt-3 text-center fw-bold"
                      style={{ color: "#100AA8" }}
                    >
                      AND MUCH MORE …
                    </h3>
                  </div>
                </div>
              </Slider>
            </div>
            <div className="text-center mt-5">
              <button
                className="mt-5 btn btn-lg text-center text-white Enquirebutton mb-2 mb-lg-0"
                style={{ background: "#0d278e" }}
                onClick={() => {
                  window.location.href = "#"; // Simulate href="#" behavior
                }}
              >
                Enquire Now
              </button>
            </div>
          </div>
        </div>

        <div className="container mt-5" id="Awards">
          <div
            className={`row  slide-in-left mt-4 align-items-center  ${
              hasViewedSlide.thirdElement ? "animate-enquire" : ""
            }`}
            ref={myRef3}
          >
            <div className="col-12 text-center mt-3">
              <h1 className="fw-bold text-center" style={{ color: "#041271" }}>
                Our Awards & Recognition
              </h1>
            </div>
            <div className="col-12 col-lg-6 mt-3  mt-lg-3 mt-xxl-5 mb-lg-3 mb-xl-3 mb-xxl-3 justify-content-center border border-white">
              <p className="text-start mb-lg-3 mb-xl-3 mb-xxl-4 ms-lg-5">
                At WingsWay, our commitment to excellence has earned us
                prestigious awards and recognitions, reflecting the trust and
                impact we've delivered to individuals and organisations
                worldwide. We are:
              </p>
              <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
                <li className="ms-lg-3 d-flex align-items-start mt-1 mb-lg-3 mb-xl-3 mb-xxl-4 ms-lg-5">
                  {" "}
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-primary me-2 flex-shrink-0 mt-1"
                  />
                  <div>
                    <span style={{ fontWeight: "bold" }}>KHDA Approved:</span>{" "}
                    <span className="d-block d-sm-inline">
                      WingsWay Training Institute is approved and recognised by
                      the Knowledge and Human Development Authority (KHDA),
                      ensuring the highest standards of education in Dubai.
                    </span>
                  </div>
                </li>
                <li className="ms-lg-3 d-flex align-items-start mt-1 mb-lg-3 mb-xl-3 mb-xxl-4 ms-lg-5">
                  {" "}
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-primary me-2 flex-shrink-0 mt-1"
                  />
                  <div>
                    <span style={{ fontWeight: "bold" }}>DET Approved:</span>{" "}
                    <span className="d-block d-sm-inline">
                      Approved by the Dubai Department of Economy & Tourism
                      (DET), which is the principal authority for the
                      supervision and development of Dubai’s economy and tourism
                      sectors.
                    </span>
                  </div>
                </li>
                <li className="ms-lg-3 d-flex align-items-start mt-1 mb-lg-3 mb-xl-3 mb-xxl-5 ms-lg-5">
                  {" "}
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-primary me-2 flex-shrink-0 mt-1"
                  />
                  <div>
                    <span style={{ fontWeight: "bold" }}>ISO Certified:</span>{" "}
                    <span className="d-block d-sm-inline">
                      WingsWay Training Institute is certified with the
                      prestigious ISO 9001:2015 by the International
                      Accreditation Forum (IAF).
                    </span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-12 col-lg-6 hover-scale2 mt-3 mt-lg-3 mt-xxl-5 text-center">
              <img
                src={award}
                alt="Award Image"
                className="img-fluid rounded-3 responsiveAward-img "
              />
            </div>
          </div>
        </div>

        <div className="container mt-5">
          <div
            className={`row mt-4 rounded-4 slide-in-left border border-white align-items-center ${
              hasViewedSlide.fourthElement ? "animate-slide-in" : ""
            }`}
            ref={myRef4}
          >
            <div className="col-12 col-lg-6">
              <h1
                className="text-start
               fw-bold"
                style={{ color: "#041271" }}
              >
                Invest in Your Employees, Invest in Your Future.
              </h1>
              <p className="mt-3">
                Your employees are your greatest asset. By investing in their
                growth and development, you're not just improving their skills,
                but also strengthening your organisation's future. Our training
                programmes are designed to equip your team with the knowledge
                and tools they need to perform their best and contribute
                positively to your company's goals.
              </p>
            </div>

            <div className="col-12 col-lg-6 text-center">
              <img
                src={invest}
                alt="Invest in Your Employees, Invest in Your Future Image"
                className="img-fluid text-center responsiveInvest-img"
              />
            </div>
          </div>
        </div>

        <div
          className={` container mt-5 border border-white  rounded-4 slide-in-left   ${
            hasViewedSlide.fifthElement ? "animate-enquire" : ""
          }`}
          ref={myRef5}
          id="Testimonials"
        >
          <div className="row border-primary ">
            <div className="col-12 text-center mb-4">
              <h1 className="fw-bold" style={{ color: "rgb(4, 18, 113)" }}>
                Photos From Our Corporate Trainings
              </h1>
            </div>
          </div>

          <Slider
            {...settings3}
            className="m-0 p-0 col-12 col-md-8 col-lg-8 m-auto justify-content-center align-items-center"
          >
            <div>
              <div
                className=" p-3 shadow-sm border border-2 border-light rounded-3 ms-lg-4 mt-2 ms-2 Trainingsresponsive-div text-center"
                style={{ alignContent: "center" }}
              >
                <img
                  src={CorporateTraining1}
                  alt="Corporate Training Image1"
                  className="img-fluid"
                />
              </div>
            </div>
            <div>
              <div
                className=" p-3 shadow-sm border border-2 border-light rounded-3 ms-lg-4 mt-2 ms-2 Trainingsresponsive-div text-center"
                style={{ alignContent: "center" }}
              >
                <img
                  src={CorporateTraining2}
                  alt="Corporate Training Image1"
                  className="img-fluid"
                />
              </div>
            </div>
            <div>
              <div
                className=" p-3 shadow-sm border border-2 border-light rounded-3 ms-lg-4 mt-2 ms-2 Trainingsresponsive-div text-center"
                style={{ alignContent: "center" }}
              >
                <img
                  src={CorporateTraining3}
                  alt="Corporate Training Image2"
                  className="img-fluid"
                />
              </div>
            </div>
            <div>
              <div
                className=" p-3 shadow-sm border border-2 border-light rounded-3 ms-lg-4 mt-2 ms-2 Trainingsresponsive-div text-center"
                style={{ alignContent: "center" }}
              >
                <img
                  src={CorporateTraining4}
                  alt="Corporate Training Image3"
                  className="img-fluid"
                />
              </div>
            </div>
            <div>
              <div
                className=" p-3 shadow-sm border border-2 border-light rounded-3 ms-lg-4 mt-2 ms-2 Trainingsresponsive-div text-center"
                style={{ alignContent: "center" }}
              >
                <img
                  src={CorporateTraining5}
                  alt="Corporate Training Image4"
                  className="img-fluid"
                />
              </div>
            </div>
            <div>
              <div
                className=" p-3 shadow-sm border border-2 border-light rounded-3 ms-lg-4 mt-2 ms-2 Trainingsresponsive-div text-center"
                style={{ alignContent: "center" }}
              >
                <img
                  src={CorporateTraining6}
                  alt="Corporate Training Image5"
                  className="img-fluid"
                />
              </div>
            </div>
            <div>
              <div
                className=" p-3 shadow-sm border border-2 border-light rounded-3 ms-lg-4 mt-2 ms-2 Trainingsresponsive-div text-center"
                style={{ alignContent: "center" }}
              >
                <img
                  src={CorporateTraining7}
                  alt="Corporate Training Image6"
                  className="img-fluid"
                />
              </div>
            </div>

            <div>
              <div
                className=" p-3 shadow-sm border border-2 border-light rounded-3 ms-lg-4 mt-2 ms-2 Trainingsresponsive-div text-center"
                style={{ alignContent: "center" }}
              >
                <img
                  src={CorporateTraining8}
                  alt="Corporate Training Image7"
                  className="img-fluid"
                />
              </div>
            </div>

            {/* <div>
              <div className=" p-3 shadow-sm border border-2 border-light rounded-3 ms-lg-4 mt-2 ms-2 Trainingsresponsive-div text-center">
                <img src={CorporateTraining9} alt="Corporate Training Image8" className="img-fluid" />
              </div>
            </div> */}

            <div>
              <div
                className=" p-3 shadow-sm border border-2 border-light rounded-3 ms-lg-4 mt-2 ms-2 Trainingsresponsive-div text-center"
                style={{ alignContent: "center" }}
              >
                <img
                  src={CorporateTraining10}
                  alt="Corporate Training Image9"
                  className="img-fluid"
                />
              </div>
            </div>
            <div>
              <div
                className=" p-3 shadow-sm border border-2 border-light rounded-3 ms-lg-4 mt-2 ms-2 Trainingsresponsive-div text-center"
                style={{ alignContent: "center" }}
              >
                <img
                  src={CorporateTraining11}
                  alt="Corporate Training Image10"
                  className="img-fluid"
                />
              </div>
            </div>
            <div>
              <div
                className=" p-3 shadow-sm border border-2 border-light rounded-3 ms-lg-4 mt-2 ms-2 Trainingsresponsive-div text-center"
                style={{ alignContent: "center" }}
              >
                <img
                  src={CorporateTraining12}
                  alt="Corporate Training Image11"
                  className="img-fluid"
                />
              </div>
            </div>
            <div>
              <div
                className=" p-3 shadow-sm border border-2 border-light rounded-3 ms-lg-4 mt-2 ms-2 Trainingsresponsive-div text-center"
                style={{ alignContent: "center" }}
              >
                <img
                  src={CorporateTraining13}
                  alt="Corporate Training Image12"
                  className="img-fluid"
                />
              </div>
            </div>
            <div>
              <div
                className=" p-3 shadow-sm border border-2 border-light rounded-3 ms-lg-4 mt-2 ms-2 Trainingsresponsive-div text-center"
                style={{ alignContent: "center" }}
              >
                <img
                  src={CorporateTraining14}
                  alt="Corporate Training Image13"
                  className="img-fluid"
                />
              </div>
            </div>
            <div>
              <div
                className=" p-3 shadow-sm border border-2 border-light rounded-3 ms-lg-4 mt-2 ms-2 Trainingsresponsive-div text-center"
                style={{ alignContent: "center" }}
              >
                <img
                  src={CorporateTraining15}
                  alt="Corporate Training Image14"
                  className="img-fluid"
                />
              </div>
            </div>
            <div>
              <div
                className=" p-3 shadow-sm border border-2 border-light rounded-3 ms-lg-4 mt-2 ms-2 Trainingsresponsive-div text-center"
                style={{ alignContent: "center" }}
              >
                <img
                  src={CorporateTraining16}
                  alt="Corporate Training Image15"
                  className="img-fluid"
                />
              </div>
            </div>
            {/* <div>
              <div className=" p-3 shadow-sm border border-2 border-light rounded-3 ms-lg-4 mt-2 ms-2 Trainingsresponsive-div text-center">
                <img src={CorporateTraining17} alt="Corporate Training Image16" className="img-fluid" />
              </div>
            </div> */}
            <div>
              <div
                className=" p-3 shadow-sm border border-2 border-light rounded-3 ms-lg-4 mt-2 ms-2 Trainingsresponsive-div text-center"
                style={{ alignContent: "center" }}
              >
                <img
                  src={CorporateTraining18}
                  alt="Corporate Training Image17"
                  className="img-fluid"
                />
              </div>
            </div>
            <div>
              <div
                className=" p-3 shadow-sm border border-2 border-light rounded-3 ms-lg-4 mt-2 ms-2 Trainingsresponsive-div text-center"
                style={{ alignContent: "center" }}
              >
                <img
                  src={CorporateTraining19}
                  alt="Corporate Training Image18"
                  className="img-fluid"
                />
              </div>
            </div>
            <div>
              <div
                className=" p-3 shadow-sm border border-2 border-light rounded-3 ms-lg-4 mt-2 ms-2 Trainingsresponsive-div text-center"
                style={{ alignContent: "center" }}
              >
                <img
                  src={CorporateTraining20}
                  alt="Corporate Training Image19"
                  className="img-fluid"
                />
              </div>
            </div>
            <div>
              <div
                className=" p-3 shadow-sm border border-2 border-light rounded-3 ms-lg-4 mt-2 ms-2 Trainingsresponsive-div text-center"
                style={{ alignContent: "center" }}
              >
                <img
                  src={CorporateTraining21}
                  alt="Corporate Training Image20"
                  className="img-fluid"
                />
              </div>
            </div>
            <div>
              <div
                className=" p-3 shadow-sm border border-2 border-light rounded-3 ms-lg-4 mt-2 ms-2 Trainingsresponsive-div text-center"
                style={{ alignContent: "center" }}
              >
                <img
                  src={CorporateTraining22}
                  alt="Corporate Training Image21"
                  className="img-fluid"
                />
              </div>
            </div>
            <div>
              <div
                className=" p-3 shadow-sm border border-2 border-light rounded-3 ms-lg-4 mt-2 ms-2 Trainingsresponsive-div text-center"
                style={{ alignContent: "center" }}
              >
                <img
                  src={CorporateTraining23}
                  alt="Corporate Training Image22"
                  className="img-fluid"
                />
              </div>
            </div>
            <div>
              <div
                className=" p-3 shadow-sm border border-2 border-light rounded-3 ms-lg-4 mt-2 ms-2 Trainingsresponsive-div text-center"
                style={{ alignContent: "center" }}
              >
                <img
                  src={CorporateTraining24}
                  alt="Corporate Training Image23"
                  className="img-fluid"
                />
              </div>
            </div>
            <div>
              <div
                className=" p-3 shadow-sm border border-2 border-light rounded-3 ms-lg-4 mt-2 ms-2 Trainingsresponsive-div text-center"
                style={{ alignContent: "center" }}
              >
                <img
                  src={CorporateTraining25}
                  alt="Corporate Training Image24"
                  className="img-fluid"
                />
              </div>
            </div>
          </Slider>
        </div>

        <div className="container mt-5" id="Reviews">
          <div
            className={`row slide-in-left ${
              hasViewedSlide.sixthElement ? "animate-slide-in" : ""
            }`}
            ref={myRef6}
          >
            <div className="col-12 mt-5 text-center">
              <h1 style={{ color: "rgb(4, 18, 113)" }} className="fw-bold mt-3">
                Client Reviews
              </h1>
            </div>
            <div className="d-flex justify-content-center">
              <Slider
                {...settings3}
                className="col-12 col-md-8 col-lg-8 mt-4 mt-md-4 mt-lg-4 mt-xl-4 mt-xxl-4"
              >
                <div>
                  <div className="p-3 shadow-sm border border-2 border-light rounded-3 text-center reviewresponsive-div mt-xxl-5">
                    <img
                      src={Testimonial1}
                      alt="Review Image1"
                      className="img-fluid"
                    />
                  </div>
                </div>
                <div>
                  <div className="p-3 shadow-sm border border-2 border-light rounded-3 text-center reviewresponsive-div">
                    <img
                      src={Testimonial2}
                      alt="Review Image2"
                      className="img-fluid"
                    />
                  </div>
                </div>
                <div>
                  <div className="p-3 shadow-sm border border-2 border-light rounded-3 text-center reviewresponsive-div">
                    <img
                      src={Testimonial3}
                      alt="Review Image3"
                      className="img-fluid"
                    />
                  </div>
                </div>
                <div>
                  <div className="p-3 shadow-sm border border-2 border-light rounded-3 text-center reviewresponsive-div">
                    <img
                      src={Testimonial4}
                      alt="Review Image4"
                      className="img-fluid"
                    />
                  </div>
                </div>
                <div>
                  <div className="p-3 shadow-sm border border-2 border-light rounded-3 text-center reviewresponsive-div">
                    <img
                      src={Testimonial5}
                      alt="Review Image5"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>

        <div className="container mt-5 " id="learner">
          <div className="m-0 p-0 mt-5 border border-white">
          <div
            className={`row p-3 slide-in-left mt-5 align-items-center border border-light  shadow ${
              hasViewedSlide.seventhElement ? "animate-enquire" : ""
            }`}
            ref={myRef7}
          >
           
            <div className="col-12 col-lg-6 mt-4 mt-lg-4 mt-xxl-0 mb-lg-3 mb-xl-3 mb-xxl-3 justify-content-center border border-white ps-5">
              <h1 className="text-start fw-bold" style={{color:"#041271"}}>Enquire Now
              </h1>
              <p className="text-start mt-3">
              Are you ready to transform your workforce? Our customised corporate training programmes can improve your team's skills, increase productivity, and nurture leadership. Contact our Training Solutions Specialists today!
              </p>
              <button
                className="mt-xxl-5 btn btn-lg text-center text-white Enquirebutton"
                style={{ background: "#0d278e" }}
                onClick={() => {
                  window.location.href = "#"; // Simulate href="#" behavior
                }}
              >
                Enquire Now
              </button>
            </div>
            <div className="col-12 col-lg-6 hover-scale2 mt-3 mt-lg-5 mt-xl-5 mt-xxl-5 text-center">
              <img
                src={Enquire}
                alt="Award Image"
                className="img-fluid rounded-3 Enquire-img "
                style={{width:"60%"}}
              />
            </div>
          </div>
          </div>
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

         

            <div className="col-12 col-md-12 col-lg-2 mt-3 mt-md-3 text-center mt-lg-2 text-lg-center ">
              <a href="#Employee" className="footer-link">
                <span>Empowered Employees</span>
              </a>
            </div>

            <div className="col-12 col-md-12 col-lg-2 mt-3 mt-md-3 text-center mt-lg-2 text-lg-center">
              <a href="#Training" className="footer-link">
                <span>Corporate Training Programs</span>
              </a>
            </div>

            <div className="col-12 col-md-12 col-lg-2 mt-3 mt-md-3 text-center mt-lg-2 text-lg-center">
              <a href="#Awards" className="footer-link">
                <span>Awards & Recognition</span>
              </a>
            </div>

            <div className="col-12 col-md-12 col-lg-2 mt-3 mt-md-3 text-center mt-lg-2 text-lg-center">
              <a href="#Reviews" className="footer-link">
                <span>Client Reviews</span>
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
