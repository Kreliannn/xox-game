let b11 = document.getElementById("b11");
let b12 = document.getElementById("b12");
let b13 = document.getElementById("b13");

let b21 = document.getElementById("b21");
let b22 = document.getElementById("b22");
let b23 = document.getElementById("b23");

let b31 = document.getElementById("b31");
let b32 = document.getElementById("b32");
let b33 = document.getElementById("b33");

let p1 = document.getElementById("player1");
let p2 = document.getElementById("player2");

let TURN = document.getElementById("turn");

let B1 = [];
let B2 = [];
let B3 = [];

p1.innerHTML = 0;
p2.innerHTML = 0;



let empty = [1,1,1,1,1,1,1,1,1,1,1,1];
let xturn = true;


//timer
setTimeout(function(){
  console.log("h");
},6000);
//

function _1B1()
{
  if(empty[1])
  {
    if(xturn)
    {  
      b11.innerHTML = "x";
      xturn = false;
      B1[1] = "x";
    }
    else
    {
      b11.innerHTML = "o";
      xturn = true;
      B1[1] = "o";
    }
      empty[1] = 0;
      if(xturn)TURN.src = "xturn.png";
      else TURN.src = "oturn.png";
      main();
  }
}
  

  
  



function _1B2()
{
  if(empty[2])
  {
    if(xturn)
    {  
      b12.innerHTML = "x";
      xturn = false;
      B1[2] = "x";
    }
    else
    {
      b12.innerHTML = "o";
      xturn = true;
      B1[2] = "o";
    }

    empty[2] = 0;
    if (xturn) TURN.src = "xturn.png";
    else TURN.src = "oturn.png";
    main();
  } 
}



function _1B3() 
{
  if(empty[3])
  {
    if(xturn)
    {  
      b13.innerHTML = "x";
      xturn = false;
      B1[3] = "x";
    }
    else
    {
      b13.innerHTML = "o";
      xturn = true;
      B1[3] = "o";
    }
    empty[3] = 0;
    if (xturn) TURN.src = "xturn.png";
    else TURN.src = "oturn.png";
    main();
  } 
}
 
 
function _2B1()
{
   if (empty[4])
   {
     if (xturn)
     {
       b21.innerHTML = "x";
       xturn = false;
       B2[1] = "x";
     }
     else
     {
       b21.innerHTML = "o";
       xturn = true;
       B2[1] = "o";
     }
     empty[4] = 0;
     if (xturn) TURN.src = "xturn.png";
     else TURN.src = "oturn.png";
     main();
   }
}


function _2B2()
{
    if (empty[5])
    {
      if (xturn)
      {
        b22.innerHTML = "x";
        xturn = false;
        B2[2] = "x";
      }
      else
      {
        b22.innerHTML = "o";
        xturn = true;
        B2[2] = "o";
      }
      empty[5] = 0;
      if (xturn) TURN.src = "xturn.png";
      else TURN.src = "oturn.png";
      main();
    }
}



function _2B3() 
{
    if (empty[6])
    {
      if (xturn)
      {
        b23.innerHTML = "x";
        xturn = false;
        B2[3] = "x";
      }
      else
      {
        b23.innerHTML = "o";
        xturn = true;
        B2[3] = "o";
      }
      empty[6] = 0;
      if (xturn) TURN.src = "xturn.png";
      else TURN.src = "oturn.png";
      main();
    }
}


function _3B1()
{
    if (empty[7])
    {
      if (xturn)
      {
        b31.innerHTML = "x";
        xturn = false;
        B3[1] = "x";
      }
      else
      {
        b31.innerHTML = "o";
        xturn = true;
        B3[1] = "o";
      }
      empty[7] = 0;
      if (xturn) TURN.src = "xturn.png";
      else TURN.src = "oturn.png";
      main();
    }
}


function _3B2()
{
  if (empty[8])
  {
    if (xturn)
    {
      b32.innerHTML = "x";
      xturn = false;
      B3[2] = "x";
    }
    else
    {
      b32.innerHTML = "o";
      xturn = true;
      B3[2] = "o";
    }
    empty[8] = 0;
    if (xturn) TURN.src = "xturn.png";
    else TURN.src = "oturn.png";
    main();
  }
}



function _3B3() 
{
    if (empty[9])
    {
      if (xturn)
      {
        b33.innerHTML = "x";
        xturn = false;
        B3[3] = "x";
      }
      else
      {
        b33.innerHTML = "o";
        xturn = true;
        B3[3] = "o";
      }
      empty[9] = 0;
      if (xturn) TURN.src = "xturn.png";
      else TURN.src = "oturn.png";
      main();
    }
}
 
 
 
