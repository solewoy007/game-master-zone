import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';

function GameReviews() {
  const [games, setGames] = useState([]);
  const [selectedGame, setSelectedGame] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    axios.get('')
      .then(response => {
        setGames(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleGameSelect = (gameId) => {
    setSelectedGame(gameId);
    axios.get(`https://api.example.com/games/${gameId}/reviews`)
      .then(response => {
        setReviews(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleRecommendation = (gameId) => {
    axios.get(`https://api.example.com/games/${gameId}/recommendations`)
      .then(response => {
        setRecommendations(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <Container fluid>
      <Row>
        <Col xs={12} md={6} lg={4}>
          <h1>Выберите игру</h1>
          <ul>
            {games.map((game) => (
              <li key={game.id}>
                <button onClick={() => handleGameSelect(game.id)}>
                  {game.name}
                </button>
              </li>
            ))}
          </ul>
        </Col>
        <Col xs={12} md={6} lg={8}>
          {selectedGame && (
            <div>
              <h2>{selectedGame.name}</h2>
              <p>Обзоры:</p>
              <ul>
                {reviews.map((review) => (
                  <li key={review.id}>
                    {review.text}
                  </li>
                ))}
              </ul>
              <p>Рекомендации:</p>
              <ul>
                {recommendations.map((recommendation) => (
                  <li key={recommendation.id}>
                    {recommendation.title}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default GameReviews;