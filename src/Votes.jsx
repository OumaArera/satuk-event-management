import React, { useEffect, useState } from 'react';
import Confetti from 'react-confetti';

import peterMarite from './images/Peter Marite.jpg';
import sherlineWambui from './images/Sherline Wambui.jpg';
import evanceOuma from './images/Evans Ouma.jpg';
import mbuzi from './images/MBUZI WA MIGORI.jpg';
import burudani from './images/Burudani 14.jpg';
import kariuki from './images/Kelvin Kariuki.jpg';
import kimutai from './images/KIMUTAI EVANS.jpg';
import timothy from './images/Timothy Olumunyak.jpg';
import whiteShadow from './images/White Shadow1.jpg';
import abdi from './images/Leila Abdi.jpg';
import taekwondo from './images/TUK Taekwondo.jpeg';
import palimwacha from './images/Emmanuel Palimwacha.jpg';

const candidatesVotes=  [

  {
      "categoryId": 3,
      "categoryName": "The Student Leader of the Year Award",
      "candidates": [
          {
            "id": 8,
            "name": "Peter Marite",
            "vote": 4614,
            "image": peterMarite
          },
          {
              "id": 9,
              "name": "Peter Kanyua",
              "vote": 4554
          },
          {
              "id": 7,
              "name": "Yvonne Nyanchera",
              "vote": 3300
          },
          
      ]
  },
  {
      "categoryId": 4,
      "categoryName": "The Upcoming Student Leader of the Year Award",
      "candidates": [
          {
              "id": 10,
              "name": "Sherline Wambui",
              "vote": 4876,
              "image": sherlineWambui
          },
          {
              "id": 11,
              "name": "Lawrence Ojiambo",
              "vote": 4775
          },
          {
              "id": 12,
              "name": "Adam Mwinzi",
              "vote": 2817
          }
      ]
  },
  {
      "categoryId": 5,
      "categoryName": "The Most Influential Student of the Year Award",
      "candidates": [
          {
              "id": 14,
              "name": "Evance Ouma",
              "vote": 4866,
              'image':evanceOuma
          },
          {
            "id": 15,
            "name": "Charles Bwibo",
            "vote": 4074
          },
          {
              "id": 13,
              "name": "Julias Narikae",
              "vote": 3528
          },
          
      ]
  },
  {
      "categoryId": 6,
      "categoryName": "The Student's Affairs Advocate of the Year Award",
      "candidates": [
          {
              "id": 17,
              "name": "Stanley Motinda",
              "vote": 4712,
              "image": null
          },
          {
            "id": 18,
            "name": "Martin Nyaga",
            "vote": 3897
          },
          {
              "id": 16,
              "name": "James Kinuthia",
              "vote": 3859
          },
          
      ]
  },
  {
      "categoryId": 7,
      "categoryName": "The Blogger of the Year Award",
      "candidates": [
          {
            "id": 21,
            "name": "Mbuzi Wa Migori",
            "vote": 4715,
            "image": mbuzi
          },
          {
              "id": 20,
              "name": "Austine Wambingwa",
              "vote": 4026
          },
          {
              "id": 19,
              "name": "Mercyline Namasaka",
              "vote": 3727
          },
          
      ]
  },
  {
      "categoryId": 8,
      "categoryName": "The Faculty of the Year Award",
      "candidates": [
          {
            "id": 22,
            "name": "FSST",
            "vote": 5333,
            "image": null
          },
          {
              "id": 23,
              "name": "FEBE",
              "vote": 4163
          },
          {
              "id": 24,
              "name": "FAST",
              "vote": 2972
          },
          
      ]
  },
  {
      "categoryId": 9,
      "categoryName": "The Content Creator of the Year Award",
      "candidates": [
          
          {
              "id": 26,
              "name": "Burudani 14",
              "vote": 5684,
              "image": burudani
          },
          {
            "id": 25,
            "name": "Comrade Premium TUK",
            "vote": 4573
          },
          {
            "id": 27,
            "name": "TUK Comrade",
            "vote": 2211
         },
        
      ]
  },
  {
      "categoryId": 10,
      "categoryName": "The Club and/or Society of the Year Award",
      "candidates": [
          {
            "id": 28,
            "name": "Drama",
            "vote": 6605,
            "image": null
          },
          {
              "id": 30,
              "name": "Biochemestry and Biotechnology Students Association",
              "vote": 3731
          },
          {
              "id": 29,
              "name": "French Club",
              "vote": 2132
          }
      ]
  },
  {
      "categoryId": 11,
      "categoryName": "The Humanitarian of the Year Award",
      "candidates": [
          {
              "id": 31,
              "name": "Daltone Ogonda",
              "vote": 5660,
              'image': null
          },
          {
              "id": 32,
              "name": "Felicity Orifah",
              "vote": 5272
          },
          {
              "id": 33,
              "name": "Elphas Aduwa",
              "vote": 1536
          }
      ]
  },
  {
      "categoryId": 12,
      "categoryName": "The Most Innovative and Creative Student of the Year Award",
      "candidates": [
          {
            "id": 34,
            "name": "Kevin Kariuki",
            "vote": 5110,
            'image': kariuki
          },
          {
              "id": 36,
              "name": "Francis Mwendwa",
              "vote": 4827
          },
          {
              "id": 35,
              "name": "David Onyango",
              "vote": 2531
          }
      ]
  },
  {
      "categoryId": 13,
      "categoryName": "The Entrepreneurial Student of the Year Award",
      "candidates": [
          {
            "id": 37,
            "name": "Martha Muraya",
            "vote": 6210,
            "image": null
          },
          {
              "id": 39,
              "name": "Dinah Mwikali",
              "vote": 4222
          },
          {
              "id": 38,
              "name": "Tirati Malei",
              "vote": 2036
          }
      ]
  },
  {
    "categoryId": 25,
    "categoryName": "The Graphic Designer of the Year Award",
    "candidates": [
        {
            "id": 73,
            "name": "Evans Kimutai",
            "vote": 5772,
            'image': kimutai
        },
        {
            "id": 74,
            "name": "Peter Muchina",
            "vote": 4691
        },
        {
            "id": 75,
            "name": "Isaac Kiarita",
            "vote": 2005
        }
    ]
},
  {
      "categoryId": 14,
      "categoryName": "The Poet and Song Writer of the Year Award",
      "candidates": [
          {
              "id": 40,
              "name": "Timothy Olumunyak",
              "vote": 5531,
              "image": timothy
          },
          {
              "id": 41,
              "name": "Ray Junior Orek",
              "vote": 4488
          },
          {
              "id": 42,
              "name": "Yovan Manoa",
              "vote": 2449
          }
      ]
  },
  {
      "categoryId": 15,
      "categoryName": "The Photographer of the Year Award",
      "candidates": [
          {
              "id": 43,
              "name": "White Shadow Photography",
              "vote": 6413,
              "image": whiteShadow
          },
          {
              "id": 44,
              "name": "Kenyanza Art Photography",
              "vote": 4451
          },
          {
              "id": 45,
              "name": "Crews Photography",
              "vote": 1604
          }
      ]
  },
  {
      "categoryId": 16,
      "categoryName": "The Dance Crew of the Year Award",
      "candidates": [
          {
              "id": 46,
              "name": "Creative Ministry",
              "vote": 5888,
              "image": null
          },
          {
              "id": 47,
              "name": "Catalan Dancers",
              "vote": 5303
          },
          {
              "id": 48,
              "name": "Dolores Tempora Temp",
              "vote": 1277
          }
      ]
  },
  {
      "categoryId": 17,
      "categoryName": "The Service Provider of the Year Award",
      "candidates": [
          {
              "id": 49,
              "name": "Tecla Barasa",
              "vote": 6098,
              "image": null
          },
          {
              "id": 50,
              "name": "Omondi Rolex",
              "vote": 4838
          },
          {
              "id": 51,
              "name": "Adika Ladslaus",
              "vote": 1532
          }
      ]
  },
  {
      "categoryId": 18,
      "categoryName": "The Environment Advocate of the Year Award",
      "candidates": [
          {
            "id": 52,
            "name": "Yvette Kenyatta",
            "vote": 5174,
            "image": null
          },
          {
              "id": 53,
              "name": "Moses Okal",
              "vote": 4686
          },
          {
              "id": 54,
              "name": "Michael Onduto",
              "vote": 2608
          }
      ]
  },
  {
      "categoryId": 19,
      "categoryName": "The PWDs Advocate of the Year Award",
      "candidates": [
          {
              "id": 55,
              "name": "Leila Abdi",
              "vote": 7124,
              'image': abdi
          },
          {
              "id": 56,
              "name": "Albert Ooko",
              "vote": 3026
          },
          {
              "id": 57,
              "name": "Asumwa Amwilu",
              "vote": 2318
          }
      ]
  },
  {
      "categoryId": 20,
      "categoryName": "The Commitment to Service Award",
      "candidates": [
          {
            "id": 58,
            "name": "Damaris Njeri",
            "vote": 5723,
            'image': null
          },
          {
              "id": 59,
              "name": "Lenox Onyango",
              "vote": 5372
          },
          {
              "id": 60,
              "name": "Maurice Cornel",
              "vote": 1373
          }
      ]
  },
  {
      "categoryId": 21,
      "categoryName": "Indoor Games Sports Team of the Year Award",
      "candidates": [
          {
              "id": 61,
              "name": "Taekwondo",
              "vote": 5061,
              'image': taekwondo
          },
          {
            "id": 62,
            "name": "Badminton",
            "vote": 4202
          },
          {
              "id": 63,
              "name": "Chess",
              "vote": 3205
          },
          
      ]
  },
  {
      "categoryId": 22,
      "categoryName": "Outdoor Games Sports Team of the Year Award",
      "candidates": [
          {
              "id": 65,
              "name": "TUK Hammers",
              "vote": 6345
          },
          {
              "id": 64,
              "name": "Basketball Ladies",
              "vote": 4860
          },
          {
              "id": 66,
              "name": "Hockey",
              "vote": 1263
          }
      ]
  },
  {
      "categoryId": 23,
      "categoryName": "Indoor Games, Sports Person of the Year Award",
      "candidates": [
          {
              "id": 67,
              "name": "Lawrence Osuru",
              "vote": 5932
          },
          {
              "id": 68,
              "name": "Ian Brian Ouma",
              "vote": 3889
          },
          {
              "id": 69,
              "name": "Martin Abwao",
              "vote": 2647
          }
      ]
  },
  {
      "categoryId": 24,
      "categoryName": "Outdoor Games, Sports Person of the Year Award",
      "candidates": [
          {
              "id": 71,
              "name": "Emmanuel Palimwacha",
              "vote": 4646,
              "image": palimwacha
          },
          {
              "id": 70,
              "name": "Mitchelle Ann Odhiambo",
              "vote": 4624,
              "image": null
          },
          {
              "id": 72,
              "name": "Jasper Ombaso",
              "vote": 3198,
              "image": null
          }
      ]
  },
  
]


