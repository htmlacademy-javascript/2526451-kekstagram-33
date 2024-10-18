const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const commentsStroke = 'Всё отлично!/В целом всё неплохо. Но не всё./Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально./Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше./Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше./Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!';

const namesStroke = 'Василий, Кирилл, Иван, Егор,Федор, Роман, Глеб, Григорий, Елисей, Захар, Николай, Петр, Прохор, Савелий, Эдуард, Евгений, Игорь, Олег, Денис, Вячеслав, Станислав, Всеволод, Леонид, Савва, Степан, Архип';
const commentsArray = commentsStroke.split('/');
const namesArray = namesStroke.split(', ');

let userId = 0;
const getUserId = () => {
  userId++;
  return userId;
};
let commentId = 0;
const getCommentId = () => {
  commentId++;
  return commentId;
};

const createComment = () => ({
  comentId: getCommentId(),
  avatar: `img/avatar-${ getRandomInteger(1,6) }.svg`,
  message: commentsArray[getRandomInteger(0, commentsArray.length - 1)],
  name: namesArray[getRandomInteger(0, namesArray.length - 1)]
});

const getCommentsArray = () => {
  const commentAray = Array.from({length: getRandomInteger(1,30)},createComment);
  return commentAray;
};

const createUser = () =>
  ({
    id: getUserId(),
    avatar: `photos/${ userId }.jpg`,
    description: 'описаниефотографии',
    likes: getRandomInteger(15, 200),
    comments: getCommentsArray(),
  });

const usersArea = Array.from({length: 25},createUser);
console.log(usersArea);
