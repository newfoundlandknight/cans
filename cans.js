function timeConvert(minutes) {
  var sign = minutes < 0 ? "-" : "";
  var min = Math.floor(Math.abs(minutes));
  var sec = Math.floor((Math.abs(minutes) * 60) % 60);
    return sign + (min < 10 ? "0" : "") + min + ":" + (sec < 10 ? "0" : "") + sec;
}

function getCheckedRadioValue(radioGroupName) {
   var rads = document.getElementsByName(radioGroupName),
       i;
   for (i=0; i < rads.length; i++)
      if (rads[i].checked)
          return rads[i].value;
   return null; // or undefined, or your preferred default for none checked
}




function measureup(p1) {
p1=s473.value;
var p1 = getCheckedRadioValue("cansize");
var num = 5.56789;
  if (bbls.value.length == 0)
	{bbls.value = liters.value/117;  }
  else
	{liters.value =bbls.value *117;  }
   
hls.value =Math.round(bbls.value *1.17*100)/100;
cans.value = Math.round(liters.value /p1);
if (tube_size.value == 0) {lids_x = 580;} else {lids_x = tube_size.value;}
if (tier_cans.value == 0) {tiers_cans = 390;} else {tiers_cans = tier_cans.value;}

lids.value = Math.round(liters.value /p1/ lids_x*100)/100;
tiers.value = Math.round( cans.value/tiers_cans*100)/100;
pallets.value = Math.round( cans.value / (60*24)*100)/100;
pallets_70.value = Math.round( cans.value / (72*24)*100)/100;
pallets2.value = Math.round( cans.value / (84*24)*100)/100;
s_24.value = Math.round( cans.value / (24)*100)/100;
savg.value = timeConvert(cans.value/(30.1*60));
s24.value = timeConvert(cans.value/(24*60));
s25.value = timeConvert(cans.value/(25*60));
s26.value = timeConvert(cans.value/(26*60));
s27.value = timeConvert(cans.value/(27*60));
s28.value = timeConvert(cans.value/(28*60));
s29.value = timeConvert(cans.value/(29*60));
s30.value = timeConvert(cans.value/(30*60));
s31.value = timeConvert(cans.value/(31*60));
s32.value = timeConvert(cans.value/(32*60));
s33.value = timeConvert(cans.value/(33*60));
s34.value = timeConvert(cans.value/(34*60));
s35.value = timeConvert(cans.value/(35*60));
s36.value= timeConvert(((Math.random()*.2)+.8  )*cans.value/(30* 60)+1);

//s36.value=timeConvert((cans.value/(30* 1)+1));
}
function measureup2(p1, p2) {
bbls.value = Math.round(liters.value/117*100)/100;
var p1 = getCheckedRadioValue("cansize");

hls.value =Math.round(bbls.value *1.17*100)/100;
cans.value = Math.round(liters.value /p1);
if (tube_size.value == 0) {lids_x = 580;} else {lids_x = tube_size.value;}
if (tier_cans.value == 0) {tiers_cans = 390;} else {tiers_cans = tier_cans.value;}

lids.value = Math.round(liters.value /p1/ lids_x*100)/100;
tiers.value = Math.round( cans.value/tiers_cans*100)/100;
pallets.value = Math.round( cans.value / (60*24)*100)/100;
pallets_70.value = Math.round( cans.value / (72*24)*100)/100;
pallets2.value = Math.round( cans.value / (84*24)*100)/100;
s_24.value = Math.round( cans.value / (24)*100)/100;
savg.value = timeConvert(cans.value/(30.1*60));
s24.value = timeConvert(cans.value/(24*60));
s25.value = timeConvert(cans.value/(25*60));
s26.value = timeConvert(cans.value/(26*60));
s27.value = timeConvert(cans.value/(27*60));
s28.value = timeConvert(cans.value/(28*60));
s29.value = timeConvert(cans.value/(29*60));
s30.value = timeConvert(cans.value/(30*60));
s31.value = timeConvert(cans.value/(31*60));
s32.value = timeConvert(cans.value/(32*60));
s33.value = timeConvert(cans.value/(33*60));
s34.value = timeConvert(cans.value/(34*60));
s35.value = timeConvert(cans.value/(35*60));
s36.value= timeConvert(((Math.random()*.2)+.8  )*cans.value/(30* 60)+1);

}
  //-->


//s

