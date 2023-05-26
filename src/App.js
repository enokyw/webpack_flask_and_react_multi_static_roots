import React from 'react';

function App() {
  return (
    <div className="app">
      <table>
        <thead>
          <tr>
            <th>Company</th>
            <th>Ruc</th>
            <th>Comprovante</th>
            <th>Monto</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Dalilas SAC</td>
            <td>104745696</td>
            <td>FA05-00000458</td>
            <td>450 000.00</td>
          </tr>
          <tr>
            <td>Copy centro A. EIRL</td>
            <td>2060762548</td>
            <td>FH12-00004589</td>
            <td>33 0256 000.00</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;