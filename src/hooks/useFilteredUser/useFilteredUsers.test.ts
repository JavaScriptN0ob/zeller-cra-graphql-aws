import { renderHook, act, waitFor } from '@testing-library/react';
import { API, graphqlOperation } from 'aws-amplify';
import useFilteredUsers from './useFilteredUsers';

import { ListZellerCustomers as query } from '../../graphql/queries';
import mockGraphQLResult from './mockGraphQLResult.json';
import mockFilteredUsers from './mockFilteredUsers.json';

jest.mock('aws-amplify', () => ({
  API: { graphql: jest.fn() },
  graphqlOperation: jest.fn(),
}));

describe('useFilteredUsers', () => {
  beforeEach(() => {
    (API.graphql as jest.Mock).mockImplementation(() =>
      Promise.resolve({ data: mockGraphQLResult }),
    );
  });

  afterEach(() => {
    (API.graphql as jest.Mock).mockReset();
    (graphqlOperation as jest.Mock).mockReset();
  });

  it('should call graphqlOperation with correct query', async () => {
    const { result } = renderHook(() => useFilteredUsers('ADMIN'));

    await act(async () => {
      await result.current.fetchUsers();
    });

    expect(graphqlOperation).toHaveBeenCalledWith(query);
  });

  it('should fetch and filter users correctly', async () => {
    const { result } = renderHook(() => useFilteredUsers('ADMIN'));

    expect(result.current.filteredUsers).toBeNull();

    await act(async () => {
      await result.current.fetchUsers();
    });

    expect(result.current.filteredUsers).toEqual(mockFilteredUsers);
  });

  it('should re-filter users when userType changes', async () => {
    const { result, rerender } = renderHook(
      ({ userType }) => useFilteredUsers(userType),
      {
        initialProps: { userType: 'ADMIN' },
      },
    );

    await act(async () => {
      await result.current.fetchUsers();
    });

    expect(result.current.filteredUsers).toEqual(mockFilteredUsers);

    rerender({ userType: 'MANAGER' });

    expect(result.current.filteredUsers).not.toEqual(mockFilteredUsers);
  });

  it('should throw error when fetching users failed', async () => {
    const error = 'Error occurs when fetching users';
    const consoleSpy = jest
      .spyOn(console, 'error')
      .mockImplementation(() => {});

    (API.graphql as jest.Mock) = jest.fn(() => Promise.reject(error));

    const { result } = renderHook(() => useFilteredUsers('ADMIN'));

    await act(async () => {
      await result.current.fetchUsers();
    });

    await waitFor(() => {
      expect(consoleSpy).toHaveBeenCalledTimes(1);
    });

    await waitFor(() => {
      expect(consoleSpy).toHaveBeenCalledWith(
        'Error occurs when fetching users',
        error,
      );
    });
  });
});
