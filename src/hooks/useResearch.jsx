import { useEffect, useState } from "react";

const useResearch = () => {
   const [researches, setResearch] = useState([]);
   const [loading, setLoading] = useState(true)
   useEffect( () => {
    fetch('public/research.json')
    .then(res => res.json())
    .then(data => {
        setResearch(data);
        setLoading(false)
    });
   }, [])
   return [researches, loading]
};

export default useResearch;