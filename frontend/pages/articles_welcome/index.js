import { withRouter, Link } from 'react-router-dom';

import Main from '~/appComponents/Main';
import SignInButtons from '~/appComponents/SignInButtons';
import FakeFlashcards from './components/FakeFlashcards';
import Courses from './components/Courses';

import creationImage from './images/creation.jpg';

import css from './index.css';
import { AuthenticationActions } from '~/reducers/Authentication';
@withRouter
@connect(
  () => ({}),
  (dispatch) => ({
    signIn: (token) => AuthenticationActions.signIn(dispatch, token)
  })
)
class Page_articles_welcome extends React.Component {
  static propTypes = {
    signIn: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired
  }

  componentDidMount = () => {
    this.tryToFindToken();
  }

  tryToFindToken = () => {
    const queryParams = new URLSearchParams(window.location.search);
    const token = queryParams.get('token');
    if (token) {
      this.props.signIn(token);
      this.props.history.push('/courses/learning');
    }
  }

  renderHeading = (text) =>
    <h2 className="section-heading">
      {text}
    </h2>

  renderExplanation = (text) =>
    <div className="section-explanation">
      {text}
    </div>

  renderFeature = (heading, comment, image, className) =>
    <div className={`feature-box ${className}`}>
      <div className="image">
        {image}
        {/* <img src={heartImage} alt="heart"/> */}
      </div>

      <div className="text">
        <h5>{heading}</h5>
        <p>{comment}</p>
      </div>
    </div>

  render = () =>
    <Main className={css.main}>
      <article className="standard-article-formatting">
        <div className="container">
          <section className="article-headings">
            <h1 className="-glow">Welcome to Memcode</h1>
            <h2 className="subtitle">Memorizing is hard. Let's make everything else easy.</h2>

            <h2 className="more">
              Lightweight <mark>spaced repetition</mark>-based learning site.<br/>
              {/* Thought-through to the detail.<br/> */}
              <span style={{ color: 'rgba(39, 209, 158, 0.84)' }}>With formatting. </span>
              <span style={{ color: 'rgb(244, 126, 177)' }}>With images. </span>
              <span style={{ color: 'rgb(255, 255, 137)' }}>Accessible.</span>
            </h2>

            <Link to="/please-sign-in" className="button -orange -move-up-on-hover -with-radius" type="button">Use for Free, Forever →</Link>

            {/* <hr/> */}
          </section>

          <section className="article-section two-types-of-flashcards">
            {this.renderHeading('Two types of flashcards')}

            <FakeFlashcards/>
          </section>

          <section className="article-section creation">
            {this.renderHeading('Comfortable, blazingly fast course creation')}

            {this.renderExplanation(<>Course creators are first class citizens on Memcode.<br/> We made it fun and beautiful.</>)}

            <img src={creationImage} alt="Two text editors with formatting options"/>

            <Link to="/please-sign-in" className="button -orange -move-up-on-hover -with-radius" type="button">Create your own course →</Link>
          </section>

          <section className="article-section features">
            {this.renderHeading('Key features')}

            <ul className="feature-list">
              {this.renderFeature('Bold text, code, formulas', <>Rich formatting, - for free, for all.<br/> LaTeX formulas, code highlighting, bold text, and many more options.</>, <i className="material-icons">code</i>, 'formulas')}
              {this.renderFeature('Shortcuts', <>Blind? A hacker? Whatever your deal is, Memcode cares about you.<br/> You can navigate Memcode via shortcuts and tabs.</>, <i className="fa fa-keyboard-o"/>, 'shortcuts')}
              {this.renderFeature('Smooth course creation', 'Course creators are first class citizens on Memcode.', <span className="material-icons">dynamic_feed</span>, 'creations')}
              {this.renderFeature('Comfortable', 'We\'re really trying. Spaced-repetition software tends to become a part of your brain, and we want you to feel like being here.', <span className="material-icons">bathtube</span>, 'comfortable')}
              {this.renderFeature('Open Source', <>Check us out on <a target="blank" href="https://github.com/lakesare/memcode">Github</a>!</>, <i className="fa fa-code-fork"/>, 'open-source')}
              {this.renderFeature('SM2 algorithm', 'Custom SM2 algorithm, honed', <span className="material-icons">linear_scale</span>, 'algorithm')}
              {this.renderFeature('We love gif', 'One of the only sites with the gifs allowed!', <span className="material-icons">favorite</span>, 'gifs')}
              {this.renderFeature('Forever free', 'We won\'t charge. Not at any point.', <span className="material-icons">insert_emoticon</span>, 'free')}
            </ul>
          </section>

          <section className="article-section courses">
            {this.renderHeading('Play selected courses')}

            {this.renderExplanation(<>You can play all courses without signing in, - sign in as soon as you'd like us to offer you flashcards for review based on your progress!</>)}

            <Courses/>
          </section>

          <section className="article-section sign-in">
            {this.renderHeading('Welcome')}

            {/* <img src={heartImage} alt=""/></div> */}

            {/* {this.renderExplanation(<>Sign in:</>)} */}

            <SignInButtons text="Sign In With"/>
          </section>

        </div>
      </article>
    </Main>
}

export default Page_articles_welcome;
