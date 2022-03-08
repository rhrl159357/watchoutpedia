import { AxiosError, AxiosResponse } from 'axios';
import {useQuery} from 'react-query'
import { datailApi } from '../../apis/movieApi'
import {MovieDetail } from '../../types';

const useMovieDetail = (query: string) => {
    const queryFn = () => datailApi(query);

    return useQuery<AxiosResponse<MovieDetail>, AxiosError>(['movieDetail', query], queryFn)
}

export default useMovieDetail;