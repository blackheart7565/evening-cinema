import classNames from "classnames";
import React, { useRef, useState } from "react";
import { Autoplay, FreeMode, Thumbs } from 'swiper/modules';
import { Swiper, SwiperClass, SwiperRef, SwiperSlide } from "swiper/react";

import { convertMinuteToMinuteAndHour } from "../../../utils/common";
import { CircleRating } from "../../element/CircleRating/CircleRating";

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

interface IHeroProps { }

const pathNew = "/bg";
const pathPoster = "/img";

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
	const autoplaySwiperDelay: number = 25_00_000;
	const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);
	const mediaInfo = {
		name: "Поднятие уровня в одиночку",
		release: "2024",
		rating: 9.1,
		duration: 81,
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis iste modi ipsam sed sunt qui distinctio. Dicta facere praesentium, ab quaerat maiores, nam vitae ipsa vel velit molestiae accusantium dolorem!",
	};
	const { minute, hour } = convertMinuteToMinuteAndHour(mediaInfo.duration);
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

				<div className="home__hero-content">
					<h1 className="home__hero-name">{mediaInfo.name}</h1>
					<div className="home__hero-details">
						<div className="home__hero-release">{mediaInfo.release}</div>
						<span></span>
						<div className="home__hero-duration">
							<span>{hour}h</span>
							<span>{minute}m</span>
						</div>
						<span></span>
						<div className="home__hero-rating">
							<CircleRating size={45} value={mediaInfo.rating * 10} isRound={true} />
							<span className="home__hero-rating-number">{mediaInfo.rating}</span>
						</div>
					</div>
					<p className="home__hero-description">{mediaInfo.description}</p>
				</div>

				<div className="home__hero-inner">
					<Swiper
						ref={swiperNewRef}
						spaceBetween={10}
						freeMode={true}
						slidesPerView={2}
						breakpoints={{
							660: {
								slidesPerView: 4,
							},
							480: {
								slidesPerView: 3,
							}
						}}
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