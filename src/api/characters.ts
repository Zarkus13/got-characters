import { useInfiniteQuery } from '@tanstack/react-query';
import axios from 'axios';

export const useFetchCharacters = () =>
  useInfiniteQuery({
    queryKey: ['characters'],
    queryFn: () => axios.get('https://thronesapi.com/api/v2/Characters').then((res) => res.data),
    initialPageParam: 1,
    getNextPageParam: (_lastPage, _allPages, lastPageParam) => {
      return lastPageParam + 1;
    },
    staleTime: 60 * 60 * 1000,
    meta: { errorMessage: 'Could not fetch characters' },
  });
