import { useEffect } from 'react';
import { getJokesBySearch } from '../redux/actions'
import '../styles/home.css'
import { useDispatch, useSelector } from "react-redux";

const Search = () => {
    const dispatch = useDispatch()

    const jokesbySearch = useSelector(state => state.jokesReducer.jokesBySearch)

    const pathname = window.location.pathname.split('/')[2]

    console.log(jokesbySearch.total);

    useEffect(() => {
        dispatch(getJokesBySearch(pathname))
    }, [dispatch, pathname])

  return (
    <div>
        {jokesbySearch.length === 0 ? null : (
            <div className="content-data">
                <img src={jokesbySearch.result[0]?.icon_url} alt="chuck noris" />
                <p style={{color: "#B45309", fontStyle: "normal"}}>Search Text: {pathname.replace(/%20/g, " ")}</p>
                {jokesbySearch.total === 0 ? (
                    <p>No Jokes Found</p>
                ) : jokesbySearch.result?.map((joke, index) => {
                    return (
                        <p key={index}>"{joke?.value === '' ? "No Joke Found" : joke?.value}"</p>
                    )
                })}
            </div>
        )}
    </div>
  );
}

export default Search;
