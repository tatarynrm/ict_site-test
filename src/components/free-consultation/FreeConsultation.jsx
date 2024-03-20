import React from 'react'
import './FreeConsultation.scss'
const FreeConsultation = ({background}) => {
    console.log(background);
  return (
    <section className='free__consultation' id='free__consultation-section'>
        <div className="free__consultation-inner container">
            <div className="free__consultation-block">
               <div className="left">
                <h3>Отримайте <br /> безкоштовну</h3>
                <span className='free__consultation-sub-title'>
                консультацію від нашого спеціаліста
                </span>
               </div>
            
                <form className="free__consultation-form">
                    <div className="form__control">
                        <input type="text" placeholder={`Ваше ім'я`} />
                    </div>
                    <div className="form__control second">
                        <input type="text" placeholder={`Номер телефону`} />
                    </div>
                    <button type='submit'>Отримати консультацію</button>
                </form>
               
            </div>
        </div>
    </section>
  )
}

export default FreeConsultation