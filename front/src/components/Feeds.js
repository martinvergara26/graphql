import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const FEEDS = gql`
    query Feeds {
        feed {
            id
            title
            content
            published

        }
    }
`;

export default function Feeds() {
  const { loading, error, data } = useQuery(FEEDS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.feed.map(({ title, content }) => (
    <div key={title}>
      <p>
        {title}: {content}
      </p>
    </div>
  ));
}