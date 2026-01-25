import { HomePage } from '../pages/home.page.js';
import { NewArticlePage } from '../pages/new_article.page.js';

export async function createArticle(page, user, articleData) {
  const homePage = new HomePage(page, user);
  const newArticlePage = new NewArticlePage(page);

  await page.goto('/');
  await homePage.newArticleLink.click();

  await newArticlePage.CreateArticle(
    articleData.title,
    articleData.description,
    articleData.body,
    articleData.tags
  );
}