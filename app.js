export function add(numbers){
    var arr = numbers.split(/[,\n]+/).filter(a=>a!='' && a!=" ")
    var negativenum=[]
    try{
    if(arr.length!=0 && arr[0].startsWith("//")){
        var temp =  numbers.split(/\n/).filter(a=>a!='')
        var delim = temp[0].substr(2)
        var filttemp = temp.filter(a=>!a.startsWith("//")).join("\n")
        var re = new RegExp("[\n," + delim + "]+", "g");
        arr=filttemp.split(re).filter(a=>a!='' && a!=" ")
    }
    var add=0
    if(numbers==0 || arr.length==0){
        return 0
    }
    else if(arr.length==1){
        return parseInt(arr[0])
    }
    for(var i=0;i<arr.length;i++){
        if(arr[i]<0){
            negativenum.push(arr[i])
        }
        add=add+parseInt(arr[i])
    }
    if(negativenum.length!=0){
        throw("Negative numbers not allowed "+negativenum)
    }
    return add
    }
    catch(e) {
        return e
    }
}

