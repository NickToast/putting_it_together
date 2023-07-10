import './App.css';
import PersonCard from './components/PersonCard';

function App() {
    return (
        <div className="App">
            <PersonCard firstName={"Jane"} lastName={"Doe"} age={45} hair_color={"Black"}/>
            <PersonCard firstName={"Smith"} lastName={"John"} age={88} hair_color={"Brown"}/>
            <PersonCard firstName={"Millard"} lastName={"Fillmore"} age={50} hair_color={"Brown"}/>
            <PersonCard firstName={"Maria"} lastName={"Smith"} age={62} hair_color={"Brown"}/>
        </div>
    );
}

export default App;

/*change age to a number or else the button won't add 1 correctly*/
