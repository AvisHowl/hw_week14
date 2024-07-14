const grades = Array.from(
	{ length: 12 },
	() => Math.floor(Math.random() * 100) + 1
);
console.log(grades);

let gradeSum = 0;
grades.forEach(function (num) {
	gradeSum += num;
});
const medianGrade = Math.floor(gradeSum / grades.length);
console.log(medianGrade);

const maxGrade = Math.max(...grades);
console.log(maxGrade);

const minGrade = Math.min(...grades);
console.log(minGrade);

const passedGrade = grades.filter((num) => {
	return num >= 60;
});
const otherGrade = grades.filter((num) => {
	return num < 60;
});
console.log(passedGrade);
console.log(otherGrade);

const notPassedGrade = grades.filter((num) => {
	return num < 60;
});
const otherGrade2 = grades.filter((num) => {
	return num >= 60;
});
console.log(notPassedGrade);
console.log(otherGrade2);

const strGrade = grades.map((item) => {
	if (item >= 80 && item <= 100) {
		return "A";
	} else if (item >= 60 && item <= 79) {
		return "B";
	} else if (item >= 40 && item <= 59) {
		return "C";
	} else if (item >= 20 && item <= 39) {
		return "D";
	} else {
		return "E";
	}
});
console.log(strGrade);
