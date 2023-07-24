
import useResearch from "../../../hooks/useResearch";

const Research = () => {
    const [researches] = useResearch();

    const slicedItems = researches.slice(0, 6)
    return (
        <div className="my-8">
            <h3 className="text-3xl text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-900 to-violet-500 font-bold">Research Paper</h3>
            <div className="grid grid-cols-2 gap-x-4">
                {
                    slicedItems.map((research, index) => <div className="card card-side bg-white shadow-xl my-2 cursor-pointer" key={index}>
                        <figure><img className="h-20 w-20 p-2" src={research.image} alt="Movie" /></figure>
                        <div className="card-body">
                            <p>{research.researchHeading}</p>
                            <p>{research.researchTitle}</p>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Research;