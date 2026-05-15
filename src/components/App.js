import './App.css';
import HeaderComponent from './Header';
import BodyComponent from './Body';
import FooterComponent from './Footer';



const AppLayout = () => {
  return (
    <div>
      <div className="appLayout">
        <HeaderComponent />
        <BodyComponent />
      </div>
      <FooterComponent />
    </div>
  );
}

export default AppLayout;
