document.addEventListener("DOMContentLoaded",()=>{

  // enquiry form
  const btn=document.querySelector(".enquiry-box button");
  if(btn){
    btn.onclick=()=>{
      const inputs=document.querySelectorAll(".enquiry-box input");
      let ok=true;
      inputs.forEach(i=>{
        if(!i.value.trim()){ok=false;i.style.border="2px solid red";}
        else i.style.border="none";
      });
      if(ok) alert("Form submitted (logic later)");
    };
  }

  // slider
  const grid=document.querySelector(".why-grid");
  const prev=document.querySelector(".why-prev");
  const next=document.querySelector(".why-next");

  if(grid && prev && next){
    next.onclick=()=>grid.scrollBy({left:360,behavior:"smooth"});
    prev.onclick=()=>grid.scrollBy({left:-360,behavior:"smooth"});
  }
});
