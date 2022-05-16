let counter = 0;
const getData = () => {
    console.log("Fetching Data.." , counter++)
}

const debounce  = function(fn,d){
    let timer;
    return function(){
        let context = this;
        let args = arguments;
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(context,args)
        }, d);
    }
    
}
const betterFunction = debounce(getData, 300)