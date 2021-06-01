import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import PlaceToVisit from "./components/PlaceToVisit"
import {CssBaseline} from "@material-ui/core"
import {makeStyles} from "@material-ui/core/styles"
//import classes from '*.module.css';

const useStyles = makeStyles((theme) => ({
  root:{
    minHeight: "100vh",
    backgroundImage: `url(${process.env.PUBLIC_URL + "/assests/bg.jpg"})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
  }
}))

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>

      <CssBaseline/>

      <Header/>

      <PlaceToVisit/>
          </div>
  );
}

export default App;
