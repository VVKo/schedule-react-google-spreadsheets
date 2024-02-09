import {Header, Loading, Navbar, Settings} from "../components/index.js";
import {Outlet, useNavigation} from "react-router-dom";


const HomeLayout = () => {
    const navigation = useNavigation();
    const isPageLoading = navigation.state === 'loading';
    return (
        <>
            <Header />
            <Navbar />

            {isPageLoading ? (
                <Loading />
            ) : (
                <section className='align-element py-20'>
                    <Outlet />
                </section>
            )}
        </>
    );
};

export default HomeLayout;
