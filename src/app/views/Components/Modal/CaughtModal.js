import React, { useEffect } from 'react'
import { Modal } from 'react-bootstrap'
import { toast } from 'react-toastify';
import { catchPoke } from '../../helper/LocalstorageProcess';
import './poke.css'
export default function CaughtModal({data,show,handleClose}) {

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const succ = randomBoolean()
      if(succ){
        catchPoke(data)
     toast.success('İşlem Başarılı')
    }else{
      toast.error('Maalesef')
    }
     handleClose()
    }, 3500);
  
    return () => clearTimeout(timeoutId);
    //eslint-disable-next-line
  }, []);

  const randomBoolean = () => Math.random() >= 0.5;

    return (
        <>
        <Modal
        show={show}
        onHide={handleClose}
        centered
        backdropClassName='border-0'
         >
           <div class="center-on-page">
            <div class="pokeball">
              <div class="pokeball__button"></div>
            </div>
          </div>

                    

        </Modal>
        </>
    )
}

