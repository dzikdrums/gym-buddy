import React from 'react';
import { screen } from '@testing-library/react';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import NewsFeed, { query } from './NewsFeed';
import { renderWithProviders } from '../../../helpers/renderWithProviders';

const mock = new MockAdapter(axios);

describe('News section', () => {
  afterEach(() => {
    mock.reset();
  });

  it('Should render Error message if request fails', async () => {
    mock.onPost('https://graphql.datocms.com/', { query }).reply(500);
    renderWithProviders(<NewsFeed />);
    await screen.findByText(/Sorry/);
  });

  it('Should render article correctly', async () => {
    mock
      .onPost('https://graphql.datocms.com/', { query })
      .reply(200, { data: { allArticles: [{ id: 0, title: 'Title1', category: 'Test', content: 'Whats inside' }] } });
    renderWithProviders(<NewsFeed />);
    await screen.findByText(/Title1/);
  });
});
