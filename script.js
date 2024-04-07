var resume = {
    
      "name": "Rajkumar",
      "email": "drajkumar1599@gmail.com",
      "phone": "9361048587",
      
      "address": [ "no:24","lakshmipuram",
 "chrompet","chennai"
     ],
     "education":["10th","+2","b.com"],
     "skills":["html","c++","javascript"],
     "habits":["playing cricket","shuttle","drawing"]
    }
  
    var a = JSON.stringify(resume)

    /* for loop 
   console.log(resume["name"]);
   console.log(resume["email"]);
   console.log(resume["phone"]);

   for (var i = 0; i < resume["address"].length; i = i + 1) {
    console.log(resume["address"][i])};

    for (var i = 0;i<resume["education"].length;i=i+1)
    console.log(resume["education"][i]);

    for (var i = 0; i < resume["skills"].length; i = i + 1) {
        console.log(resume["skills"][i])};
    
        for (var i = 0;i<resume["habits"].length;i=i+1)
        console.log(resume["habits"][i]);*/
      

        //for in loop 
        for ( var key in resume){
            console.log(resume[key]);
        }

        // for of loop//

        var bio = Object.entries(resume);
        
        for ( var [key,value] of bio){
            console.log(value);
        }
// for each loop
        var bio = Object.entries(resume);
        bio.forEach(([key,value])=>console.log(value))

  
  
  
  