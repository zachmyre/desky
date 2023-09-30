import '../App.css';
import HTMLEditor from '../features/HTMLEditor';


const MainWindow: React.FC = () => {
  return (
    <div className="MainWindow">
      <h1>Title Here</h1>
      <p>Short Description here</p>
      <HTMLEditor/>
    </div>
  );
}



export default MainWindow;
