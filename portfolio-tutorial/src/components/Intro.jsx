import React from "react";

function Intro() {
    return (
        <div className="flex items-center 
                        justify-center 
                        flex-col text-center 
                        pt-20 pb-6">
            <h1 className="text-4xl md:text-7xl mb-1 dark:text-white
                            mb:mb-3 font-bold">Vlad Talimba</h1>
            <p className="text-base md:text-xl mb-3 font-medium">Full-stack Web Developer</p>
            <p className="text-sm max-w-xl mb-6 font-bold">
                A hardworking, results-driven individual, passionate about computers and information technology.
                I am an entry-level full-stack developer possessing professional experience in the field, skilled in front-end development using Vue and React, as well as back-end development with Nest and MongoDB. 
                I am also familiar with various other technologies and flexible when it comes to switching to something new.</p>
        </div>
    ) 
}

export default Intro;