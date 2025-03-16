import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AITherapist = () => {
  const [messages, setMessages] = useState([
    { text: "Hello! I'm Aura, your AI wellness companion. How can I help you today?", isUser: false }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [mood, setMood] = useState('');
  const chatEndRef = useRef(null);

  const moods = ['Anxious', 'Sad', 'Stressed', 'Angry', 'Lonely', 'Happy'];
  const copingStrategies = {
    Anxious: "Let's try deep breathing. Breathe in for 4 counts, hold for 4, exhale for 6.",
    Sad: "It's okay to feel this way. Let's explore three things you're grateful for today.",
    Stressed: "How about a quick body scan meditation? Let's focus on relaxing each muscle group.",
    Angry: "Let's try progressive muscle relaxation. Tighten and release each muscle group slowly.",
    Lonely: "Remember you're not alone. Let's explore ways to connect with supportive communities.",
    Happy: "Wonderful! Let's explore ways to maintain and cultivate this positive state."
  };

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleMessageSend = async () => {
    if (!inputMessage.trim()) return;

    // Add user message
    const userMessage = { text: inputMessage, isUser: true };
    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = {
        text: generateAIResponse(inputMessage),
        isUser: false
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsLoading(false);
    }, 1500);
  };

  const generateAIResponse = (message) => {
    // In real implementation, replace with API call
    const responses = [
      "That sounds important. Can you tell me more about how that makes you feel?",
      "I appreciate you sharing that. What would you say is the root of this feeling?",
      "Let's explore that further. When did you first notice feeling this way?",
      "How has this been affecting your daily activities?",
      "What do you think might help improve this situation?",
      "Let's try reframing that thought. What's another perspective you could consider?"
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const messageVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, x: -50 }
  };

  const loadingVariants = {
    start: { y: 0 },
    end: { y: -10 },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-2xl mx-auto"
      >
        {/* Header */}
        <motion.div
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            AI Wellness Companion
          </h1>
          <p className="text-gray-600 text-lg">24/7 Emotional Support & Coping Strategies</p>
        </motion.div>

        {/* Mood Tracker */}
        <motion.div
          className="bg-white rounded-xl p-6 mb-6 shadow-lg"
          whileHover={{ y: -2 }}
        >
          <h3 className="text-xl font-semibold mb-4">Current Mood Check-in 🌈</h3>
          <div className="flex flex-wrap gap-3">
            {moods.map((m) => (
              <motion.button
                key={m}
                onClick={() => setMood(m)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  mood === m 
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {m}
              </motion.button>
            ))}
          </div>
          <AnimatePresence>
            {mood && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-4 p-4 bg-blue-50 rounded-xl"
              >
                <p className="text-blue-800 font-medium">{copingStrategies[mood]}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Chat Interface */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col h-[500px]">
          <div className="flex-1 overflow-y-auto p-4 space-y-4 relative">
            <AnimatePresence>
              {messages.map((msg, index) => (
                <motion.div
                  key={index}
                  variants={messageVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  transition={{ duration: 0.3 }}
                  className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs lg:max-w-md p-3 rounded-2xl ${
                      msg.isUser
                        ? 'bg-gradient-to-br from-blue-500 to-purple-500 text-white'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    <p className="leading-relaxed">{msg.text}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {isLoading && (
              <motion.div
                className="flex justify-start"
                variants={messageVariants}
                initial="hidden"
                animate="visible"
              >
                <div className="bg-gray-100 p-3 rounded-xl">
                  <motion.div
                    className="flex space-x-2"
                    variants={loadingVariants}
                    initial="start"
                    animate="end"
                    transition={{ repeat: Infinity, duration: 0.6, repeatType: 'reverse' }}
                  >
                    <div className="w-2 h-2 bg-gray-500 rounded-full" />
                    <div className="w-2 h-2 bg-gray-500 rounded-full" />
                    <div className="w-2 h-2 bg-gray-500 rounded-full" />
                  </motion.div>
                </div>
              </motion.div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Input Area */}
          <div className="border-t p-4 bg-gray-50">
            <motion.div
              className="flex gap-2"
              whileHover={{ scale: 1.005 }}
            >
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleMessageSend()}
                placeholder="Share your thoughts..."
                className="flex-1 p-3 border-0 rounded-xl focus:ring-2 focus:ring-purple-500 bg-white shadow-sm"
              />
              <motion.button
                onClick={handleMessageSend}
                disabled={isLoading}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-br from-blue-500 to-purple-500 text-white px-5 py-3 rounded-xl shadow-lg hover:shadow-purple-200 disabled:opacity-50"
              >
                <span className="hidden sm:inline">Send</span>
                <span className="sm:hidden">✉️</span>
              </motion.button>
            </motion.div>
          </div>
        </div>

        {/* Disclaimer */}
        <motion.p
          className="text-xs text-gray-500 mt-4 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Note: This AI companion provides general support and is not a replacement for professional care.
        </motion.p>
      </motion.div>
    </div>
  );
};

export default AITherapist;