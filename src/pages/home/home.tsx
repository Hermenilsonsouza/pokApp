import React, {useEffect, useState} from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '@App/redux/store';
import {fetchPokemons, pokemonTypes} from '@App/redux/pokemons';
import * as S from './home.styles';
import Card from '@App/componets/card/card';
import EmptyList from '@App/componets/emptyList/emptyList';
import Loading from '@App/componets/Loading/loading';
import HeaderList from '@App/componets/headerList/headerList';
import {RootStackParamList} from '@App/routers/routerTypes';
import {NativeStackScreenProps} from '@react-navigation/native-stack/lib/typescript/src/types';

type NavProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Home = ({navigation}: NavProps) => {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchPokemons());
  }, []);

  const loading = useSelector((state: RootState) => state.pokemons.loading);
  const pokemons = useSelector((state: RootState) => state.pokemons.pokemons);

  const [defaultListState, setDefaultListState] = useState(pokemons);
  const [search, setSearch] = useState('');

  const handleSearch = (text: string) => {
    setSearch(text);
    const baffer = pokemons.filter((item: pokemonTypes) => {
      return item.name.toUpperCase().indexOf(text.toUpperCase()) > -1;
    });
    setDefaultListState(baffer);
  };

  function renderItem({item}: ListRenderItemInfo<pokemonTypes>) {
    return (
      <Card
        title={item.name}
        onPress={() => navigation.navigate('Details', {item})}
      />
    );
  }

  return (
    <S.Container>
      <Loading load={loading} />
      <S.Input
        mode="outlined"
        value={search}
        onChangeText={handleSearch}
        theme={{
          colors: {primary: '#1f57d0'},
        }}
        left={<S.Input.Icon icon="text-search" />}
      />
      <FlatList<pokemonTypes>
        data={defaultListState}
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
