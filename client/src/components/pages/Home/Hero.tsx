import classNames from "classnames";
import React, { useRef, useState } from "react";
import { Autoplay, FreeMode, Thumbs } from 'swiper/modules';
import { Swiper, SwiperClass, SwiperRef, SwiperSlide } from "swiper/react";

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

interface IHeroProps { }

const pathNew = "/bg";
const pathPoster = "/img";

const img = [
	"https://swiperjs.com/demos/images/nature-1.jpg",
	"https://swiperjs.com/demos/images/nature-2.jpg",
	"https://swiperjs.com/demos/images/nature-3.jpg",
	"https://swiperjs.com/demos/images/nature-4.jpg",
	"https://swiperjs.com/demos/images/nature-5.jpg",
	"https://swiperjs.com/demos/images/nature-6.jpg",
	"https://swiperjs.com/demos/images/nature-7.jpg",
	"https://swiperjs.com/demos/images/nature-8.jpg",
	"https://swiperjs.com/demos/images/nature-9.jpg",
	"https://swiperjs.com/demos/images/nature-10.jpg"
];
const postersImg = [
	`${pathNew}/1.jpg`,
	`${pathNew}/2.jpg`,
	`${pathNew}/3.jpg`,
	`${pathNew}/4.jpg`,
	`${pathNew}/5.jpg`,
	`${pathNew}/6.jpg`,
	`${pathNew}/7.jpg`,
	`${pathNew}/8.jpg`,
	`${pathNew}/9.jpg`,
	`${pathNew}/10.jpg`,
];
const newImg = [
	`${pathPoster}/1.jpg`,
	`${pathPoster}/2.jpg`,
	`${pathPoster}/3.jpg`,
	`${pathPoster}/4.jpg`,
	`${pathPoster}/5.jpg`,
	`${pathPoster}/6.jpg`,
	`${pathPoster}/7.jpg`,
	`${pathPoster}/8.jpg`,
	`${pathPoster}/9.jpg`,
	`${pathPoster}/10.jpg`,
];

export const Hero: React.FC<IHeroProps> = () => {
	const autoplaySwiperDelay: number = 2500;
	const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);
	const [mediaInfo, setMediaInfo] = useState({
		name: "Поднятие уровня в одиночку",
		year: "2024",
		rating: 9.1,
		time: 81,
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis iste modi ipsam sed sunt qui distinctio. Dicta facere praesentium, ab quaerat maiores, nam vitae ipsa vel velit molestiae accusantium dolorem!",
	});
	const swiperNewRef = useRef<SwiperRef | null>(null);

	const onSlideChange = () => {
		if (!swiperNewRef.current) return;
		const swiperInstance = swiperNewRef.current.swiper as SwiperClass;
		if (swiperInstance) {
			const isEnd = swiperInstance.isEnd;
			if (isEnd) {
				swiperInstance.autoplay.stop();
			} else {
				swiperInstance.autoplay.start();
			}
		}
	};

	return (
		<div
			className="home__hero"
		>
			<Swiper
				thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : undefined}
				controller={thumbsSwiper ? { control: thumbsSwiper } : undefined}
				modules={[FreeMode, Thumbs, Autoplay]}
				autoplay={{
					delay: autoplaySwiperDelay,
					disableOnInteraction: false,
				}}
				allowTouchMove={false}
				className={classNames("home__hero-swiper-poster")}
			>
				{postersImg.map((i, idx) => (
					<SwiperSlide
						key={idx}
						className={classNames("home__hero-swiper-poster-slide")}
					>
						<img
							src={i}
							alt="swiper-poster-img"
						/>
					</SwiperSlide>
				))}
			</Swiper>
			<div className="home__hero-wrapper">
				<div className="home__hero-inner">
					<Swiper
						ref={swiperNewRef}
						spaceBetween={10}
						slidesPerView={4}
						freeMode={true}
						watchSlidesProgress={true}
						modules={[FreeMode, Thumbs, Autoplay]}
						controller={thumbsSwiper ? { control: thumbsSwiper } : undefined}
						autoplay={{
							delay: autoplaySwiperDelay,
							disableOnInteraction: false,
						}}
						onSwiper={setThumbsSwiper}
						onSlideChange={onSlideChange}
						className={classNames("home__hero-swiper-new")}
					>
						{newImg.map((i, idx) => (
							<SwiperSlide
								key={idx}
								className={classNames("home__hero-swiper-new-slide")}
							>
								<img
									src={i}
									alt="swiper-poster-img"
								/>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div >
		</div >
	);
};