import { get } from "mongoose";

const names = [
    'Aaran',
    'Aaren',
    'Aarez',
    'Aarman',
    'Aaron',
    'Aaron-James',
    'Aarron',
    'Aaryan',
    'Aaryn',
    'Aayan',
    'Aazaan',
    'Abaan',
    'Abbas',
    'Abdallah',
    'Abdalroof',
    'Abdihakim',
    'Abdirahman',
    'Abdisalam',
    'Abdul',
    'Abdul-Aziz',
    'Abdulbasir',
    'Abdulkadir',
    'Abdulkarem',
    'Smith',
    'Jones',
    'Coollastname',
    'enter_name_here',
    'Ze',
    'Zechariah',
    'Zeek',
    'Zeeshan',
    'Zeid',
    'Zein',
    'Zen',
    'Zendel',
    'Zenith',
    'Zennon',
    'Zeph',
    'Zerah',
    'Zhen',
    'Zhi',
    'Zhong',
    'Zhuo',
    'Zi',
    'Zidane',
    'Zijie',
    'Zinedine',
    'Zion',
    'Zishan',
    'Ziya',
    'Ziyaan',
    'Zohaib',
    'Zohair',
    'Zoubaeir',
    'Zubair',
    'Zubayr',
    'Zuriel',
    'Xander',
    'Jared',
    'Grace',
    'Alex',
    'Mark',
    'Tamar',
    'Farish',
    'Sarah',
    'Nathaniel',
    'Parker',
  ];

  const randomThoughts = [
    'How to disagree with someone',
    'iPhone 16 review',
    'Vlog or Blog?',
    'Lets discuss the history of video games',
    'How to make money on the App Store',
    'Learn NextJS in five minutes (Not clickbate)',
    'What to watch next on Netflix',
    'Hello world',
    'Another possible solution to the algorithm',
    'How to apologize to someone',
    'How to submit a startup pitch'
  ];

  const possibleReactions = [
    'Like',
    'Dislike',
    'Love',
    'Haha',
    'Wow',
    'Sad',
    'Angry'
  ];

// get random item from array
export const getRandomItem = (arr: string[]) => {
    return arr[Math.floor(Math.random() * arr.length)];
};

// get random name
export const getRandomName =() =>
    `${getRandomItem(names)} ${getRandomItem(names)}`;

// function to get random thought
export const getRandomThought = (int: number) => {
    let results = [];
    for (let i = 0; i < int; i++) {
      results.push({
        thoughtText: getRandomItem(randomThoughts),
        username: getRandomName(),
        reactions: [...getThoughtReaction(3)],
      });
    }
    return results;
  };

// function to get reaction to thoughts
export const getThoughtReaction = (int: number) => {
    if (int === 1) {
      return getRandomItem(possibleReactions);
    }
    const results = [];
    for (let i = 0; i < int; i++) {
      results.push({
        reactionBody: getRandomItem(possibleReactions),
        username: getRandomName()
      });
    }
    return results;
  };