"use client";

import { FC, useState } from "react";
import styles from "./VendingMachie.module.scss";

export const VendingMachie: FC = () => {
  // コインを定義する
  const [coins, setCoins] = useState<number>(0);
  // 購入できるかを判定
  // コインが3以下は購入できない
  const canBuy = coins >= 3;
  // ユーザーが行う行動(ユーザーイベント)
  // お金を入れる
  const insertCoin = () => {
    setCoins(coins + 1);
  }
  // 購入
  const buy = () => {
    if(coins < 3) {
        return;
    }
    const prevCoins = coins;
    setCoins(0);
    window.alert("缶が出てきました。");
    window.alert(`${prevCoins - 3}枚のお釣りが出てきました。`);
  };
  // お釣りを取り出す
  const receiveChange = () => {
    const prevCoins = coins;
    setCoins(0);
    window.alert(`${prevCoins}枚のお金が出てきました。`);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.coinsDisplay}>お金： {coins}枚</div>
        <div className={styles.buttonsContainer}>
            <button onClick={() => insertCoin()} className={styles.buttonsInsert}>お金を入れる</button>
            <button disabled={!canBuy} onClick={() => buy()} className={styles.buttonsBuy}>
                購入する
            </button>
            <button onClick={() => receiveChange()} className={styles.buttonsReceive}>お金を返却</button>
        </div>
      </div>
    </>
  );
}
