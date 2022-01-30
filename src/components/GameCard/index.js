import React from 'react';
import PropTypes from 'prop-types';

function GameCard({ allGames }) {
  return (
    <>
      { allGames.map((game) => (
        <div key={ game.id }>
          <h3>Título: { game.title }</h3>
          <img src={ game.thumbnail } alt={ game.title } />
          <p>Gênero: { game.genre }</p>
          <p>Desenvolvedor: { game.developer }</p>
          <p>Plataforma: { game.platform }</p>
          <p>Data de Lançamento: { game.release_date }</p>
        </div>
      ))}
    </>
  );
}

GameCard.propTypes = {
  allGames: PropTypes.arrayOf(PropTypes.object),
}.isRequired;

export default GameCard;
