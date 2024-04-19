import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import Card from './Card';

const API_KEY = 'f7f64dc1126b0ea411322984791b644b';
const FEATURED_API_MOVIES = 'https://api.themoviedb.org/3/discover/movie?api_key=f7f64dc1126b0ea411322984791b644b';
const FEATURED_API_SERIES = 'https://api.themoviedb.org/3/discover/tv?api_key=f7f64dc1126b0ea411322984791b644b';
const SEARCH_API_MOVIES = 'https://api.themoviedb.org/3/search/movie?api_key=f7f64dc1126b0ea411322984791b644b&query=';
const SEARCH_API_SERIES = 'https://api.themoviedb.org/3/search/tv?api_key=f7f64dc1126b0ea411322984791b644b&query=';

const Home = () => {
    const [mediaType, setMediaType] = useState('movie');
    const [mediaData, setMediaData] = useState([]);
    const [query, setQuery] = useState('');
    const [sortByVote, setSortByVote] = useState(false);

    const fetchData = async url => {
        try {
            const response = await axios.get(url);
            const data = response.data.results;
            setMediaData(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData(FEATURED_API_MOVIES);
    }, []);

    const handleSortByVote = () => {
        setSortByVote(prevSortByVote => !prevSortByVote);
    };

    const sortMediaByVote = mediaArr => {
        return mediaArr.sort((a, b) => b.vote_average - a.vote_average);
    };

    const handleSubmit = async type => {
        let url;
        if (query.trim() === '') {
            url = type === 'movie' ? FEATURED_API_MOVIES : FEATURED_API_SERIES;
        } else {
            url = type === 'movie' ? SEARCH_API_MOVIES + query : SEARCH_API_SERIES + query;
        }
        fetchData(url);
        setMediaType(type);
    };

    const fetchMovies = () => {
        setMediaType('movie');
        if (!query) {
            fetchData(FEATURED_API_MOVIES);
        } else {
            handleSubmit('movie');
        }
    };

    const fetchSeries = () => {
        setMediaType('tv');
        if (!query) {
            fetchData(FEATURED_API_SERIES);
        } else {
            handleSubmit('tv');
        }
    };

    useEffect(() => {
        if (sortByVote) {
            setMediaData(sortMediaByVote([...mediaData]));
        } else {
            setMediaData([...mediaData.sort((a, b) => a.vote_average - b.vote_average)]);
        }
    }, [sortByVote]);

    const renderNoResultsMessage = () => {
        return (
            <div className="flex flex-col items-center justify-center h-full">
                <p className="text-2xl font-semibold text-gray-800">Sorry, there are no movies/series that meet your criteria.</p>
            </div>
        );
    };

    return (
        <div className="flex flex-col items-center h-auto w-full bg-amber-300">
            <SearchBar handleSubmit={handleSubmit} query={query} setQuery={setQuery} fetchMovies={fetchMovies} fetchSeries={fetchSeries} mediaType={mediaType} handleSortByVote={handleSortByVote} />
            <div className="my-24 flex flex-wrap gap-20 w-100 m-auto justify-center items-center">
                {mediaData.length > 0 ? mediaData.map(media => <Card key={media.id} media={media} mediaType={mediaType} />) : renderNoResultsMessage()}
            </div>
        </div>
    );
};

export default Home;
