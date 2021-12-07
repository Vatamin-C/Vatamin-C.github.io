//header section start//
const aboutBtn1 = document.querySelector(".aboutbtn1");
const aboutBtn2 = document.querySelector('.aboutbtn2');
const aboutPg = document.querySelector('.aboutPg');
const personal = document.querySelector('#personal');
const maintag = document.querySelector("main");
const siteName = document.querySelector(".siteMve");
const emailTag = document.querySelector(".emailAdd");
const phoneTag = document.querySelector(".phoneNum");
const headingBtn = document.querySelector('#headingbtn');
const gitBtn = document.querySelector('.git');
const fbBtn = document.querySelector('.face');
const nameShow = document.querySelector('.nameShow');
const ageShow = document.querySelector('.ageShow');


const displayBtn = () => {
    aboutBtn1.style.display = 'inline'
    aboutPg.style.display = 'none'
    aboutBtn2.style.display = 'inline'
    personal.style.display = 'none'
}
const displayPersonal = () => {
    aboutBtn1.style.display = 'none'
    aboutPg.style.display = 'none'
    aboutBtn2.style.display = 'none'
    personal.style.display = 'inline'
}
const displayAboutpg = () => {
    aboutBtn1.style.display = 'none'
    aboutPg.style.display = 'inline'
    aboutBtn2.style.display = 'none'
    personal.style.display = 'none'
}
let b1e = 0;
emailTag.addEventListener('click', () => {
    b1e++;
    if (b1e === 1) {
        emailTag.style.fontSize = '12px';
        emailTag.innerHTML = 'yaphets.psk@gmail.com';
    } else {
        emailTag.style.fontSize = '16px';
        emailTag.innerHTML = 'Email';
        displayBtn()
        return b1e = 0;
    }
})

let b1p = 0;
phoneTag.addEventListener('click', () => {
    b1p++;
    if (b1p === 1) {
        phoneTag.style.fontSize = '12px';
        phoneTag.innerHTML = '(+959)-262312098'
    } else {
        phoneTag.style.fontSize = '16px';
        phoneTag.innerHTML = 'Phone';
        displayBtn();
        return b1p = 0;
    }
});
let b2n = 0;
nameShow.addEventListener('click', ()=> {
    b2n++;
    if(b2n===1) {
        nameShow.style.fontSize = '12px'
        nameShow.innerHTML = 'Pyae Sone Kyaw'
    } else {
        nameShow.style.fontSize = '16px'
        nameShow.innerHTML = 'Name'
        displayBtn();
        return b2n = 0;
    }
});
let b2a = 0;
ageShow.addEventListener('click', ()=> {
    b2a++;
    if (b2a===1) {
        ageShow.style.fontSize = '12px'
        ageShow.innerHTML = '22 - \'born in 1999\''
    } else {
        ageShow.style.fontSize = '16px';
        ageShow.innerHTML = 'Age'
        displayBtn();
        return b2a = 0;
    }
})

gitBtn.addEventListener('click', () => {
    displayBtn();
});
fbBtn.addEventListener('click', () => {
    displayBtn();
})


maintag.addEventListener('mouseup', () => {
    displayBtn();
});
siteName.addEventListener('mouseup', () => {
    displayBtn();
})

let b1 = 0;
aboutBtn1.addEventListener('click', () => {
    b1++;
    if (b1 === 1) {
        displayAboutpg();
        return b1 = 0;
    }
});
let b2 = 0;
aboutBtn2.addEventListener('click', ()=> {
    b2++;
    if (b2===1) {
        displayPersonal();
        return b2 = 0;
    }
});
//header section end //

/* <table style="display: flex; justify-content: center; padding-top: 20px;">
                    <tr>
                        <td> <img style="max-height: 500px;" id="hdls" src="Yellow Illustrative Stay Home And Read A Book Instagram Post(1).svg" alt=""></td>
                        <td> <ul class="hdlsList">
                            <li>Created for E-Library</li>
                            <li>Using <span style="color: #EC255A;">HTML, CSS, Bootstrap, JS</span></li>
                        </ul></td>
                    </tr>
                </table> */