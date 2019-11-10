//随机十六进制颜色
function Sixteencolor(){
            var arr = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
            var color = '#';
            for(var i = 0; i < 6; i++){
                color += arr[parseInt(Math.random()*16)];
            }
            return color;
}
//随机整数
function randomInt(m,n){
    var num = parseInt(Math.random()*(n - m + 1) + m );
    return num;
}
//随机rgb颜色
function rgbColor(){
    var r = parseInt(Math.random()*256);
    var g = parseInt(Math.random()*256);
    var b = parseInt(Math.random()*256);
    var color = 'rgb('+r+','+g+','+b+')';
    return color;

}