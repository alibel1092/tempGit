export class ArticlePage {
     //техническое описание страницы
    
    constructor(page) {
        this.page = page;
        this.articleTitle = page.locator('.banner h1');
        this.authorNameBanner = page.locator('.banner').locator('.author').getByRole('link');
        this.deleteButtonBanner = page.locator('.banner').getByRole('button', { name: 'Delete Article' });
        this.editButtonBanner = page.locator('.banner').getByRole('button', { name: 'Edit Article' });
        this.articleBody = page.locator('.article-content');
        this.authorNameBody = page.locator('.article-actions').locator('.author').getByRole('link');
        this.deleteButtonBody = page.locator('.article-actions').getByRole('button', { name: 'Delete Article' });
        this.editButtonBody = page.locator('.article-actions').getByRole('button', { name: 'Edit Article' });
        this.commentInput = page.getByRole('textbox', { name: 'Write a comment...' });
        this.postCommentButton = page.getByRole('button', { name: 'Post Comment' });
      
                }
        //бизнес логика страницы

    }