console.log("script is running")
const eightBall = ["Yes", "No", "Maybe", "It is Certain", "Ask again later", "My sources say No", "Cannot Predict Now", "Most Likely"]


document.querySelector("#guess").addEventListener("click", function () {
    const rand = Math.floor(Math.random() * eightBall.length);
    const userPick = document.querySelector("#question").value;
    if (userPick) {
        const message = eightBall[rand]
        console.log(rand)
        document.querySelector("#message").textContent = message
    }

});
