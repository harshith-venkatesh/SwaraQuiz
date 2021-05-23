import { Quiz } from '../dataModel/Quiz.type'
import quizDemo from '../assets/quizdemo.png'
export const quiz1: Quiz = {
	_id: '124',
	name: 'Painting And Decorating Quiz',
	totalQuestions: 10,
  username:'harshith',
	score: 0,
	questions: [
		{
			_id: '1',
			question: 'Who painted this series?',
			image: quizDemo,
			points: 10,
			options: [
				{ _id: '1', text: 'Andy Warhol', isAnswer: true },
				{ _id: '2', text: 'Andy Carpenter', isAnswer: false },
				{ _id: '3', text: 'Andy Milton', isAnswer: false },
				{ _id: '4', text: 'Andy Dwyer', isAnswer: false },
			],
		},

		{
			_id: '2',
			question: 'What is the name of this mysterious painting?',
			image: quizDemo,
			points: 10,
			options: [
				{ _id: '1', text: 'Mona Lisa', isAnswer: true },
				{ _id: '2', text: 'Lisa Lisa', isAnswer: false },
				{ _id: '3', text: 'Maury Lisa', isAnswer: false },
				{ _id: '4', text: 'Moana Lisa', isAnswer: false },
			],
		},

		{
			_id: '3',
			question: 'What is the name of this American icon?',
			image: quizDemo,
			points: 10,
			options: [
				{ _id: '1', text: 'Woman in Chair', isAnswer: false },
				{ _id: '2', text: 'Your Mama', isAnswer: false },
				{ _id: '3', text: 'Mona Lisa USA', isAnswer: false },
				{ _id: '4', text: "Whistler's mother", isAnswer: true },
			],
		},

		{
			_id: '4',
			question:
				'Which modern American Icon turned his sketches into an animated and theme park empire?',
			image: quizDemo,
			points: 10,
			options: [
				{ _id: '1', text: 'Margot Disney', isAnswer: false },
				{ _id: '2', text: 'Walt Disney', isAnswer: true },
				{ _id: '3', text: 'Roy Disney', isAnswer: false },
				{ _id: '4', text: 'Maddox Disney', isAnswer: false },
			],
		},

		{
			_id: '5',
			question: 'What famous artist could draw before he could walk or talk?',
			image: quizDemo,
			points: 10,
			options: [
				{ _id: '1', text: 'Roy Disney', isAnswer: false },
				{ _id: '2', text: 'Walt Disney', isAnswer: false },
				{ _id: '3', text: 'Kaylee Jade', isAnswer: false },
				{ _id: '4', text: 'Pablo Picasso', isAnswer: true },
			],
		},
		{
			_id: '6',
			question: 'Who made a series of paintings of water lilies?',
			image: quizDemo,
			points: 10,
			options: [
				{ _id: '1', text: 'Bruce Wayne', isAnswer: false },
				{ _id: '2', text: 'Claude Monet', isAnswer: true },
				{ _id: '3', text: 'Diana Prince', isAnswer: false },
				{ _id: '4', text: 'Clerk Kent', isAnswer: false },
			],
		},
		{
			_id: '7',
			question:
				'Where was Vincent Van Gogh when he painted, "The Starry Night"?',
			image: quizDemo,
			points: 10,
			options: [
				{ _id: '1', text: 'In space', isAnswer: false },
				{ _id: '2', text: 'In psychiatric hospital', isAnswer: true },
				{ _id: '3', text: 'A beach', isAnswer: false },
				{ _id: '4', text: 'A hotel', isAnswer: false },
			],
		},
		{
			_id: '8',
			question: 'Which famous painting was inspired by a volcanic eruption?',
			image: quizDemo,
			points: 10,
			options: [
				{ _id: '1', text: 'Holler', isAnswer: false },
				{ _id: '2', text: 'Volcano', isAnswer: false },
				{ _id: '3', text: 'Scream', isAnswer: true },
				{ _id: '4', text: 'Lava', isAnswer: false },
			],
		},
		{
			_id: '9',
			question:
				'What eccentric Spanish artist depicted melting clocks in a painting entitled, "The Persistence of Memory"?',
			image: quizDemo,
			points: 10,
			options: [
				{ _id: '1', text: 'Pablo Picasso', isAnswer: false },
				{ _id: '2', text: 'Salvador Dali', isAnswer: true },
				{ _id: '3', text: 'Vincent Van Gogh', isAnswer: false },
				{ _id: '4', text: 'Leonardo DaVinci', isAnswer: false },
			],
		},
		{
			_id: '10',
			question: 'Who painted the work entitled "Nighthawks"?',
			image: quizDemo,
			points: 10,
			options: [
				{ _id: '1', text: 'Edward Hopper', isAnswer: true },
				{ _id: '2', text: 'Dr. Seuss', isAnswer: false },
				{ _id: '3', text: 'Walt Disney', isAnswer: false },
				{ _id: '4', text: 'Vincent Van Gogh', isAnswer: false },
			],
		},
	],
	type: 'Painting',
	level: 'Level 2',
	highScore: [
		{ _id: '1', userId: '123', score: 25,username:'Harshith' },
		{ _id: '2', userId: '124', score: 23 ,username:'Tanay'},
	],
	image: quizDemo,
};