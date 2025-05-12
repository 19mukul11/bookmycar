import permit from '../../../assets/images/home/permit.png';
import twentyFourSeven from '../../../assets/images/home/24X7.png';
import verified from '../../../assets/images/home/verified-car.png';


function Feature(props) {

    const getImageName = () => {
        switch (props.image) {
            case 'permit':
                return permit;

            case 'hours':
                return twentyFourSeven;

            case 'verified':
                return verified;
        }
    }

    return (
        <div className="feature-box text-center">
            <div>
                <img src={getImageName()} alt="" className='feature-img mx-auto' />
            </div>
            <div>
                <h3>{props.label}</h3>
            </div>
        </div>
    );
}

export default Feature;