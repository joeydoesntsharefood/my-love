import { useState } from 'react';
import './App.css'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Image from './assets/Sem título.png'

import Confetti from 'react-confetti';

function App() {
  const [isCelebrating, setIsCelebrating] = useState(false);
  
  const handleClickNo = () => {
    toast.error('Tente novamente!');
  }

  const handleYesClick = () => {
    toast.success('Te amo!');
    setIsCelebrating(true);
  }

  return (
    <>  
        {
          !isCelebrating && (
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
          ) 
        }

        {
          isCelebrating && (
            <img src={Image} alt="" style={{width: '80vw', height: '80vh'}} />
          )
        }

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
