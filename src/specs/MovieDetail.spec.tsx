import Enzyme, { shallow } from 'enzyme';
import MoviePreview from '../components/MoviePreview';
import Adapter from 'enzyme-adapter-react-16';
import MoviePoster from '../components/MoviePoster';
import MovieDetail from '../components/MovieDetail';

Enzyme.configure({adapter: new Adapter()});

describe('MoviePreview', () => {
    it('renders Movie Poster and Detail when the props are passed', () => {
        const movieData = {
            title: 'Kung Fu Panda',
            year: '2008',
            id: 'tt0441773',
            poster: 'https://m.media-amazon.com/images/M/MV5BODJkZTZhMWItMDI3Yy00ZWZlLTk4NjQtOTI1ZjU5NjBjZTVjXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg',
            director: 'Mark Osborne',
            casts: 'Jack Black, Jackie Chen',
            genre: 'Action, Comedy'
        }

        const component = shallow(<MoviePreview movieData={movieData} />);
        debugger;
        expect(component.find(MoviePoster)).toBeDefined();
        expect(component.find(MoviePoster).dive().find('img').props().src).toEqual(movieData.poster);

        expect(component.find(MovieDetail)).toBeDefined();
        expect(component.find(MovieDetail).dive().find('h3').text()).toBe(`${movieData.title} (${movieData.year})`);
        expect(component.find(MovieDetail).dive().find('p').at(0).text()).toBe(`Director: ${movieData.director}`);
        expect(component.find(MovieDetail).dive().find('p').at(1).text()).toBe(`Casts: ${movieData.casts}`);
        expect(component.find(MovieDetail).dive().find('p').at(2).text()).toBe(`Genre: ${movieData.genre}`);

    })
});