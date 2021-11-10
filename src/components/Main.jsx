import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router';
import Images07 from '../assets/images/Free.cooking(3).jpg';
import Images08 from '../assets/images/Cocktails(4).jpg';
import Images09 from '../assets/images/wine.jpg';

    document.addEventListener("scroll", function() {
        const targetElement = document.querySelectorAll(".animationTarget");
        for(let i = 0; i < targetElement.length; i++) {
            const getElementDistance = targetElement[i].getBoundingClientRect().top + targetElement[i].clientHeight * .6
            
            if(window.innerHeight > getElementDistance) {
                targetElement[i].classList.add("show");
            }
        }
    })

const Menu = () => {
    return(
        <div id="MenuTitle">
             <h1 className="animationTarget">MENU</h1>
             <h2 className="animationTarget">FOOD</h2>
        <div className="menucontainer">
        <img src={ Images07 } alt="画像" className="animationTarget" />
            <div className="animationTarget">
            <p className="animationTarget">自家製プロシュートの生ハム</p>
            <p className="animationTarget">赤ワイン煮込みの野菜たっぷりローストビーフ</p>
           <p className="animationTarget">アスパラと牡蠣のジェノベーゼパスタ</p>
           <p className="animationTarget">濃厚チーズフォンデュ</p>
           <p className="animationTarget">エビときのこの地中海風アヒージョ</p>
           <p className="animationTarget">ラズベリーのガトーショコラ</p>
          </div>
        </div>
       <h3 className="animationTarget">Cocktail</h3>
        <div className="menucontainer2">
            <img src={ Images08 } alt="画像" className="animationTarget"/>
            <div className="animationTarget">
            <p className="animationTarget">マティーニ</p>
            <p className="animationTarget">ダイキリ</p>
            <p className="animationTarget">ソルティドッグ</p>
            <p className="animationTarget">マルガリータ</p>
            <p className="animationTarget">ジャックローズ</p>
            <p className="animationTarget">マンハタッン</p>
            <p className="animationTarget">キールロワイヤル</p>
            </div>
        </div>
        <h4 className="animationTarget">WINE</h4>
        <div className="menucontainer3">
            <img src={ Images09 } alt="画像" className="animationTarget" />
            <div className="animationTarget">
            <p className="animationTarget">シャトー・グリュオー・ラローズ2011</p>
            <p className="animationTarget">エル・マセット</p>
            <p className="animationTarget">バローロ・アラルディカ</p>
            <p className="animationTarget">クロ　デュ　マルキ1988</p>
            <p className="animationTarget">ルイ・ジャドムルソ</p>
            <p className="animationTarget">シェリー・アモンティヤード</p>
            <p className="animationTarget">エル・マセット</p>
                  </div>
        </div>
        </div>
    )
}

export default Menu; 