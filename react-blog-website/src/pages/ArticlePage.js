import { useParams } from 'react-router-dom';
import articles from './article-content';
import NotFoundPage from '../pages/NotFoundPage';

const ArticlePage = () => {
    const { articleId } = useParams();
    const article = articles.find(article => article.name === articleId);

    if (!article) {
        return < NotFoundPage errorText="404: Article Not Found!" />
    }

    return (
        <>
        <h1>{article.title}</h1>
        {article.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
        ))}
        </>
    );
}

export default ArticlePage;
