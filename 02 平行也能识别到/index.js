window.onload=function() {
    //定义变量
    var arr1,arr2,ipt,c1,c2,m,n,flag=false,
        btn1 = document.getElementById("btn1"),
        btn2 = document.getElementById("btn2"),
        rst1 = document.getElementById("rst1"),
        rst2 = document.getElementById("rst2"),
        rst3 = document.getElementById("rst3"),
        rst4 = document.getElementById("rst4");
    //点击事件1
    btn1.onclick = function () {
        arr1=[];
        arr2=[];
        rst1.innerHTML="";
        rst2.innerHTML="";
        rst3.innerHTML="";
        rst4.innerHTML="";
        ipt=document.getElementById("ipt").value;
        arrange();
        c1=selectBiggest();
        for(m=0;m<c1.length;m++){
            rst1.innerHTML=rst1.innerHTML+"\""+arr1[c1[m]]+"\"";
            rst2.innerHTML=arr2[c1[m]];
        }
        c2=selectSmallest();
        for(n=0;n<c2.length;n++){
            rst3.innerHTML=rst3.innerHTML+"\""+arr1[c2[n]]+"\"";
            rst4.innerHTML=arr2[c2[n]];
        }
    };
    //点击事件2
    btn2.onclick=function(){
        ipt=document.getElementById("ipt");
        ipt.value="";
        rst1.innerHTML="";
        rst2.innerHTML="";
        rst3.innerHTML="";
        rst4.innerHTML="";
        arr1=[];
        arr2=[];
    };
    //封装函数
    var arrange=function(){//排列数组的字符&判断其个数
        for(var j=0;j<=ipt.length-1;j++){
            if(ipt.charAt(j)!==" "){
                for(var i=0;i<=arr1.length-1;i++){
                    if(arr1[i]==ipt.charAt(j)){
                        arr2[i]=parseFloat(arr2[i])+1;
                        flag=true;
                    }
                }
                if(flag==false){
                    arr1.push(ipt.charAt(j));
                    arr2.push("1");
                }
                flag=false;
            }
        }

    };
    var selectBiggest=function(){//挑出数组中出现次数最多的字符及其次数
        var a1,b1,c1=[0],z1;
        a1=arr2[0];
        for(var x=1;x<arr2.length;x++){
            b1=arr2[x];
            if(a1<b1){
                a1=b1;
                c1=[x];
            }else if(a1==b1){
                c1.push(x);
            }
        }// alert(arr1[c1]+":"+arr2[c1]);
        return c1;
    };
    var selectSmallest=function(){//挑出数组中出现次数最少的字符及其次数
        var a2,b2,c2=[0],z2;
        a2=arr2[0];
        for(var y=1;y<arr2.length;y++){
            b2=arr2[y];
            if(a2>b2){
                a2=b2;
                c2=[y];
            }else if(a2==b2){
                c2.push(y);
            }
        }// alert(arr1[c2]+":"+arr2[c2]);
        return c2;
    };
};
