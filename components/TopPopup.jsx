import { useState } from 'react';
import { IoClose } from "react-icons/io5";
import Image from 'next/image';
import Link from 'next/link';

const TopPopup = () => {
    const [isVisible, setIsVisible] = useState(true);

    const handleClose = () => {
        setIsVisible(false);
    };

    return (
        <>
            {isVisible && (
                <div className="relative top-0 left-0 right-0 p-3 bg-[#1A1A1A] text-white text-center overflow-hidden w-full">
                    <div className='absolute top-0 right-0 left-0 w-full h-[60px]'>
                        <Image
                            src="/rrrepeat.svg"
                            alt="Abstract Texture"
                            fill
                            style={{ objectFit: "cover" }}

                        />
                    </div>
                    <div className='relative top-0 w-full left-0 right-0'>
                        <div className="flex justify-between items-center">
                            <div></div>
                            <p>✨Discover Your Dream Property with VivaTerra. <Link className="underline" href="/properties">Learn More</Link></p>

                            <IoClose onClick={handleClose} className='bg-[#262626] rounded-full p-2 text-4xl cursor-pointer' />

                        </div>
                    </div>


                </div>
            )}
        </>
    );
};

export default TopPopup;
