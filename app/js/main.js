const Day = document.querySelectorAll('.days .days__item .item__title');
Arr = {

    "para_week": {
        "Days": [{
                "Monday": {
                    "8:15 - 10:00": "SYSTEMY MAGAZYNOWE (LB)",
                    "10:15 - 12:00": "BADANIA OPERACYJNE I TEORIA OPTYMALIZACJI (LB)",
                    "12:15 - 14:00": "BADANIA MARKETINGOWE W LOGISTYCE (ĆW)",
                    "14:15 - 16:00": "MODELOWANIE PROCESÓW I SYSTEMÓW LOGISTYCZNYCH (LB)",
                    "16:15 - 18:00": "BADANIA MARKETINGOWE W LOGISTYCE (ĆW)",
                    "18:15 - 20:00": "2BADANIA MARKETINGOWE W LOGISTYCE (ĆW)"



                }
            },
            {
                "Tuesday": {
                    "8:15 - 10:00": "SYSTEMY MAGAZYNOWE (LB)",
                    "10:15 - 12:00": "BADANIA OPERACYJNE I TEORIA OPTYMALIZACJI (LB)",
                    "12:15 - 14:00": "BADANIA MARKETINGOWE W LOGISTYCE (ĆW)",
                    "14:15 - 16:00": "MODELOWANIE PROCESÓW I SYSTEMÓW LOGISTYCZNYCH (LB)",
                    "16:15 - 18:00": "BADANIA MARKETINGOWE W LOGISTYCE (ĆW)",
                    "18:15 - 20:00": "2BADANIA MARKETINGOWE W LOGISTYCE (ĆW)"



                }
            },
            {
                "Wednesday": {
                    "8:15 - 10:00": "SYSTEMY MAGAZYNOWE (LB)",
                    "10:15 - 12:00": "BADANIA OPERACYJNE I TEORIA OPTYMALIZACJI (LB)",
                    "12:15 - 14:00": "BADANIA MARKETINGOWE W LOGISTYCE (ĆW)",
                    "14:15 - 16:00": "MODELOWANIE PROCESÓW I SYSTEMÓW LOGISTYCZNYCH (LB)",
                    "16:15 - 18:00": "BADANIA MARKETINGOWE W LOGISTYCE (ĆW)",
                    "18:15 - 20:00": "2BADANIA MARKETINGOWE W LOGISTYCE (ĆW)"


                }
            },
            {
                "Thursday": {
                    "8:15 - 10:00": "SYSTEMY MAGAZYNOWE (LB)",
                    "10:15 - 12:00": "BADANIA OPERACYJNE I TEORIA OPTYMALIZACJI (LB)",
                    "12:15 - 14:00": "BADANIA MARKETINGOWE W LOGISTYCE (ĆW)",
                    "14:15 - 16:00": "MODELOWANIE PROCESÓW I SYSTEMÓW LOGISTYCZNYCH (LB)",
                    "16:15 - 18:00": "BADANIA MARKETINGOWE W LOGISTYCE (ĆW)",
                    "18:15 - 20:00": "2BADANIA MARKETINGOWE W LOGISTYCE (ĆW)"


                }
            },
            {
                "Friday": {
                    "8:15 - 10:00": "SYSTEMY MAGAZYNOWE (LB)",
                    "10:15 - 12:00": "BADANIA OPERACYJNE I TEORIA OPTYMALIZACJI (LB)",
                    "12:15 - 14:00": "BADANIA MARKETINGOWE W LOGISTYCE (ĆW)",
                    "14:15 - 16:00": "MODELOWANIE PROCESÓW I SYSTEMÓW LOGISTYCZNYCH (LB)",
                    "16:15 - 18:00": "BADANIA MARKETINGOWE W LOGISTYCE (ĆW)",
                    "18:15 - 20:00": "2BADANIA MARKETINGOWE W LOGISTYCE (ĆW)"
                }
            }
        ]
    },
    "Niepara_week": {
        "Days": [{
                "Monday": {
                    "8:15 - 10:00": "SYSTEMY MAGAZYNOWE (LB)",
                    "10:15 - 12:00": "SYSTEMY MAGAZYNOWE (W)",
                    "12:15 - 14:00": "SYSTEMY MAGAZYNOWE (W)",
                    "14:15 - 16:00": "SYSTEMY MAGAZYNOWE (W)",
                    "16:15 - 18:00": "SYSTEMY MAGAZYNOWE (W)",
                    "18:15 - 20:00": "SYSTEMY MAGAZYNOWE (W)"
                }
            },
            {
                "Tuesday": {
                    "8:15 - 10:00": "SYSTEMY MAGAZYNOWE (LB)",
                    "10:15 - 12:00": "SYSTEMY MAGAZYNOWE (W)",
                    "12:15 - 14:00": "SYSTEMY MAGAZYNOWE (W)",
                    "14:15 - 16:00": "SYSTEMY MAGAZYNOWE (W)",
                    "16:15 - 18:00": "SYSTEMY MAGAZYNOWE (W)",
                    "18:15 - 20:00": "SYSTEMY MAGAZYNOWE (W)"
                }
            },
            {
                "Wednesday": {
                    "8:15 - 10:00": "SYSTEMY MAGAZYNOWE (LB)",
                    "10:15 - 12:00": "SYSTEMY MAGAZYNOWE (W)",
                    "12:15 - 14:00": "SYSTEMY MAGAZYNOWE (W)",
                    "14:15 - 16:00": "SYSTEMY MAGAZYNOWE (W)",
                    "16:15 - 18:00": "SYSTEMY MAGAZYNOWE (W)",
                    "18:15 - 20:00": "SYSTEMY MAGAZYNOWE (W)"
                }
            },
            {
                "Thursday": {
                    "8:15 - 10:00": "SYSTEMY MAGAZYNOWE (LB)",
                    "10:15 - 12:00": "SYSTEMY MAGAZYNOWE (W)",
                    "12:15 - 14:00": "SYSTEMY MAGAZYNOWE (W)",
                    "14:15 - 16:00": "SYSTEMY MAGAZYNOWE (W)",
                    "16:15 - 18:00": "SYSTEMY MAGAZYNOWE (W)",
                    "18:15 - 20:00": "SYSTEMY MAGAZYNOWE (W)"
                }
            },
            {
                "Friday": {
                    "8:15 - 10:00": "SYSTEMY MAGAZYNOWE (LB)",
                    "10:15 - 12:00": "SYSTEMY MAGAZYNOWE (W)",
                    "12:15 - 14:00": "SYSTEMY MAGAZYNOWE (W)",
                    "14:15 - 16:00": "SYSTEMY MAGAZYNOWE (W)",
                    "16:15 - 18:00": "SYSTEMY MAGAZYNOWE (W)",
                    "18:15 - 20:00": "SYSTEMY MAGAZYNOWE (W)"
                }
            }
        ]
    },
    'weeks': {
        "para": [19.04, 20.04, 21.04, 22.04, 23.04],
        "niepara": [26.04, 27.04, 28.04, 29.04, 30.04]
    }


}
const hours = document.querySelectorAll('.days .lists .houers li');
const lessons = document.querySelectorAll('.days .lists .lessons li');

