
import './App.css';
import { Cars } from './data/Cars';
function App() {
    
   
    return (
        <div className="container-fluid text-white mt-5 d-lg-flex mx-auto p-lg-5 col-lg-9" >
            {
                
                Cars.map((info) => {
                    
                    return (
                        <div key={info.id} className={`car-${info.name} p-5 col-lg-4`}>
                            <img src={info.src} alt="car" />
                            <h1 className="font my-4 text-uppercase">{info.name}</h1>
                            <p className="line-break ">{info.status}</p>
                            <input className={`button button-${info.name} mt-lg-5`} type='submit' value='Learn More' />
                    </div>);
                }
            )}
        </div>
    );
}

export default App;
