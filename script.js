

  

let f1 = function(callback){
    setTimeout(()=>{
        console.log(10);
        document.querySelector("#data").innerHTML=10;
        callback();
    },1000);
  
}
let f2 = function(callback){
    setTimeout(()=>{
        console.log(9);
        document.querySelector("#data").innerHTML=9;
        callback();
    },1000);
}
let f3 = function(callback){
    setTimeout(()=>{
        console.log(8);
        document.querySelector("#data").innerHTML=8;
        callback();
    },1000);
}
let f4 = function(callback){
    setTimeout(()=>{
        console.log(7);
        document.querySelector("#data").innerHTML=7;
        callback();
    },1000);
}
let f5 = function(callback){
    setTimeout(()=>{
        console.log(6);
        document.querySelector("#data").innerHTML=6;
        callback();
    },1000);
}
let f6 = function(callback){
    setTimeout(()=>{
        console.log(5);
        document.querySelector("#data").innerHTML=5;
        callback();
    },1000);
}
let f7 = function(callback){
    setTimeout(()=>{
        console.log(4);
        document.querySelector("#data").innerHTML=4;
        callback();
    },1000);
}
let f8 = function(callback){
    setTimeout(()=>{
        console.log(3);
        document.querySelector("#data").innerHTML=3;
        callback();
    },1000);
}
let f9 = function(callback){
    setTimeout(()=>{
        console.log(2);
        document.querySelector("#data").innerHTML=2;
        callback();
    },1000);
}
let f10 = function(callback){
    setTimeout(()=>{
        console.log(1);
        document.querySelector("#data").innerHTML=1;    
        callback();
    },1000);
}

f1(()=>{
    f2(()=>{
        f3(()=>{
            f4(()=>{
                f5(()=>{
                    f6(()=>{
                        f7(()=>{
                            f8(()=>{
                                f9(()=>{
                                    f10(()=>{
                                        setTimeout(()=>{
                                            console.log("Happy independence day");
                                            document.querySelector("#data").innerHTML="Happy independence day";
                                        },1000)
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
});