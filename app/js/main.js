const Day = document.querySelectorAll('.days .days__item .item__title');
Arr = {

    "para_week": {
        "Days": [{
                "Monday": {
                    "8.1": "SYSTEMY MAGAZYNOWE (LB)",
                    "10.1": "BADANIA OPERACYJNE I TEORIA OPTYMALIZACJI (LB)",
                    "12.1": "BADANIA MARKETINGOWE W LOGISTYCE (ĆW)",
                    "14.1": "MODELOWANIE PROCESÓW I SYSTEMÓW LOGISTYCZNYCH (LB)"
                }
            },
            {
                "Tuesday": {
                    "8.1": "",
                    "10.1": "BADANIA OPERACYJNE I TEORIA OPTYMALIZACJI (W)",
                    "12.1": "SEMINARIUM MAGISTERSKIE (S)",
                    "14.1": ""
                }
            },
            {
                "Wednesday": {
                    "8.1": "",
                    "10.1": "",
                    "12.1": "",
                    "14.1": ""
                }
            },
            {
                "Thursday": {
                    "8.1": "",
                    "10.1": "",
                    "13.1": "JĘZYK ANGIELSK",
                    "15.1": ""
                }
            },
            {
                "Friday": {
                    "8.1": "ZARZĄDZANIE PROJEKTEM (W)",
                    "10.1": "",
                    "13.1": "",
                    "15.1": ""
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


//Создаю функцию которая берет даные о часах с базы и присваивает часы в карточки

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
};
// визиваю функцию присвоение часов
SetHours();