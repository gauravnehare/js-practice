function triplets(a,b){
	var c=[0,0]
	for(var i = 0; i < a.length || i < b.length; i++){
	if(a[i] == b[i]){
		c[0] += 0;
		c[1] += 0;	
	}else if(a[i] < b[i]){
		c[1] += 1;
	} else{
		c[0] += 1;
	}		
	}
	console.log(c[0],c[1]);	
};
var a=[17,28,30];
var b=[99,16,8];
triplets(a,b);
