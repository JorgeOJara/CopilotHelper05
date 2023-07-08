let Globalobj = [];

// spectrum one 






// end of spectrum one



// 2 years INTERNET ULTRA
$('#TWOYEARSINT').click(function(){
  $('#TWOYEARSINTbtn').addClass("clicked");
   // add code
    let  obj = {
        "ID":29629261037,
        "NameofService":"2Y ULTRA",
        "RegPrice":99.99,
        "promoPrice":39.99
      };
      Globalobj.push(obj);
      displayerOfServiceData();
});
   // remove code
$('#TWOYEARSINTremove').click(function(){
  $('#TWOYEARSINTbtn').removeClass("clicked");
      // delete
       takeOutTheTrash(29629261037);
    });
// ultramiplan



// ultraChoice 


// 2y


$('#2y').click(function(){
  $('#2ybtn').addClass("clicked");
   // add code
    let  obj = {
        "ID":398862400,
        "NameofService":"2Y Ultra",
        "RegPrice":75,
        "promoPrice":49.99
      };
      Globalobj.push(obj);
      displayerOfServiceData();
});
   // remove code
$('#2yremove').click(function(){
  $('#2ybtn').removeClass("clicked");
      // delete
       takeOutTheTrash(398862400);
    });





// TV Started

// TV select
$('#select').click(function(){
  $('#selectbtn').addClass("clicked");
   // add code
    let  obj = {
        "ID":380574873,
        "NameofService":"TV SELECT",
        "RegPrice":110,
        "promoPrice":82.19
      };
      Globalobj.push(obj);
      displayerOfServiceData();
});
   // remove code
$('#selectremove').click(function(){
  $('#selectbtn').removeClass("clicked");
      // delete
       takeOutTheTrash(380574873);
    });


// Mi-Plan-Latino
$('#miplanlatino').click(function(){
  $('#miplanlatinobtn').addClass("clicked");
       let  obj =  {
        "ID":58367388,
        "NameofService":"Mi-Plan-Latino",
        "RegPrice":76,
        "promoPrice":62.19
      };
      Globalobj.push(obj);
         displayerOfServiceData();
});

$('#miplanlatinoremove').click(function(){
  $('#miplanlatinobtn').removeClass("clicked");
     takeOutTheTrash(58367388);
});


// TV Choise
$('#Choise').click(function(){
  $('#Choisebtn').addClass("clicked");
      let  obj =  {
        "ID":385284642,
        "NameofService":" TV-Choise",
        "RegPrice":72.98,
        "promoPrice":52.19
      };
     Globalobj.push(obj);
         displayerOfServiceData();
});

$('#Choiseremove').click(function(){
  $('#Choisebtn').removeClass("clicked");
     takeOutTheTrash(385284642);
});


console.log("jorge.jara@charter.com");

// TV Essentials
$('#Essentials').click(function(){
  $('#Essentialsbtn').addClass("clicked");
      let  obj =  {
        "ID":674534231,
        "NameofService":" TV Essentials",
        "RegPrice":24.99,
        "promoPrice":24.99
      };
     Globalobj.push(obj);
         displayerOfServiceData();
});

$('#Essentialsremove').click(function(){
  $('#Essentialsbtn').removeClass("clicked");
    takeOutTheTrash(674534231);
});





// TV ended



// packages started



   // Entertainment


$('#Entertainment').click(function(){
$('#Entertainmentbtn').addClass("clicked");
      let  obj =  {
        "ID":984733251,
        "NameofService":"Entertainment View",
        "RegPrice":12,
        "promoPrice":12
      };
     Globalobj.push(obj);
         displayerOfServiceData();

});

$('#Entertainmentremove').click(function(){
  $('#Entertainmentbtn').removeClass("clicked");
     takeOutTheTrash(984733251);
});


   // Latino

$('#Latino').click(function(){
$('#Latinobtn').addClass("clicked");
        let  obj =  {
        "ID":986753860,
        "NameofService":"Latino View",
        "RegPrice":12,
        "promoPrice":12
      };
     Globalobj.push(obj);
         displayerOfServiceData();
});

