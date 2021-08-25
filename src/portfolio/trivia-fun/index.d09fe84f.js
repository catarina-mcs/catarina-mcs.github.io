const startBtn=document.getElementById("start-btn"),board=document.querySelector(".board"),game=document.querySelector(".game"),circles=document.querySelectorAll(".circle"),lines=document.querySelectorAll(".line"),questionCounter=document.getElementById("question-count"),errorCounter=document.getElementById("error-count"),answer=document.getElementById("answer"),questionHtml=document.querySelector(".question"),category=document.getElementById("category"),difficulty=document.getElementById("difficulty"),answers=document.querySelectorAll(".answer"),nextBtn=document.getElementById("next-btn"),victoryMessage=document.querySelector(".victory-message"),gameoverMessage=document.querySelector(".gameover-message"),restartBtn=document.getElementById("restart-btn");let token,question,questionNumber=0,errorCount=0;async function generateToken(){let e=await fetch("https://opentdb.com/api_token.php?command=request"),t=await e.json();return token=t.token,token}async function getQuestion(){if(nextBtn.removeEventListener("click",getQuestion),questionNumber<5){let e=await fetch(`https://opentdb.com/api.php?amount=1&type=multiple&difficulty=easy&token=${token}&encode=base64`),t=await e.json();question=await t.results,displayQuestion(question)}else if(questionNumber<10){let e=await fetch(`https://opentdb.com/api.php?amount=1&type=multiple&difficulty=medium&token=${token}&encode=base64`),t=await e.json();question=await t.results,displayQuestion(question)}else{let e=await fetch(`https://opentdb.com/api.php?amount=1&type=multiple&difficulty=hard&token=${token}&encode=base64`),t=await e.json();question=await t.results,displayQuestion(question)}}function displayQuestion(e){board.style.display="block",game.style.display="grid",nextBtn.style.display=14===questionNumber?"none":"inline-block",questionNumber>0&&(circles[questionNumber-1].classList.remove("circle-active"),circles[questionNumber-1].classList.add("circle-completed"),lines[questionNumber-1].style.backgroundColor="#b298dc"),circles[questionNumber].classList.add("circle-active"),circles[questionNumber].innerHTML=questionNumber+1,questionCounter.innerHTML=questionNumber+1,questionHtml.innerHTML=Base64.decode(e[0].question),category.innerHTML=Base64.decode(e[0].category),difficulty.innerHTML=Base64.decode(e[0].difficulty);let t=[e[0].correct_answer].concat(e[0].incorrect_answers),n=[0,1,2,3];answers[0].innerHTML=Base64.decode(t[n.splice(Math.floor(Math.random()*n.length),1)[0]]).replace(/</g,"&lt;").replace(/>/g,"&gt;"),answers[1].innerHTML=Base64.decode(t[n.splice(Math.floor(Math.random()*n.length),1)[0]]).replace(/</g,"&lt;").replace(/>/g,"&gt;"),answers[2].innerHTML=Base64.decode(t[n.splice(Math.floor(Math.random()*n.length),1)[0]]).replace(/</g,"&lt;").replace(/>/g,"&gt;"),answers[3].innerHTML=Base64.decode(t[n.splice(Math.floor(Math.random()*n.length),1)[0]]).replace(/</g,"&lt;").replace(/>/g,"&gt;"),answers.forEach((e=>{e.addEventListener("click",checkAnswer),e.classList.remove("correct","incorrect"),e.classList.add("clickable")})),nextBtn.classList.add("btn-inactive"),nextBtn.removeEventListener("click",getQuestion),console.log(Base64.decode(e[0].correct_answer))}function checkAnswer(e){let t=Base64.decode(question[0].correct_answer).replace(/</g,"&lt;").replace(/>/g,"&gt;");e.target.innerHTML===t?(e.target.classList.add("correct"),circles[questionNumber].innerHTML='<i class="fas fa-check"></i>',questionNumber<14?(nextBtn.classList.remove("btn-inactive"),answers.forEach((e=>{e.removeEventListener("click",checkAnswer),e.classList.remove("clickable")})),nextBtn.addEventListener("click",getQuestion)):14===questionNumber&&setTimeout((()=>{circles[questionNumber].classList.remove("circle-active"),circles[questionNumber].classList.add("circle-completed"),game.style.display="none",victoryMessage.style.display="block",restartBtn.style.display="inline-block",restartBtn.addEventListener("click",restartGame)}),500)):(errorCount++,e.target.classList.add("incorrect"),answers.forEach((e=>{e.removeEventListener("click",checkAnswer),e.classList.remove("clickable"),e.innerHTML===t&&e.classList.add("correct")})),circles[questionNumber].innerHTML='<i class="fas fa-times"></i>',errorCounter.innerHTML=errorCount,answer.innerHTML=1===errorCount?"answer":"answers",errorCount<3?questionNumber<14?(nextBtn.classList.remove("btn-inactive"),nextBtn.addEventListener("click",getQuestion)):14===questionNumber&&setTimeout((()=>{circles[questionNumber].classList.remove("circle-active"),circles[questionNumber].classList.add("circle-completed"),game.style.display="none",victoryMessage.style.display="block",restartBtn.style.display="inline-block",restartBtn.addEventListener("click",restartGame)}),500):(nextBtn.removeEventListener("click",getQuestion),nextBtn.classList.add("btn-inactive"),setTimeout((()=>{game.style.display="none",gameoverMessage.style.display="block",nextBtn.style.display="none",restartBtn.style.display="inline-block",restartBtn.addEventListener("click",restartGame)}),500))),questionNumber<14&&questionNumber++}function restartGame(){questionNumber=0,errorCount=0,errorCounter.innerHTML=errorCount,circles.forEach((e=>{e.classList.remove("circle-active","circle-completed"),e.innerHTML=""})),lines.forEach((e=>e.style.backgroundColor="rgba(178, 152, 220, 0.4)")),victoryMessage.style.display="none",gameoverMessage.style.display="none",restartBtn.style.display="none",restartBtn.removeEventListener("click",restartGame),getQuestion(token)}startBtn.addEventListener("click",(()=>{document.querySelector(".game-intro").style.display="none",generateToken().then((e=>getQuestion(e)))}));
//# sourceMappingURL=index.d09fe84f.js.map