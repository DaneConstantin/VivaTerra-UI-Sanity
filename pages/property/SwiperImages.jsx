'client'
import { Thumbs, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useState } from 'react';
import { GoArrowRight, GoArrowLeft } from "react-icons/go";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/thumbs';
import Image from 'next/image';

const SwiperImages = ({ photo }) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(0);
    const photosToMap = photo && photo.data ? photo.data : [];
    return (
        <>{photosToMap ? (
            <>
                <div className="flex w-full md:max-w-[300px] bg-[#141414] rounded-full border border-[#262626] p-2 mx-auto items-center">
                    <button className="prev bg-[#1A1A1A] rounded-full"><GoArrowLeft className="text-5xl lg:text-6xl border border-[#262626] rounded-full p-2 lg:p-3" /></button>
                    <div className="flex swiper-custom-pagination w-full justify-center"></div>
                    <button className="next bg-[#1A1A1A] rounded-full"><GoArrowRight className="text-5xl lg:text-6xl border border-[#262626] rounded-full p-2 lg:p-3" /></button>
                </div >
                <Swiper
                    modules={[Thumbs, Pagination, Navigation]}
                    thumbs={{ swiper: thumbsSwiper }}
                    spaceBetween={30}
                    slidesPerView={1}
                    navigation={{
                        prevEl: '.prev',
                        nextEl: '.next',
                    }}
                    breakpoints={{
                        // when window width is >= 768px
                        720: {
                            slidesPerView: 2,
                        },

                    }}
                    pagination={{
                        clickable: true,
                        el: '.swiper-custom-pagination',
                    }}
                    className="flex w-full h-full min-h-[250px] my-6"
                >
                    {photosToMap.map((property) => {

                        return (
                            <SwiperSlide key={property.id} >
                                <div className="relative overflow-hidden aspect-ratio-video w-full min-h-[280px] sm:min-h-[360px] md:min-h-[320px] lg:min-h-[380px] xl:min-h-[480px] 2xl:min-h-[500px]">
                                    <Image
                                        src={`${property.attributes.url}`}
                                        alt=""
                                        fill
                                        style={{ objectFit: "cover" }}
                                        className="rounded-lg cursor-pointer"
                                    />
                                </div>
                            </SwiperSlide>
                        )
                    })}

                </Swiper>

                <Swiper
                    modules={[Thumbs]}
                    watchSlidesProgress
                    onSwiper={setThumbsSwiper}
                    slidesPerView={4}
                    breakpoints={{
                        // when window width is >= 751px
                        751: {
                            slidesPerView: 5,
                        },
                        1024: {
                            slidesPerView: 6,
                        },
                        1280: {
                            slidesPerView: 9,
                        },
                    }}
                    spaceBetween={10}
                    className="flex w-full bg-[#141414] rounded-lg border border-[#262626]"
                >
                    {photosToMap.map((property) => {
                        return (
                            <SwiperSlide key={property.id}>
                                <div className="relative overflow-hidden aspect-ratio-video h-[62px] md:h-[94px]">
                                    <Image
                                        src={`${property.attributes.formats.thumbnail.url}`}
                                        alt=""
                                        fill
                                        style={{ objectFit: "cover" }}
                                        className="rounded-lg cursor-pointer h-full"
                                    />
                                </div>

                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </>
        )
            :
            <SwiperSlide>
                <div className="relative overflow-hidden aspect-ratio-video w-full min-h-[280px] sm:min-h-[360px] md:min-h-[320px] lg:min-h-[380px] xl:min-h-[480px] 2xl:min-h-[500px]">
                    <Image
                        src='https://res.cloudinary.com/dfks8op0a/image/upload/v1708338024/VivaTerra/forSalePlaceholder_lacvd1.png'
                        alt=""
                        fill
                        style={{ objectFit: "cover" }}
                        className="rounded-lg cursor-pointer"
                    />
                </div>
            </SwiperSlide>
        }
        </>

    )
}
export default SwiperImages;