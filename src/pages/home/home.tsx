import React, {useEffect} from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '@App/redux/store';
import {fetchPokemons, pokemonTypes} from '@App/redux/pokemons';
import * as S from './home.styles';
import Card from '@App/componets/card/card';
import EmptyList from '@App/componets/emptyList/emptyList';
import Loading from '@App/componets/Loading/loading';
import HeaderList from '@App/componets/headerList/headerList';

const Home: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const loading = useSelector((state: RootState) => state.pokemons.loading);
  const popularMovies = useSelector(
    (state: RootState) => state.pokemons.pokemons,
  );

  useEffect(() => {
    dispatch(fetchPokemons());
  }, [dispatch]);

  function renderItem({item}: ListRenderItemInfo<pokemonTypes>) {
    return <Card title={item.name} />;
  }

  return (
    <S.Container>
      <Loading load={loading} />
      <FlatList<pokemonTypes>
        data={popularMovies}
        keyExtractor={index => index.url.toString()}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={EmptyList}
        ListHeaderComponent={HeaderList}
      />
    </S.Container>
  );
};

export default Home;
