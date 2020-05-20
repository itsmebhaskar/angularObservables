import { of, observable, Observable } from 'rxjs'; 
import { map, timeInterval } from 'rxjs/operators';

const sequencegenerator=new Observable<number>((observer)=>{
let count:number=0;

setInterval(()=>{
  count=count+1;
  observer.next(count);
},1000)

return{unsubscribe()
{
  count=0;
}}
  
})

let subscription=sequencegenerator.subscribe((seq)=>{
  console.log(seq);
},err=>{})


setTimeout(()=>{
  subscription.unsubscribe();
},6000);