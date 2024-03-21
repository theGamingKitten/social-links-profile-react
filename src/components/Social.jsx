export default function Social(props) {
    const socials = props.socials;
    return (
        socials.map((social) => (
            <a 
                className="social-link" 
                href={social.socialLink}
                target="_blank"
                rel="noreferrer">
                {social.socialName}                
            </a>
          ))
    );
}