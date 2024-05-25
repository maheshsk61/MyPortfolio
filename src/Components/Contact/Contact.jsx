import './Contact.css'
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const contact = [
    {
        email: 'maheshsk61@gmail.com',
        phone: 6383272405,
        linkedin: 'https://www.linkedin.com/in/mahesh-babu-s-k-018a911b2'
    },
]
export default function Contact() {
    return (
        <div className="Contact" id="contact">
            <h1 className='text-info'>Contact</h1>
            {
                contact.map((contact, index) => <ul className="list-unstyled" key={index}>
                    <li><EmailIcon /> Email : <a href={`mailto:${contact.email}`} style={{ textDecoration: 'none' }}>{contact.email}</a></li>
                    <li><PhoneIcon /> Phone : +91 <a href={`tel:${contact.phone}`} style={{ textDecoration: 'none' }}>{contact.phone}</a></li>
                    <li><LinkedInIcon /> Linkedin : <a href={contact.linkedin} target="_blank" style={{ textDecoration: 'none' }}>{contact.linkedin}</a></li>
                </ul>)
            }
        </div>
    )
}
