const pointData = JSON.stringify([
    { title: "2월 학습마일리지", point: 2, date: new Date("2022-03-02"), issued : true },
    { title: "3월 학습마일리지", point: 5, date: new Date("2022-04-02"), issued : true },
    { title: "4.26 헌혈", point: 3, date: new Date("2022-04-26"), issued : true },
    { title: "4월 기지강당 청소", point: 1, date: new Date("2022-04-28"), issued : true },
    { title: "4월 3초", point: 2, date: new Date("2022-04-28"), issued : true },
    { title: "4월 학습마일리지", point: 5, date: new Date("2022-04-28"), issued : true },
    { title: "5.9 생활관 제습기 이동", point: 1, date: new Date("2022-05-09"), issued : true },
    { title: "5월 야간기지방호", point: 3, date: new Date("2022-05-30"), issued : true },
    { title: "5월 기지강당 청소", point: 1, date: new Date("2022-05-30"), issued : true },
    { title: "5월 기지강당 청소", point: 1, date: new Date("2022-05-31"), issued : false },
    { title: "5월 학습마일리지", point: 5, date: new Date("2022-05-31"), issued : false },
    { title: "5월 3초", point: 1, date: new Date("2022-05-31"), issued : false },
]);
const usedPoint = 15;

export { pointData, usedPoint }