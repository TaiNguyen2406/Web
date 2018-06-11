var luu;
var line1,line2;
$(document).ready(function() {
    setInterval(function()
    { 
        async: true,
        $.ajax({
            url:"http://192.168.1.133:8081/api/ViewPage",
            type : 'get',
            dataType : 'json',
            cache:false,
            success: function (data) {
                data.forEach(element => {
                    var manhinh=element.Value;
                    if(manhinh!= undefined)
                    {
                        $("#lineNo").html("P."+manhinh+"/12");
                        $("#page").html("P."+manhinh+"/12");
                        if(manhinh<5)
                        {
                            var hientai =new Date(element.ThoiGian).format("HH:MM:ss");
                            if (manhinh>2)
                            {
                                if(luu!=manhinh)
                                {
                                    $("body").load("./Page3.html");
                                    luu=manhinh
                                }
                              
                            }
                            else
                            {
                                if(luu!=manhinh)
                                {
                                $("body").load("./Page1.html")
                                luu=manhinh
                                }
                            }
                            if(manhinh%2==0)
                            {
                                startTime('offline',hientai) 
                            }
                            else
                            {
                                startTime('online',hientai) 
                            }
                        }
                        else
                        {
                            if (luu!=manhinh){
                                $("body").load("./Page5.html");
                                luu=manhinh
                                if (luu==5 || luu ==6 ||luu ==7 ||luu==8){
                                line1 = 'Line 1'
                                line2 = 'Line 2'
                                }
                                else
                                {
                                line1 = 'Line 5'
                                line2 = 'Line 6'
                                }
                                }
                                loadpage(manhinh);
                        }                          
                       
                    }
                });
                        

            } ,
            complete:function(){
                if (luu != undefined){
                    if (luu < 5){
                        laydulieu2()
                    }
                    else
                    {
                        laydulieu()
                    }
                }
                
            }
        });
    }, 1000);

 });
function startTime(o,hientai) 
{
    // Lấy Object ngày hiện tại
    var today = new Date();
 
    // Giờ, phút, giây hiện tại
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    // Chuyển đổi sang dạng 01, 02, 03
    m = checkNum(m);
    s = checkNum(s);
    // Ghi ra trình duyệt
  //  document.getElementById('timer').innerHTML =OnOFF(o)+" "+ h + ":" + m + ":" + s;
    $("#timer").html(OnOFF(o)+" "+hientai);
    // Dùng hàm setTimeout để thiết lập gọi lại 0.5 giây / lần
   
   
    
}
function checkNum(i) 
{
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}
function getline(l1,l2,l3,l4) 
{
    // var strLine=  document.getElementById('nhapline').value ;
    // var array =strLine.split(",");
    document.getElementById('line1').innerHTML ="Line "+ checkNum(l1);
    document.getElementById('line2').innerHTML ="Line "+ checkNum(l2);
    document.getElementById('line3').innerHTML ="Line "+ checkNum(l3);
    document.getElementById('line4').innerHTML ="Line "+ checkNum(l4);
}
function anhien() { 

    var nhaplieu = document.getElementsByClassName('text-center');
    var dodai=nhaplieu.length;
    for (i=0;i<dodai;i++)
    {
    
        if ( nhaplieu[i].tagName=='TD')
        {
           
            var displaySetting = nhaplieu[i].style.display;
       
            if (displaySetting == '') 
            { 
                nhaplieu[i].style.display = 'none';
            }
            else 
            { 
                $("TD[style*='display:none']").remove();
    
            }
        }
       
    }
  
  }  
  function OnOFF(o) 
  {
    if(o=="online")
    {
        var mau="rgb(235, 232, 232)";
        var elements = document.getElementsByClassName("table-fill")
            for (var i = 0; i < elements.length; i++) {
                elements[i].style.backgroundColor=mau ;
            }
          //  document.getElementById('timer').style.color="#2980b9";
          return "ONLINE";
    }
    if(o=="offline")
    {
        var mau="white";
        var elements = document.getElementsByClassName("table-fill")
        for (var i = 0; i < elements.length; i++) {
            elements[i].style.backgroundColor="white" ;
           
        }
        //document.getElementById('timer').style.color="#e74c3c";
        return "OFFLINE";
    }
  }
  //Page 5
  function loadpage(p)
  {
    switch (p) {
        case 5:
        case 9:
       
        $('#r1_c1').html('23-0');
        $('#r2_c1').html('0-1');
        $('#r3_c1').html('1-2');
        $('#r4_c1').html('2-3');
        $('#r5_c1').html('3-4');
        $('#r6_c1').html('4-5');
            break;
        case 6:
        case 10:
    
        $('#r1_c1').html('5-6');
        $('#r2_c1').html('6-7');
        $('#r3_c1').html('7-8');
        $('#r4_c1').html('8-9');
        $('#r5_c1').html('9-10');
        $('#r6_c1').html('10-11');
        break;
        case 7:
        case 11:
       
        $('#r1_c1').html('11-12');
        $('#r2_c1').html('12-13');
        $('#r3_c1').html('13-14');
        $('#r4_c1').html('14-15');
        $('#r5_c1').html('15-16');
        $('#r6_c1').html('16-17');
        break;
        case 8:
        case 12:
        
        $('#r1_c1').html('17-18');
        $('#r2_c1').html('18-19');
        $('#r3_c1').html('19-20');
        $('#r4_c1').html('20-21');
        $('#r5_c1').html('21-22');
        $('#r6_c1').html('22-23');
        break;
    }   
    
    if (p == 5 || p==6 ||p==7||p==8){
        $('#lineA').html('LINE 01')
        $('#lineB').html('LINE 02')
    }
    else
    {        
        $('#lineA').html('LINE 05')
        $('#lineB').html('LINE 06')
    }
  }



  function laydulieu(){
    var t1,t2,t3,t4,t5,t6;
    switch (luu){
        case 5: case 9:
        t1 =0; t2 = 1; t3 =2; t4 =3; t5=4;t6 =5
        break;
        case 6: case 10:
        t1 =6; t2 = 7; t3 =8; t4 =9; t5=10;t6 =11
        break; 
        case 7: case 11:
        t1 =12; t2 = 13; t3 =14; t4 =15; t5=16;t6 =17
        break;
        case 8: case 12:
        t1 =18; t2 = 19; t3 =20; t4 =21; t5=22;t6 =23
        break;
    }

    if (line1 != undefined && line2 != undefined  && luu != undefined){
        
        $.ajax({
            url:"http://192.168.1.133:8081/api/ViewPage?page=" + luu + "&line1="+ line1 +"&line2="+line2,
            type : 'get',
            dataType : 'json',
            crossDomain: true,
            success: function(data){
                if (data != null)
                {
                    console.log("http://192.168.1.133:8081/api/ViewPage?page=" + luu + "&line1="+ line1 +"&line2="+line2)
                    data.forEach(element => {                    
                        if (element.Line == line1){
                            var vitri = 0;
                            switch (element.Location){
                                case 'Cut':
                                vitri = 2;
                                break;
                                case 'Act':
                                vitri = 3
                                break;
                                case 'Act A':
                                vitri = 4;
                                break;
                                case 'Act B':
                                vitri = 5
                                break;
                            }
                        }
                        else{
                            if (element.Line == line2){
                                switch (element.Location){
                                    case 'Cut':
                                    vitri = 6;
                                    break;
                                    case 'Act':
                                    vitri = 7
                                    break;
                                    case 'Act A':
                                    vitri = 8;
                                    break;
                                    case 'Act B':
                                    vitri = 9
                                    break;
                                }
                            }
                        }
                        switch(element.Time){
                            case t1:
                            $("#r1 td:nth-child("+vitri+")").html(element.SoDong)
                            break;
                            case t2:
                            $("#r2 td:nth-child("+vitri+")").html(element.SoDong)
                            break;
                            case t3:
                            $("#r3 td:nth-child("+vitri+")").html(element.SoDong)
                            break;
                            case t4:
                            $("#r4 td:nth-child("+vitri+")").html(element.SoDong)
                            break;
                            case t5:
                            $("#r5 td:nth-child("+vitri+")").html(element.SoDong)
                            break;
                            case t6:
                            $("#r6 td:nth-child("+vitri+")").html(element.SoDong)
                            break;
                        }
                    });                            
                }
            }             
        })
    } 
}

