import {useState, useEffect, useCallback} from "react";
import debounce from "lodash.debounce";
import axios from "axios";
import Movie from "./Movie";
import  {connect} from "react-redux";
import {changeResult} from "../reducer";
import MovieDetailModal from "./MovieDetailModal";

// Search box implemtation
// States
const SearchPage = (props)=> {
    // Initial state of the search box.
    const [input,setInput] = useState("");
    // Initial output of the output "empty"
    const [output, setOutput] = useState([]);
    // Initial modal state (false)
    const [modalShow, setModalShow] =useState(false);
    // movieDetail initial state is false(notShow)
    const [movieDetail, setMovieDetail] =useState({});
    // Search result counter
    const {total, changeResult} = props;

    const debounceFn = useCallback(
        debounce((input)=>{
            //make api call for title information searching (axios call)
            axios.get(`https://localhost:7180/api/Title/SearchByName/${input}`)
            .then(({data})=>{
                setOutput(data);
               changeResult(data.length);
            })
        },0),
        []
    )

    useEffect(()=>{
        if(input.length !== 0){
            debounceFn(input);
        }
    },[input])

    const handleInputChange = (e)=>{
        setInput(e.target.value);
    }

    //make api call for title details according to the titleID (axios call)
    const handleClick = (id) => {
        axios.get(`https://localhost:7180/api/Title/GetDetailsByTitleId/${id}`)
        .then(({data})=>{
            setMovieDetail(data);
            setModalShow(true);
        })

    }

    return(
        <div className="text-center">
            <MovieDetailModal show={modalShow} onHide={()=>setModalShow(false)} detail={movieDetail}/>
            
            <h1>{`${total} of results is found`}</h1>
            <span>Search: </span>
            <input
                value={input}
                onChange={handleInputChange}
            />
            <section className="cardLayout">
                {output.map(({titleId,...rest})=>{
                    return <Movie key={titleId} info={rest} onClick={()=>handleClick(titleId)}/>
                })}
            </section>
        </div>
        
    )
}

const mapStateToProp = (state)=>{
    return{
        total:state.numResult
    }
}

const mapDispatchToProp = (dispatch)=>{
    return{
        changeResult:(num)=>dispatch(changeResult(num))
    }
}

export default connect(mapStateToProp,mapDispatchToProp)(SearchPage);