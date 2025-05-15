//Named export 인 경우
//import * as mortgage from './mortgage';
//import { calculateAmortization } from './mortgage';

//Default export 인 경우
//import calculateAmortization from "./mortgage";
//import calcAmortization from "./mortgage";
//import { calculateAmortization as calcAmortization } from "./mortgage";

import Mortgage from "./mortgageClass";
import '../css/styles.css';

document.getElementById('calcBtn').addEventListener('click', () => {
    var principal = document.getElementById("principal").value;
    var years = document.getElementById("years").value;
    var rate = document.getElementById("rate").value;
    //destructuring assignment
    //let { monthlyPayment, monthlyRate } = calculateMonthlyPayment(principal, years, rate);
    
    //Named Export
    //let { monthlyPayment, monthlyRate, amortization } = mortgage.calculateAmortization(principal, years, rate);
    
    //Default Export
    //let { monthlyPayment, monthlyRate, amortization } = calculateAmortization(principal, years, rate);
    //let { monthlyPayment, monthlyRate, amortization } = calcAmortization(principal, years, rate);

    // document.getElementById("monthlyPayment").innerHTML = monthlyPayment.toFixed(2);
    // document.getElementById("monthlyRate").innerHTML = (monthlyRate * 100).toFixed(2);
    // amortization.forEach(month => console.log(month));

    //Mortgage 객체생성
    let mortgage = new Mortgage(principal, years, rate);
    document.getElementById("monthlyPayment").innerHTML = mortgage.monthlyPayment.toFixed(2);
    document.getElementById("monthlyRate").innerHTML = (rate / 12).toFixed(2);
 
    let html = "";
    mortgage.amortization.forEach((year, index) => html += `
        <tr>
            <td>${index + 1}</td>
            <td class="currency">${Math.round(year.principalY)}</td>
            <td class="stretch">
                <div class="flex">
                    <div class="bar principal"
                         style="flex:${year.principalY};-webkit-flex:${year.principalY}">
                    </div>
                    <div class="bar interest"
                         style="flex:${year.interestY};-webkit-flex:${year.interestY}">
                    </div>
                </div>
            </td>
            <td class="currency left">${Math.round(year.interestY)}</td>
            <td class="currency">${Math.round(year.balance)}</td>
        </tr>
    `);
    document.getElementById("amortization").innerHTML = html;

});