$('#Latinoremove').click(function(){
  $('#Latinobtn').removeClass("clicked");
     takeOutTheTrash(986753860);
});


  // sport

$('#sport').click(function(){
$('#sportbtn').addClass("clicked");
        let  obj =  {
        "ID":233549862,
        "NameofService":"Sport View",
        "RegPrice":6,
        "promoPrice":6
      };
     Globalobj.push(obj);
         displayerOfServiceData();
});

$('#sportremove').click(function(){
$('#sportbtn').removeClass("clicked");
   takeOutTheTrash(233549862);
});



   // HBO

$('#HBO').click(function(){
$('#HBObtn').addClass("clicked");
         let  obj =  {
        "ID":38764527,
        "NameofService":"HBO View",
        "RegPrice":15,
        "promoPrice":15
      };
     Globalobj.push(obj);
         displayerOfServiceData();
});

$('#HBOremove').click(function(){
$('#HBObtn').removeClass("clicked");
   takeOutTheTrash(38764527);
});


   // Showtime

$('#Showtime').click(function(){
$('#Showtimebtn').addClass("clicked");
       let  obj =  {
        "ID":487638735875,
        "NameofService":"SHOWTime",
        "RegPrice":10,
        "promoPrice":10
      };
     Globalobj.push(obj);
         displayerOfServiceData();
});

$('#Showtimeremove').click(function(){
$('#Showtimebtn').removeClass("clicked");
   takeOutTheTrash(487638735875);
}); 



   // Cinemax

$('#Cinemax').click(function(){
$('#Cinemaxbtn').addClass("clicked");
          let  obj =  {
        "ID":44753527722,
        "NameofService":"Cinemax",
        "RegPrice":10,
        "promoPrice":10
      };
     Globalobj.push(obj);
        displayerOfServiceData();
});

$('#Cinemaxremove').click(function(){
$('#Cinemaxbtn').removeClass("clicked");
   takeOutTheTrash(44753527722)
}); 

   // Epix 

$('#Epix').click(function(){
$('#Epixbtn').addClass("clicked");
   let  obj =  {
        "ID":775342794,
        "NameofService":"Epix",
        "RegPrice":6,
        "promoPrice":6
      };
     Globalobj.push(obj);
        displayerOfServiceData();
});

$('#Epixremove').click(function(){
$('#Epixbtn').removeClass("clicked");
   takeOutTheTrash(775342794)
}); 









//tmc

  $('#tmc').click(function(){
$('#tmcbtn').addClass("clicked");
   let  obj =  {
        "ID":775342794,
        "NameofService":"TCM",
        "RegPrice":5,
        "promoPrice":5
      };
     Globalobj.push(obj);
        displayerOfServiceData();
});


$('#tmcremove').click(function(){
$('#tmcbtn').removeClass("clicked");
   takeOutTheTrash(775342794)
}); 






  // Starz

$('#Starz').click(function(){
$('#Starzbtn').addClass("clicked");
     let  obj =  {
        "ID":36374759844,
        "NameofService":"Stars/Encore",
        "RegPrice":9,
        "promoPrice":9
      };
     Globalobj.push(obj);
        displayerOfServiceData();
});

$('#Starzremove').click(function(){
$('#Starzbtn').removeClass("clicked");
   takeOutTheTrash(36374759844);
}); 


  // Soccer
$('#Soccer').click(function(){
$('#Soccerbtn').addClass("clicked");
       let  obj =  {
        "ID":36374753544,
        "NameofService":"Fox Soccer Plus",
        "RegPrice":10,
        "promoPrice":10
      };
     Globalobj.push(obj);
         displayerOfServiceData();
});

$('#Soccerremove').click(function(){
$('#Soccerbtn').removeClass("clicked");
   takeOutTheTrash(36374753544);
}); 


// packages ended


// Internet Started

// base Internet
$('#base').click(function(){
  $('#basebtn').addClass("clicked");
      let  obj =  {
        "ID":3374933544,
        "NameofService":"Spectrum Internet",
        "RegPrice":75,
        "promoPrice":55
      };
     Globalobj.push(obj);
        displayerOfServiceData();
});

