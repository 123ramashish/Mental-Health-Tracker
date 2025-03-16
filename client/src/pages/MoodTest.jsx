import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Tab } from '@headlessui/react';
import moodResources from '../const/data.js';

const MoodTest = () => {
  const [selectedMood, setSelectedMood] = useState(null);
  const [selectedType, setSelectedType] = useState(null);
  const [submissions, setSubmissions] = useState([]);

  const handleMoodSelect = (mood) => {
    setSelectedMood(mood);
    setSelectedType(null);
  };

  const handleTypeSelect = (type) => {
    setSelectedType(type);
  };

  const handleSubmit = () => {
    if (!selectedMood || !selectedType) return;
    
    const newSubmission = {
      mood: selectedMood.mood,
      emoji: selectedMood.emoji,
      type: selectedType.type,
      solution: selectedType.solution,
      musicLink: selectedMood.musicLink,
      videoLink: selectedMood.videoLink,
      date: new Date().toISOString()
    };

    setSubmissions([newSubmission, ...submissions]);
    setSelectedMood(null);
    setSelectedType(null);
  };
console.log(submissions)
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-8 px-4 sm:px-6">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            How are you feeling today? 🌈
          </h1>

          {/* Mood Selection */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8">
            {moodResources.map((mood) => (
              <motion.button
                key={mood.id}
                onClick={() => handleMoodSelect(mood)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`p-4 rounded-xl transition-all flex flex-col items-center 
                  ${selectedMood?.mood === mood.mood 
                    ? 'bg-blue-500 text-white shadow-lg' 
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-800'}`}
              >
                <span className="text-3xl mb-2">{mood.emoji}</span>
                <span className="font-medium">{mood.mood}</span>
              </motion.button>
            ))}
          </div>

          {/* Type Selection */}
          <AnimatePresence>
            {selectedMood && (
              <motion.div
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={fadeIn}
                className="mb-8"
              >
                <h2 className="text-xl font-semibold mb-4 text-gray-700">
                  What specifically are you feeling? 🧐
                </h2>
                <div className="grid grid-cols-1 gap-3 ">
                  {selectedMood.types.map((type) => (
                    <motion.button
                      key={type.id}
                      onClick={() => handleTypeSelect(type)}
                      whileHover={{ x: 5 }}
                      className={`p-4 rounded-xl text-left transition-colors
                        ${selectedType?.id === type.id
                          ? 'bg-blue-50 border-2 border-blue-500'
                          : 'bg-gray-200 hover:bg-gray-50 shadow-sm'}`}
                    >
                      <h3 className="text-lg font-medium text-gray-800">{type.type}</h3>
                      <p className="text-gray-600 mt-1">{type.solution}</p>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Submit Button */}
          <AnimatePresence>
            {selectedType && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="mt-6"
              >
                <button
                  onClick={handleSubmit}
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 
                    rounded-xl font-semibold shadow-lg transition-all
                    hover:shadow-blue-200 active:scale-95 flex items-center justify-center gap-2"
                >
                  <span>Submit Your Mood</span>
                  <span>✨</span>
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Submissions */}
        <AnimatePresence>
          {submissions.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-6"
            >
              {submissions.map((entry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-2xl shadow-lg p-6"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <span className="text-4xl">{entry.emoji}</span>
                    <div>
                      <h2 className="text-xl font-bold text-gray-800">
                        {entry.mood} - {entry.type}
                      </h2>
                      <p className="text-gray-600 mt-2">{entry.solution}</p>
                    </div>
                  </div>

                  {/* Resources Tabs */}
                  <Tab.Group>
                    <Tab.List className="flex space-x-2 mb-4">
                      {['Music', 'Videos', 'Reading', 'Consult'].map((category) => (
                        <Tab
                          key={category}
                          className={({ selected }) =>
                            `px-4 py-2 rounded-lg transition-colors ${
                              selected
                                ? 'bg-blue-500 text-white'
                                : 'text-gray-600 hover:bg-gray-100'
                            }`
                          }
                        >
                          {category}
                        </Tab>
                      ))}
                    </Tab.List>
                    <Tab.Panels className="mt-4">
                      <Tab.Panel>
                        <div className="grid gap-3">
                          {entry.musicLinks.map((link, i) => (
                            <a
                              key={i}
                              href={link.url}
                              className="p-3 rounded-lg bg-gray-50 hover:bg-blue-50 transition-colors flex items-center gap-2"
                            >
                              <span>🎵</span>
                              <span className="text-blue-600 font-medium">{link.title}</span>
                            </a>
                          ))}
                        </div>
                      </Tab.Panel>
                      <Tab.Panel>
                        <div className="grid gap-3">
                          {entry.videoLinks.map((link, i) => (
                            <a
                              key={i}
                              href={link.url}
                              className="p-3 rounded-lg bg-gray-50 hover:bg-blue-50 transition-colors flex items-center gap-2"
                            >
                              <span>🎥</span>
                              <span className="text-blue-600 font-medium">{link.title}</span>
                            </a>
                          ))}
                        </div>
                      </Tab.Panel>
                      <Tab.Panel>
                        <div className="grid gap-3">
                          {entry.contentLinks.map((link, i) => (
                            <a
                              key={i}
                              href={link.url}
                              className="p-3 rounded-lg bg-gray-50 hover:bg-blue-50 transition-colors flex items-center gap-2"
                            >
                              <span>📚</span>
                              <span className="text-blue-600 font-medium">{link.title}</span>
                            </a>
                          ))}
                        </div>
                      </Tab.Panel>
                      <Tab.Panel>
                        <div className="space-y-4">
                          <div className="p-4 bg-gray-50 rounded-lg">
                            <h3 className="font-semibold mb-2">Telemedicine Platforms</h3>
                            <ul className="space-y-2">
                              <li>
                                <a href="https://www.teladoc.com" className="text-blue-600 hover:underline">
                                  Teladoc (Global) - 24/7 access to doctors
                                </a>
                              </li>
                              {/* Add other consult links similarly */}
                            </ul>
                          </div>
                          <div className="p-4 bg-gray-50 rounded-lg">
                            <h3 className="font-semibold mb-2">Mental Health Specialists</h3>
                            <ul className="space-y-2">
                              <li>
                                <a href="https://www.betterhelp.com" className="text-blue-600 hover:underline">
                                  BetterHelp - Online Therapy
                                </a>
                              </li>
                              {/* Add other mental health links */}
                            </ul>
                          </div>
                        </div>
                      </Tab.Panel>
                    </Tab.Panels>
                  </Tab.Group>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default MoodTest;