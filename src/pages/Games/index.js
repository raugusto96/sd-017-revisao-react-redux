import React, { useEffect, useState } from 'react';
import Loading from '../../components/Loading';
import * as service from './../../service/fetch';
import Button from './../../components/Button/index';
import GameCard from './../../components/GameCard/index';

function Games() {
  const [isLoading, setLoading] = useState(false);
  const [allGames, setGames] = useState([]);

  const fetchGames = async ({ target: { id } }) => {
    setLoading(true);
    setGames(await service.fetchAllGames(id))
    setLoading(false);
  }

  if(isLoading) return <Loading />
  return (
    <>
      <header>
      <h2>Clique em um dos botões</h2>
        <Button
          text="Todos"
          onClick={ fetchGames }
        />
        <Button
          text="Computador"
          onClick={ fetchGames }
          type="pc"
          />
        <Button
          text="Browser"
          onClick={ fetchGames }
          type="browser"
        />
      </header>
      <main>
        <GameCard
          allGames={ allGames }
        />
      </main>
    </>
  );
}

export default Games;
