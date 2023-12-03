var ashwini =  {
    "astantry":"DDBDAC219A831EDAE0530201FD0A7402",
   "abihafee": "97A377517F8719C4E0530200FD0A0630",
   "punshsha": "CFC4A7541D75408AE0530200FD0A1FF9",
   "rrokumar": "97ACFDCEC1A95BA4E0530200FD0A891C",
   "yangpeng": "A3DADC039E201ACEE0530200FD0A6D3B",
   "khchaudh": "DD1CD6D320F76494E0530201FD0A0809",
   "ehanko": "97A37DACB2B01EE0E0530200FD0AEA11",
   "monijosh": "D21DD30854F40595E0530200FD0AABB7",
   "mamtaku": "DEF60BC91F773E20E0530201FD0A6576",
   "aparise": "97A36B90DAF12F26E0530200FD0AF076",
   "acarre": "97A30D044C102E6CE0530200FD0AD91A",
   "cdockter": "97A37DAC8B641EE0E0530200FD0AEA11",
   "crangasw": "97A36B9110B72F26E0530200FD0AF076",
   "rsakella": "97ACFDCEB5D55BA4E0530200FD0A891C",
   "podesai": "C48D5F1670E2487EE0530201FD0A7FAF",
   "shubhjha": "C48D60DF4AEB4BECE0530201FD0A8793",
   "sulnu": "C48D61A285524CDDE0530201FD0A6762",
   "arpatro": "CE5F87DF86E129A6E0530200FD0A2229",
    "gaurajpu": "C48D5CC3D6064306E0530201FD0AF129",
    "arsanghi":"C7C61A9129E51844E0530201FD0A7482",
    "ccsar":"97A37DAC962C1EE0E0530200FD0AEA11",
    "dhickey":"A3DADC0398961ACEE0530200FD0A6D3B",
    "pvassenk":"97A36B180C832E5EE0530200FD0A8B6C",
    "gbushell":"97A37DACB7FA1EE0E0530200FD0AEA11",
    
}
var nameMapping =  {
   "astantry":"Ashwini Tantry",
  "abihafee": "Abid Hafeez",
  "punshsha": "Puneet Sharma",
  "rrokumar": "Rohit Kumar",
  "yangpeng": "Yangyang Peng",
  "khchaudh": "Khalid Chaudhry",
  "ehanko": "Eric Hanko",
  "monijosh": "Monica Joshi",
  "mamtaku": "Mamta Kumari",
  "aparise": "Andrew Parise",
  "acarre": "Arthur Carre",
  "cdockter": "Caleb Dockter",
  "crangasw": "Chandramohan Rangaswamy",
  "rsakella": "Ravi Akella",
  "podesai": "Poorav Desai",
  "shubhjha": "Shubham Jha",
  "sulnu": "Sudhanshu LNU",
  "arpatro": "Arun Kiran Patro",
   "gaurajpu": "Gaurav Rajput",
   "arsanghi":"Archit Sanghi",
   "ccsar":"Christian Csar",
   "dhickey":"Dave Hickey",
   "pvassenk":"Phillip Vassenkov",
   "gbushell":"Garth Bushell",
   
}
function isAssignedLastWeek(pageCreatedOn) {
   const now = new Date();
   const weekDate =  new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
   if ( new Date(pageCreatedOn) >= weekDate) {
       return true
   } 
   else return false;

 }
 function isAssignedCurrentMonth(pageCreatedOn) {
   var [year, pageCreatedMonth] = pageCreatedOn.split('-'); 
   const date = new Date();
    var currentMonth =  date.getMonth() + 1;
     if(pageCreatedMonth == currentMonth){
       return true;
     }
     return false;
 }
 function isAssignedLastMonth(pageCreatedOn) {
   var [year, pageCreatedMonth] = pageCreatedOn.split('-'); 
   const date = new Date();
    var lastMonth =  date.getMonth();
     if(lastMonth == pageCreatedMonth){
       return true;
     }
     return false;
 }
 

var sleep = async (ms) => new Promise(done => setTimeout(done, ms));
var pageData = {};

async function getUsersNotificationData(){
   for(let key in ashwini){
       let count = 0;
       let desiredCount = 100;
       try {
      
           while(count<desiredCount) {
               let url = `https://ocean.ocs.oraclecloud.com/api/v1/users/${ashwini[key]}/notifications?limit=100&offset=0&sortBy=-createdOn`
               let result = await fetch(url).then(x => x.json());
               await sleep(200);
               console.log("got result for : ",key,  result.totalCount)
               desiredCount = result.totalCount;
               count = count+100;

               if(pageData[key]){
                   pageData[key]["items"].push(...result.items)
               } else {

                   pageData[key] = {items :  [...result.items], totalCount : result.totalCount};

               }

           }
      

       } catch(err) {
          console.log(err)
       }
 

   }
   return pageData;
}


var TotalPageCount = 0;
await  getUsersNotificationData().then((usersInfo)=>{

   var report = []
   for(let key in usersInfo){ 
    var items = usersInfo[key]["items"];
    var Engineer_Name = nameMapping[key]; 
    var Page_Recieved_Last_Week =  0;
    var Page_Recieved_This_Month = 0;
    var Page_Recieved_Last_month=0;
    let TotalCount = usersInfo[key]["totalCount"];
    TotalPageCount+=TotalCount;
    var link = `https://ocean.ocs.oraclecloud.com/user/${ashwini[key]}`;
    items.map(item => {

            
        Page_Recieved_Last_Week = isAssignedLastWeek(item.createdOn)? Page_Recieved_Last_Week+1:Page_Recieved_Last_Week ;
        Page_Recieved_This_Month = isAssignedCurrentMonth(item.createdOn)? Page_Recieved_This_Month+1:Page_Recieved_This_Month;
        Page_Recieved_Last_month = isAssignedLastMonth(item.createdOn)? Page_Recieved_Last_month+1:Page_Recieved_Last_month;
   
    });
    
        report.push({Engineer_Name ,Page_Recieved_Last_Week, Page_Recieved_This_Month, Page_Recieved_Last_month, TotalCount, link})
    

   }
   report.push({"Page_Recieved_Last_month": "Total Count" , "TotalCount" : TotalPageCount})
   console.table(report);
});
