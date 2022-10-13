import React from "react";
import "./transactionHistory/transactionItem.css";
import Profile from "./profile/profile";
import Container from "./container/container";
import profile from "./profile/profile.json";
import Statistics from "./statistics/statistics";
import statistic from "./statistics/statistics.json";
import styles from "./statistics/statistics.module.css";
import FriendsList from "./friendList/friendList";
import FriendListItem from "./friendListItem/friendListItem";
import friendList from "./friendList/friendList.json";
import TransactionHistory from "./transactionHistory/transactionHistory";
import statHistory from "./transactionHistory/transactions.json";

export default function App() {
  function generateLightColor() {
    let red = Math.floor(((1 + Math.random()) * 256) / 2);
    let green = Math.floor(((1 + Math.random()) * 256) / 2);
    let blue = Math.floor(((1 + Math.random()) * 256) / 2);
    return "rgb(" + red + ", " + green + ", " + blue + ")";
  }
  return (
    <React.StrictMode>
      <Container>
        <Profile
          photoURL={profile.avatar}
          userName={profile.username}
          userTag={profile.tag}
          userLocation={profile.location}
          quantityOfFolowers={profile.stats.followers}
          quantityOfViews={profile.stats.views}
          quantityOfLikes={profile.stats.likes}
        />
        <Statistics
          title={"Upload stats"}
          stats={statistic.map((statItem) => (
            <li
              className={styles.item}
              key={statItem.id}
              style={{ backgroundColor: generateLightColor() }}
            >
              <span className={styles.label}>{statItem.label}</span>
              <span className={styles.percentage}>{statItem.percentage}</span>
            </li>
          ))}
        ></Statistics>
        <FriendsList
          friends={friendList.map((friend) => (
            <FriendListItem
              key={friend.id}
              avatar={friend.avatar}
              name={friend.name}
              isOnline={friend.isOnline}
              variant={friend.isOnline ? "isOnline" : "isOffline"}
            ></FriendListItem>
          ))}
        ></FriendsList>
        <TransactionHistory
          items={statHistory.map((statItem) => (
            <tr className="tr" key={statItem.id}>
              <td className="firstTd">{statItem.type}</td>
              <td className="firstTd">{statItem.amount}</td>
              <td className="firstTd">{statItem.currency}</td>
            </tr>
          ))}
        ></TransactionHistory>
      </Container>
    </React.StrictMode>
  );
}
