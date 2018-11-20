var k=4;
var jumlahparameter=5;
var hasil=[];
var datatest;
var datatrain;
function subhitungjarak(i,x,cell){
    return Math.abs(hasil[i][0][x] - cell[x]);
}
function hitungjarak(i,cell){
    jarak=0;
    for (var a = 1; a<jumlahparameter+1; a++) {
        jarak+=subhitungjarak(i,a,cell);
    }
    return jarak;
}
function preproses(cell){
    hasil.push([[cell[0],cell[1],cell[2],cell[3],cell[4],cell[5],cell[6]],[]]);
}
function sort(i){
    hasil[i][1].sort(function(a,b){return b[0]-a[0];});
}
function isidata(i,cell){
    hasil[i][1].push([hitungjarak(i,cell),cell[6]]);
    sort(i);
}
function change(i,x){
    hasil[i][1][0]=x;
    sort(i);
}
function checkdata(i,cell){
    var x=[hitungjarak(i,cell),cell[6]];
    x[0]<hasil[i][1][0][0]? change(i,x):{};
}
function voting(i){
    hasil[i][0][6]=[[hasil[i][1].filter(function(a){return a[1]==0;}).length,0],[hasil[i][1].filter(function(a){return a[1]==1;}).length,1],[hasil[i][1].filter(function(a){return a[1]==2;}).length,2],[hasil[i][1].filter(function(a){return a[1]==3;}).length,3]].sort(function(a,b){return b[0]-a[0]})[0][1];
}