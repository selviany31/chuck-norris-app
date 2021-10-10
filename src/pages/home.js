import { useEffect, useState } from 'react';
import '../styles/home.css'
import { getRandomJokes, getListCategory } from '../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const Home = () => {
    const [search, setSearch] = useState('')
    const [categoryData, setCategory] = useState('')
    const dispatch = useDispatch()
    const history = useHistory()

    const jokesData = useSelector(state => state.jokesReducer.jokes)
    const listCategory = useSelector(state => state.jokesReducer.listCategory)

    const handleJokes = () => {
        dispatch(getRandomJokes())
    }

    const handleSearch = () => {
        history.push(`/search/${search}`)
        window.location.reload()
    }

    const handleCategory = () => {
        history.push(`/category/${categoryData}`)
        window.location.reload()
    }

    const capitalize = (s) => {
        return s[0].toUpperCase() + s.slice(1);
    }

    useEffect(() => {
        dispatch(getRandomJokes());
    }, [dispatch])

    useEffect(() => {
        dispatch(getListCategory())
    }, [dispatch])

    console.log(listCategory)
    const categories = listCategory.map((item) => {
        return { 
            label: item
        }
        })

    console.log(categoryData);

  return (
    <div>
        <form className="form-search">
          <input type="text" placeholder="Search jokes by text" className="search-input" onChange={(e) => setSearch(e.target.value)} />
          <button onClick={handleSearch} className="button-search">Search!</button>
        </form>

        <div className="content-data">
          <img src={jokesData.icon_url} alt="chuck noris" />
          <p>"{jokesData.value}"</p>
          <button onClick={handleJokes} className="button-search">Another!</button>
        </div>

        <div className="form-category">
            <Autocomplete className="form-search"
                disablePortal
                id="combo-box-demo"
                options={categories}
                getOptionLabel={option => capitalize(option.label)}
                onChange={(e,v) => setCategory(v.label)}
                sx={{ width: 237 }}
                renderInput={(params) => <TextField {...params} label="Search jokes by category" size="small" className="search-input category-input" />}
            />
            <button onClick={handleCategory} className="button-search">Search!</button>
        </div>
        
    </div>
  );
}

export default Home;