$('#baseremove').click(function(){
  $('#basebtn').removeClass("clicked");
     takeOutTheTrash(3374933544)
});


// ultra Internet

$('#Ultra').click(function(){
$('#ultrabtn').addClass("clicked");
     let  obj =  {
        "ID":5847375527,
        "NameofService":"Spectrum Ultra",
        "RegPrice":95,
        "promoPrice":75
      };
     Globalobj.push(obj);
        displayerOfServiceData();
});

$('#ultraremove').click(function(){
  $('#ultrabtn').removeClass("clicked");
    takeOutTheTrash(5847375527);
});


//   Gig

$('#Gig').click(function(){
$('#Gigbtn').addClass("clicked");
       let  obj =  {
        "ID":58474525527,
        "NameofService":"Spectrum GIG",
        "RegPrice":115,
        "promoPrice":95
      };
     Globalobj.push(obj);
        displayerOfServiceData();
});

$('#Gigremove').click(function(){
  $('#Gigbtn').removeClass("clicked");
     takeOutTheTrash(58474525527);
});


//   Internet 50

$('#fif').click(function(){
$('#fifbtn').addClass("clicked");
      let  obj =  {
        "ID":1174525527,
        "NameofService":"Spectrum 50",
        "RegPrice":60,
        "promoPrice":34
      };
     Globalobj.push(obj);
        displayerOfServiceData();
});

$('#fifremove').click(function(){
  $('#fifbtn').removeClass("clicked");
    takeOutTheTrash(1174525527);
});

//   Internet SIA

$('#sia').click(function(){
$('#siabtn').addClass("clicked");
      let  obj =  {
        "ID":1174526627,
        "NameofService":"Spectrum SIA",
        "RegPrice":23,
        "promoPrice":23
      };
     Globalobj.push(obj);
        displayerOfServiceData();
});

$('#siaremove').click(function(){
  $('#siabtn').removeClass("clicked");
     takeOutTheTrash(1174526627);
});




// end of internet




//  voice Started


//  Single Voice Line

$('#single').click(function(){
$('#singlebtn').addClass("clicked");
    let  obj =  {
        "ID":39836474744,
        "NameofService":"Voice",
        "RegPrice":19.99,
        "promoPrice":19.99
      };
     Globalobj.push(obj);
       displayerOfServiceData();
});

$('#singleremove').click(function(){
  $('#singlebtn').removeClass("clicked");
    takeOutTheTrash(39836474744);
});

//  double Voice Line

$('#double').click(function(){
$('#doublebtn').addClass("clicked");
       let  obj =  {
        "ID":40267398488,
        "NameofService":"Voice",
        "RegPrice":20,
        "promoPrice":20
      };
     Globalobj.push(obj);
         displayerOfServiceData();
});

$('#doubleremove').click(function(){
  $('#doublebtn').removeClass("clicked");
     takeOutTheTrash(40267398488);
});



/// International calls


$('#International').click(function(){
$('#Internationalbtn').addClass("clicked");
      let  obj =  {
        "ID":43926295488,
        "NameofService":"International",
        "RegPrice":5,
        "promoPrice":5
      };
     Globalobj.push(obj);
         displayerOfServiceData();
});

$('#Internationalremove').click(function(){
  $('#Internationalbtn').removeClass("clicked");
     takeOutTheTrash(43926295488);
});


//  Aux started


// Apple

$('#Apple').click(function(){
$('#Applebtn').addClass("clicked");
    let  obj =  {
        "ID":9993626488,
        "NameofService":"Apple TV",
        "RegPrice":5,
        "promoPrice":5
      };
     Globalobj.push(obj);
       displayerOfServiceData();
});

$('#Appleremove').click(function(){
  $('#Applebtn').removeClass("clicked");
     takeOutTheTrash(9993626488);
});



// hdbox

$('#hdbox').click(function(){
$('#hdboxbtn').addClass("clicked");
    let  obj =  {
        "ID":7793698488,
        "NameofService":"HD Box",
        "RegPrice":11,
        "promoPrice":11
      };
     Globalobj.push(obj);
       displayerOfServiceData();
});

