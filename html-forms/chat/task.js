const chatWidget = document.querySelector(".chat-widget__side"),
      widget = document.querySelector(".chat-widget"),
      widgetArea = document.querySelector('.chat-widget__area'),
      input = document.querySelector("input"),
      messages = document.getElementById("chat-widget__messages");

const getAnswer = () => {
    const robotAnswers = [
    'Вы не купили ни одного товара для того, чтобы так с нами разговаривать!',
    'Добрый день! До свидания!', 
    'Кто тут?', 
    'Где ваша совесть?',
    'Мы ничего не будем вам продавать',
    'К сожалению, все операторы сейчас заняты. Не пишите нам больше'
    ];

    let answer = Math.floor(Math.random() * robotAnswers.length);
    input.value = '';
    return robotAnswers[answer];

}

chatWidget.addEventListener("click", () => {
    widget.classList.toggle("chat-widget_active");
});

widgetArea.addEventListener("keydown", (event) => {
    let time = new Date();
    if (event.key === "Enter" && input.value !== '') {
        messages.innerHTML += `
        <div class="message message_client">
        <div class="message__time">${
            time.getHours() + ":" + time.getMinutes()
        }
        </div>
    <div class="message__text">${input.value}</div>
  </div>`;
  
  document.querySelector('.chat-widget__messages-container').scrollTop = 9999;  
    }
});

widgetArea.onchange = () => {
    let time = new Date();
    messages.innerHTML += `
        <div class="message">
        <div class="message__time">${
            time.getHours() + ":" + time.getMinutes()
        }</div>
    <div class="message__text">${getAnswer()}</div>
  </div>`;
    document.querySelector('.chat-widget__messages-container').scrollTop = 9999;
};


