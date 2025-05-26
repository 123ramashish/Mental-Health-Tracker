// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Tab } from '@headlessui/react';
// import moodResources, { consultants } from '../const/data.js';

// const MoodTest = () => {
//   const [selectedMood, setSelectedMood] = useState(null);
//   const [selectedType, setSelectedType] = useState(null);
//   const [submissions, setSubmissions] = useState([]);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [currentSolution, setCurrentSolution] = useState(null);

//    // Indian consultants from Noida


//   const handleMoodSelect = (mood) => {
//     setSelectedMood(mood);
//     setSelectedType(null);
//   };

//   const handleTypeSelect = (type) => {
//     setSelectedType(type);
//     setCurrentSolution({
//       ...type,
//       moodEmoji: selectedMood.emoji,
//       moodColor: selectedMood.color
//     });
//   };

//   const handleSubmit = () => {
//     if (!selectedMood || !selectedType) return;
    
//     const newSubmission = {
//       mood: selectedMood.mood,
//       emoji: selectedMood.emoji,
//       type: selectedType.type,
//       solution: selectedType.solution,
//       date: new Date().toISOString()
//     };

//     setSubmissions([newSubmission, ...submissions]);
//     setSelectedMood(null);
//     setSelectedType(null);
//   };

//   const fadeIn = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0 },
//     exit: { opacity: 0, y: -20 }
//   };

//   const modalVariants = {
//     hidden: { opacity: 0, scale: 0.9 },
//     visible: { opacity: 1, scale: 1 },
//     exit: { opacity: 0, scale: 0.9 }
//   };

//   const ResourceCard = ({ icon, title, url, color }) => (
//     <motion.a
//       href={url}
//       target="_blank"
//       rel="noopener noreferrer"
//       whileHover={{ y: -3 }}
//       className={`p-4 rounded-xl ${color} hover:shadow-md transition-all flex items-center gap-4`}
//     >
//       <span className="text-2xl">{icon}</span>
//       <span className="font-medium text-gray-800">{title}</span>
//     </motion.a>
//   );

//   const ConsultantCard = ({ consultant }) => (
//     <motion.div 
//       whileHover={{ y: -5 }}
//       className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100"
//     >
//       <div className="flex flex-col md:flex-row">
//         <div className="w-full md:w-1/3 h-48 md:h-auto">
//           <img 
//             src={consultant.image} 
//             alt={consultant.name}
//             className="w-full h-full object-cover"
//           />
//         </div>
//         <div className="w-full md:w-2/3 p-4">
//           <div className="flex justify-between items-start">
//             <div>
//               <h3 className="font-bold text-lg text-gray-800">{consultant.name}</h3>
//               <p className="text-sm text-blue-600 mb-2">{consultant.specialty}</p>
//             </div>
//             <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
//               {consultant.fees}
//             </span>
//           </div>
          
//           <div className="text-sm text-gray-600 space-y-2 mt-2">
//             <div className="flex items-center gap-2">
//               <span className="text-yellow-500">⭐</span>
//               <span>{consultant.experience} experience</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <span className="text-purple-500">🗣️</span>
//               <span>{consultant.languages.join(", ")}</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <span className="text-blue-500">🕒</span>
//               <span>{consultant.availability}</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <span className="text-red-500">📍</span>
//               <span>{consultant.location}</span>
//             </div>
//           </div>
          
//           <div className="mt-4 flex flex-col sm:flex-row gap-2">
//             <a
//               href={consultant.link}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="bg-blue-50 hover:bg-blue-100 text-blue-600 text-sm font-medium px-3 py-1.5 rounded-lg transition-colors text-center"
//             >
//               Book on {consultant.platform} →
//             </a>
//             {/* <a
//               href={`tel:+91${Math.floor(1000000000 + Math.random() * 9000000000)}`}
//               className="bg-green-50 hover:bg-green-100 text-green-600 text-sm font-medium px-3 py-1.5 rounded-lg transition-colors text-center"
//             >
//               Call Now
//             </a> */}
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   );


//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-8 px-4 sm:px-6">
//       <div className="max-w-2xl mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 mb-8"
//         >
//           <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
//             How are you feeling today? 🌈
//           </h1>

