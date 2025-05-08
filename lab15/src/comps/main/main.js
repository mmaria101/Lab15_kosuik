import './main.css';
import Section from './maincomps/section/section.js';
import Article from './maincomps/article/article.js';
import Aside from './maincomps/aside/aside.js';


function Main() {
  return (
    <div className="main">
    <Section />
    <Article />
    <Aside />

    </div>
  );
}

export default Main;
