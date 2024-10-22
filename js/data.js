import {getRandomInteger} from './util.js';

const commentsArray = 'Всё отлично!/В целом всё неплохо. Но не всё./Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально./Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше./Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше./Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'.split('/');

const namesArray = 'Василий, Кирилл, Иван, Егор,Федор, Роман, Глеб, Григорий, Елисей, Захар, Николай, Петр, Прохор, Савелий, Эдуард, Евгений, Игорь, Олег, Денис, Вячеслав, Станислав, Всеволод, Леонид, Савва, Степан, Архип'.split(', ');

const descriptionsArray = [ 'Красивая сцена.', 'Уютный момент.', 'Природа в своем великолепии.', 'Момент спокойствия.',
  'Вдохновляющий пейзаж.', 'Тишина и гармония.', 'Яркие цвета и текстуры.', 'Свет и тень в кадре.', 'Эмоции в каждом кадре.',
  'Простой, но захватывающий момент.'];

let userId = 0;
function getUserId () {
  userId++;
  return userId;
}

let commentId = 0;
function getCommentId () {
  commentId++;
  return commentId;
}

function createComment() {
  return {
    commentId: getCommentId(),
    avatar: `img/avatar-${ getRandomInteger(1,6) }.svg`,
    message: commentsArray[getRandomInteger(0, commentsArray.length - 1)],
    name: namesArray[getRandomInteger(0, namesArray.length - 1)]
  };
}

function getCommentsArray () {
  const commentArray = Array.from({length: getRandomInteger(1,30)},createComment);
  // Обнулять не обнулять..
  // commentId = 0;
  return commentArray;
}

function createUserPhoto() {
  return {
    id: getUserId(),
    url: `photos/${ userId }.jpg`,
    description: descriptionsArray[getRandomInteger(0,descriptionsArray.length - 1)],
    likes: getRandomInteger(15, 200),
    comments: getCommentsArray()
  };
}
// const usersArray = (amountOfData) => Array.from({length: amountOfData},createUserPhoto);
const photoDataArray = Array.from({length: 25},createUserPhoto);
export {photoDataArray};
