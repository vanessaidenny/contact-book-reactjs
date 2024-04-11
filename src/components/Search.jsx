const Search = ({ handleSearch }) => {
    const onInputValueSearch = (event) => {
        event.preventDefault()
        handleSearch(event.target.value)
    }
    return (
        <>
            <form className="form-inline pb-3">
                <input name="searchInput" className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={onInputValueSearch} />
            </form>
        </>
    );
};

export default Search