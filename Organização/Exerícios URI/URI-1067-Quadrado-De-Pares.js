var num;

do{
    num = prompt("Digite um valor")
}while(!(num >= 5 && num <=2000));

for(i=1;i<=num;i++){
    if(i%2==0){
        console.log(i+"^2 = "+(i*i))
    }
}