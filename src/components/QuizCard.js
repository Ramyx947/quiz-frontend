import React from 'react'

const QuizCard = ({ quiz, selectQuiz }) => {
  let imageUrl

  switch (quiz.subject) {
    case 'JS':
      imageUrl = 'https://cdn-images-1.medium.com/max/1052/1*DN7ToydkJZEdVaJVK_Nhvw.png'
      break
    case 'Ruby':
      imageUrl = 'https://vignette.wikia.nocookie.net/logopedia/images/c/c9/Ruby-language.png/revision/latest?cb=20130122221837'
      break
    case 'Rails':
      imageUrl = 'https://avatars.githubusercontent.com/u/4223'
      break
    case 'React':
      imageUrl = 'https://react-etc.net/files/2017-12/react-hexagon.png'
      break
    default:
      imageUrl = ''
  }

  return <div onClick={() => selectQuiz(selectQuiz)} className='quiz-card'>
    <img style={{ width: '100%' }} src={imageUrl} />
  </div>
}

export default QuizCard
