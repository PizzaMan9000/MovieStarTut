/* eslint-disable react/jsx-no-undef */
import { useQuery } from '@tanstack/react-query';
import { View, Text, ImageBackground } from 'react-native';
import { ScrollView, Image } from 'tamagui';

import { MediaType } from '@/interfaces/apiresults';
import { getMovieDetails } from '@/services/api';
import { Main } from '@/tamagui.config';


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
          source={{
            uri: `https://image.tmdb.org/t/p/w400${movieQuery.data?.backdrop_path}`,
          }}>
          <Image
            source={{
              uri: `https://image.tmdb.org/t/p/w400${movieQuery.data?.poster_path}`,
            }}
            w={200}
            h={300}
          />
        </ImageBackground>
      </ScrollView>
    </Main>
  );
};

export default DetailsPage;
