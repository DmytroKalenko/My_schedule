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
                    "8.1": "",
                    "10.1": "",
                    "12.1": "ZARZĄDZANIE PRZEDSIĘBIORSTWEM TRANSPORTOWYM (ĆW)",
                    "14.1": "MODELOWANIE PROCESÓW I SYSTEMÓW LOGISTYCZNYCH (LB)"
                }
            },
            {
                "Tuesday": {
                    "8.1": "SYSTEMY MAGAZYNOWE (W)",
                    "10.1": "BADANIA MARKETINGOWE W LOGISTYCE (W)",
                    "12.1": "SEMINARIUM MAGISTERSKIE (S)",
                    "14.1": "MODELOWANIE PROCESÓW I SYSTEMÓW LOGISTYCZNYCH (W)"
                }
            },
            {
                "Wednesday": {

                }
            },
            {
                "Thursday": {
                    "13.1": "JĘZYK ANGIELSK"
                }
            },
            {
                "Friday": {
                    "8.1": "ZARZĄDZANIE PRZEDSIĘBIORSTWEM TRANSPORTOWYM (W)",
                    "10.1": "ZARZĄDZANIE PROJEKTEM (ĆW)",
                    "12.1": "",
                    "14.1": ""
                }
            }
        ]
    }

}
const hours = document.querySelectorAll('.days .lists .houers li');
const lessons = document.querySelectorAll('.days .lists .lessons li');
//Создаю функцию которая берет даные о днях с базы и присваивает дни в заголовки ДЕНЬ карточек
var Days = [];
var DaysKeys = [];

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