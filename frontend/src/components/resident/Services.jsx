import React, { useRef } from 'react';
import ac from './videos/ac.mp4';
import carpenter from './videos/carpenter.mp4';
import deepcleaning from './videos/deep_cleaning.mp4';
import electrician from './videos/electrician.mp4';
import furniture from './videos/furniture_assembly.mp4';
import inverter from './videos/inverter_service.mp4';
import plumber from './videos/plumber.mp4';
import pestcontrol from './videos/pest_control.mp4';
import painting from './videos/painting_and_proofing.mp4';
import nativepuri from './videos/native_water_purifier.mp4';
import { Link } from 'react-router-dom';

const Services = () => {
    const availableservices = [
        { id: 1, name: 'AC REPAIR', video: ac },
        { id: 2, name: 'PLUMBER', video: plumber},
        { id: 3, name: 'ELECTRICIAN', video: electrician },
        { id: 4, name: 'CARPENTER', video: carpenter},
        { id: 5, name: 'FURNITURE ASSEMBLY', video: furniture},
        { id: 6, name: 'NATIVE WATER PURIFIER REPAIRS', video: nativepuri },
        { id: 7, name: 'INVERTER REPAIR AND SERVICE', video: inverter},
        { id: 8, name: 'PAINTING AND PROOFING', video: painting},
        { id: 9, name: 'DEEP HOUSE CLEANING', video: deepcleaning },
        { id: 10, name: 'GENERAL PEST CONTROL ', video: pestcontrol},
    ];

    const VideoCard = ({ service }) => {
        const videoRef = useRef(null);

        const handleMouseEnter = () => {
            if (videoRef.current) {
                videoRef.current.play();
            }
        };

        const handleMouseLeave = () => {
            if (videoRef.current) {
                videoRef.current.pause();
                videoRef.current.currentTime = 0;
            }
        };

        return (
            <button
                key={service.id}
                className="flex flex-col items-center w-full h-52 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 overflow-hidden"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <div className="w-full h-40 flex items-center justify-center p-2">
                    <video
                        ref={videoRef}
                        className="max-w-full max-h-full object-contain"
                        muted
                        playsInline
                    >
                        <source src={service.video} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className="w-full flex items-center justify-center h-12 px-2">
                    <span className="font-semibold text-sm text-gray-800 text-center break-words">
                        {service.name}
                    </span>
                </div>
            </button>
        );
    };

    return (
        <div className="services px-4 md:px-10 lg:px-20 xl:px-36">
            
            <div className="w-full">
                <h2 className="text-2xl font-bold mb-6 text-center mt-5">Select Proffesional</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mx-auto max-w-7xl">
                    {availableservices.map((service) => (
                    <Link to="/resi/form">
                        <VideoCard key={service.id} service={service} />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Services;
