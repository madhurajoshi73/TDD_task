export function add(numbers){
    var arr = numbers.split(",").filter(a=>a!='')
    var add=0
    if(numbers==0 || arr.length==0){
        return 0
    }
    else if(arr.length==1){
        return parseInt(arr[0])
    }
    for(var i=0;i<arr.length;i++){
        add=add+parseInt(arr[i])
    }
    return add
}

