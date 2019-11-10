function Sixteencolor(){
            var arr = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
            var color = '#';
            for(var i = 0; i < 6; i++){
                color += arr[parseInt(Math.random()*16)];
            }
            return color;
        }