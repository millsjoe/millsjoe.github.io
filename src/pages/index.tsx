import type { NextPage } from "next";
import { Content } from "../components/contents";
import { Footer } from "../components/footer";
import Header from "../components/header";
const Home: NextPage = () => {
    return (
        <div>
            <Header />
            <Content />
            <Footer />
        </div>
    );
};

export default Home;