//Создаю функцию которая берет даные о днях с базы и присваивает дни в заголовки ДЕНЬ карточек
var Days = [];
var DaysKeys = [];

// Парная неделя 
function Even(){
    function SetDAYS() {
        for (var i = 0; i < Day.length; i++) {
            Days.push(Arr.para_week.Days[i])
        };
    
        for (var k = 0; k < Days.length; k++) {
            DaysKeys.push(Object.keys(Days[k])[0])
        };
    
        for (var l = 0; l < Day.length; l++) {
            Day[l].textContent = DaysKeys[l];
        };
    };
    // визиваю функцию присвоение дней 
    SetDAYS();
    
    
    
    //Создаю функцию которая берет даные о часах и расписании с базы и присваивает часы и расписание в карточки
    
    function SetHours() {
        var HoursKeys = [];
        for (var j = 0; j < Days.length; j++) {
            HoursKeys.push(Object.values(Days[j])[0]);
        };
    
        var DaysHoursValues = [];
        for (var h = 0; h < HoursKeys.length; h++) {;
            DaysHoursValues.push(Object.keys(HoursKeys[h]));
        };
    
        var DaysHoursValuesString = [];
        for (var z = 0; z < DaysHoursValues.length; z++) {
            for (var h = 0; h < DaysHoursValues[z].length; h++)
                DaysHoursValuesString.push(DaysHoursValues[z][h]);
        };
    
        for (var x = 0; x < hours.length; x++) {
            hours[x].textContent = DaysHoursValuesString[x];
        };
    
        // получаем расписание и присваиваем значания с базы к карточкам на сайте 
        var lessonsINdays = [];
        for (var b = 0; b < HoursKeys.length; b++) {;
            lessonsINdays.push(Object.values(HoursKeys[b]));
    
        };
    
        var lessonsINdaysString = [];
        for (var z = 0; z < lessonsINdays.length; z++) {
            for (var h = 0; h < lessonsINdays[z].length; h++)
                lessonsINdaysString.push(lessonsINdays[z][h]);
        };
    
    
        for (var c = 0; c < lessons.length; c++) {
            lessons[c].textContent = lessonsINdaysString[c];
        };
    };
    // визиваю функцию присвоение часов и расписания
    SetHours();


} 


