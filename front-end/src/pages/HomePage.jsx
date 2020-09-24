import React from 'react';

function HomePage() {
  return (
    <div className="HomePage">
      <h1 className="text-center">Bem-vindos ao projeto Trybeer</h1>
      <a href="/register" data-testid="no-account-btn">Ainda não tem uma conta?</a>
    </div>
  );
}

export default HomePage;
