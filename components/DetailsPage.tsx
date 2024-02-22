/* eslint-disable react/jsx-no-undef */
import { View, Text, ImageBackground } from 'react-native';

import { MediaType } from '@/interfaces/apiresults';
import { useQuery } from '@tanstack/react-query';
import { getMovieDetails } from '@/services/api';
import { Main } from '@/tamagui.config';
import { ScrollView } from 'tamagui';

type DetailsPageProps = {
  id: string;
  mediaType: MediaType;
};

const DetailsPage = ({ id, mediaType }: DetailsPageProps) => {
  const movieQuery = useQuery({
    queryKey: ['movie', id],
    queryFn: () => getMovieDetails(+id, mediaType),
  });

  return (
    <Main>
      <ScrollView>
        <ImageBackground
          source={{ uri: `https://image.tmdb.org/t/p/w400${movieQuery.data?.backdrop_path}` }}>
        </ImageBackground>
      </ScrollView>
    </Main>
  );
};

export default DetailsPage;
