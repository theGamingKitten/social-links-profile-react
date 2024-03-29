export default function Profile({imgSrc, profileName, location, quote}) {
    return (
        <div>
            <img 
                className="profile-avatar" 
                src={imgSrc}
                alt={profileName}/>
            <h1 className="profile-name">{profileName}</h1>
            <h2 className="location">{location}</h2>
            <p className="quote">"{quote}."</p>
        </div>
    );
}