//           {/* Mood Selection */}
//           <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8">
//             {moodResources.map((mood) => (
//               <motion.button
//                 key={mood.id}
//                 onClick={() => handleMoodSelect(mood)}
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className={`p-4 rounded-xl transition-all flex flex-col items-center 
//                   ${selectedMood?.mood === mood.mood 
//                     ? 'bg-blue-500 text-white shadow-lg' 
//                     : 'bg-gray-100 hover:bg-gray-200 text-gray-800'}`}
//               >
//                 <span className="text-3xl mb-2">{mood.emoji}</span>
//                 <span className="font-medium">{mood.mood}</span>
//               </motion.button>
//             ))}
//           </div>

//           {/* Type Selection */}
//           <AnimatePresence>
//             {selectedMood && (
//               <motion.div
//                 initial="hidden"
//                 animate="visible"
//                 exit="exit"
//                 variants={fadeIn}
//                 className="mb-8"
//               >
//                 <h2 className="text-xl font-semibold mb-4 text-gray-700">
//                   What specifically are you feeling? 🧐
//                 </h2>
//                 <div className="grid grid-cols-1 gap-3">
//                   {selectedMood.types.map((type) => (
//                     <motion.button
//                       key={type.id}
//                       onClick={() => handleTypeSelect(type)}
//                       whileHover={{ x: 5 }}
//                       className={`p-4 rounded-xl text-left transition-colors
//                         ${selectedType?.id === type.id
//                           ? 'bg-blue-50 border-2 border-blue-500'
//                           : 'bg-gray-200 hover:bg-gray-50 shadow-sm'}`}
//                     >
//                       <h3 className="text-lg font-medium text-gray-800">{type.type}</h3>
//                       {/* <p className="text-gray-600 mt-1 line-clamp-2">{type.solution}</p> */}
//                     </motion.button>
//                   ))}
//                 </div>
//                 <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -20 }}
//                 className="mt-6"
//               >
//                 <button
//                   onClick={()=>setIsModalOpen(true)}
//                   className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 
//                     rounded-xl font-semibold shadow-lg transition-all
//                     hover:shadow-blue-200 active:scale-95 flex items-center justify-center gap-2"
//                 >
//                   <span>Check Mood</span>
//                   <span>✨</span>
//                 </button>
//               </motion.div>
//               </motion.div>
              
//             )}
            
//           </AnimatePresence>

//           {/* Submit Button */}
//           {/* <AnimatePresence>
//             {selectedType && (
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -20 }}
//                 className="mt-6"
//               >
//                 <button
//                   onClick={handleSubmit}
//                   className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 
//                     rounded-xl font-semibold shadow-lg transition-all
//                     hover:shadow-blue-200 active:scale-95 flex items-center justify-center gap-2"
//                 >
//                   <span>Save Your Mood</span>
//                   <span>✨</span>
//                 </button>
//               </motion.div>
//             )}
//           </AnimatePresence> */}
//         </motion.div>

//         {/* Solution Modal */}
//         <AnimatePresence>
//           {isModalOpen && currentSolution && (
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
//               onClick={() => setIsModalOpen(false)}
//             >
//               <motion.div
//                 variants={modalVariants}
//                 initial="hidden"
//                 animate="visible"
//                 exit="exit"
//                 className="bg-white rounded-2xl shadow-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto px-4"
//                 onClick={(e) => e.stopPropagation()}
//               >
// <h1 className="text-xl text-center py-4 font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent sm:text-2xl">
//       Follow Solution</h1> 
//                      <div className={`p-6 ${currentSolution.moodColor ? `bg-${currentSolution.moodColor}-100` : 'bg-gray-100'} rounded-t-2xl`}>
//                   <div className="flex items-center gap-4 mb-4">
//                     <span className="text-4xl">{currentSolution.moodEmoji}</span>
//                     <div>
//                       <h2 className="text-2xl font-bold text-gray-800">{currentSolution.type}</h2>
//                       <p className="text-gray-600">{selectedMood?.mood}</p>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="p-6">
//                   <h3 className="text-xl font-semibold mb-3 text-gray-800">Solution</h3>
//                   <p className="text-gray-700 mb-6">{currentSolution.solution}</p>

