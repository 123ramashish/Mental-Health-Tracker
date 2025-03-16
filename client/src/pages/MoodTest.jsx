import React, { useState } from 'react';
import moodResources from '../../const/data';

const MoodTest = () => {
  const [selectedMood, setSelectedMood] = useState(null);
  const [selectedType, setSelectedType] = useState(null);
  const [submissions, setSubmissions] = useState([]);

  const handleMoodSelect = (mood) => {
    setSelectedMood(mood);
    setSelectedType(null); // Reset type when mood changes
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
      musicLinks: selectedMood.musicLinks,
      videoLinks: selectedMood.videoLinks,
      contentLinks: selectedMood.contentLinks,
      date: new Date().toISOString()
    };

    setSubmissions([newSubmission, ...submissions]);
    setSelectedMood(null);
    setSelectedType(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 mt-16">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          How are you feeling today?
        </h1>

        {/* Mood Selection */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          {moodResources.map((mood) => (
            <button
              key={mood.mood}
              onClick={() => handleMoodSelect(mood)}
              className={`p-4 rounded-lg transition-all ${
                selectedMood?.mood === mood.mood
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
              }`}
            >
              <span className="text-2xl block mb-2">{mood.emoji}</span>
              {mood.mood}
            </button>
          ))}
        </div>

        {/* Type Selection */}
        {selectedMood && (
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-4">Select your specific feeling:</h2>
            <div className="grid grid-cols-1 gap-2">
              {selectedMood.types.map((type, index) => (
                <button
                  key={index}
                  onClick={() => handleTypeSelect(type)}
                  className={`p-3 rounded-lg text-left ${
                    selectedType?.type === type.type
                      ? 'bg-blue-100 border-blue-500'
                      : 'bg-gray-50 hover:bg-gray-100'
                  }`}
                >
                  <h3 className="font-medium">{type.type}</h3>
                  <p className="text-sm text-gray-600">{type.solution}</p>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Submit Button */}
        {selectedType && (
          <button
            onClick={handleSubmit}
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Submit Mood
          </button>
        )}

        {/* Mood History */}
        <div className="mt-8">
          {/* <h2 className="text-xl font-semibold mb-4">Mood History</h2> */}
          <div className="space-y-4">
            {submissions.map((entry, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Follow Solution to get well</h2>

                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{entry.emoji}</span>
                    <h3 className="font-medium">{entry.mood} - {entry.type}</h3>
                  </div>
                  {/* <span className="text-sm text-gray-500">
                    {new Date(entry.date).toLocaleDateString()}
                  </span> */}
                </div>
                <p className="text-gray-600 mb-4">{entry.solution}</p>
                
                {/* Resources */}
                <div className="grid gap-3 text-sm">
                  <div>
                    <h4 className="font-medium mb-1">Music Recommendations:</h4>
                    {entry.musicLinks.map((link, i) => (
                      <a key={i} href={link.url} className="text-blue-600 hover:underline block">
                        {link.title}
                      </a>
                    ))}
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-1">Videos:</h4>
                    {entry.videoLinks.map((link, i) => (
                      <a key={i} href={link.url} className="text-blue-600 hover:underline block">
                        {link.title}
                      </a>
                    ))}
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-1">Reading Material:</h4>
                    {entry.contentLinks.map((link, i) => (
                      <a key={i} href={link.url} className="text-blue-600 hover:underline block">
                        {link.title}
                      </a>
                    ))}
                  </div>
                </div>
                <div>
                  <h2>Doctor Consultant</h2>
                  <p>Telemedicine & Consultation Platforms</p>
                  <span>Teladoc (Global)
www.teladoc.com
24/7 access to doctors, therapists, and specialists.

Amwell (U.S.)
www.amwell.com
Board-certified doctors for urgent care, therapy, and chronic conditions.

Practo (India/Global)
www.practo.com
Book appointments with doctors, order tests, and online consultations.

Doctor on Demand (U.S.)
www.doctorondemand.com
Licensed physicians, psychiatrists, and therapists.</span>

                  <p>Mental Health Specialists</p>
                  <span>BetterHelp (Online Therapy)
www.betterhelp.com
Licensed therapists for anxiety, depression, and mood disorders.

Talkspace
www.talkspace.com
Text/video therapy with certified professionals.</span>
                  <p>Medical Directories</p>
                  <span>Zocdoc (U.S.)
www.zocdoc.com
Find and book in-person or virtual appointments.

Healthgrades
www.healthgrades.com
Ratings and reviews for doctors/hospitals.

NHS UK Consultant Directory
www.nhs.uk
Search specialists in the UK’s National Health Service.</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoodTest;