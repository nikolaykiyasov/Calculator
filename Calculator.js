$(document).ready(function() {
  var entry = '';
  var current = [];
  var log = '';
  var data1 = [], data2 = [];
  var i = 0, j = 0;
  var vmeste = [];
  var operat = [];
  var sum1 = 0;
  var result1 = [];
  function operation(oper,cur1,cur2){
    var value;
    switch (oper){
      case '/': value = cur1 / cur2; break; 
      case '*': value = cur1 * cur2; break;
      case '+': value = cur1 + cur2; break;
      case '-': value = cur1 - cur2; break;
    }
  return value;
  }
  
 $('button').click(function() {

    entry = $(this).attr("value");
   // строку в число
   if(Number(entry) || entry === '.' || entry === '0') { 
  
        current.push(entry);
        $('#answer').html(current);
        log += entry;
        $('#history').html(log);
      
      }

  if(entry === '*'){
   $('#answer').html('*');
    log += entry;
    $('#history').html(log);
   data1 = current.join('');
    data2[i] = data1;
   operat[i] = '*';
   current= [];
    i++;  
 } else
   if(entry === '/'){

   $('#answer').html('/');
     log += entry;
     $('#history').html(log);
   data1 = current.join('');
    data2[i] = data1;
   operat[i] = '/';
   current= [];
     i++;
 } 
  else
   if(entry === '-'){
   $('#answer').html('-');
     log += entry;
     $('#history').html(log);
   data1 = parseFloat(current.join(''));
   data2[i] = data1;
   operat[i] = '-';
   current= [];
     i++;
 } else
   if(entry === '+'){
   $('#answer').html('+');
     log += entry;
     $('#history').html(log);
    data1 = parseFloat(current.join(''));
     data2[i] = data1;
     operat[i] = '+';
    current= [];
     i++;
 }
   
    
  if ( entry=="="){ 
 var sum = data2[0];
  vmeste = parseFloat(current.join(''));
  for ( i = 0 ; i < data2.length-1 ; i++){
   //if (operat[i]== "*" || operat[i]=='/'){
    sum = operation(operat[i],sum,data2[i+1]);
 
  }

         data1 = operation(operat[i],sum,vmeste);
        
    

    $('#answer').html(data1);
       
        log=log+'='+data1;
        $('#history').html(log);
        data2 = [];
        i = 0;
        sum = [];
        operat = [];
        sum1 = data1;
         
      }
    
 result = parseFloat(current.join(''));
   if(entry === 'ac' || entry === 'ce'){
      current = [];
      entry = '';
      log = '';
     $('#answer').html(0);
     $('#history').html(0);
   }
   
 });
});