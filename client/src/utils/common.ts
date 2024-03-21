
/**
 * @param minute
 *  Конвертирует минуты в формат
 *  @format  0 часов 0 минут  
 */
export const convertMinuteToMinuteAndHour = (minute: number) => {
	const h = Math.floor(minute / 60);
	const m = minute % 60;

	return {
		minute: m,
		hour: h,
	};
};


/**
 * 	Функция для отображения прогресса для circle 
 * @param value значения прогреса
 * @param radius радиус кола
 * @returns возвращает strokeDasharray и strokeDashoffset
 */
export const setCircleProgress = (value: number, radius: number) => {
	const circumference = 2 * Math.PI * radius;

	const strokeDasharray = circumference;
	const strokeDashoffset = circumference - value / 100 * circumference;

	return {
		strokeDasharray,
		strokeDashoffset,
	};
};