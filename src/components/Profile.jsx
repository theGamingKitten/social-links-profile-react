export default function Profile(props) {
    return (
        <div>
            <img 
                className="profile-avatar" 
                src={props.imgSrc}
                alt={props.profileName}/>
            <h1 className="profile-name">{props.profileName}</h1>
            <h2 className="location">{props.location}</h2>
            <p className="quote">"{props.quote}."</p>
        </div>
    );
}