// Не парная неделя 
function Odd(){
    function SetDAYS() {
        for (var i = 0; i < Day.length; i++) {
            Days.push(Arr.Niepara_week.Days[i])
        };
    
        for (var k = 0; k < Days.length; k++) {
            DaysKeys.push(Object.keys(Days[k])[0])
        };
    
        for (var l = 0; l < Day.length; l++) {
            Day[l].textContent = DaysKeys[l];
        };
    };
    // визиваю функцию присвоение дней 
    SetDAYS();
    
    
    
    //Создаю функцию которая берет даные о часах и расписании с базы и присваивает часы и расписание в карточки
    
    function SetHours() {
        var HoursKeys = [];
        for (var j = 0; j < Days.length; j++) {
            HoursKeys.push(Object.values(Days[j])[0]);
        };
    
        var DaysHoursValues = [];
        for (var h = 0; h < HoursKeys.length; h++) {;
            DaysHoursValues.push(Object.keys(HoursKeys[h]));
        };
    
        var DaysHoursValuesString = [];
        for (var z = 0; z < DaysHoursValues.length; z++) {
            for (var h = 0; h < DaysHoursValues[z].length; h++)
                DaysHoursValuesString.push(DaysHoursValues[z][h]);
        };
    
        for (var x = 0; x < hours.length; x++) {
            hours[x].textContent = DaysHoursValuesString[x];
        };
    
        // получаем расписание и присваиваем значания с базы к карточкам на сайте 
        var lessonsINdays = [];
        for (var b = 0; b < HoursKeys.length; b++) {;
            lessonsINdays.push(Object.values(HoursKeys[b]));
    
        };
    
        var lessonsINdaysString = [];
        for (var z = 0; z < lessonsINdays.length; z++) {
            for (var h = 0; h < lessonsINdays[z].length; h++)
                lessonsINdaysString.push(lessonsINdays[z][h]);
        };
    
    
        for (var c = 0; c < lessons.length; c++) {
            lessons[c].textContent = lessonsINdaysString[c];
        };
    };
    // визиваю функцию присвоение часов и расписания
    SetHours();
}


var date = new Date();
var n = date.getDay();
var options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
};
var CurrentDay = date.toLocaleString("en", options);

var Monday = document.querySelector(".days__item[data-day='1'] "),
    Tuesday = document.querySelector(".days__item[data-day='2'] "),
    Wednesday = document.querySelector(".days__item[data-day='3'] "),
    Thursday = document.querySelector(".days__item[data-day='4'] "),
    Friday = document.querySelector(".days__item[data-day='5'] ");
if (n == 6) {
    Monday.classList.add("curent");
    document.querySelector(".days__item[data-day='1'] .item__title ").innerHTML = "Today is " + document.querySelector(".days__item[data-day='1'] .item__title ").innerHTML + " " + "(" + CurrentDay + ")";
} else if (n == 2) {
    Tuesday.classList.add("curent");
    document.querySelector(".days__item[data-day='2'] .item__title ").innerHTML = "Today is " + document.querySelector(".days__item[data-day='2'] .item__title ").innerHTML + " " + "(" + CurrentDay + ")";
} else if (n == 3) {
    Wednesday.classList.add("curent");
    document.querySelector(".days__item[data-day='3'] .item__title ").innerHTML = "Today is " + document.querySelector(".days__item[data-day='3'] .item__title ").innerHTML + " " + "(" + CurrentDay + ")";
} else if (n == 4) {
    Thursday.classList.add("curent");
    document.querySelector(".days__item[data-day='4'] .item__title ").innerHTML = "Today is " + document.querySelector(".days__item[data-day='4'] .item__title ").innerHTML + " " + "(" + CurrentDay + ")";
} else if (n == 5) {
    Friday.classList.add("curent");
    document.querySelector(".days__item[data-day='5'] .item__title ").innerHTML = "Today is " + document.querySelector(".days__item[data-day='5'] .item__title ").innerHTML + " " + "(" + CurrentDay + ")";
};

document.querySelector(".days__item[data-day='1'] .item__title ").style.color = '#148da0';
document.querySelector(".days__item[data-day='2'] .item__title ").style.color = '#609c54';
document.querySelector(".days__item[data-day='3'] .item__title ").style.color = '#c87c65';
document.querySelector(".days__item[data-day='4'] .item__title ").style.color = '#f5743a';
document.querySelector(".days__item[data-day='5'] .item__title ").style.color = '#b470a1';


//Проверяем какой день месяц и год


var date2 = new Date();

var options = {
    day: 'numeric',
    month: 'numeric',
};
var DayActualy = date2.toLocaleString("ru", options);
var DayActualyNumb = Number(DayActualy);
var EvenWeek = Arr.weeks.para;

for (i in EvenWeek) {
    if (DayActualyNumb == EvenWeek[i]) { Even();
    document.querySelector('.schedul__blok .title').innerHTML = "Even Week";
    } else { Odd();
        document.querySelector('.schedul__blok .title').innerHTML = "Odd Week" }
}