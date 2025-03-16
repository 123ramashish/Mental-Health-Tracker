const moodResources = [
    {
      id:1,
      mood: "Sad",
      emoji: "😞",
      color: "blue",
      types: [
        {
          id:10,
          type: "Heartbreak",
          solution: "Practice self-compassion, write unsent letters, connect with friends",
          musicLink: ["https://www.youtube.com/watch?v=5qap5aO4i9A"],
          videoLink: ["https://www.ted.com/talks/guy_winch_how_to_fix_a_broken_heart"]
        },
        {
          id:11,
          type: "Loneliness",
          solution: "Join community groups, volunteer, pet therapy",
          musicLink: ["https://www.youtube.com/watch?v=W6Y-AM-7K5E"],
          videoLink: ["https://www.youtube.com/watch?v=NN3C_MfG3qQ"]
        }
      ],
      musicLinks: [
        { 
          title: "Healing Piano", 
          url: "https://www.youtube.com/watch?v=o9sT-rjY7PI"
        },
        {
          title: "Soul Comfort Mix",
          url: "https://www.youtube.com/watch?v=4N3AkVZ-2PI"
        }
      ],
      videoLinks: [
        {
          title: "Coping with Loss",
          url: "https://www.youtube.com/watch?v=G_Lg0vv7ifI"
        },
        {
          title: "Building Connections",
          url: "https://www.youtube.com/watch?v=Yb-_mzx0q50"
        }
      ],
      contentLinks: [
        {
          title: "Book: The Upward Spiral",
          url: "https://www.amazon.com/Upward-Spiral-Neuroscience-Reverse-Depression/dp/1626251205"
        },
        {
          title: "Poetry Collection: The Sun and Her Flowers",
          url: "https://www.amazon.com/Sun-Her-Flowers-Rupi-Kaur/dp/1449486797"
        }
      ]
    },
    {
      id:2,
      mood: "Anxious",
      emoji: "😰",
      color: "purple",
      types: [
        {
          id:20,
          type: "Social Anxiety",
          solution: "Gradual exposure, positive affirmations",
          musicLink: ["https://www.youtube.com/watch?v=UfcAVejslrU"],
          videoLink: ["https://www.youtube.com/watch?v=78I9dTB9vqM"]
        }
      ],
      musicLinks: [
        {
          title: "Anxiety Relief Frequency",
          url: "https://www.youtube.com/watch?v=1ZYbU82GVz4"
        },
        {
          title: "Nature Soundscape",
          url: "https://www.youtube.com/watch?v=y6jPRwMd3hA"
        }
      ],
      videoLinks: [
        {
          title: "Grounding Techniques",
          url: "https://www.youtube.com/watch?v=tEmt1Znux58"
        },
        {
          title: "Mindfulness Masterclass",
          url: "https://www.youtube.com/watch?v=ssss7V1_eyA"
        }
      ],
      contentLinks: [
        {
          title: "Book: The Anxiety Toolkit",
          url: "https://www.amazon.com/Anxiety-Toolkit-Strategies-Fine-Tuning-Overcoming/dp/0399174615"
        },
        {
          title: "Journal: The Mindfulness Journal",
          url: "https://www.amazon.com/Mindfulness-Journal-Exercises-Help-Present/dp/1647393848"
        }
      ]
    },
    {
      id:3,
      mood: "Angry",
      emoji: "😡",
      color: "red",
      types: [
        {
          id:30,
          type: "Frustration",
          solution: "Physical release, cognitive reframing",
          musicLink: ["https://www.youtube.com/watch?v=JHO61_wDC30"],
          videoLink: ["https://www.youtube.com/watch?v=BsVq5R_F6RA"]
        }
      ],
      musicLinks: [
        {
          title: "Cathartic Metal Mix",
          url: "https://www.youtube.com/watch?v=3nQNiWdeH2Q"
        },
        {
          title: "Anger Release Drumming",
          url: "https://www.youtube.com/watch?v=8OoZgA6Ja_E"
        }
      ],
      videoLinks: [
        {
          title: "Anger Management Guide",
          url: "https://www.youtube.com/watch?v=SEfs5TJZ6Nk"
        },
        {
          title: "Box Breathing Technique",
          url: "https://www.youtube.com/watch?v=GZzhk9jEkkI"
        }
      ],
      contentLinks: [
        {
          title: "Book: Rage Becomes Her",
          url: "https://www.amazon.com/Rage-Becomes-Her-Power-Womens/dp/1501189553"
        },
        {
          title: "Workbook: The Anger Management Workbook",
          url: "https://www.amazon.com/Anger-Management-Workbook-Techniques-Managing/dp/1641520928"
        }
      ]
    },
    {
      id:4,
      mood: "Happy",
      emoji: "😊",
      color: "yellow",
      types: [
        {
          id:40,
          type: "Joyful",
          solution: "Share positivity, create memory jars",
          musicLink: ["https://www.youtube.com/watch?v=3JWTaaS7LdU"],
          videoLink: ["https://www.youtube.com/watch?v=GXy__kBVq1M"],
        },
      ],
      musicLinks: [
        {
          title: "Sunshine Pop Playlist",
          url: "https://www.youtube.com/watch?v=7maJOI3QMu0"
        },
        {
          title: "Dopamine Boost Mix",
          url: "https://www.youtube.com/watch?v=3AtDnEC4zak"
        }
      ],
      videoLinks: [
        {
          title: "Science of Happiness",
          url: "https://www.ted.com/talks/martin_seligman_the_new_era_of_positive_psychology"
        },
        {
          title: "Gratitude Practices",
          url: "https://www.youtube.com/watch?v=WPPPFqsECz0"
        }
      ],
      contentLinks: [
        {
          title: "Book: The Happiness Project",
          url: "https://www.amazon.com/Happiness-Project-Morning-Awesomer-Thinking/dp/0062414852"
        },
        {
          title: "Creative Journal",
          url: "https://www.amazon.com/Happiness-Journal-Prompts-Practices-Inspiration/dp/1641524893"
        }
      ]
    },
    {
      id:5,
      mood: "Tired",
      emoji: "😴",
      color: "gray",
      types: [
        {
          id:50,
          type: "Exhaustion",
          solution: "Power naps, hydration, stretching",
          musicLink: ["https://www.youtube.com/watch?v=1ZYbU82GVz4"],
          videoLink: ["https://www.youtube.com/watch?v=9y_O1N9pP68"]
        }
      ],
      musicLinks: [
        {
          title: "Deep Sleep Sounds",
          url: "https://www.youtube.com/watch?v=aXKTGgVhBK0"
        },
        {
          title: "Energy Recharge Mix",
          url: "https://www.youtube.com/watch?v=4N3AkVZ-2PI"
        }
      ],
      videoLinks: [
        {
          title: "Yoga for Energy",
          url: "https://www.youtube.com/watch?v=4pKly2JojMw"
        },
        {
          title: "Nutrition for Fatigue",
          url: "https://www.youtube.com/watch?v=9y_O1N9pP68"
        }
      ],
      contentLinks: [
        {
          title: "Book: Why We Sleep",
          url: "https://www.amazon.com/Why-We-Sleep-Unlocking-Dreams/dp/1501144324"
        },
        {
          title: "Sleep Meditation Guide",
          url: "https://www.amazon.com/Meditations-Mindfulness-Habits-Sleep-Meditation/dp/1953295130"
        }
      ]
    }
  ];
  
  export default moodResources;