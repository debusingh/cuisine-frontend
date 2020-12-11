import '../components-css/Title.css'
import LogoImage from '../tc-bg.jpg';

function Title() {

    var titleStyle = {
        backgroundImage: `url(${LogoImage})`
     }    
     
     return (
        <div className="Title" style={titleStyle}>
                <h1>Regional Cuisine is THE Cuisine</h1>
                <br/>
                <h2>Authentic Indian Regional Cuisines.</h2>
        </div>
    )
}

export default Title;