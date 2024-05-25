import './Skills.css'
const skills = [
    {
        name: 'HTML 5',
        img: 'https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_640.png'
    },
    {
        name: 'CSS 3',
        img:'https://cdn-icons-png.flaticon.com/512/888/888847.png'
    },
    {
        name: 'Bootstrap',
        img: 'https://w7.pngwing.com/pngs/804/269/png-transparent-bootstrap-hd-logo-thumbnail.png'
    },
    {
        name: 'Javascript',
        img: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png'
    },
    {
        name: 'ReactJS',
        img: 'https://static-00.iconduck.com/assets.00/react-original-wordmark-icon-840x1024-vhmauxp6.png'
    },
    {
        name: 'Git & Github',
        img: 'https://cdn.worldvectorlogo.com/logos/git-bash.svg'
    }]
export default function Skills() {
    return (
        <div className="Skills" id='skills'>
            <h1 className='text-info'>Technical Skills</h1>
            {
                skills.map((skill, index) => <ul className='list-unstyled d-flex' key={index}>
                    <img src={skill.img} width='50px' height='30px' />
                    <li className='mx-3'>{skill.name}</li>
                </ul>
                )
            }
        </div>
    )
}
