export class ProfilePage {
     //техническое описание страницы
    
    constructor(page, user, articleTitle) {
        this.page = page;
        this.profileName = page.locator('user-info').getByText(user.email);
        this.editProfileSettingsButton = page.locator('user-info').getByRole('link', { name: 'Edit Profile Settings' });
        this.myArticlesTab = page.getByRole('link', { name: 'My Articles' });
        this.favoritedArticlesTab = page.getByRole('link', { name: 'Favorited Articles' });

    }
        //бизнес логика страницы
        async openMyArticles() {
          await this.myArticlesTab.click();
          await this.page.locator('.article-preview').first().waitFor({ state: 'visible' });

        }

        async gotoFirstArticle() {
          const firstArticle = this.page.locator('.article-preview .preview-link').first();
          await firstArticle.waitFor({ state: 'visible' });
          await firstArticle.click();
        }

        async getFirstArticleTitle() {
          const title = this.page.locator('.article-preview h1').first();
          await title.waitFor({ state: 'visible' });
          return title.innerText();
    }

        async doArticleFavorite() {
          const addToFavoritesButton = this.page.locator('.article-preview button:has(.counter)').first();
          await addToFavoritesButton.click();
        }

        async openMyFavoritedArticles() {
          await this.favoritedArticlesTab.click();
          this.favoritedArticlePreview = this.page.locator('.article-preview .preview-link');
          await this.favoritedArticlePreview.first().waitFor({ state: 'visible' })
        }

        articlePreviewByTitle(title) {
          return this.page.locator('.article-preview').filter({has: this.page.getByRole('heading', { name: title })
      });
    }

        favoritedArticleByTitle(title) {
          return this.page.locator('.article-preview').filter({ hasText: title });
    }

        async toggleFavoriteForArticle(title) {
          const article = this.articlePreviewByTitle(title);
          const favoriteButton = article.locator('button:has(.counter)');
          await favoriteButton.click();
    }
}
  //await article.waitFor({ state: 'visible' });
  //await article.click();
        

    
  