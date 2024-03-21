import Profile from './Profile';
import Social from './Social';

export default function Card(props) {
    return (
        <div>
            <Profile 
            imgSrc={props.imgSrc}
            profileName={props.profileName}
            location={props.location}
            quote={props.quote}
            />
           <Social socials={props.socials} />
        </div>
    );
}