import { useEffect } from 'react';
import { getJokesByCategory } from '../redux/actions'
import '../styles/home.css'
import { useDispatch, useSelector } from "react-redux";

const Search = () => {
    const dispatch = useDispatch()

    const jokesbyCategory = useSelector(state => state.jokesReducer.jokesByCategory)

    const pathname = window.location.pathname.split('/')[2]

    const capitalize = (s) => {
        return s[0].toUpperCase() + s.slice(1);
    }

    const handleJokes = () => {
        dispatch(getJokesByCategory(pathname))
      }

    useEffect(() => {
        dispatch(getJokesByCategory(pathname))
    }, [dispatch, pathname])

    return (
        <div className="content-category">
            {jokesbyCategory?.length === [] ? null : (
                <div >
                    <img src={jokesbyCategory?.icon_url} alt="chuck noris" />
                    <p style={{color: "#B45309", fontStyle: "normal"}}>Category: {capitalize(pathname)}</p>
                    <p>"{jokesbyCategory?.value}"</p>
                </div>
            )}
            <button onClick={handleJokes} className="button-search">Another!</button>
        </div>
    );
}

export default Search;
