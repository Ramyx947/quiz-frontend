import React from 'react'

const QuizCard = (props) => {
  let imageUrl

  switch (props.quiz.subject) {
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

  return <div onClick={() => props.selectQuiz(props.quiz)} className='quiz-card'>
    <img style={{ width: '100%' }} src={imageUrl} alt={props.quiz.title}/>
  </div>
}

export default QuizCard
