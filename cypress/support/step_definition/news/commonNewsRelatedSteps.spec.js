import News_Common from '../../pages/news/pageCommonNewsRelated'

const newsCommon = new News_Common()

When('I go to news overview', () => {
  newsCommon.goToNewsOverview()
})