import {getRandomInteger} from './util.js';

const commentsArray = 'Всё отлично!/В целом всё неплохо. Но не всё./Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально./Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше./Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше./Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'.split('/');

const namesArray = 'Василий, Кирилл, Иван, Егор,Федор, Роман, Глеб, Григорий, Елисей, Захар, Николай, Петр, Прохор, Савелий, Эдуард, Евгений, Игорь, Олег, Денис, Вячеслав, Станислав, Всеволод, Леонид, Савва, Степан, Архип'.split(', ');

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
  commentId: getCommentId(),
  avatar: `img/avatar-${ getRandomInteger(1,6) }.svg`,
  message: commentsArray[getRandomInteger(0, commentsArray.length - 1)],
  name: namesArray[getRandomInteger(0, namesArray.length - 1)]
});

const getCommentsArray = () => {
  const commentAray = Array.from({length: getRandomInteger(1,30)},createComment);
  return commentAray;
};

const createUserPhoto = () =>
  ({
    id: getUserId(),
    url: `photos/${ userId }.jpg`,
    description: 'описаниефотографии',
    likes: getRandomInteger(15, 200),
    comments: getCommentsArray(),
  });

const usersArray = (amountOfData) => Array.from({length: amountOfData},createUserPhoto);
export {usersArray};
