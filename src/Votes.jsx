import React, { useEffect, useState } from 'react';
import Confetti from 'react-confetti';

const candidatesVotes=  [

  {
      "categoryId": 3,
      "categoryName": "The Student Leader of the Year Award",
      "candidates": [
          {
            "id": 8,
            "name": "Peter Marite",
            "vote": 4614
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
              "vote": 4876
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
              "vote": 4866
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
              "vote": 4712
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
            "vote": 4715
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
            "vote": 5333
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
              "vote": 5684
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
            "vote": 6605
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
              "vote": 5660
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
            "vote": 5110
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
            "vote": 6210
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
            "vote": 5772
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
              "vote": 5531
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
              "vote": 6413
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
              "vote": 5888
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
              "vote": 6098
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
            "vote": 5174
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
              "vote": 7124
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
            "vote": 5723
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
              "vote": 5061
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
              "vote": 4646
          },
          {
              "id": 70,
              "name": "Mitchelle Ann Odhiambo",
              "vote": 4624
          },
          {
              "id": 72,
              "name": "Jasper Ombaso",
              "vote": 3198
          }
      ]
  },
  
]


const Votes = () => {
  const [categories, setCategories] = useState([]);
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);
  const [countdown, setCountdown] = useState(3);
  const [showResults, setShowResults] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [announcementIndex, setAnnouncementIndex] = useState(-1);
  const [voters, setVoters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const votersPerPage = 5;

  useEffect(() => {
    setCategories(candidatesVotes);
  }, []);

  const handleNextCategory = () => {
    setCurrentCategoryIndex((prev) =>
      prev + 1 === categories.length ? 0 : prev + 1
    );
    resetState();
  };

  const handlePreviousCategory = () => {
    setCurrentCategoryIndex((prev) =>
      prev === 0 ? categories.length - 1 : prev - 1
    );
    resetState();
  };

  const resetState = () => {
    setCountdown(3);
    setShowResults(false);
    setAnnouncementIndex(-1);
  };

  useEffect(() => {
    if (countdown > 0 && !showResults) {
      const timer = setTimeout(() => setCountdown((prev) => prev - 1), 1000);
      return () => clearTimeout(timer);
    } else if (countdown === 0 && !showResults) {
      setShowResults(true);
      setShowConfetti(true);
      setAnnouncementIndex(0);
      setTimeout(() => setShowConfetti(false), 3000);
    }
  }, [countdown, showResults]);

  useEffect(() => {
    if (announcementIndex >= 0 && announcementIndex < 3) {
      const timer = setTimeout(() => setAnnouncementIndex((prev) => prev + 1), 2000);
      return () => clearTimeout(timer);
    }
  }, [announcementIndex]);

  const currentCategory = categories[currentCategoryIndex];
  const sortedCandidates = [...currentCategory.candidates].sort(
    (a, b) => b.vote - a.vote
  );
  const totalVotes = sortedCandidates.reduce((sum, candidate) => sum + candidate.vote, 0);

  const totalPages = Math.ceil(voters.length / votersPerPage);
  const displayedVoters = voters.slice(
    (currentPage - 1) * votersPerPage,
    currentPage * votersPerPage
  );

  const handlePageChange = (page) => setCurrentPage(page);

  const downloadVoters = () => {
    const timestamp = new Date().toLocaleString();
    const securityToken = `Token-${Math.random().toString(36).substr(2, 9)}-${Date.now()}`;
    const voterList = [
      `Voters List - Generated on: ${timestamp}`,
      `Security Token: ${securityToken}`,
      "----------------------------------------",
      ...voters.map((voter, index) => `${index + 1}. ${voter}`),
    ].join("\n");

    const blob = new Blob([voterList], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `voters_list_${Date.now()}.txt`;
    link.click();
  };

  return (
    <div className="container mx-auto my-8 px-4">
      {showConfetti && <Confetti width={window.innerWidth} height={window.innerHeight} />}
      <h1 className="text-3xl font-bold text-center mb-8">Vote Results</h1>

      <div className="category p-6 bg-white shadow-md rounded-lg text-center">
        <h2 className="text-2xl font-semibold mb-4">{currentCategory.categoryName}</h2>
        <p className="text-lg mb-4">Total Votes: {totalVotes}</p>

        {!showResults ? (
          <p className="text-4xl font-bold text-red-500 mb-4">Counting down: {countdown}</p>
        ) : (
          <div className="results">
            {announcementIndex >= 0 && announcementIndex < 3 && (
              <div className="announcement mb-4">
                <h3 className={`text-${announcementIndex === 0 ? "green" : announcementIndex === 1 ? "blue" : "purple"}-500 text-3xl font-bold`}>
                  {announcementIndex === 0 && `🎉 Winner: ${sortedCandidates[0].name} 🎉`}
                  {announcementIndex === 1 && `🥈 1st Runner-up: ${sortedCandidates[1].name}`}
                  {announcementIndex === 2 && `🥉 2nd Runner-up: ${sortedCandidates[2].name}`}
                </h3>
                <p className="text-lg text-gray-700">
                  Votes: {sortedCandidates[announcementIndex].vote}
                </p>
              </div>
            )}
          </div>
        )}
      </div>

      <div className="pagination flex justify-between mt-6">
        <button onClick={handlePreviousCategory} className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Previous Category
        </button>
        <button onClick={handleNextCategory} className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Next Category
        </button>
      </div>

      <div className="voters bg-white shadow-md rounded-lg p-6 mt-8">
        <h2 className="text-2xl font-bold mb-4">Voters List</h2>
        <button onClick={downloadVoters} className="mb-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
          Download Voters List
        </button>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr>
              <th className="border-b-2 p-4">#</th>
              <th className="border-b-2 p-4">Voter Email</th>
            </tr>
          </thead>
          <tbody>
            {displayedVoters.map((voter, index) => (
              <tr key={index} className="border-b">
                <td className="p-4">{(currentPage - 1) * votersPerPage + index + 1}</td>
                <td className="p-4">{voter}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="pagination mt-4 flex justify-center">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`px-3 py-1 mx-1 rounded ${
                currentPage === page ? "bg-blue-600 text-white" : "bg-gray-300"
              }`}
            >
              {page}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Votes;

