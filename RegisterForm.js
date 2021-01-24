//Generated By Omriw

//notes reset
// document.getElementById("notes").addEventListener('click', function (e) {
//   let targetNotes = e.target; // clicked element
  
//         if (targetNotes == "הערות למערכת") 
//         {
//             // This is a click inside. 
//             targetNotes.textContent = "";            
//         }       
        

//     // This is a click outside.
//     document.getElementById("flyout-debug").textContent = "Clicked outside!";
// })

//Checking Form Part
var newCustomer={
  id: document.getElementById("id").value,  
  FullName: document.getElementById("fullname").value,
  Email: document.getElementById("email_adress").value,
  Adress: document.getElementById("adress").value,
  Phone:document.getElementById("phone_num").value
};

function ValidateForm() {
  var Id_Check,FullName_Check,Email_Check,
  Adress_Check, Result_Text;      
  
  // Fields Check Vars
  Id_Check = document.getElementById("id").value;
  FullName_Check = document.getElementById("fullname").value;
  Email_Check = document.getElementById("email_adress").value;
  Adress_Check = document.getElementById("adress").value;
  Notes_Check = document.getElementById("notes").value;
  Phone_Check = document.getElementById("phone_num").value;
  // Fields Check Vars
  

  // Mail Check Vars
  var atposition=Email_Check.indexOf("@");  
  var dotposition=Email_Check.indexOf(".");  
  // Mail Check Vars
  
  
  
  

  //Mail Rules Check
  if (atposition<1 || dotposition<atposition+2 || dotposition+2>=Email_Check.length)
  {  
     dotposition= 0;
     Result_Text+="אנא הזן כתובת מייל תקינה, \n  מיקום הכרוכית :"+atposition+"\n מיקום הנקודה: "+dotposition+". \n";
  } 
  

  else 
  {
    Result_Text+= "";
  }
  //Mail Rules Check



  
  // ID : If is Not a Number or Differs from 9 digits
  if (isNaN(Id_Check) || Id_Check.length !=9) 
  {
    Result_Text+= "מס' ת.ז אינו תקין, על פי התקן ת.ז אמורה להכיל כ9 ספרות,  \n ";
    Result_Text+= "אנא בדוק כי הזנת ספרת ביקורת בנסף למס' ת.ז,\n ";
  }
  
  else
  {
    Result_Text+= "";  
  }
  // ID : If is Not a Number or Differs from 9 digits
  
  
   //Name: Check if empty
   if (FullName_Check === "") 
   {
      Result_Text+= "חסר שם מלא ,\n ";
   } 

    else {
      Result_Text+= "";
    }
   //Name: Check if empty
   
   
   
   //Name: Check that text is in Hebrew
  for (let index = 0; index < FullName_Check.length; index++) 
  {
      
  var letter_pos = FullName_Check[index];
  var heb_check_pos = letter_pos.search(/[\u0590-\u05FF]/);
  var check_space= letter_pos.search(/[\u0020]/); 
  
  
    if ( heb_check_pos < 0 && check_space<0 ) 
    {
        Result_Text+= " שמך אינו תקין. האות "+letter_pos+" אינה בעברית ,\n ";
    } 
  
    else 
    {
        Result_Text+= "";
    }
    
  }//for
    //Name: Check that text is in Hebrew
    
    for (let index = 0; index < Adress_Check.length; index++) 
  {
  var adress_pos= Adress_Check[index];
  var heb_check_addr = adress_pos.search(/[\u0590-\u05FF]/);
  var check_space_addr =adress_pos.search(/[\u0020]/); 
  var heb_check_addr_bool =true;
  
    if (heb_check_addr < 0 && check_space_addr<0) 
   {
      heb_check_addr_bool= false;
   } 

    else {
      heb_check_addr_bool =true;
    }
   //Name: Check if empty
   
  }//for
  
  if ( !heb_check_addr_bool ) 
    {
        Result_Text+= " כתובת מגורים אינה בעברית,\n ";
    } 
  
    else 
    {
        Result_Text+= "";
    }
   
   
    
    //Phone: Check Valid Components
    if ( isNaN(Phone_Check) || Phone_Check.length !=7 ) 
    {
        
        Result_Text+= "מס' טלפון תקין אמור להכיל כ-7 ספרות, \n ";
        Result_Text+= "לא כולל מספר הביקורת,\n ";
    }
    else
    {
    Result_Text+= "";  
    }
    //Phone: Check Valid Components
    
    
    //Sending section- all FIelds are Valid

	if(Result_Text!=="")
	{
	alert(Result_Text);
	}
	
	else
	{ 
	alert("Successfully Registered Client!");
	}
	
	//Sending section- all FIelds are Valid
		      

  return Result_Text;
}



//Form- Rendering Part 

// change alert style part
var ALERT_TITLE = "הודעת מערכת";
var ALERT_BUTTON_TEXT = "קיבלתי";

if(document.getElementById) {
    window.alert = function(txt) {
        createCustomAlert(txt);
    }
}

function createCustomAlert(txt) {
    d = document;

    if(d.getElementById("modalContainer")) return;

    mObj = d.getElementsByTagName("body")[0].appendChild(d.createElement("div"));
    mObj.id = "modalContainer";
    mObj.style.height = d.documentElement.scrollHeight + "px";

    alertObj = mObj.appendChild(d.createElement("div"));
    alertObj.id = "alertBox";
    if(d.all && !window.opera) alertObj.style.top = document.documentElement.scrollTop + "px";
    alertObj.style.left = (d.documentElement.scrollWidth - alertObj.offsetWidth)/2 + "px";
    alertObj.style.visiblity="visible";

    h1 = alertObj.appendChild(d.createElement("h1"));
    h1.appendChild(d.createTextNode(ALERT_TITLE));

    msg = alertObj.appendChild(d.createElement("p"));
    //msg.appendChild(d.createTextNode(txt));
    msg.innerHTML = txt;

    btn = alertObj.appendChild(d.createElement("a"));
    btn.id = "closeBtn";
    btn.appendChild(d.createTextNode("\n\n\n\n" +ALERT_BUTTON_TEXT));
    btn.href = "#";
    btn.focus();
    btn.onclick = function() { removeCustomAlert();return false; }

    alertObj.style.display = "block";

}

function removeCustomAlert() {
    document.getElementsByTagName("body")[0].removeChild(document.getElementById("modalContainer"));
}