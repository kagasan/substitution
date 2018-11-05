window.onload = function(){
    document.forms.form.input.value="yvd yf teb dplrhg sez bggzgu ivehwmq dy xlwg tg grfymugu teb ugmml fyp dgr bghyrub mgd vb pgnlpu xedt uebhpggd bhpvderq byzg erhyrbgivgrdelm yjsghd er dtg ydtgp uepghdeyr gentd uymmlpb l xggw yp l zemmeyr l qglpxtld eb dtg ueffgpgrhg l zldtgzldehelr yp l xed xyvmu nekg qyv dtg xpyrn lrbxgp dtg zlne jpyvntd klmvljmg nefdb jvd dtld xlb ryd lzyrn dtgz dteb ulpw lbbgpdeyr xemm jg emmvzerldgu mldgp yrsez upgx l alhwlng fpyz teb ykgphyld ayhwgd lru dtpgx ed vayr dtg dljmguyrd zlwg lrq zebdlwg ugmm tg bleu ljyvd zg e uyrd dterw dtgpgb lrqdtern er dtg xlq yf l tlephvd yp l btlkg yp l btlzayy dtld hyvmu zlwg zg mewg zq nepm lrq mgbb jvd ef qyvmm vrxpla dtld alhwlng qyv zlq bgg xtq qyv tlu zg nyern l xtemg ld fepbdxtedg ferngpb lru rezjmg dypg ld dtg bdpern lru alagp lru dtgr lr ghbdldeh bhpglz yf syq lru dtgr lmlb!	l ivehw fgzererg htlrng dy tqbdgpehlm dglpb lru xlemb rghgbbedldern dtg ezzgueldg gzamyqzgrd yf lmm dtg hyzfypdern ayxgpb yf dtg mypu yf dtg fmldfyp dtgpg mlq dtg hyzjbdtg bgd yf hyzjb beug lru jlhw dtld ugmml tlu xypbteaagu myrn er l jpyluxlq xeruyx jglvdefvm hyzjb avpg dypdyebg btgmm xedt sgxgmmgu pezbsvbd dtg btlug dy xglp er dtg jglvdefvm klrebtgu tlep dtgq xgpg goagrbekg hyzjb btg wrgx lru tgp tglpd tlu bezamq hplkgu lru qglprgu ykgp dtgz xedtyvd dtg mglbd tyag yf aybbgbbeyr lru ryx dtgq xgpg tgpb jvd dtg dpgbbgb dtld btyvmu tlkg luyprgu dtg hykgdgu luyprzgrdb xgpg nyrgjvd btg tvnngu dtgz dy tgp jybyz lru ld mgrndt btg xlb ljmg dy myyw va xedt uez gqgb lru l bzemg lru blq zq tlep npyxb by flbd sez! lru dtgz ugmml mglagu va mewg l meddmg berngu hld lru hpegu yt yt! sez tlu ryd qgd bggr teb jglvdefvm apgbgrd btg tgmu ed yvd dy tez glngpmq vayr tgp yagr almz dtg uvmm apgheyvb zgdlm bggzgu dy fmlbt xedt l pgfmghdeyr yf tgp jpentd lru lpugrd baepedebrd ed l ulruq sez e tvrdgu lmm ykgp dyxr dy feru ed qyvmm tlkg dy myyw ld dtg dezg l tvrupgu dezgb l ulq ryx nekg zg qyvp xldht e xlrd dy bgg tyx ed myywb yr ederbdglu yf yjgqern sez dvzjmgu uyxr yr dtg hyvht lru avd teb tlrub vrugp dtg jlhw yf teb tglu lru bzemguugmm bleu tg mgdb avd yvp htpebdzlb apgbgrdb lxlq lru wgga gz l xtemg dtgqpg dyy rehg dy vbg svbd ld apgbgrd e bymu dtg xldht dy ngd dtg zyrgq dy jvq qyvp hyzjb lru ryx bvaaybg qyv avd dtg htyab yrdtg zlne lb qyv wryx xgpg xebg zgrxyrugpfvmmq xebg zgrxty jpyvntd nefdb dy dtg jljg er dtg zlrngp dtgq erkgrdgu dtg lpd yf nekern htpebdzlb apgbgrdb jgern xebg dtgep nefdb xgpg ry uyvjd xebg yrgb aybbejmq jglpern dtg apekemgng yf gohtlrng er hlbg yf uvamehldeyr lru tgpg e tlkg mlzgmq pgmldgu dy qyv dtg vrgkgrdfvm htpyrehmg yf dxy fyymebt htemupgr er l fmld xty zybd vrxebgmq blhpefehgu fyp glht ydtgp dtg npgldgbd dpglbvpgb yf dtgep tyvbg jvd er l mlbd xypu dy dtg xebg yf dtgbg ulqb mgd ed jg bleu dtld yf lmm xty nekg nefdb dtgbg dxy xgpg dtg xebgbd y lmm xty nekg lru pghgekg nefdb bvht lb dtgq lpg xebgbd gkgpqxtgpg dtgq lpg xebgbd dtgq lpg dtg zlne";
    document.forms.form.hint.value="a A\nb B\nc C\nd D\ne E\nf F\ng G\nh H\ni I\nj J\nk K\nl L\nm M\nn N\no O\np P\nq Q\nr R\ns S\nt T\nu U\nv V\nw W\nx X\ny Y\nz Z";
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
        var countChar = "";
        var cpairs = [];
        for(var i = 0; i < lstInput.length;i++){
            var flg = 0;
            for(var j = 0;j<i;j++){
                if(lstInput[j]==lstInput[i]){
                    flg=1;
                    break;
                }
            }
            if(flg)continue;
            var cnt = 1;
            for(var j=i+1;j<lstInput.length;j++){
                if(lstInput[j]==lstInput[i])cnt++;
            }
            cpairs.push({num:cnt,char:lstInput[i]});
        }
        cpairs.sort(function(a,b){
            if(a.num > b.num)return -1;
            if(a.num < b.num)return 1;
            if(a.str < b.str)return -1;
            if(a.str > b.str)return 1;
            return 0;
        });
        for(var i=0;i<cpairs.length;i++){
            if(cpairs[i].char==' ')continue;
            var tmpStr = "";
            tmpStr += cpairs[i].num;
            tmpStr += " ";
            tmpStr += cpairs[i].char;
            tmpStr += " ";
            var flg = 1;
            for(var j = 0; j < hints.length; j++){
                if(cpairs[i].char==hints[j][0]){
                    flg=0;
                    tmpStr += hints[j][1];
                    break;
                }
            }
            if(flg)tmpStr += cpairs[i].char;
            tmpStr += "\n";
            countChar += tmpStr;
        }
        document.forms.form.countChar.value = countChar;
    }
    setInterval(loop, 100);
}