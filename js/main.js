const Day = document.querySelectorAll('.days .days__item .item__title');
const hours = document.querySelectorAll('.days .lists .houers li');
const lessons = document.querySelectorAll('.days .lists .lessons li');

fetch('js/ODDschedule.json')
    .then((response) => {
        return response.json();
    })
    .then((Arr) => {

        var Days = [];
        var DaysKeys = [];
        // Парная неделя для первой группы 431a
        function EvenFirstGroupSubgroup_first() {
            function SetDAYS() {
                for (var i = 0; i < Day.length; i++) {
                    Days.push(Arr.Groups.first.subgroup_first.para_week.Days[i])
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
        // Непарная неделя для первой группы
        function OddFirstGroupSubgroup_first() {
            function SetDAYS() {
                for (var i = 0; i < Day.length; i++) {
                    Days.push(Arr.Groups.first.subgroup_first.Niepara_week.Days[i])
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
        };

        // Парная неделя для первой подгруппы 431b
        function EvenFirstGroupSubgroup_second() {
            function SetDAYS() {
                for (var i = 0; i < Day.length; i++) {
                    Days.push(Arr.Groups.first.subgroup_second.para_week.Days[i])
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
        // Не парная неделя для первой подгруппы
        function OddFirstGroupFirstSubgroup() {
            function SetDAYS() {
                for (var i = 0; i < Day.length; i++) {
                    Days.push(Arr.Groups.first.subgroup_second.Niepara_week.Days[i])
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
        };

        // Парная неделя для второй  группы 432a
        function EvenSecondGroupSubgroup_first() {
            function SetDAYS() {
                for (var i = 0; i < Day.length; i++) {
                    Days.push(Arr.Groups.second.subgroup_first.para_week.Days[i])
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
        // Непарная неделя для второй группы
        function OddSecondGroupSubgroup_first() {
            function SetDAYS() {
                for (var i = 0; i < Day.length; i++) {
                    Days.push(Arr.Groups.second.subgroup_first.Niepara_week.Days[i])
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
        };

        // Парная неделя для второй подгруппы 432b
        function EvenSecondGroupSubgroup_second() {
            function SetDAYS() {
                for (var i = 0; i < Day.length; i++) {
                    Days.push(Arr.Groups.second.subgroup_second.para_week.Days[i])
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
        // Непарная неделя для второй  подгруппы
        function OddSecondGroupSubgroup_second() {
            function SetDAYS() {
                for (var i = 0; i < Day.length; i++) {
                    Days.push(Arr.Groups.second.subgroup_second.Niepara_week.Days[i])
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
        };



        var date2 = new Date();

        var options = {
            day: 'numeric',
            month: 'numeric',
        };
        var DayActualy = date2.toLocaleString("ru", options);
        var DayActualyNumb = Number(DayActualy);
        var EvenWeek = Arr.weeks.para;



        const BtnFirst = document.querySelector('.butons_filtr').firstElementChild;
        const BtnFirstSubgroup = document.querySelector('.butons_filtr .groupFirst__subgroup');
        const BtnLastSubgroup = document.querySelector('.butons_filtr .groupSecond');
        const BtnLast = document.querySelector('.butons_filtr').lastElementChild;



        var Monday = document.querySelector(".days__item[data-day='1'] "),
            Tuesday = document.querySelector(".days__item[data-day='2'] "),
            Wednesday = document.querySelector(".days__item[data-day='3'] "),
            Thursday = document.querySelector(".days__item[data-day='4'] "),
            Friday = document.querySelector(".days__item[data-day='5'] ");

        const BtnsGroup = document.querySelectorAll(".butons_filtr input")



        BtnFirst.addEventListener("click", function(e) {
            BtnsGroup.forEach(element => {
                element.classList.remove("current")
            });
            Days.length = 0;
            Monday.style.opacity = "1";
            Tuesday.style.opacity = "1";
            Wednesday.style.opacity = "1";
            Thursday.style.opacity = "1";
            Friday.style.opacity = "1";
            var EvenWeek = Arr.weeks.para;
            var OddWeek = Arr.weeks.niepara;
            var Flag = EvenWeek.indexOf(DayActualyNumb) != -1;
            var OddFlag = OddWeek.indexOf(DayActualyNumb) != -1;
            BtnsGroup[0].classList.add("current")
            if (Flag == true) {
                EvenFirstGroupSubgroup_first();
                document.querySelector('.schedul__blok .title').innerHTML = "Even Week" + " " + BtnFirst.value + " " + "Group";
            };
            if (OddFlag == true) {
                OddFirstGroupSubgroup_first();
                document.querySelector('.schedul__blok .title').innerHTML = "Odd Week" + " " + BtnFirst.value + " " + "Group";
            };

            var date = new Date();
            var n = date.getDay();
            var options = {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
            };
            var CurrentDay = date.toLocaleString("en", options);


            if (n == 1) {
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



        });
        BtnFirstSubgroup.addEventListener("click", function(e) {
            BtnsGroup.forEach(element => {
                element.classList.remove("current")
            });
            BtnsGroup[1].classList.add("current")
            Days.length = 0;
            Monday.style.opacity = "1";
            Tuesday.style.opacity = "1";
            Wednesday.style.opacity = "1";
            Thursday.style.opacity = "1";
            Friday.style.opacity = "1";
            var EvenWeek = Arr.weeks.para;
            var OddWeek = Arr.weeks.niepara;
            var Flag = EvenWeek.indexOf(DayActualyNumb) != -1;
            var OddFlag = OddWeek.indexOf(DayActualyNumb) != -1;

            if (Flag == true) {
                EvenFirstGroupSubgroup_second();
                document.querySelector('.schedul__blok .title').innerHTML = "Even Week" + " " + BtnFirstSubgroup.value + " " + "Group";

            };
            if (OddFlag == true) {
                OddFirstGroupFirstSubgroup();
                document.querySelector('.schedul__blok .title').innerHTML = "Odd Week" + " " + BtnFirstSubgroup.value + " " + "Group";

            };

            var date = new Date();
            var n = date.getDay();
            var options = {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
            };
            var CurrentDay = date.toLocaleString("en", options);


            if (n == 1) {
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
        });
        BtnLastSubgroup.addEventListener("click", function(e) {
            BtnsGroup.forEach(element => {
                element.classList.remove("current")
            });
            BtnsGroup[2].classList.add("current")
            Days.length = 0;
            Monday.style.opacity = "1";
            Tuesday.style.opacity = "1";
            Wednesday.style.opacity = "1";
            Thursday.style.opacity = "1";
            Friday.style.opacity = "1";
            var date2 = new Date();

            var options = {
                day: 'numeric',
                month: 'numeric',
            };
            var DayActualy = date2.toLocaleString("ru", options);
            var DayActualyNumb = Number(DayActualy);
            var EvenWeek = Arr.weeks.para;
            var OddWeek = Arr.weeks.niepara;

            var Flag = EvenWeek.indexOf(DayActualyNumb) != -1;
            var FlagOdd = OddWeek.indexOf(DayActualyNumb) != -1;
            if (Flag == true) {
                EvenSecondGroupSubgroup_first();
                document.querySelector('.schedul__blok .title').innerHTML = "Even Week" + " " + BtnLastSubgroup.value + " " + "Group";
            };
            if (FlagOdd == true) {
                OddSecondGroupSubgroup_first();
                document.querySelector('.schedul__blok .title').innerHTML = "Odd Week" + " " + BtnLastSubgroup.value + " " + "Group";
            };


            var date = new Date();
            var n = date.getDay();
            var options = {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
            };
            var CurrentDay = date.toLocaleString("en", options);


            if (n == 1) {
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

        });
        BtnLast.addEventListener("click", function(e) {
            BtnsGroup.forEach(element => {
                element.classList.remove("current")
            });
            BtnsGroup[3].classList.add("current")
            Days.length = 0;

            Monday.style.opacity = "1";
            Tuesday.style.opacity = "1";
            Wednesday.style.opacity = "1";
            Thursday.style.opacity = "1";
            Friday.style.opacity = "1";
            var date2 = new Date();

            var options = {
                day: 'numeric',
                month: 'numeric',
            };
            // BtnLast.classList.add("current")
            var DayActualy = date2.toLocaleString("ru", options);
            var DayActualyNumb = Number(DayActualy);
            var EvenWeek = Arr.weeks.para;
            var OddWeek = Arr.weeks.niepara;

            var Flag = EvenWeek.indexOf(DayActualyNumb) != -1;
            var FlagOdd = OddWeek.indexOf(DayActualyNumb) != -1;
            if (Flag == true) {
                EvenSecondGroupSubgroup_second();
                document.querySelector('.schedul__blok .title').innerHTML = "Even Week" + " " + BtnLast.value + " " + "Group";

            };
            if (FlagOdd == true) {
                OddSecondGroupSubgroup_second();
                document.querySelector('.schedul__blok .title').innerHTML = "Odd Week" + " " + BtnLast.value + " " + "Group";

            };



            var date = new Date();
            var n = date.getDay();
            var options = {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
            };
            var CurrentDay = date.toLocaleString("en", options);


            if (n == 1) {
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

        });


    });
document.querySelector(".days__item[data-day='1'] .item__title ").style.color = '#148da0';
document.querySelector(".days__item[data-day='2'] .item__title ").style.color = '#609c54';
document.querySelector(".days__item[data-day='3'] .item__title ").style.color = '#c87c65';
document.querySelector(".days__item[data-day='4'] .item__title ").style.color = '#f5743a';
document.querySelector(".days__item[data-day='5'] .item__title ").style.color = '#b470a1';



var btn = document.createElement("BUTTON");
btn.style.cssText = `
                    height : 50px;
                    width : 50px;
                    background-color: red;
                    position: fixed;
                    right: 4%;
                    bottom: 2%;
                    opacity: 0;
                    transition: all 0.5s ease 0s;`;

document.querySelector(".schedul__blok").append(btn);

window.addEventListener('scroll', function(e) {
    if (this.pageYOffset > 60) {
        btn.style.opacity = "1"
    };
    if (this.pageYOffset < 60) {
        btn.style.opacity = "0"
    };
});

btn.addEventListener('click', function(e) {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

const windowOuterHeight = window.outerHeight