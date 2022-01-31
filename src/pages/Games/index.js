import React from 'react';
import Loading from '../../components/Loading';
import * as service from './../../service/fetch';
import Button from './../../components/Button/index';
import GameCard from './../../components/GameCard/index';

class Games extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      allGames: [],
    };
  }

  fetchGames = ({ target: { id } }) => {
    this.setState({
      isLoading: true,
    }, async () => {
      this.setState({
        allGames: await service.fetchAllGames(id),
        isLoading: false,
      });
    });
  }

  render() {
    const { isLoading, allGames } = this.state;
  if(isLoading) return <Loading />
    return (
      <>
        <header>
        <h2>Clique em um dos botões</h2>
          <Button
            text="Todos"
            onClick={ this.fetchGames }
          />
          <Button
            text="Computador"
            onClick={ this.fetchGames }
            type="pc"
            />
          <Button
            text="Browser"
            onClick={ this.fetchGames }
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
}

export default Games;
