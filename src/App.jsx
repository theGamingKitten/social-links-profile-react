import './styles/index.css';
import Card from './components/Card';
import Attribution from './components/Attribution';
import imgSrc from './assets/avatar.svg';

const profileData = {
  imgSrc: imgSrc,
  profileName: 'theGamingKitten',
  location: 'Germany',
  quote: 'Aspiring Full Stack Developer',
  socials: [
    {socialName: 'GitHub', socialLink: 'https://github.com/theGamingKitten'},
    {socialName: 'Source code', socialLink: 'https://github.com/theGamingKitten/social-links-profile-react'},
    {socialName: 'Frontend Mentor', socialLink: 'https://www.frontendmentor.io/profile/theGamingKitten'}
  ]
};

export default function App() {
  return (
    <>
        <div className="profile-container">           
        <Card 
          imgSrc={profileData.imgSrc}
          profileName={profileData.profileName}
          location={profileData.location}
          quote={profileData.quote}
          socials={profileData.socials}
        /> 
        <Attribution />
      </div>
    </>
  )
}