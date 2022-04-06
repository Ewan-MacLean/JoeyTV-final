import './Detail.css';
import CompiledInfo from './Details/compiled-info';
import Reviews from './Details/reviews';
import CompleteTags from './Details/complete-tags';
import { useEffect, useState } from 'react';

function Detail(showId) {

  showId="691"; // TBD Remove It

  const [publicData, setPublicData] = useState([]);
  const [rawReviews, setRawReviews] = useState([]);
  const [computedData, setComputedData] = useState({});

  useEffect(() => {

    fetch("http://localhost:8888/movies")
      .then((response) => {
        return response.json();
      })
      .then((moviesData) => {
        setPublicData(moviesData.filter(movie => (movie.id == showId)));
        // console.log(publicData)
      })

    fetch("http://localhost:8888/userComments")
      .then((response) => {
        return response.json();
      })

      .then((allComments) => {
        let filteredComments = allComments.filter(comment => ( comment.showId == showId))
        // Record all reviews on raw variable
        setRawReviews(filteredComments);

        // TBD temporary comments to test rendering. Replace it.
        let comments = filteredComments;        
        // let comments = [{
        //   "_id": "6241b56abdb83274dd7e8f89",
        //   "showId": "691",
        //   "userId": "1",
        //   "movieTitle": "Daniel Tiger's Neighborhood",
        //   "review": "Great tv show. It is has some music, content related to family, shool and friends/neighborhood.",
        //   "rating": 8,
        //   "__v": 0,
        //   "ages": ["4", "5"],
        //   "tags": ["Interactive", "Communication skills", "Life changes", "Kindness", "School"]
        // },

        // {
        //   "_id": "6241b56ghtb83274dd7e8f89",
        //   "showId": "691",
        //   "userId": "2",
        //   "movieTitle": "Daniel Tiger's Neighborhood",
        //   "review": "Talk about a lot of good habits. Interesting to watch toghether and talk about some real-life issues. For instance, going to a doctor, vaccine, first day at school, sibling arrival etc.",
        //   "rating": 9,
        //   "__v": 0,
        //   "ages": ["3", "4", "5"],
        //   "tags": ["Musical", "Communication skills", "Emotional skills", "Family"]
        // }
        // ]
        // setRawReviews(comments);


        // Processes all ages included in any review in compiled variable
        let compiledData =
        {
          "ages": [],
          "rating": 0,
          "countReviews": 0,
          "tagsArray": [],
          "tagsArrayPreP": [],
          "tagsObj": {}
        };

        for (let c of comments) {
          if (c.ages) {
            for (let a of c.ages) {
              if (!compiledData.ages.includes(a)) { compiledData.ages.push(a) 
              }
            }
          }
        }
        // console.log(compiledData.ages)

        // Processes all tags included in any review in compiled array variable (no counting)
        for (let c of comments) {
          if (c.tags) {
            for (let t of c.tags) {
              compiledData.tagsArrayPreP.push(t)
              if (!compiledData.tagsArray.includes(t)) {
                compiledData.tagsArray.push(t);
              }
            }
          }
        }
        // console.log(compiledData.tagsArray)
        // console.log(compiledData.tagsArrayPreP)

        compiledData.tagsObj = compiledData.tagsArrayPreP.reduce((a, b) => {
          if (b in a) {
            a[b]++
          }
          else {
            a[b] = 1
          }
          return a
        }, {})

        // console.log(compiledData.tagsObj)

        // Computes average rating
        let ratingSum = 0;
        let ratingCount = 0;
        for (let c of comments) {
          if (c.rating) {
            ratingSum += c.rating;
            ratingCount += 1;
          }
        }
        compiledData.rating = ratingSum / ratingCount;

        // console.log(compiledData.rating)

        // Count reviews
        compiledData.countReviews = comments.length;
        // console.log(compiledData.countReviews)

        // console.log(compiledData);
        setComputedData(compiledData);
      })


  }, []);



  return (
    // <APIContextProvider>
    //   <div>
    //     <TestComponent />
    //   </div>
    // </APIContextProvider>

    <div>
      {/* <ShowData data={[publicData, rawReviews, computedData]} /> */}
      <CompiledInfo props={[publicData, rawReviews, computedData]}/>
      <Reviews props={[publicData, rawReviews, computedData]}/>
      <CompleteTags props={[publicData, rawReviews, computedData]}/>
    </div>
  );
}

export default Detail;
