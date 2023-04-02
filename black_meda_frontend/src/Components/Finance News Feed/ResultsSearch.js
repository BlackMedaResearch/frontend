import { useEffect,useState } from "react"
import { useSelector } from "react-redux";

const ResultsSearch = () =>{
    const dateString = useSelector((state) => state.search.date);
    const searchquery = encodeURIComponent(useSelector((state)=> state.search.searchquery))
    const [results,setResults] = useState([])
    useEffect(() => {
        const fetchNewsApi = async () => {
          const url =
            "https://newsapi.org/v2/everything?" +
            `q=${searchquery}&` +
            `from=${dateString}&` +
            "sortBy=popularity&" +
            "page=2&" +
            "apiKey=ccbd98fc4cf94220849d3a584343667f";
          const response = await fetch(url);
          const data = await response.json();
          console.log(data)
          setResults(data.articles)
        };
        fetchNewsApi();
      }, [dateString,searchquery]);
    

    return(
        <div>
            {results.map((item)=>(
                <p>{item.author}</p>
            ))}

        </div>
    )
}
export default ResultsSearch