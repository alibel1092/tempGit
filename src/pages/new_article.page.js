export class NewArticlePage {
     //техническое описание страницы
    
    constructor(page) {
        this.page = page;
        this.newArticleTitle = page.getByRole('textbox', { name: 'title' });
        this.newArticleDescription = page.getByPlaceholder('What\'s this article about?');
        this.newArticleBody = page.getByPlaceholder('Write your article (in markdown)');
        this.newArticleTags = page.getByPlaceholder('Enter tags');
        this.publishButton = page.getByRole('button', { type: 'submit' });
                }
        //бизнес логика страницы
        async CreateArticle(title, description, body, tags) {
            await this.newArticleTitle.click();
            await this.newArticleTitle.fill(title);
            await this.newArticleDescription.click();
            await this.newArticleDescription.fill(description);
            await this.newArticleBody.click();
            await this.newArticleBody.fill(body);
            await this.newArticleTags.click();
            await this.newArticleTags.fill(tags);
            await this.publishButton.click();
    }

        }
