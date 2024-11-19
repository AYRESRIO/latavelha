import Header from "../../components/Header";
import './styles.css';
import SearchBar from "../../components/SearchBar";
import Card from "../../components/Card";

export default function Catalog(){
    return(

        <>
            <Header/>
            <main className="latavelha-catalog-main">
                <section id="latavelha-catalog-section" className="latavelha-container">
                
                    <div className="latavelha-search-bar-container">
                        <SearchBar />
                    </div>

                    <div className="latavelha-catalog-cards-container"> 
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </div>


                </section>

            </main>
        </>
       

    );
}