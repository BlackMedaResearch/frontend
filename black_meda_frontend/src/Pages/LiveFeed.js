import { useState, useEffect } from "react";

const LiveFeed = () => {
  useEffect(() => {
    const twitterLiveFeed = (username, apikey) => {
      const url = `https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=${username}`;
      const headers = {
        Authorization: `Bearer ${apikey}`,
      };

      fetch(url, {
        method: "GET",
        headers: headers,
      })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.error(error));
    };
    twitterLiveFeed(
      "TechDev_52",
      "AAAAAAAAAAAAAAAAAAAAAIU9lQEAAAAAovN%2F4P4eeHYHy7PsP1uvdgg1WzQ%3DeJKcjva9cqFUxjwOAZmKPQ25jx4yr67Dp1J8sPyQjXtneVciAR"
    );
  }, []);

  return <p>Twiiter live feed</p>;
};
export default LiveFeed;
