import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCar } from "@fortawesome/free-solid-svg-icons";
import { faSmokingBan } from "@fortawesome/free-solid-svg-icons";
import { faTrain } from "@fortawesome/free-solid-svg-icons";


const MyMaps = () => {
    return(
        <div className="Access">
            <h1>ACCESS & INFO</h1>
            <span>アクセス & インフォ</span>
            <h2>営業時間</h2><br />
            <p>BAR(ディナー)</p>
            <p>17:30 ～ 24:00</p><br />
            <p>カフェ</p>
            <p>12:00　～　17:30</p>
            <p>アルコール提供は17:30～から</p>
            <p>TEL 0465-xxx-xxx</p><br />
            <hr />
            <FontAwesomeIcon icon={faCar} className="icon" />
            <p>駐車場はございません。<br />付近の駐車場をご利用下さい</p><br />
            <hr />
            <FontAwesomeIcon icon={faSmokingBan} className="icon-smoking" />
            <p>当店は全席禁煙となっております。</p>
            <p>※喫煙ルームをご利用ください</p>
            <hr />
        <div className="google-maps">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d104258.90101046054!2d139.079116687558!3d35.25400035635057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6019a45893a8d1cf%3A0xa2f424ebb37f8e55!2z56We5aWI5bed55yM5bCP55Sw5Y6f5biC!5e0!3m2!1sja!2sjp!4v1618336570545!5m2!1sja!2sjp" width="750" height="450" style={{border:0}} allowFullScreen="" loading="lazy"></iframe><br />
        </div><br />
        <div className="Access-train">
            <hr />
        <FontAwesomeIcon icon={faTrain} className="icon-metro" />
            <p>JR小田原駅　東口から徒歩5分圏内</p>
        </div>
        </div>
    )
}

export default MyMaps;