export default function Social({ socialLink, socialName }) {
    return (        
        <a 
            className="social-link" 
            href={socialLink}
            target="_blank"
            rel="noreferrer">
            {socialName}                
        </a>
    );
}