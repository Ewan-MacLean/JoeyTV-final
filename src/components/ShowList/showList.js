import ShowCard from '../ShowCard/showCard';

const ShowList = function({ showData, loading}){
    if(loading){
        return <h2>Loading...</h2>
    };
    return(
        <div>
            {
                showData.map(
                    x=>(
                        <div key={x.id}>
                            <ShowCard name={x.name} rating={x.rating.average} image={x.image.medium} summary={x.summary}/> 
                        </div>
                    )
                )
            }
        </div>
    );
};

export default ShowList;