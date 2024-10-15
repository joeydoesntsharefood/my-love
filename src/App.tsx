import { useState } from 'react';
import './App.css'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Confetti from 'react-confetti';

function App() {
  const [isCelebrating, setIsCelebrating] = useState(false);
  
  const handleClickNo = () => {
    toast.error('Tente novamente!');
  }

  const handleYesClick = () => {
    toast.success('Te amo!');
    setIsCelebrating(true);
    setTimeout(() => setIsCelebrating(false), 3000);
  }

  return (
    <>
        <div className='my-love__container'>
            <div className='my-love__container-text'>
                <h1>Você é a melhor coisa que me aconteceu</h1>
                <p>Casa comigo?</p>
            </div>

            <div className='my-love__container-buttons'>
              <button onClick={handleYesClick}>Sim</button>
              <button onClick={handleClickNo}>Não</button>
            </div>
        </div>

        {
          isCelebrating && (
            <Confetti
              width={window.innerWidth}
              height={window.innerHeight}
              numberOfPieces={500}
              recycle={false}
              gravity={0.4} 
            />
          )
        }

        <ToastContainer />
    </>
  )
}

export default App