//                   <h3 className="text-xl font-semibold mb-3 text-gray-800">Resources</h3>
//                   <div className="space-y-6">
//                     {/* Music Resources */}
//                     {currentSolution.music?.length > 0 && (
//                       <div>
//                         <h4 className="font-medium text-gray-700 mb-2 flex items-center gap-2">
//                           <span>🎵</span> Music
//                         </h4>
//                         <div className="grid gap-3">
//                           {currentSolution.music.map((resource, i) => (
//                             <ResourceCard
//                               key={i}
//                               icon="🎶"
//                               title={resource.title}
//                               url={resource.url}
//                               color="bg-blue-50 hover:bg-blue-100"
//                             />
//                           ))}
//                         </div>
//                       </div>
//                     )}

//                     {/* Video Resources */}
//                     {currentSolution.videos?.length > 0 && (
//                       <div>
//                         <h4 className="font-medium text-gray-700 mb-2 flex items-center gap-2">
//                           <span>🎥</span> Videos
//                         </h4>
//                         <div className="grid gap-3">
//                           {currentSolution.videos.map((resource, i) => (
//                             <ResourceCard
//                               key={i}
//                               icon="📹"
//                               title={resource.title}
//                               url={resource.url}
//                               color="bg-purple-50 hover:bg-purple-100"
//                             />
//                           ))}
//                         </div>
//                       </div>
//                     )}

//                     {/* Content Resources */}
//                     {currentSolution.contents?.length > 0 && (
//                       <div>
//                         <h4 className="font-medium text-gray-700 mb-2 flex items-center gap-2">
//                           <span>📚</span> Reading
//                         </h4>
//                         <div className="grid gap-3">
//                           {currentSolution.contents.map((resource, i) => (
//                             <ResourceCard
//                               key={i}
//                               icon="📖"
//                               title={resource.title}
//                               url={resource.url}
//                               color="bg-green-50 hover:bg-green-100"
//                             />
//                           ))}
//                         </div>
//                       </div>
//                     )}

//                     {/* Consultant Section */}
//                     <div>
//         <h4 className="font-medium text-gray-700 mb-2 flex items-center gap-2">
//           <span>👩‍⚕️</span> Professional Help (Noida Specialists)
//         </h4>
//         <p className="text-sm text-gray-600 mb-3">
//           Top mental health professionals in Noida:
//         </p>
//         <div className="space-y-4">
//           {consultants.map(consultant => (
//             <ConsultantCard key={consultant.id} consultant={consultant} />
//           ))}
//         </div>
//         {/* <div className="mt-4 text-center">
//           <a 
//             href="https://www.practo.com/noida/psychologist" 
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-sm text-blue-600 hover:underline"
//           >
//             View more specialists in Noida →
//           </a>
//         </div> */}
//       </div>
//                   </div>
//                 </div>

//                 <div className="p-4 border-t flex justify-end">
//                   <button
//                     onClick={() => setIsModalOpen(false)}
//                     className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
//                   >
//                     Close
//                   </button>
//                 </div>
//               </motion.div>
//             </motion.div>
//           )}
//         </AnimatePresence>

//         {/* Submissions History */}
//         <AnimatePresence>
//           {submissions.length > 0 && (
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               className="space-y-6"
//             >
//               <h2 className="text-2xl font-bold text-gray-800 mb-4">Your Mood History</h2>
//               {submissions.map((entry, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   className="bg-white rounded-2xl shadow-lg p-6"
//                 >
//                   <div className="flex items-start gap-4">
//                     <span className="text-4xl">{entry.emoji}</span>
//                     <div>
//                       <h2 className="text-xl font-bold text-gray-800">
//                         {entry.mood} - {entry.type}
//                       </h2>
//                       <p className="text-gray-500 text-sm mt-1">
//                         {new Date(entry.date).toLocaleString()}
//                       </p>
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </div>
//   );
// };

// export default MoodTest;
import React from 'react'

export default function MoodTest() {
  return (
    <div>MoodTest</div>
  )
}
