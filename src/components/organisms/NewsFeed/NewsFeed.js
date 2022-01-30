import React, { useEffect, useState } from 'react';
import { Heading } from '../../atoms/Heading/Heading';
import Segment from '../../atoms/Segment/Segment';
import Button from '../../atoms/Buttons/Button/Button';
import axios from 'axios';
import { StyledNewsCard, StyledNewsFeed } from './NewsFeed.styles';

export const query = `
          {
                    allArticles {
            id
            title=
            category 
            content
            image {
            url
            }
          }}`;

const NewsFeed = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .post(
        'https://graphql.datocms.com/',
        {
          query,
        },
        {
          headers: {
            authorization: `Bearer ${process.env.REACT_APP_DATOCMS_TOKEN}`,
          },
        }
      )
      .then(({ data: { data } }) => {
        setArticles(data.allArticles);
      })
      .catch(() => {
        setError("Sorry doesn't work");
      });
  }, []);

  return (
    <StyledNewsFeed>
      <Heading>News feed</Heading>
      {articles.length > 0 ? (
        articles.map(({ id, title, category, content, image }) => (
          <Segment key={id}>
            <StyledNewsCard>
              <p className={'title'}>{title}</p>
              <p className={'subtitle'}>{category}</p>
              <div className={'content-wrapper'}>
                <p className={'content'}>{content}</p>
                {image ? <img src={image.url} alt={'random'} /> : null}
              </div>
              <Button isBig>Read more</Button>
            </StyledNewsCard>
          </Segment>
        ))
      ) : error ? (
        <p>{error}</p>
      ) : (
        <p>Loading...</p>
      )}
    </StyledNewsFeed>
  );
};

export default NewsFeed;
