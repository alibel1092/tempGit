export class ProfilePage {
     //техническое описание страницы
    
    constructor(page, user, articleTitle) {
        this.page = page;
        this.profileName = page.locator('user-info').getByText(user.email);
        this.editProfileSettingsButton = page.locator('user-info').getByRole('link', { name: 'Edit Profile Settings' });
        this.myArticlesTab = page.getByRole('link', { name: 'My Articles' });
        this.favoritedArticlesTab = page.getByRole('link', { name: 'Favorited Articles' });
        this.addToFavoritesButton = page.locator('.counter').getByRole('button');    
                }
        //бизнес логика страницы
         async openMyArticles() {
          await this.myArticlesTab.click();
          this.articlePreview = this.page.locator('.article-preview .preview-link');
          await this.articlePreview.first().waitFor({ state: 'visible' })
        }
        async gotoFirstArticle() {
          await this.articlePreview.first().click(); 
        
        //async gotoArticle(title) {
  //const article = this.page.locator('.article-preview .preview-link',{ hasText: title });

  //await article.waitFor({ state: 'visible' });
  //await article.click();
        }

    }