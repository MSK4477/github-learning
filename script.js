var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all")
request.send();
request.onload=function(){
    var res=JSON.parse(request.response);
    console.log(res);
    var result=res.map((ele)=>ele.population)
    var pop=result.reduce((ac,cv)=>ac+cv,0)

    console.log(pop)

}