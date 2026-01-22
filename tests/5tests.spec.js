import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { user } from '../src/data/users.js';
import { HomePage } from '../src/pages/home.page.js';
import { ProfilePage } from '../src/pages/profile.page.js';
import { NewArticlePage } from '../src/pages/new_article.page.js';
import { ArticlePage } from '../src/pages/article.page.js';
import { ArticleEditorPage } from '../src/pages/article_editor.page.js';



const newArticle = {
    title: faker.lorem.sentence({ min: 1, max: 5 }),
    description: faker.lorem.sentence({ min: 1, max: 10 }),
    body: faker.lorem.paragraphs({ min: 2, max: 3 }),
    tags: faker.lorem.words({ min: 1, max: 3 })
}

test('User can create new article, Page Object', async ({ page }) => {
    const {title, description, body, tags} = newArticle;
    const homePage = new HomePage(page, user.testUser);
    const newArticlePage = new NewArticlePage(page);
    const articlePage = new ArticlePage(page, title, body);

    await page.goto('/');

    await homePage.newArticleLink.click();
    await newArticlePage.CreateArticle(title, description, body, tags);
    
    await expect(articlePage.articleTitle).toHaveText(title);
  

});

test('User can edit article, Page Object', async ({ page }) => {

    const homePage = new HomePage(page, user.testUser);
    const profilePage = new ProfilePage(page, user.testUser);
    const articlePage = new ArticlePage(page);
    const articlePageEditor = new ArticleEditorPage(page);

    await page.goto('/');

    await homePage.openUserMenu();
    await homePage.profileLink.click();
    await profilePage.openMyArticles();
    await profilePage.gotoFirstArticle();
    await expect(articlePage.articleTitle).toBeVisible();

    const oldTitle = await articlePage.articleTitle.innerText();

    await articlePage.editButtonBanner.click();
    await articlePageEditor.articleTitle.fill(oldTitle + '22');
    await articlePageEditor.updateButton.click();

    await expect(articlePage.articleTitle).toHaveText(oldTitle + '22');

  

});

test('User can delete article, Page Object', async ({ page }) => {
    const homePage = new HomePage(page, user.testUser);
    const profilePage = new ProfilePage(page, user.testUser, ArticlePage.articleTitle);
    const articlePage = new ArticlePage(page);
    const articlePageEditor = new ArticleEditorPage(page);

    await page.goto('/');

    await homePage.openUserMenu();
    await homePage.profileLink.click();
    await profilePage.openMyArticles();
    await profilePage.gotoFirstArticle();
    page.on('dialog', async dialog => {
    await dialog.accept();
     });
    await articlePage.deleteButtonBanner.click();
    
       await expect(page).toHaveURL('/#/');
  

});

test('User can add article to Favorites, Page Object', async ({ page }) => {
    const homePage = new HomePage(page, user.testUser);
    const profilePage = new ProfilePage(page, user.testUser, ArticlePage.articleTitle);
        

    await page.goto('/');

    await homePage.openUserMenu();
    await homePage.profileLink.click();
    await profilePage.openMyArticles();
    const articleTitle = await profilePage.getFirstArticleTitle();
    await profilePage.doArticleFavorite();
    await profilePage.openMyFavoritedArticles();

        await expect(
  profilePage.favoritedArticleByTitle(articleTitle)).toBeVisible()

});

test('User can delete article from Favorites, Page Object', async ({ page }) => {
    const homePage = new HomePage(page, user.testUser);
    const profilePage = new ProfilePage(page, user.testUser, ArticlePage.articleTitle);
        

    await page.goto('/');

    await homePage.openUserMenu();
    await homePage.profileLink.click();
    await profilePage.openMyFavoritedArticles();
    const articleTitle = await profilePage.getFirstArticleTitle();
    await profilePage.favoritedArticleByTitle(articleTitle).first().waitFor({ state: 'visible' });
    await profilePage.openMyArticles();
    await profilePage.toggleFavoriteForArticle(articleTitle);
    await profilePage.openMyFavoritedArticles();
    

        await expect(
  profilePage.favoritedArticleByTitle(articleTitle)).toHaveCount(0);

});