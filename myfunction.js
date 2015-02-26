function test(){
    document.write("test");
    }

function zeroPad(number,width){
    var string =String(Math.round(number));
    while(string.length<width)
        string="0"+string;

    return string;
    }

function busy(number){
    var string= "i am busy "+number;
    return string;
    }
