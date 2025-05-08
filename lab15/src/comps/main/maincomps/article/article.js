import './article.css';
import News from './news/news.js';
import Contacts from './contacts/contacts.js';
import About from './about/about.js';
import './article.css';

function Article() {
  return (
    <div className="article">
    <About/>
    <News/>
    <Contacts/>

    </div>
  );
}

export default Article;
