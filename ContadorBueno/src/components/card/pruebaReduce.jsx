import React, { useReducer } from 'react';

// Definimos el reductor
function reducer(estado, action) {
  switch (action.type) {
    case 'increment':
      return { count: estado.count + 1 };
    case 'decrement':
      return { count: estado.count - 1 };
    default:
      throw new Error();
  }
}

// Componente de contador
function Counter() {
  // Usamos useReducer con el reductor y un estado inicial
  const [estado, setEstado] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <p>Contador: {estado.count}</p>
      <button onClick={() => setEstado({ type: 'increment' })}>Incrementar</button>
      <button onClick={() => setEstado({ type: 'decrement' })}>Decrementar</button>
    </div>
  );
}

export default Counter;
