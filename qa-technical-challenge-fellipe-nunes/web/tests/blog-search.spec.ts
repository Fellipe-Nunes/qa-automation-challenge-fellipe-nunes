import { test, expect } from '@playwright/test'
import { BlogPage } from '../pages/BlogPage'

test('Busca retorna artigos', async ({page}) => {

 const blog = new BlogPage(page)

 await blog.open()
 await blog.openSearch()
 await blog.search("pix")

 const count = await blog.resultsVisible()

 expect(count).toBeGreaterThan(0)

})

test('Busca sem resultado', async ({page}) => {

 const blog = new BlogPage(page)

 await blog.open()
 await blog.openSearch()
 await blog.search("termo-inexistente-qa123")

 const count = await blog.resultsVisible()

 expect(count).toBe(0)

})