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


import React, { useState, useEffect } from "react";
import Confetti from "react-confetti";

const Votes = () => {
  const [categories, setCategories] = useState([]);
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);
  const [countdown, setCountdown] = useState(3);
  const [showResults, setShowResults] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [voters, setVoters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const votersPerPage = 10;

  useEffect(() => {
    const token = localStorage.getItem("accessToken");

    const fetchCandidatesAndVoters = async () => {
      try {
        const response = await fetch(
          "https://satuk.onrender.com/users/candidate",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const data = await response.json();

        if (data.success) {
          setVoters(data.voters.map((voter) => voter.toLowerCase())); // Convert voter emails to lowercase
        } else {
          setError("Failed to retrieve candidates");
        }
      } catch (err) {
        setError("Error fetching candidates");
      } finally {
        setLoading(false);
      }
    };

    fetchCandidatesAndVoters();
  }, []);

  useEffect(() => {
    setCategories(candidatesVotes);
  }, [candidatesVotes]);

  useEffect(() => {
    if (countdown > 0 && !showResults) {
      const timer = setTimeout(() => setCountdown((prev) => prev - 1), 1000);
      return () => clearTimeout(timer);
    } else if (countdown === 0) {
      setShowResults(true);
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 3000);
    }
  }, [countdown, showResults]);

  const handleNextCategory = () => {
    setCurrentCategoryIndex((prevIndex) => (prevIndex + 1) % categories.length);
    setCountdown(3);
    setShowResults(false);
  };

  const handlePreviousCategory = () => {
    setCurrentCategoryIndex(
      (prevIndex) => (prevIndex - 1 + categories.length) % categories.length
    );
    setCountdown(3);
    setShowResults(false);
  };

  const downloadVoters = () => {
    const timestamp = new Date().toLocaleString(); // Get current date and time
    const securityToken = `Token-${Math.random().toString(36).substr(2, 9)}-${Date.now()}`; // Generate a random token

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

  const totalPages = Math.ceil(voters.length / votersPerPage);
  const currentVoters = voters.slice(
    (currentPage - 1) * votersPerPage,
    currentPage * votersPerPage
  );

  const handlePageChange = (direction) => {
    if (direction === "next" && currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    } else if (direction === "prev" && currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
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
      {showConfetti && (
        <Confetti width={window.innerWidth} height={window.innerHeight} />
      )}
      <h1 className="text-3xl font-bold text-center mb-8">Vote Results</h1>

      <div className="category p-6 bg-white shadow-md rounded-lg text-center">
        <h2 className="text-2xl font-semibold mb-4">
          {currentCategory.categoryName}
        </h2>
        <p className="text-lg mb-4">Total Votes: {totalVotes}</p>

        {!showResults ? (
          <p className="text-4xl font-bold text-red-500 mb-4">
            Counting down: {countdown}
          </p>
        ) : (
          <div className="results">
            <div className="winner mb-4">
              <h3 className="text-3xl font-bold text-green-500">
                🎉 Winner: {sortedCandidates[0].name} 🎉
              </h3>
              <p className="text-lg text-gray-700">
                Votes: {sortedCandidates[0].vote}
              </p>
            </div>
            <div className="first-runner-up mb-4">
              <h4 className="text-2xl font-semibold text-blue-500">
                🥈 1st Runner-up: {sortedCandidates[1].name}
              </h4>
              <p className="text-lg text-gray-700">
                Votes: {sortedCandidates[1].vote}
              </p>
            </div>
            <div className="second-runner-up">
              <h5 className="text-2xl font-semibold text-purple-500">
                🥉 2nd Runner-up: {sortedCandidates[2].name}
              </h5>
              <p className="text-lg text-gray-700">
                Votes: {sortedCandidates[2].vote}
              </p>
            </div>
          </div>
        )}
      </div>

      <div className="pagination mt-6 text-center">
        <button
          onClick={handlePreviousCategory}
          className="px-6 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 mr-4"
        >
          Previous Category
        </button>
        <button
          onClick={handleNextCategory}
          className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Next Category
        </button>
      </div>

      <div className="voter-section mt-8">
        <h2 className="text-xl font-bold mb-4">Voters</h2>
        <ul className="list-disc list-inside">
          {currentVoters.map((voter, index) => (
            <li key={index}>{voter}</li>
          ))}
        </ul>
        <div className="pagination mt-4">
          <button
            onClick={() => handlePageChange("prev")}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-gray-600 text-white rounded mr-4"
          >
            Previous
          </button>
          <button
            onClick={() => handlePageChange("next")}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-gray-600 text-white rounded"
          >
            Next
          </button>
        </div>
        <button
          onClick={downloadVoters}
          className="px-6 py-2 bg-green-600 text-white rounded mt-4"
        >
          Download Voter List
        </button>
      </div>
    </div>
  );
};

export default Votes;


