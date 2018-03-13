var input=[];
    input[1]=document.querySelector('[name="color1"]');
    input[2]=document.querySelector('[name="color2"]');
var random=document.querySelector('#random');
var body=document.getElementsByTagName('body')[0];
var h3=document.querySelector('h3');

var background_string=window.getComputedStyle(body).getPropertyValue('background-image');
var rgbPos=background_string.search('rgb');

var str=background_string.slice(rgbPos);
var i=0;



function getSetColors(str)
{
  if(str.search('rgb')!=-1)
  {
  
  	rgbP=str.search('rgb');
  	closeP=str.indexOf(')');
  	input[i+1].value=rgb2hex(str.slice(rgbP,closeP+1));
  	i++;
  	
  	getSetColors(str.slice(closeP+1));
  }
 
  
}
getSetColors(str);

  h3.textContent=background_string;

document.addEventListener("input",function(e)
{ 
	
	if(e.target.name=='color1' || e.target.name=='color2')
	{
	   backgroundGernator();
	}

})

var backgroundGernator=function()
{
	body.style.background='linear-gradient(to right ,'+input[1].value+' , '+input[2].value+')';
	   h3.textContent=body.style.background;
}
function rgb2hex(rgb){
 rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
 return (rgb && rgb.length === 4) ? "#" +
  ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
  ("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
  ("0" + parseInt(rgb[3],10).toString(16)).slice(-2) : '';
}

var randHex = function(len) {
  var maxlen = 8,
      min = Math.pow(16,Math.min(len,maxlen)-1) 
      max = Math.pow(16,Math.min(len,maxlen)) - 1,
      n   = Math.floor( Math.random() * (max-min+1) ) + min,
      r   = n.toString(16);
  while ( r.length < len ) {
     r = r + randHex( len - maxlen );
  }
  return r;
};


random.addEventListener('click',function()
{
	input.forEach(function(value,index)
	{
		input[index].value='#'+randHex(6);
	})
        backgroundGernator();
})