const Votes = () => {
  const [categories, setCategories] = useState([]);
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);
  const [countdown, setCountdown] = useState(3);
  const [showStage, setShowStage] = useState(0); // 0: Initial, 1: Show Top 3, 2: Show Winner
  const [loadingWinner, setLoadingWinner] = useState(false);

  useEffect(() => {
    setCategories([...candidatesVotes].reverse());
  }, []);

  const handleNextCategory = () => {
    setCurrentCategoryIndex((prevIndex) => (prevIndex + 1) % categories.length);
    setCountdown(3);
    setShowStage(0);
  };

  const handleStartCategory = () => {
    setCountdown(3);
    setShowStage(1);
  };

  useEffect(() => {
    if (countdown > 0 && showStage === 1) {
      const timer = setTimeout(() => setCountdown((prev) => prev - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown, showStage]);

  const handleShowWinner = () => {
    setLoadingWinner(true);
    setTimeout(() => {
      setLoadingWinner(false);
      setShowStage(2);
    }, 5000); // Delay before revealing the winner
  };

  if (categories.length === 0) return <p>Loading categories...</p>;

  const currentCategory = categories[currentCategoryIndex];
  const sortedCandidates = [...currentCategory.candidates].sort(
    (a, b) => b.vote - a.vote
  );
  const totalVotes = currentCategory.candidates.reduce(
    (sum, candidate) => sum + candidate.vote,
    0
  );

  return (
    <div className="container mx-auto my-8 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">
        Vote Results: {currentCategory.categoryName}
      </h1>
      <p className="text-lg text-center mb-4">Total Votes: {totalVotes}</p>

      {showStage === 0 && (
        <button
          onClick={handleStartCategory}
          className="block mx-auto px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          See Results
        </button>
      )}

      {showStage === 1 && countdown > 0 && (
        <p className="text-4xl font-bold text-center text-red-500">
          Counting down: {countdown}
        </p>
      )}

      {showStage === 1 && countdown === 0 && (
        <div className="text-center">
          <h2 className="text-4xl font-bold text-green-600 mb-4">🥉 3rd Place</h2>
          <p className="text-2xl">{sortedCandidates[2].name}</p>
          <p className="text-lg">Votes: {sortedCandidates[2].vote}</p>

          <button
            onClick={handleShowWinner}
            className="mt-6 px-6 py-2 bg-orange-600 text-white rounded hover:bg-orange-700"
          >
            Who's the Winner?
          </button>
        </div>
      )}

      {loadingWinner && (
        <p className="text-2xl text-center font-bold text-gray-600">
          Determining Winner...
        </p>
      )}

      {showStage === 2 && (
        <div className="text-center">
          <h2 className="text-4xl font-bold text-green-600 mb-4">🎉 Winner 🎉</h2>
          {showStage === 2 && (
            <Confetti width={window.innerWidth} height={window.innerHeight} />
          )}
          <div className="flex items-center justify-center flex-col">
            {sortedCandidates[0].image ? (
              <img
                src={sortedCandidates[0].image}
                alt={sortedCandidates[0].name}
                className="w-40 h-40 rounded-full mb-4"
              />
            ) : (
              <div className="w-40 h-40 flex items-center justify-center bg-gray-200 rounded-full mb-4">
                <span className="text-4xl font-bold text-gray-500">🏆</span>
              </div>
            )}
            <p className="text-3xl font-bold">{sortedCandidates[0].name}</p>
            <p className="text-lg">Votes: {sortedCandidates[0].vote}</p>
          </div>
          <button
            onClick={handleNextCategory}
            className="mt-6 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Next Category
          </button>
        </div>
      )}
    </div>
  );
};

export default Votes;




