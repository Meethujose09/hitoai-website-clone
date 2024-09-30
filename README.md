



Setup and Installation



To run this project locally, follow the instructions below:

Clone the Repository:

  git clone https://github.com/Meethujose09/hitoai-website-clone.git
  cd hitoai-website-clone

Install Dependencies:

Make sure you have Node.js installed. Then, install the required dependencies:

npm install

Start the Development Server:

Start the development server to preview the application locally:

 npm start

Access the Application:

Once the server is running, open your browser and go to:
 
 http://localhost:3000

hitoai-website-clone/
├── assets/                     # Static assets (images, icons, etc.)
├── components/                 # Reusable React components
│   ├── Header.jsx              # Header component for navigation
├── pages/                      # Page components for different sections
│   ├── About                   # About page
│   ├── Contact                 # Contact page// contact informations
│   ├── Home                    # Home page // main page
│   ├── Partners                # Partners page // details about partners and investors
│   ├── Products                # Products page// details about the products
│   ├── Team                    # Team page // details about the team members
├── App.jsx                     # Root component of the React app
├── data.json                   # JSON file for general data used in the app(team members data , profile pic,description etc)
├── index.css                   # Global styles for the app
├── index.js                    # Entry point of the React app
├── investors.json              # JSON file for investor data
├── partners.json               # JSON file for partners data
├── .gitignore                  # Files and folders to be ignored by Git
├── README.md                   # Project documentation
├── package.json                # Project dependencies and scripts
├── tailwind.config.js          # Configuration file for Tailwind CSS
└── yarn.lock                   # Lock file for dependencies
