import "./Detail.css";
import CompiledInfo from "./Details/compiled-info";
import BasicInfo from "./Details/basic-info";
import Reviews from "./Details/reviews";
import CompleteTags from "./Details/complete-tags";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  let { showId } = useParams();

  const [publicData, setPublicData] = useState([]);
  const [rawReviews, setRawReviews] = useState([]);
  const [computedData, setComputedData] = useState({});
  const [eps, setEps] = useState({});

  const summarizeComments = (allComments) => {
    let filteredComments = allComments.filter(
      (comment) => comment.showId == showId
    );

    // Record all reviews on raw variable
    setRawReviews(filteredComments);

    // TBD temporary comments to test rendering. Replace it.
    let comments = filteredComments;

    // Processes all ages included in any review in compiled variable
    let compiledData = {
      ages: [],
      rating: 0,
      countReviews: 0,
      tagsArray: [],
      tagsArrayPreP: [],
      tagsObj: {},
    };

    for (let c of comments) {
      if (c.ages) {
        for (let a of c.ages) {
          if (!compiledData.ages.includes(a)) {
            compiledData.ages.push(a);
          }
        }
      }
    }

    // Processes all tags included in any review in compiled array variable (no counting)
    for (let c of comments) {
      if (c.tags) {
        for (let t of c.tags) {
          compiledData.tagsArrayPreP.push(t);
          if (!compiledData.tagsArray.includes(t)) {
            compiledData.tagsArray.push(t);
          }
        }
      }
    }

    compiledData.tagsObj = compiledData.tagsArrayPreP.reduce((a, b) => {
      if (b in a) {
        a[b]++;
      } else {
        a[b] = 1;
      }
      return a;
    }, {});

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

    // Count reviews
    compiledData.countReviews = comments.length;

    setComputedData(compiledData);
  };

  useEffect(() => {
    fetch("http://localhost:8888/movies")
      .then((response) => {
        return response.json();
      })
      .then((moviesData) => {
        let oneMovie = moviesData.filter((movie) => movie.id == showId);
        setPublicData(oneMovie);
        fetch(oneMovie[0]._links.previousepisode.href)
          .then((response) => response.json())
          .then((eps) => {
            setEps(eps);
          });
      });

    fetch("http://localhost:8888/userComments")
      .then((response) => {
        return response.json();
      })

      .then((allComments) => summarizeComments(allComments));
  }, []);

  return (
    <div>
      <CompiledInfo props={[publicData, rawReviews, computedData]} />
      {/* <BasicInfo props={[publicData, rawReviews, computedData, eps]} /> */}
      <Reviews props={[publicData, rawReviews, computedData]} />
      <CompleteTags props={[publicData, rawReviews, computedData]} />
    </div>
  );
}

export default Detail;