$('#hdboxremove').click(function(){
  $('#hdboxbtn').removeClass("clicked");
     takeOutTheTrash(7793698488);
});

//DVR

$('#DVR').click(function(){
$('#DVRbtn').addClass("clicked");
      let  obj =  {
        "ID":93634092388,
        "NameofService":"DVR Box",
        "RegPrice":20,
        "promoPrice":20
      };
     Globalobj.push(obj);
       displayerOfServiceData();
});

$('#DVRremove').click(function(){
  $('#DVRbtn').removeClass("clicked");
     takeOutTheTrash(93634092388);
});


// Cloud DVR

$('#Cloud').click(function(){
$('#Cloudbtn').addClass("clicked");
      let  obj =  {
        "ID":3925237487,
        "NameofService":"Cloud DVR",
        "RegPrice":5,
        "promoPrice":5
      };
     Globalobj.push(obj);
     displayerOfServiceData();
});

$('#Cloudremove').click(function(){
  $('#Cloudbtn').removeClass("clicked");
     takeOutTheTrash(3925237487);
});


// cloudplus

$('#cloudplus').click(function(){
$('#cloudplusbtn').addClass("clicked");
      let  obj =  {
        "ID":392534937487,
        "NameofService":"Cloud DVR Plus",
        "RegPrice":10,
        "promoPrice":10
      };
     Globalobj.push(obj);
      displayerOfServiceData();
      console.log(Globalobj);
});

$('#cloudplusremove').click(function(){
  $('#cloudplusbtn').removeClass("clicked");
     takeOutTheTrash(392534937487);
});



// aux ended



// costume code

 function takeOutTheTrash(id){
       let containerr = [];
       let filtered  = Globalobj.filter( d => { 
               if( d.ID !== id ){ containerr.push(d);}
         });
       Globalobj = containerr;
       displayerOfServiceData(); 
   }



let boxOfServices =  document.getElementById("objContainer");

// show final total
function showTotal(detailsAboutPackage){
        let formalTotalpromo =0;
        let formalTotalReg = 0;
        //  map function that will add all the prices together

           Globalobj.map( d => {
                    formalTotalpromo  = Math.round(formalTotalpromo + d.promoPrice);
                    formalTotalReg = Math.round(formalTotalReg + d.RegPrice);
           });
           boxOfServices.innerHTML = detailsAboutPackage +"<tr class='total'><td></td><td>Promotional Price: $ " + formalTotalpromo + "</td></tr><tr class='total'><td></td><td>Standar Price: $ " + formalTotalReg + "</td></tr>";

}

// delete all
function cleanContainer(){
       boxOfServices.remove();
  }

  //  make list of content
function displayerOfServiceData(){
    console.log(Globalobj);
    let fomralValues = "";
      Globalobj.map( d =>{
            fomralValues = fomralValues + "<tr class='item'><td>" + d.NameofService + "</td><td>$ " + d.promoPrice + "</td></tr>";

      });
      showTotal(fomralValues)
}


function finderOFSIA(){
  let results =  false;
     Globalobj.map(d=>{
         if(d.ID == 1174526627){
             results = true;
         }
     })
     return  results;
}

//// ACP

index = 0;
$('#acp').click(function(){
     if( index == 0 ){  
       let obj = {}
       let desicion = finderOFSIA()   
         if(desicion ==  true){
         obj =  {
            "ID":39862142555,
            "NameofService":"Affordable Connectivity Program",
            "RegPrice":-23,
            "promoPrice":-23
          }
        }else{
             obj =  {
              "ID":39862142555,
              "NameofService":"Affordable Connectivity Program",
              "RegPrice":-30,
              "promoPrice":-30
            }
          }

       Globalobj.push(obj);
      displayerOfServiceData(); 
    index=1;
   }else{ 
     takeOutTheTrash(39862142555); 
     index = 0; 
    }
});






let  obj =  {
  "ID":39862142555,
  "NameofService":"Affordable Connectivity Program",
  "RegPrice":-30,
  "promoPrice":-30
}