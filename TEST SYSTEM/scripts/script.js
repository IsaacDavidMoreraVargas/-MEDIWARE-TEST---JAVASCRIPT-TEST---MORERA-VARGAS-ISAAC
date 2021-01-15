var output="";
var result=0;

function start()
{
	instructions();
}

function validate(id)
{
	let data;
	try
	{
		data=parseInt(document.getElementById(id).value);
	}catch(err)	{ 	}
	
	if(isNaN(data))
	{
		document.getElementById("S"+id).style.display="block";
	}else
	{
		document.getElementById("S"+id).style.display="none";
	}
}

function instructions()
{
	let instruc= document.getElementById("col2");
	let timer=0;
	if (instruc.style.display === "none") 
	{
		instruc.style.display = "block";
		instruc.style.width =  0 + '%';
		let width=0;
		var identity = setInterval(scene, 10); 
		function scene() 
		{ 
			if (width >= 35) 
			{ 
			 clearInterval(identity); 
			} else 
			{ 
			  width++;  
			  width++;  
			  instruc.style.width =  width + '%';  
			}
		}
	} else 
	{
		let width=35;
		var identity = setInterval(scene, 10); 
		function scene() 
		{ 
			if (width <= 0) 
			{ 
			 clearInterval(identity); 
			} else 
			{ 
			  width--;  
			  width--;  
			  instruc.style.width =  width + '%';  
			}
		}
    	instruc.style.display = "none";
	} 
}

function calculate(id1,id2)
{
	let data1;
	try
	{
		data1=parseInt(document.getElementById(id1).value);
	}catch(err)	{ 	}

	let data2;
	try
	{
		data2=parseInt(document.getElementById(id2).value);
	}catch(err)	{ 	}
	
	if(isNaN(data1) || isNaN(data2))
	{
		alert("Imposible to proceed: \n-Espaces are empty or contains letters");
	}
	else if(data2<data1)
	{
        alert("Quantity can't ever being bigger than Goals");
	}
    else
	{
		if(data1<0)
	    {
			alert("Quantity can't be less than 0");
		}else if(data2<0)
		{
			alert("Goals can't be less than 0");
		}else
		{
			update(data1,data2);
		}
        
	}

}
function clean(id)
{
	document.getElementById(id).value="";
}

function update(data1,data2) 
{ 
  var Quantity= data1;
  var Goals= data2;
  result=100/Goals*Quantity;
  if(result<=100)
  {
	  var element = document.getElementById("myprogressBar");    
	  var width = 1; 

	  var identity = setInterval(scene, 10); 

	  function scene() 
	  { 
		if (width >= result) 
		{ 
		  clearInterval(identity); 
		} else 
		{ 
		  width++;  
		  element.style.width =  width + '%';  
		  document.getElementById("myprogressBar").innerHTML=width + '%';
		}
	  }
  }
} 

function myHideShow()
{
	let bar = document.getElementById("Progress_Status");
	  if (bar .style.display === "none") 
	  {
		bar .style.display = "block";
		document.getElementById(id).innerHTML="Hide Bar";
	  } else 
	  {
		bar .style.display = "none";
		document.getElementById(id).innerHTML="Show Bar";
	  }  
}

function clearAll()
{
	document.getElementById("fquant").value="Digit the score goals";
	document.getElementById("Sfquant").style.display="none";
	document.getElementById("lgoal").value="Digit the expected amount of goals";
	document.getElementById("Slgoal").style.display="none";
	document.getElementById("countNumber").innerHTML="";
	document.getElementById("myprogressBar").style.width = 1+ '%';
	alert("Cleaned data");
}