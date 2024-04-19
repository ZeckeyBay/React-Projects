import React from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBar = ({ query, setQuery, fetchMovies, fetchSeries, mediaType, handleSubmit, handleSortByVote }) => {
    const handleFormSubmit = e => {
        e.preventDefault();
        handleSubmit(mediaType);
    };

    return (
        <div className="flex justify-between items-center mt-7">
            <form onSubmit={handleFormSubmit} className="rounded-md container-fluid w-96 flex justify-between items-center bg-[white] px-3 text-black h-10">
                <input autoFocus value={query} onChange={e => setQuery(e.target.value)} maxLength={40} type="text" placeholder="Search a movie/series..." className="border-none outline-none" />
                <button
                    type="button"
                    onClick={fetchMovies}
                    className={`focus:outline-none ${mediaType === 'movie' ? 'bg-gray-700 text-white' : 'bg-transparent text-gray-700 hover:bg-gray-700 hover:text-white'} rounded-md px-2 py-1 mr-2`}
                >
                    Movies
                </button>
                <button
                    type="button"
                    onClick={fetchSeries}
                    className={`focus:outline-none ${mediaType === 'tv' ? 'bg-gray-700 text-white' : 'bg-transparent text-gray-700 hover:bg-gray-700 hover:text-white'} rounded-md px-2 py-1`}
                >
                    Series
                </button>
                <button type="submit" className="focus:outline-none bg-transparent text-gray-700 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2">
                    <FaSearch color="black" />
                </button>
            </form>
            <button className="px-2 py-2 ml-5 bg-gray-700 text-white rounded-md hover:bg-gray-700" onClick={handleSortByVote}>
                Sort by Vote
            </button>
        </div>
    );
};

export default SearchBar;
