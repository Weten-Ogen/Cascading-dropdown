//the various items in the object

const subObject = {

    "Front-end" : {
        "HTML" :
        ["links, Images, Tables, Lists"],
        "CSS":
        ["Borders","Margins","Backgrounds","Floats"],
        "Javascript":
        ["Variables","Operators","Functions","Conditions"]
    },
    
    "Back-end":{
        "PHP":["Variables","Strings","Arrays"],
        "SQL":["SELECT","UPDATE","DELETE"]
    }
}

window.onload = function(){
    const subSel = document.querySelector("#subject");
    const topSel = document.querySelector("#topics");
    const chapSel = document.querySelector("#chapters")
    
   
    for(let x in subObject){
        subSel.options[subSel.options.length] = new Option(x,x);
    }

    subSel.onchange = function(){ 
        chapSel.length = 1;
        topSel.length  = 1;
        
        //display correct values;

        for(let y in subObject[this.value]){
            topSel.options[topSel.options.length] = new Option(y,y);
        }

        topSel.onchange = function(){
            chapSel.length = 1;

            let z = subObject[subSel.value][this.value];
            
            for(let i = 0; i < z.length; i++){
                chapSel.options[chapSel.options.length] = new Option(z[i],z[i]);
            }
        }
    }
};

















