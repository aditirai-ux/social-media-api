import { get } from 'mongoose';
import db from '../config/connection.js';
import { User, Thought, Reaction } from '../models/index.js';
import cleanDB from './cleanDB';
import { getRandomName, getRandomThought, getThoughtReaction } from './data.js';

try {
    await db();
    await cleanDB();

    // create empty arrays to hold the data
    const users = [];
    const thoughts = [];
    const reactions = [];

    // get some random users
    for (let i = 0; i < 20; i++) {
        const username = getRandomName();
        const email = `${username.split(' ')[0].toLowerCase()}@gmail.com`;
        const thoughts = getRandomThought(Math.floor(Math.random() * 5) + 1);
        const reactions = getThoughtReaction( Math.floor(Math.random() * 5) + 1);

        users.push({
            username,
            email,
            thoughts,
            reactions
        });
    }
}

connection.once('open', async () => {
  console.log('Connected to database');
  // Delete the collections if they exist
  let applicationCheck = await connection.db?.listCollections({ name: 'applications' }).toArray();
  if (applicationCheck?.length) {
    await connection.dropCollection('applications');
  }
  
  let userCheck = await connection.db?.listCollections({ name: 'users' }).toArray();
  if (userCheck?.length) {
    await connection.dropCollection('users');
  }

  const users = [];
  const applications = getRandomApplications(10);

  for (let i = 0; i < 20; i++) {
    const fullName = getRandomName();
    const first = fullName.split(' ')[0];
    const last = fullName.split(' ')[1];

    users.push({
      first,
      last,
      age: Math.floor(Math.random() * (99 - 18 + 1) + 18),
    });
  }

  await User.insertMany(users);
  await Application.insertMany(applications);

  // loop through the saved applications, for each application we need to generate a application response and insert the application responses
  console.table(users);
  console.table(applications);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});