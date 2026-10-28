import TeamMemberCard from './components/TeamMemberCard'

import './App.css'

const App = () => (
  <div className="team-app-container">
    <div className="team-content-container">
      <h1 className="team-heading"> our team </h1>
      <p className="team-description">
        Meet the talented professionals who make our company great. Each member
        brings unique skills and expertise to deliver outstanding results.
      </p>
      <div className="team-members-container">
        <TeamMemberCard
          name="Sarah Johnson"
          role="Frontend Developer"
          imageUrl="https://s3.ap-south-1.amazonaws.com/new-assets.ccbp.in/frontend/loading-data/niat_react_js/niat_coding_questions/person1.jpg"
          department="Engineering"
        />
        <TeamMemberCard
          name="Michael Chen"
          role="UI/UX Designer"
          imageUrl="https://s3.ap-south-1.amazonaws.com/new-assets.ccbp.in/frontend/loading-data/niat_react_js/niat_coding_questions/person2.jpg"
          department="Design"
        />
      </div>
    </div>
  </div>
)

export default App
