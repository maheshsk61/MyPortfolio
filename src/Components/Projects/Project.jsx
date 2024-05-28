import './Project.css'
export default function Project() {
    return (
        <div className="Projects" id="projects">
            <h1 className='text-info'>Projects</h1>
            <div className="Project1">
                <h1 className='text-warning'>#1 Ecommerce Application</h1>
                <ul>
                    <li>Implemented a shopping cart feature allowing users to add, remove, and update items in their cart.</li>
                    <li>Designed and implemented product listing pages to display a catalog of available products.</li>
                    <li>Implemented client-side form validation to ensure data integrity and accuracy before submission.</li>
                    <li>Utilized media queries and flexible layout techniques in bootstrap to adapt the layout and styling of the eCommerce web app to different screen sizes and resolutions.</li>
                    <li>Deployed the eCommerce web app on Netlify, leveraging its platform-as-a-service (PaaS) capabilities for seamless deployment and hosting.</li>
                </ul>
                <a href="https://6655ef64aa5ac615d1787f03--delicate-jelly-985f7b.netlify.app/" style={{ textDecoration: 'none' }} target='blank'>View the project</a>
                <br />
                <a href="https://github.com/maheshsk61/EcommerceApp" style={{ textDecoration: 'none' }} target='blank'>Source code</a>
            </div>
        </div>
    )
}