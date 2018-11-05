window.onload = function(){
    document.forms.form.hint.value="i re\nn s\np u\nu l\nt t\n";
    var lstInput = "", lstHint = "";
    function loop(){
        var tmpInput = document.forms.form.input.value;
        var tmpHint = document.forms.form.hint.value;
        if(lstInput == tmpInput && lstHint == tmpHint)return;
        lstInput = tmpInput;
        lstHint = tmpHint;
        var inputs = tmpInput.split(/\r\n|\r|\n|\s/);
        var hints = tmpHint.split(/\r\n|\r|\n/);
        for(var i = 0; i < hints.length; i++){
            hints[i] = hints[i].split(/\s/);
        }
        var result = "";
        for(var i = 0; i < inputs.length;i++){
            if(i)result += " ";
            var tmpStr = "";
            for(var j = 0; j < inputs[i].length;j++){
                var flg = 1;
                for(var k = 0;k < hints.length;k++){
                    if(inputs[i][j]==hints[k][0]){
                        flg = 0;
                        tmpStr += hints[k][1];
                        break;
                    }
                }
                if(flg)tmpStr += inputs[i][j];
            }
            result += tmpStr;
        }
        document.forms.form.result.value = result;
        var count = "";
        var pairs = [];
        for(var i = 0; i < inputs.length; i++){
            var flg = 0;
            for(var j=0;j<i;j++){
                if(inputs[i]==inputs[j])flg=1;
            }
            if(flg)continue;
            var cnt = 1;
            for(var j=i+1;j<inputs.length;j++){
                if(inputs[i]==inputs[j])cnt++;
            }
            pairs.push({num:cnt,str:inputs[i]});
        }
        pairs.sort(function(a,b){
            if(a.num > b.num)return -1;
            if(a.num < b.num)return 1;
            if(a.str < b.str)return -1;
            if(a.str > b.str)return 1;
            return 0;
        });
        for(var i=0;i<pairs.length;i++){
            var tmpStr = "";
            tmpStr += pairs[i].num;
            tmpStr += " ";
            tmpStr += pairs[i].str;
            tmpStr += " ";
            for(var j = 0; j < pairs[i].str.length; j++){
                var flg = 1;
                for(var k = 0; k < hints.length; k++){
                    if(pairs[i].str[j]==hints[k][0]){
                        flg=0;
                        tmpStr += hints[k][1];
                        break;
                    }
                }
                if(flg)tmpStr += pairs[i].str[j];
            }
            tmpStr += "\n";
            count += tmpStr;
        }
        document.forms.form.count.value = count;
    }
    setInterval(loop, 100);
}