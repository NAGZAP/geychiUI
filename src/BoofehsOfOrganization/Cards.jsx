import React from 'react';
import PropTypes from 'prop-types';
import styles from './Cards.module.css';
import { useState } from "react";
import axios from 'axios';

function Cards(props) {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSecondModalOpen, setIsSecondModalOpen] = useState(false);
  const emojis = ['😠','😦','😑','😀','😍'];
  const [Emojichanger,setEmojichanger] = useState(emojis[2])
  const [Emojichanger2,setEmojichanger2] = useState(emojis[2])
  const [Emojichanger3,setEmojichanger3] = useState(emojis[2])
  const [Emojichanger4,setEmojichanger4] = useState(emojis[2])
  const [Emojichanger5,setEmojichanger5] = useState(emojis[2])

  const openSecondModal = () => {
    setIsSecondModalOpen(true);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsSecondModalOpen(false);
    setEmojichanger(emojis[2])
    setEmojichanger2(emojis[2])
    setEmojichanger3(emojis[2])
    setEmojichanger4(emojis[2])
    setEmojichanger5(emojis[2])
  };  
  
  const sendRespone = async(e) => {
/*     console.log(props.index)
 */    

    const token = localStorage.getItem("token")
try {
  const rate1 = {
    rate : (Math.round(((parseInt(value) + parseInt(value2) + parseInt(value3) + parseInt(value4) + parseInt(value5) + 5)/5)))
  };
  await axios.post('https://ghablameh.fiust.ir/api/v1/buffets/' + props.index +'/rates/', rate1 ,{ headers: { Authorization: `JWT ${token}` } });
      alert('Data sent successfully! Org');

} catch (error) {
       alert('Error sending data:', error); 
 }





/*       console.log(Math.round(((parseInt(value) + parseInt(value2) + parseInt(value3) + parseInt(value4) + parseInt(value5) + 5)/5)))
 */


      window['value'] = 2;
      window['value2'] = 2;
      window['value3'] = 2;
      window['value4'] = 2;
      window['value5'] = 2;
      closeModal()
 
  }
  const ChangeEmoji = (e) => {
    window['value'] = e.target.value;
    setEmojichanger(emojis[value])
  }
  const ChangeEmoji2 = (e) => {
    window['value2'] = e.target.value
    setEmojichanger2(emojis[value2])
  }
  const ChangeEmoji3 = (e) => {
    window['value3'] = e.target.value
    setEmojichanger3(emojis[value3])
  }
  const ChangeEmoji4 = (e) => {
    window['value4']= e.target.value
    setEmojichanger4(emojis[value4])
  }
  const ChangeEmoji5 = (e) => {
    window['value5'] = e.target.value
    setEmojichanger5(emojis[value5])
  }
  if (props.isDeleted) {
    return null;
  }
  return (
    <div className={styles.card}>
      <h2 className={styles.card_orgName}>{props.name}</h2>
      <h3 className={styles.card_orgNum}>{props.counter_organ}</h3>

     <div className={`${styles.itemscenter}`}>
      <button type="button" className={styles.button} onClick={openModal}>
        <p>نظرسنجی غذا بوفه</p>
      </button>

      {isModalOpen && (
        <div
          className={`fixed left-0 top-0 z-[1055] h-full w-full flex items-center justify-center bg-opacity-50 bg-black`}
          onClick={closeModal}
        >
          <div
            className={`scale-75 lg:scale-100 relative bg-white rounded-md p-8 max-w-[500px] w-full`}
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl text-template-custom-blue font-bold mb-4">نظرسنجی غذا بوفه</h2>
            <p className="mb-6">
              لطفاً با نظر خود ما را یاری کنید!
            </p>

            <div className="flex justify-end mt-8">
              <button
                type="button"
                className="px-4 py-2 text-sm ml-auto font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md"
                onClick={() => {
                  closeModal();
                  setTimeout(() => {
                    openSecondModal();
                  }, 100);
                }}
              >
                شروع نظرسنجی
              </button>
              <button
                type="button"
                className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-100 border border-gray-300 rounded-md"
                onClick={closeModal}
              >
                خروج
              </button>
            </div>
          </div>
        </div>
      )}

      {isSecondModalOpen && (
        <div
          className={`fixed left-0 top-0 z-[1055] h-full w-full flex items-center justify-center bg-opacity-50 bg-black`}
          onClick={closeModal}
        >
          <div
            className={`relative scale-50 lg:scale-90 bg-white rounded-md p-8 max-w-[500px]`}
            onClick={(e) => e.stopPropagation()}
          >
            <h5 className="text-template-custom-blue text-xl font-bold leading-normal text-surface">
            نظرسنجی غذا بوفه
            </h5>
            <p className="mt-7 font-semibold text-lg">
                کیفیت:
            </p>
            <div className={styles.bodys}>
                <div className={styles.rate}>
                <div className={styles.emoji}>{Emojichanger}</div>
                    <input className={styles.input} onChange={ChangeEmoji} type="range" min="0" max="4" step="1" defaultValue="2"/>
                </div>
              </div>
            <p className="mt-7 font-semibold text-lg">
                مقدار:
            </p>
            <div className={styles.bodys}>
                <div className={styles.rate}>
                <div className={styles.emoji}>{Emojichanger2}</div>
                    <input className={styles.input} onChange={ChangeEmoji2} type="range" min="0" max="4" step="1" defaultValue="2"/>
                </div>
              </div>
              <p className="mt-7 font-semibold text-lg">
                برخورد:
              </p>
              <div className={styles.bodys}>
                <div className={styles.rate}>
                <div className={styles.emoji}>{Emojichanger3}</div>
                    <input className={styles.input} onChange={ChangeEmoji3} type="range" min="0" max="4" step="1" defaultValue="2"/>
                </div>
              </div>
                <p className="mt-7 font-semibold text-lg">
                نظافت:
                </p>
            <div className={styles.bodys}>
                <div className={styles.rate}>
                <div className={styles.emoji}>{Emojichanger4}</div>
                    <input className={styles.input} onChange={ChangeEmoji4} type="range" min="0" max="4" step="1" defaultValue="2"/>
                </div>
              </div>
                  <p className="mt-7 font-semibold text-lg">
                سرعت و مقدار آمادگی :
                  </p>
                  <div className={styles.bodys}>
                <div className={styles.rate}>
                <div className={styles.emoji}>{Emojichanger5}</div>
                    <input className={styles.input} onChange={ChangeEmoji5} type="range" min="0" max="4" step="1" defaultValue="2"/>
                </div>
              </div>

      <div className="flex justify-center mt-12">
        <button
            type="button"
            className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-100 border border-gray-300 rounded-md"
            onClick={closeModal}
        >
            خروج
        </button>
        <button onClick={(e) => sendRespone(e)}
            type="button"
            className="mr-2 px-4 py-2 text-sm ml-4 font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md"
        >
            ثبت نهایی
        </button>
        </div>
          </div>
        </div>
      )}
    </div>
    </div>
  );
}

Cards.propTypes = {
  name: PropTypes.string.isRequired,
  counter_organ: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  isDeleted: PropTypes.bool.isRequired,
};

export default Cards;
