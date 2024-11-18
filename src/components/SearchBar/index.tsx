import "./styles.css";
export default function SearchBar(){
    return(
        <form className="latavelha-search-bar">
            <input className="latavelha-form-control" type="text" placeholder="Digite sua busca" />
            <button className="latavelha-search-bar-submit" type="submit">Buscar</button>
        </form>

    );

}