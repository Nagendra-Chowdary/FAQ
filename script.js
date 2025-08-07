const faqQuestions = [
  "What is your return policy?",
  "How long does shipping usually take?",
  "Do you offer international shipping?",
  "How can I track my order?",
  "What payment methods do you accept?",
  "Can I cancel or change my order?",
  "Do you offer any warranties on products?",
  "How do I contact customer support?",
  "Are there any discounts for bulk orders?",
  "How do I create an account on your website?"
];

const faqAnswers = [
  `You can return items within 30 days of delivery. 
  Products must be unused and in original packaging. 
  Refunds are processed after inspection. 
  Sale items may have different return rules.`,

  `Standard shipping takes 5-7 business days. 
  Remote areas may take a little longer to deliver. 
  Express shipping is available at checkout. 
  You'll get tracking details once shipped.`,

  `Yes, we ship to multiple countries worldwide. 
  Shipping fees and times vary by destination. 
  Customs duties are the buyer's responsibility. 
  Check our shipping policy for the full list.`,

  `Track your order using the link emailed after shipping. 
  Tracking updates may take 24 hours to activate. 
  You can also check status in your account. 
  Contact support if no updates appear after 3 days.`,

  `We accept credit/debit cards, UPI, and net banking. 
  PayPal is available for international orders. 
  Cash on Delivery is available in select areas. 
  All transactions are encrypted and secure.`,

  `You can cancel or modify orders within 2 hours. 
  After processing, cancellation may not be possible. 
  For shipped orders, you can request a return. 
  Refunds are processed within 3-5 business days.`,

  `Most products include a 1-year standard warranty. 
  Warranty covers only manufacturing defects. 
  Accidental damage is not included. 
  Contact support to claim your warranty.`,

  `Reach out via email or live chat on our website. 
  Email: support@example.com for assistance. 
  We respond within 24 hours on working days. 
  Phone support is available for urgent issues.`,

  `Yes, bulk orders get special discounts. 
  Discounts usually start from 10+ units. 
  Shipping and packaging costs may differ. 
  Contact sales for a personalized quote.`,

  `lick "Sign Up" on the website to create an account. 
  Verify your email to activate it fully. 
  Accounts let you track orders and save addresses. 
  Members also get access to exclusive offers.`
];

let arr=document.getElementsByTagName("button");

for(let i=0;i<5;i++){
      
      
      let eleId="box"+`${i+1}`;
      let myEle=document.querySelector("#box"+`${i+1}`);
      let myElebtn=document.querySelector("#btn"+`${i+1}`);
      console.log(myElebtn);
      
      document.querySelector("#box"+`${i+1}`).innerHTML+=`<div id="${eleId}${i+1}" class="injected">${faqAnswers[i]}</div>`;
      document.querySelector("#btn"+`${i+1}`).addEventListener("click",()=>{
        console.log( document.querySelector(`#${eleId}${i+1}`));
        console.log(`${eleId}${i+1}`);
        
        
             document.querySelector(`#${eleId}${i+1}`).classList.toggle("visible");
                //  document.querySelector(`#${eleId}${i+1}`).style.background="green";
      })

}
