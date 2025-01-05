import React, { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";

function IntroCard() {
    const constantName = "hey, i'm kelvin";
    const [name, setName] = useState("")

    return (
        <div className="flex h-1/4 w-full justify-center align-center flex-col gap-5">
            <TypeAnimation
                sequence={[
                    'i\'m Kelvin.',
                    1000
                ]}
                className="font-mono font-bold text-4xl text-center md:text-6xl p-2"
            />
            <div className="flex justify-center">
                <p className="w-4/5 md:w-1/3 font-mono text-lg md:text-2xl text-center text-gray-200">
                    I'm an aspiring software engineer from Toronto Metropolitan University with experience in React web development.
                    <br /> <br />
                    Currently seeking 2025 internships.
                </p>

            </div>
        </div>
    );
}

export default IntroCard;
