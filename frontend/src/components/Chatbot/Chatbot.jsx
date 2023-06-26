import React, { useState, useRef } from 'react'
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import { steps } from '../../utils/stepsChatbot';

function Chatbot() {

    const theme = {
        background:'#f5f5f5',
        headerBgColor: '#aebd38',
        headerFontSize: '20px',
        botBubbleColor: '#aebd38',
        headerFontColor: 'white',
        botFontColor: 'black',
        userBubbleColor: '#568234',
        userFontColor: 'black',
    };

    const config = {
        // botAvatar: "../../assets/images/logo.png",
        floating: true,
    };

    const [messages, setMessages] = useState([])
    // const chatbotRef = useRef(null);

    const handleEnd = ({ steps, values }) => {
        const lastMessage = messages[messages.length - 1];
        if (!lastMessage || lastMessage.message !== `You said: ${values[0]}`) {
            setMessages([
                ...messages,
                {
                    message: `You said: ${values[0]}`,
                    trigger: 'repeat',
                },
            ]);
            //chatbotRef.current.setStep(chatbotRef.current.steps[0].id);
        }
    };

  return (
    <div>
        <ThemeProvider theme={theme}>         
        <ChatBot 
            //ref={chatbotRef}
            speechSynthesis={{ enable: false, lang: 'es' }}
            headerTitle="Guia Virtual de San Pedro Colalao"
            steps={steps}
            {...config}
            messages={messages}
            handleEnd={handleEnd}
            handleSubmit={(event) => {
                event.preventDefault();
            }}
        />
        </ThemeProvider>
    </div>
  )
}

export default Chatbot