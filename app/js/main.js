

const Day = document.querySelectorAll('.days .days__item .item__title');
Arr = {
    
    "para_week":{"Days":[
       {
          "Monday":{
             "8.1":"SYSTEMY MAGAZYNOWE (LB)",
             "10.1":"BADANIA OPERACYJNE I TEORIA OPTYMALIZACJI (LB)",
             "12.1":"BADANIA MARKETINGOWE W LOGISTYCE (ĆW)",
             "14.1":"MODELOWANIE PROCESÓW I SYSTEMÓW LOGISTYCZNYCH (LB)"
          }
       },
       {
          "Tuesday":{
             "8.1":"",
             "10.1":"BADANIA OPERACYJNE I TEORIA OPTYMALIZACJI (W)",
             "12.1":"SEMINARIUM MAGISTERSKIE (S)",
             "14.1":""
          }
       },
       {
          "Wednesday":{
             
          }
       },
       {
          "Thursday":{
             "13.1":"JĘZYK ANGIELSK"
          }
       },
       {
          "Friday":{
             "8.1":"ZARZĄDZANIE PROJEKTEM (W"
          }
       }
    ]},
    "Niepara_week":{"Days":[
     {
        "Monday":{
           "8.1":"",
           "10.1":"",
           "12.1":"ZARZĄDZANIE PRZEDSIĘBIORSTWEM TRANSPORTOWYM (ĆW)",
           "14.1":"MODELOWANIE PROCESÓW I SYSTEMÓW LOGISTYCZNYCH (LB)"
        }
     },
     {
        "Tuesday":{
           "8.1":"SYSTEMY MAGAZYNOWE (W)",
           "10.1":"BADANIA MARKETINGOWE W LOGISTYCE (W)",
           "12.1":"SEMINARIUM MAGISTERSKIE (S)",
           "14.1":"MODELOWANIE PROCESÓW I SYSTEMÓW LOGISTYCZNYCH (W)"
        }
     },
     {
        "Wednesday":{
           
        }
     },
     {
        "Thursday":{
           "13.1":"JĘZYK ANGIELSK"
        }
     },
     {
        "Friday":{
           "8.1":"ZARZĄDZANIE PRZEDSIĘBIORSTWEM TRANSPORTOWYM (W)",
           "10.1":"ZARZĄDZANIE PROJEKTEM (ĆW)",
           "12.1":"",
           "14.1":""
        }
     }
  ]}
 
}
//  Day[i].innerHTML = 'ss';
var Dima = ['s','rr','eeee'];


for (var i =0 ; i < Day.length; i++){
    for(var k =0; k<Arr.para_week.Days.length; k++){
        Day[i].innerHTML = Arr.para_week.Days[k];
    }
    
};


