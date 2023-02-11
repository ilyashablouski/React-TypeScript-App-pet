import React from 'react';
import Card from './components/Card';
import { CardVariant } from './components/Card/Card';

const App = () => {
  return (
    <div>
      <Card variant={CardVariant.primary} height="200px" width="200px">
        <button>Кнопка</button>
        <p>Some children text</p>
      </Card>
    </div>
  );
};

export default App;
