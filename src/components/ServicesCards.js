import {servicesDatas} from '../servicesDatas';


const Services = () => {
return(
    <section className='servicesHome'>
    {servicesDatas.map((service) => (
    <div className='servicesHome__card' key={service.id}>
        <div className='servicesHome__card__icon'>
            <img src={service.img} alt="" ></img>
        </div>
        <div className='servicesHome__card__name'>
            <h3>{service.name}</h3>
        </div>
    </div>
    ))}
    </section>
    
)
}

export default Services;