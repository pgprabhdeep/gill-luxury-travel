const container = document.getElementById('chatbot');
container.innerHTML = `
  <div class="chatbot-header">Travel Concierge</div>
  <div class="chatbot-messages" id="chatbotMessages"></div>
  <div class="chatbot-input">
    <input type="text" id="chatbotInput" placeholder="Ask me about travel..."/>
    <button id="chatbotSend">Send</button>
  </div>
`;

const OPENAI_API_KEY = window.OPENAI_API_KEY || '';

async function sendMessage(){
  const input = document.getElementById('chatbotInput');
  const messagesEl = document.getElementById('chatbotMessages');
  const text = input.value.trim();
  if(!text) return;
  messagesEl.innerHTML += `<div class="user-msg">${text}</div>`;
  input.value = '';
  try{
    const res = await fetch('https://api.openai.com/v1/chat/completions', {
      method:'POST',
      headers:{
        'Content-Type':'application/json',
        'Authorization':`Bearer ${OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model:'gpt-3.5-turbo',
        messages:[{role:'user', content:text}]
      })
    });
    const data = await res.json();
    const reply = data.choices?.[0]?.message?.content || 'No response';
    messagesEl.innerHTML += `<div class="bot-msg">${reply}</div>`;
    messagesEl.scrollTop = messagesEl.scrollHeight;
  }catch(err){
    messagesEl.innerHTML += `<div class="bot-msg error">Error: ${err.message}</div>`;
  }
}

document.getElementById('chatbotSend').addEventListener('click', sendMessage);
document.getElementById('chatbotInput').addEventListener('keydown', e => {
  if(e.key === 'Enter') sendMessage();
});
