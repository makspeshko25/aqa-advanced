const getRandomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

const categories = [
  { id: 1, name: "Dog" },
  { id: 2, name: "Cat" },
  { id: 3, name: "Bird" },
];

const names = ["Buddy", "Max", "Charlie", "Bella", "Rocky", "Luna"];
const statuses = ["available", "pending", "sold"];
const tags = [
  { id: 1, name: "friendly" },
  { id: 2, name: "energetic" },
  { id: 3, name: "calm" },
];

const getRandomPetData = () => ({
  id: Math.floor(Math.random() * 10000),
  category: getRandomItem(categories),
  name: getRandomItem(names),
  photoUrls: ["https://example.com/pet.jpg"],
  tags: [getRandomItem(tags)],
  status: getRandomItem(statuses),
});

export default getRandomPetData;