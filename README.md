📘 React Conceptual Questions & Answers
1️⃣ What is JSX, and why is it used?

Answer:

JSX এর পূর্ণরূপ হলো JavaScript XML। এটি জাভাস্ক্রিপ্টের একটি syntax extension যা আমাদের জাভাস্ক্রিপ্ট ফাইলের ভেতরেই HTML-এর মতো কোড লিখতে সাহায্য করে।

কেন ব্যবহার করা হয়?

সাধারণ জাভাস্ক্রিপ্ট দিয়ে UI তৈরি করা বেশ জটিল ও সময়সাপেক্ষ। JSX ব্যবহার করলে—

কোড দেখতে অনেক পরিষ্কার লাগে

সহজে বোঝা যায় কোন স্ট্রাকচারটি ব্রাউজারে render হবে

React অ্যাপ্লিকেশন তৈরি করা সহজ হয়

2️⃣ What is the difference between State and Props?

Answer:

সহজভাবে বলতে গেলে:

Props

Props হলো Properties এর সংক্ষিপ্ত রূপ

এটি এক কম্পোনেন্ট থেকে অন্য কম্পোনেন্টে ডাটা পাঠানোর জন্য ব্যবহার করা হয়

সাধারণত Parent → Child এ ডাটা যায়

Props হলো Read-only (চাইল্ড কম্পোনেন্ট এটি পরিবর্তন করতে পারে না)

State

State হলো একটি কম্পোনেন্টের নিজস্ব ডাটা স্টোরেজ

এটি Mutable (পরিবর্তনশীল)

যখন State পরিবর্তন হয়, তখন React স্বয়ংক্রিয়ভাবে কম্পোনেন্টকে পুনরায় render করে

3️⃣ What is the useState hook, and how does it work?

Answer:

useState হলো React-এর একটি built-in Hook যা functional component-এ state manage করতে ব্যবহার করা হয়।

কাজ করার পদ্ধতি

যখন আমরা useState ব্যবহার করি, এটি একটি array return করে যার দুটি অংশ থাকে:

Current State → বর্তমান ভ্যালু

Updater Function → ভ্যালু পরিবর্তন করার ফাংশন

Example
const [count, setCount] = useState(0);

এখানে:

count → বর্তমান state value

setCount() → state update করার function

4️⃣ How can you share state between components in React?

Answer:

React-এ কম্পোনেন্টগুলোর মধ্যে state শেয়ার করার প্রধান উপায় হলো Lifting State Up।

কিভাবে কাজ করে

যদি দুটি child component এর একই data প্রয়োজন হয়:

সেই state তাদের common parent component-এ রাখা হয়

তারপর props এর মাধ্যমে child component গুলোতে পাঠানো হয়

Other Methods (Large Projects)

Context API

Redux

5️⃣ How is event handling done in React?

Answer:

React-এ event handling অনেকটা HTML এর মতো, তবে কিছু গুরুত্বপূর্ণ পার্থক্য আছে।

Main Differences

1️⃣ Event name camelCase এ লিখতে হয়
❌ onclick
✅ onClick

2️⃣ Event handler হিসেবে function pass করতে হয়, string নয়

Example
<button onClick={handleClick}>Click Me</button>

এখানে handleClick একটি function যা button click করলে execute হবে।
