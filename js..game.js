let title =document.querySelector('.title');
let a =document.querySelector('.a');
let turn = 0;
let arr=[];
let x,i,counter=0;
let ide;
let CH;
function draw()
{
    title.innerHTML='';
    a.innerHTML =' draw ';
    setInterval(function(){a.innerHTML+='.'},1000);
    setTimeout(function(){location.reload()},4000)
    
}

function end( num1, num2,num3,CH)
{

a.innerHTML =' win ';
document.getElementById(num1).style.background='#000';
document.getElementById(num2).style.background='#000';
document.getElementById(num3).style.background='#000';
title.innerHTML=CH;
turn = 4;
setInterval(function(){a.innerHTML+='.'},1000);
setTimeout(function(){location.reload()},4000)
}
function win(CH)
{
    for (i=1;i<10;++i)
    {
        arr[i]= document.getElementById(i).innerHTML;
    }
    for(i=1;i<10;i+=3)
    {
    if(arr[i]==arr[i+1]&&arr[i]==arr[i+2]&&arr[i]!=='')
    {
        end(i,i+1,i+2,CH);
        return 1;
    }
}
for(i=1;i<4;i++)
{
if(arr[i]==arr[i+3]&&arr[i]==arr[i+6]&&arr[i]!=='')
{
    end(i,i+3,i+6,CH);
    return 1;
}
}
if(arr[1]==arr[5]&&arr[1]==arr[9]&&arr[9]!=='')
{
    end(1,5,9,CH);
    return 1;
}
if(arr[3]==arr[5]&&arr[3]==arr[7]&&arr[7]!=='')
{
    end(3,5,7,CH);
    return 1;
}
else if(counter==8)
   { draw();
   }
}
function compgame()
{
    counter++;
    if(arr[5]=='')
    {
        arr[5]='O';
        tkmla(5);
        return;
    }
    for(i=1;i<9;i+=3)
    {
        if(arr[i]==arr[i+1]||arr[i]==arr[i+2]||arr[i+1]==arr[i+2])
        {m=0;
            if(arr[i]=='O')
            {
                m++;
            }
            if(arr[i+1]=='O')   
            {
                m++;              
            }

            if(arr[i+2]=='O')   
            {
                m++;               
            }
            if(m==2)
            {
            for(m=i;m<i+3;m++)
            {
                if (arr[m]=='')
                {
                    arr[m]='O';
                    tkmla(m);
                    return;
            }
        }
    }
    }
}
for(i=1;i<4;i++)
{
    if(arr[i]==arr[i+3]||arr[i]==arr[i+6]||arr[i+6]==arr[i+3])
    {m=0;
        if(arr[i]=='O')
        {
            m++;
        }
         if(arr[i+3]=='O')   
        {
            m++;              
        }
        if(arr[i+6]=='O')   
        {
            m++;               
        }
        if(m==2)
        {
        for(m=i;m<i+7;m+=3)
        {
            if (arr[m]=='')
            {
                arr[m]='O';
                tkmla(m);
                return;
        }
    }
}
}
}  
    if(arr[1]==arr[5]&&arr[9]=='')
    {
        arr[9]='O';
        tkmla(9);
    }
    for(i=1;i<9;i+=3)
       {
            if(arr[i]==arr[i+1]||arr[i]==arr[i+2]||arr[i+1]==arr[i+2])
            {m=0;
                if(arr[i]=='')
                {
                    m++;
                }
                if(arr[i+1]=='')   
                {
                    m++;              
                }    
                if(arr[i+2]=='')   
                {
                    m++;               
                }
                if(m==1)
                {
                for(m=i;m<i+3;m++)
                {
                    if (arr[m]=='')
                    {
                        arr[m]='O';
                        tkmla(m);
                        return;
                }
            }
        }
        }
    }
    for(i=1;i<4;i++)
    {
        if(arr[i]==arr[i+3]||arr[i]==arr[i+6]||arr[i+6]==arr[i+3])
        {m=0;
            if(arr[i]=='')
            {
                m++;
            }
                if(arr[i+3]=='')   
            {
                m++;              
            }
            if(arr[i+6]=='')   
            {
                m++;               
            }if(m==1)
            {
            for(m=i;m<i+7;m+=3)
            {
                if (arr[m]=='')
                {
                    arr[m]='O';
                    tkmla(m);
                    return;
            }
        }
    }
    }
    }
        for(i=1;i<9;i+=4)
        {
            if(arr[i]=='')
            {
                tkmla(i);
                return;
            }       
             i=i+2;
            if(arr[i]=='')
            {
                tkmla(i);
                return;
            }
            }
    
}

function tkmla(ide){
    element=document.getElementById(ide);
    turn=0;
    element.innerHTML='O';
    title.innerHTML='X';
    win('O');
}
function game(id)
{
    let element = document.getElementById(id);
    if(turn == 0 && element.innerHTML=='')
    {
        element.innerHTML='X';
        turn=1;
        title.innerHTML='comp game';
        if(win('X')!=1)
    {
        compgame();
        counter++;
    }}
} 