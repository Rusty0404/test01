import React from 'react';

const buttomAlert = () => {
    alert('サンプルの為、通話不可');
}

const FormDialog = () => {
    return(
        <div className="ContctForm">
            <h1>CONTACT・ご予約</h1>
            <h2>ご予約に関する注意事項</h2>
            <p>※ご予約のお席は限りがございます、ご希望のお席が空いてなかった場合は<br />
            他のお席をお選び頂くか、お電話にてお問い合わせをお願い致します。</p><br />
            <ul className="check">
                <li>無断キャンセルはキャンセル料を頂戴致します。</li>
                <li>7名様以上のご予約はお電話から承ります。</li>
                <li>お食事にアレルギーがございましたら事前にお申し付け下さい。</li>
                <li>テイクアウトもご利用可能です</li>
            </ul>
            <a href="tel:08012345678" onClick={buttomAlert} className="telButton">予約をする</a>
        </div>
    )
}

export default FormDialog;