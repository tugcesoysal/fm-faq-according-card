document.addEventListener("DOMContentLoaded", function () {
  const questions = document.querySelectorAll(".question");

  questions.forEach((question) => {
    question.addEventListener("click", function () {
      const answer = this.nextElementSibling;
      const arrow = this.querySelector(".icon-arrow-down");
      answer.hidden = !answer.hidden;
      arrow.style.transform = answer.hidden ? "rotate(0deg)" : "rotate(180deg)";

      if (!answer.hidden) {
        // Change the color of the question when the answer is visible
        this.querySelector("h2").style.color = "hsl(238, 29%, 16%)";
      } else {
        // Reset the color when the answer is hidden
        this.querySelector("h2").style.color = "hsl(240, 6%, 50%)";
      }
    });
  });
});
