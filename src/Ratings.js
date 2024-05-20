import React from 'react';

const Ratings = () => {
    const ratings = [
        { logo: process.env.PUBLIC_URL + '/envato-logo.png', score: 4.5, reviews: 9 },
        { logo: process.env.PUBLIC_URL + '/g2-logo.png', score: 4.5, reviews: 9 },
        { logo: process.env.PUBLIC_URL + '/wordpress-logo.png', score: 4.5, reviews: 9 },
    ];
    

  return (
    <div className="mt-8">
      {ratings.map((rating, index) => (
        <div key={index} className="flex items-center mb-4">
          <img src={rating.logo} alt="Logo" className="h-20 w-20 mr-2" />
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="w-4 h-4 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927a1 1 0 011.902 0l1.338 3.936a1 1 0 00.950.690h4.140a1 1 0 01.608 1.796l-3.357 2.440a1 1 0 00-.364 1.118l1.338 3.936a1 1 0 01-1.538 1.145L10 13.662l-3.357 2.440a1 1 0 01-1.538-1.145l1.338-3.936a1 1 0 00-.364-1.118L3.722 9.350a1 1 0 01.608-1.796h4.140a1 1 0 00.950-.690L9.049 2.927z" />
              </svg>
            ))}
          </div>
          <span className="ml-2 text-lg">4.5 Score, 9 Reviews</span>
        </div>
      ))}
    </div>
  );
};

export default Ratings;
