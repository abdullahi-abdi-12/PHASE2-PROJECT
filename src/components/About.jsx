import React from "react";
import img from "../assets/img/about.jpg";
import Button from "../layouts/Button";

const About = () => {
    return (
        <div className=" min-h-screen flex flex-col items-center justify-center lg:px-32 px-5 bg-backgroundColor">
            <h1 className=" font-semibold text-center text-4xl lg:mt-14 mt-24 mb-8">About Us</h1>

            <div className=" flex flex-col lg:flex-row items-center gap-5">
                <div className=" w-full lg:w-2/4">
                    <img className=" rounded-lg" src={img} alt="img" />
                </div>
                <div className=" w-full lg:w-2/4 p-4 space-y-3">
                    <h2 className=" font-semibold text-3xl">
                        What Makes Our Coffee Special?
                    </h2>
                    <p>
                        our coffee stands out for its exceptional quality, craftsmanship,
                         and commitment to sustainability and community. 
                        Each cup is a testament to our dedication to providing an 
                        exceptional coffee experience for our customers.
                    </p>
                    <p>
                    We strive to create a welcoming and inclusive coffee community 
                    where everyone feels valued and appreciated.
                     Whether you're a coffee aficionado or
                      just starting to explore the world of specialty coffee
                    </p>

                    <Button title="Learn More" />
                </div>
            </div>
        </div>
    );
};

export default About;