function main()
{
  
if(!xturn)
{
  
  
  if(B1[1] == "x" && B1[2] == "x" && B1[3] == "x")
  {
    b11.style.background = "green";
    b12.style.background = "green";
    b13.style.background = "green";
    won();
    p1.innerText++;
    p1.style.background = "green";
  }
  else if (B2[1]=="x" && B2[2]=="x" && B2[3]=="x")
  {
    b21.style.background = "green";
    b22.style.background = "green";
    b23.style.background = "green";
    won();
    p1.innerText++;
    p1.style.background = "green";
  }
  else if (B3[1]=="x" && B3[2]=="x" && B3[3]=="x")
  {
    b31.style.background = "green";
    b32.style.background = "green";
    b33.style.background = "green";
    won();
    p1.innerText++;
    p1.style.background = "green";
  }
  else if (B1[1]=="x" && B2[1]=="x" && B3[1]=="x" )
  {
    b11.style.background = "green";
    b21.style.background = "green";
    b31.style.background = "green";
    p1.innerText++;
    p1.style.background = "green";
  }
  else if (B1[2]=="x" && B2[2]=="x" && B3[2]=="x")
  {
    b12.style.background = "green";
    b22.style.background = "green";
    b32.style.background = "green";
    won();
    p1.innerText++;
    p1.style.background = "green";
  }
  else if (B1[3]=="x" && B2[3]=="x" && B3[3]=="x")
  {
    b13.style.background = "green";
    b23.style.background = "green";
    b33.style.background = "green";
    won();
    p1.innerText++;
    p1.style.background = "green";
  }
  else if (B1[1]=="x" && B2[2]=="x" && B3[3]=="x")
  {
    b11.style.background = "green";
    b22.style.background = "green";
    b33.style.background = "green";
    won();
    p1.innerText++;
    p1.style.background = "green";
  }
  else if (B3[1]=="x" && B2[2]=="x" && B1[3]=="x")
  {
    b13.style.background = "green";
    b22.style.background = "green";
    b31.style.background = "green";
    won();
    p1.innerText++;
    p1.style.background = "green";
  }
  
  
  
}
else
{
  
  if(B1[1] == "o" && B1[2] == "o" && B1[3] == "o")
  {
    b11.style.background = "green";
    b12.style.background = "green";
    b13.style.background = "green";
    won();
    p2.innerText++;
    p2.style.background = "green";
  }
  else if (B2[1]=="o" && B2[2]=="o" && B2[3]=="o")
  {
    b21.style.background = "green";
    b22.style.background = "green";
    b23.style.background = "green";
    won();
    p2.innerText++;
    p2.style.background = "green";
  }
  else if (B3[1]=="o" && B3[2]=="o" && B3[3]=="o")
  {
    b31.style.background = "green";
    b32.style.background = "green";
    b33.style.background = "green";
    won();
    p2.innerText++;
    p2.style.background = "green";
  }
  else if (B1[1]=="o" && B2[1]=="o" && B3[1]=="o" )
  {
    b11.style.background = "green";
    b21.style.background = "green";
    b31.style.background = "green";
    won();
    p2.innerText++;
    p2.style.background = "green";
  }
  else if (B1[2]=="o" && B2[2]=="o" && B3[2]=="o")
  {
    b12.style.background = "green";
    b22.style.background = "green";
    b32.style.background = "green";
    won();
    p2.innerText++;
    p2.style.background = "green";
  }
  else if (B1[3]=="o" && B2[3]=="o" && B3[3]=="o")
  {
    b13.style.background = "green";
    b23.style.background = "green";
    b33.style.background = "green";
    won();
    p2.innerText++;
    p2.style.background = "green";
  }
  else if (B1[1]=="o" && B2[2]=="o" && B3[3]=="o")
  {
    b11.style.background = "green";
    b22.style.background = "green";
    b33.style.background = "green";
    won();
    p2.innerText++;
    p2.style.background = "green";
  }
  else if (B3[1]=="o" && B2[2]=="o" && B1[3]=="o")
  {
    b13.style.background = "green";
    b22.style.background = "green";
    b31.style.background = "green";
    won();
    p2.innerText++;
    p2.style.background = "green";
  }
 
  
}
  
}




function won(){
  
 if(!xturn)
 {
   TURN.src = "xwon.png";
 }
 else 
 {
   TURN.src = "owon.png";
 }
  
  empty = [0,0,0,0,0,0,0,0,0,0];
 
}

function RESTART()
{
  p1.style.background = "darkgray";
  p2.style.background = "darkgray";
  empty = [1,1,1,1,1,1,1,1,1,1,1,1];
  B1 = [0,0,0,0,0,0,0,0];
  B2 = [0,0,0,0,0,0,0,0];
  B3 = [0,0,0,0,0,0,0,0];
  b11.innerHTML = null;
  b12.innerHTML = null;
  b13.innerHTML = null;
  b21.innerHTML = null;
  b22.innerHTML = null;
  b23.innerHTML = null; 
  b31.innerHTML = null;
  b32.innerHTML = null;
  b33.innerHTML = null;
  xturn = true;
  TURN.src = "xturn.png"
    b11.style.background = null;
    b12.style.background = null;
    b13.style.background = null;
    b21.style.background = null;
    b22.style.background = null;
    b23.style.background = null;
    b31.style.background = null;
    b32.style.background = null;
    b33.style.background = null;
    
}
