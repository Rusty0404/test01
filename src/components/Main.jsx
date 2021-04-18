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
            <p className="animationTarget">自家製プロシュートの生ハム<br />
            赤ワイン煮込みの野菜たっぷりローストビーフ<br />
           アスパラと牡蠣のジェノベーゼパスタ<br />
           濃厚チーズフォンデュ<br />
           エビときのこの地中海風アヒージョ<br />
           ラズベリーのガトーショコラ
          </p>
        </div>
       <h3 className="animationTarget">Cocktail</h3>
        <diV className="menucontainer2">
            <img src={ Images08 } alt="画像" className="animationTarget"/>
            <p className="animationTarget">
                マティーニ<br />
                ダイキリ<br />
                ソルティドッグ<br />
                マルガリータ<br />
                ジャックローズ<br />
                マンハタッン<br />
                キールロワイヤル<br />
            </p>
        </diV>
        <h4 className="animationTarget">WINE</h4>
        <div className="menucontainer3">
            <img src={ Images09 } alt="画像" className="animationTarget" />
            <p className="animationTarget">
                シャトー・グリュオー・ラローズ2011<br />
                エル・マセット<br />
                バローロ・アラルディカ<br />
                クロ　デュ　マルキ1988<br />
                白ワイン<br />
                ルイ・ジャドムルソー<br />
                シェリー・アモンティヤード<br />
                

            </p>
        </div>
        </div>
    )
}

export default Menu; 