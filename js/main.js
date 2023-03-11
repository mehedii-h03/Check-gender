const answerContainer = document.getElementById('answer');

const checkGender = () => {
    const name = prompt("Please enter your name");
    if(name === null){
        alert("Please provide your name");
    }
    if(name.substr(name.length -1) === "a"){
        answerContainer.innerText = "I'm glad to meet you, ma'am! Accept our kind greeting.";
    }
    else{
        answerContainer.innerText = "Hi, sir! I hope everything is going well.";
    }
}