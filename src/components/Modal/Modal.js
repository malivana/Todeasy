import React from 'react';

import './Modal.sass';

function Modal ({isOpen, children, onCloseModal}) {
    const emojis = [
        '😄','😃','😀','😊','😉','😍','😘','😚','😗','😙','😜','😝','😛',
        '😳','😁','😂','😅','😆','😋','😷','😎','😴','😵','😲',
        '😧','😈','😮','😇','😏','😺','😸','😻','😽','😼','🙀',
        '👹','👽','🔥','✨','🌟','💫','💥','💦','💧','💤',
        '👀','👅','👄','👍','👌','✊','✌','👋','✋','👐','🙌',
        '🙏','💪','💗','💓','💕',
        '💖','💞','💘','💌','💋','🐷','🐣','🐇','🐈','🐩','🐾',
        '💐','🌸','🌷','🌹','🌻','🌺','🌲','🌰','🌱','🌼','🌐','🌞','🌝','🌚',
        '🌑','🌕','🌜','🌙','🌍','🌌','🌠','⭐','☀','⛅','☁','⚡','☔','❄',
        '⛄','🌀','🌁','🌈','🌊','🎍','💝','🎏','🎇',
        '🎃','👻','🎅','🎄','🎁','🎋','🎉','🎊','🎈','🎌','🔮','⏰',
        '🔬','🔭','🎬','🎧','🎵','🎶','🎹','🎻',
        '👾','🎮','🃏','🎴','🀄','🎲','🎯','🏈','🏀','⚽','⚾','🏆',
        '🏄','🎣','☕','🍵','🍶','🍼','🍻','🍸','🍹','🍷','🍴','🍕',
        '🍝','🍛','🍤','🍱','🍣','🍥','🍙','🍘','🍚','🍜','🍲','🍢',
        '🍡','🍞','🍩','🍮','🍦','🍨','🍧','🎂','🍰','🍪','🍫','🍬','🍭','🍯',
        '🍏','🍊','🍋','🍒','🍇','🍉','🍓','🍑','🍈','🍌','🍍','🗼','🚄','🚗','♿'
    ];
    const rndEmojiIdx = Math.floor(Math.random() * emojis.length);
    const timeOfDay = getCurrentTimeOfDay();

    return (
        <>  
            { isOpen ?
                <div className="modal">
                    <div className="modal__dialog">
                        <h1 className="modal__title">Good {timeOfDay}! {emojis[rndEmojiIdx]}</h1>

                        <div className="modal__body">
                            {children}
                        </div>

                        <button className="modal__close btn" onClick={onCloseModal}>Close</button>
                    </div>
                </div>

                : null
            }
        </>
    )
}

function getCurrentTimeOfDay() {
    const currentTime = new Date().getHours();

    if (currentTime >= 4 && currentTime < 8) {
        return 'morning'
    } 

    if (currentTime >= 8 && currentTime < 16) {
        return 'afternoon'
    }

    if (currentTime >= 16 && currentTime < 20) {
        return 'evening'
    }

    if (currentTime >= 20 || currentTime < 4) {
        return 'night'
    }
}

Modal.defaultProps = {
    isOpen: true
}

export default Modal;