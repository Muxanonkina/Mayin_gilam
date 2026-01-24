import {SERVICES_LIST} from '../constants';

const Services = () =>{
return (
 <section>
<h2>Наши услуги</h2>
<div style={{display:'flex',gap:'20px'}}>
{
SERVICES_LIST.map((service) =>(
<div key ={service.id} className="service-card">
<span>{service.icon}</span>
<h3>{service.title}</h3>
<p>{service.description}</p>
</div>
))
}
</div>
</section>
);
};
export default Services;
