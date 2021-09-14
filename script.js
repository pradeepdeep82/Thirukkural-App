
async function kuralInfo(x){
  try{
    let kuralNo=document.querySelector('#KuralNo').value;
    let data= await fetch(`https://api-thirukkural.vercel.app/api?num=${kuralNo}`)
    let kural=await data.json();
    console.log(kural);
    document.querySelector('.kuralData').innerHTML="";
    if(x==='tamil'){
    document.querySelector('.kuralData').innerHTML=` <br>
    <h2><span>பால்:</span> ${kural.sect_tam}</h2>
    <h2><span>இயல்:</span> ${kural.chapgrp_tam}</h2>
    <h2><span>அதிகாரம்:</span> ${kural.chap_tam}</h2> <br>
    <div class="kural">
      <h3><span>குறள்:</span></h3>
      <h5>${kural.line1}</h5>
      <h5>${kural.line2}</h5>
      <h3><span>குறள் விளக்கம்:</span></h3>
      <h5>${kural.tam_exp}.</h5>
    </div>
    `;
    }
    if(x==='english'){
      document.querySelector('.kuralData').innerHTML=`
    <h2><span>Section:</span> ${kural.sect_eng}</h2>
    <h2><span>Chapter Group:</span> ${kural.chapgrp_eng}</h2>
    <h2><span>Chapter:</span> ${kural.chap_eng}</h2>
    <div class="kural">
      <h3><span>Kural:</span></h3>
      <h5>${kural.eng}</h5> 
      <h3><span>Kural Explanation:</span></h3>
      <h5>${kural.eng_exp}.</h5>
    </div>
    `;
    }


  }
  catch(err){
    console.log('Error');
    document.querySelector('.kuralData').innerHTML=`<br>
    <div class='errorMsg'>
      <h3>சில பிழைகள் ஏற்பட்டன...</h3>
      <h3>Sorry... Error have occured</h3>
    </div>`;
  }
}
