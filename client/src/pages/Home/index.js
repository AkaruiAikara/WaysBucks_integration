import Jumbotron from '../../components/Jumbotron';
import ListProducts from '../../components/ListProducts';

export default function Home(props) {
    const [isLogin, setIsLogin] = [props.isLogin, props.setIsLogin];
    return (
        <div className="mx-10 lg:mx-0">
            <Jumbotron />
            <ListProducts isLogin={isLogin} setIsLogin={setIsLogin}/>
        </div>
    )
}