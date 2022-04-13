import ShowCard from '../ShowCard/showCard';

const ShowList = function({ showData, loading}){
    if(loading){
        return <h2>Loading...</h2>
    };
    return(
        <div>
            {
                showData
                .sort((a, b) => (a.rating.average < b.rating.average)? 1 : -1) //TBD Fix the null cases
                .map(
                    x=>(
                        <div key={x.id}>
                            <ShowCard name={x.name} rating={x.rating.average} image={x.image.medium} summary={x.summary} showId={x.id}/> 
                        </div>
                    )
                )
            }
        </div>
    );
};

export default ShowList;