function laydulieu2(){
   
    if (luu != undefined){
        $.ajax({
            url:"http://192.168.1.133:8081/api/ViewPage?page=" + luu,
            type : 'get',
            dataType : 'json',
            crossDomain: true,
            cache:false,
            success: function(data){
            if (data != null)
              {
                var obj = jQuery.parseJSON(data);
                console.log(obj.Table1)
                obj.Table.forEach(element=>
                        {                             
                            if (element.Line == 'Line 1'){
                                $("#act td:nth-child(2)").html(element.SODONG);
                            }
                           else{
                               if (element.Line == 'Line 2'){
                                $("#act td:nth-child(3)").html(element.SODONG);
                               }
                               else{
                                   if (element.Line == 'Line 5'){
                                    $("#act td:nth-child(4)").html(element.SODONG);
                                   }else
                                   {
                                    $("#act td:nth-child(5)").html(element.SODONG);
                                   }
                               }
                           }
                        })     
                 obj.Table1.forEach(element=>
                            {                             
                               // if (element.LINE == 'Line 1')
                                {
                                    var so=parseInt(element.LINE.substr(4,2));
                                    if (so==1||so==2)
                                    {
                                        so=so+1;
                                    }
                                   else
                                   {
                                       so=so-1
                                   }
                                    console.log (so)
                                    $("#run td:nth-child("+so+")").html(element.TrangThai);
                                    $("#trouble td:nth-child("+so+")").html(element.TroubleTime);
                                    if(element.TrangThai=="RUNNING")
                                    {
                                        $("#run td:nth-child("+so+")").removeClass("text-stop text-stop-khong-nhay");
                                        $("#run td:nth-child("+so+")").last().addClass("text-running");
                                    }
                                    else
                                    {
                                     
                                        if (element.Reset == null)
                                        {
                                            $("#run td:nth-child("+so+")").removeClass("text-running text-stop-khong-nhay");
                                            $("#run td:nth-child("+so+")").last().addClass("text-stop");
                                        }
                                        else
                                        {
                                            
                                            $("#run td:nth-child("+so+")").removeClass("text-running text-stop");
                                            $("#run td:nth-child("+so+")").last().addClass("text-stop-khong-nhay");
                                        }

                                    }
                                   
                                }
                            })                  
              }
    }
    })
    }
}
