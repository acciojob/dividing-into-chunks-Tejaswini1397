const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	let result=[];
	let subArray=[];
	for(let i=0;i<srr.lenght;i++){
		if(subArray.reduce((sum,num)=> sum+num,0)+arr[i]>n){
			result.push(subArray);
			subArray=arr[i];
		}else{
			subArray.push(arr[i]);
		}
	}
	result.push(subArray);
	return result;
	
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
